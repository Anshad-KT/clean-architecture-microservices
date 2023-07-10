import express from "express";
import { body, validationResult } from "express-validator";
import {
  BadRequestError,
  currentUser,
  requireAuth,
  
} from "@anutils/common";
 
import { productController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getAllProductsController,getProductController } =
    productController(dependencies);

  router.get(
    "/:id",
    currentUser,
    requireAuth,
    getProductController
  );
  router.get(
    "/",
    getAllProductsController
  );
 

  return router;
};