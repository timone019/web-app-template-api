import express from 'express';
import { login, register, verifyToken } from '../controllers/authController';
import { googleLogin } from '../controllers/googleAuthController';

const router = express.Router();

// Regular authentication routes
router.post('/login', login);
router.post('/register', register);
router.get('/verify', verifyToken);

// Google authentication route
router.post('/google', googleLogin);

export default router;
