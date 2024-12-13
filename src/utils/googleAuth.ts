import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

interface GoogleUserInfo {
  email: string;
  firstName: string;
  lastName: string;
  picture?: string;
}

export async function verifyGoogleToken(token: string): Promise<GoogleUserInfo> {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error('Invalid token payload');
    }

    // Extract user information from the Google token payload
    const { email, given_name, family_name, picture } = payload;

    if (!email || !given_name || !family_name) {
      throw new Error('Missing required user information from Google');
    }

    return {
      email,
      firstName: given_name,
      lastName: family_name,
      picture,
    };
  } catch (error) {
    console.error('Error verifying Google token:', error);
    throw new Error('Failed to verify Google token');
  }
}
