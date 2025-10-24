import express from 'express'
import { forgotPassword, getUser, login, logout, register, resetPassword, updatePassword, updateProfile } from '../Controllers/authController.js';
import { isAuthenticated } from '../Middlewares/authMiddleware.js';

const router = express.Router();
router.post("/register", register)
router.post("/login", login)
router.get("/logout", isAuthenticated, logout)
router.get("/me", isAuthenticated, getUser)
router.post("/password/forgot", forgotPassword)
router.put("/password/reset/:token", resetPassword)
router.put("/password/update", isAuthenticated, updatePassword) // API testing is pending.
router.put("/profile/update", isAuthenticated, updateProfile) // API testing is pending.

export default router;
