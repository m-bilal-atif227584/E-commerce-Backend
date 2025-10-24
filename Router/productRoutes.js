import express from "express";
import {
  createProduct,
  fetchAllProducts,
  updateProduct,
  deleteProduct,
  fetchSingleProduct,
  postProductReview,
  deleteReview,
  fetchAIFilteredProducts,
} from "../Controllers/productController.js";
import {
  authorizedRoles,
  isAuthenticated,
} from "../Middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.post(
  "/admin/create",
  isAuthenticated,
  authorizedRoles("Admin"),
  createProduct
);
productRouter.get("/", fetchAllProducts);
productRouter.get("/singleProduct/:productId", fetchSingleProduct);
productRouter.put("/post-new/review/:productId", isAuthenticated, postProductReview);
productRouter.delete("/delete/review/:productId", isAuthenticated, deleteReview);
productRouter.put(
  "/admin/update/:productId",
  isAuthenticated,
  authorizedRoles("Admin"),
  updateProduct
);
productRouter.delete(
  "/admin/delete/:productId",
  isAuthenticated,
  authorizedRoles("Admin"),
  deleteProduct
);
productRouter.post("/ai-search", isAuthenticated, fetchAIFilteredProducts);

export default productRouter;

// test all APIs.