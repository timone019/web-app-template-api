import { Request, Response } from 'express';
import { verifyGoogleToken } from '../utils/googleAuth';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/auth';

const prisma = new PrismaClient();

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: 'Google token is required' });
    }

    // Verify the Google token and get user info
    const googleUserInfo = await verifyGoogleToken(credential);

    // Find or create user in the database
    const user = await prisma.user.upsert({
      where: { email: googleUserInfo.email },
      update: {
        firstName: googleUserInfo.firstName,
        lastName: googleUserInfo.lastName,
        // Only update picture if it exists
        ...(googleUserInfo.picture && { picture: googleUserInfo.picture }),
      },
      create: {
        email: googleUserInfo.email,
        firstName: googleUserInfo.firstName,
        lastName: googleUserInfo.lastName,
        picture: googleUserInfo.picture,
        // For Google auth users, we'll set a random password since they won't use it
        password: Math.random().toString(36).slice(-8),
      },
    });

    // Generate JWT token
    const token = generateToken(user);

    // Return user data and token
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ message: 'Failed to authenticate with Google' });
  }
};
