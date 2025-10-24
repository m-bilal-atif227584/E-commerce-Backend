import express from "express";
import { getAllUsers, deleteUser, dashboardStats } from "../Controllers/adminController.js";
import {
  authorizedRoles,
  isAuthenticated,
} from "../Middlewares/authMiddleware.js";

const adminRouter = express.Router();

adminRouter.get(
  "/getallusers",
  isAuthenticated,
  authorizedRoles("Admin"),
  getAllUsers
); // DASHBOARD
adminRouter.delete(
  "/delete/:id",
  isAuthenticated,
  authorizedRoles("Admin"),
  deleteUser
);
adminRouter.get(
  "/fetch/dashboard-stats",
  isAuthenticated,
  authorizedRoles("Admin"),
  dashboardStats
);

export default adminRouter;