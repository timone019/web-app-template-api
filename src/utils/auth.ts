import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const generateToken = (user: User): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || 'default_jwt_secret',
    { expiresIn: '7d' }
  );
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'default_jwt_secret');
  } catch (error) {
    throw new Error('Invalid token');
  }
};
