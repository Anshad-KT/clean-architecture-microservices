import express from "express";
import { body, validationResult } from "express-validator";
import {

  currentUser,
  requireAuth,
  
} from "@anutils/common";

import { productController, userController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  
  console.log(dependencies?.useCases?.getAllProducts_UseCase,"kll");
  
  const { getAllProductsController,createProductController,deleteProductController } =
    productController(dependencies);
  const {getAllUserController} = userController(dependencies)
  router.get(
    "/product",
    getAllProductsController
  );
  router.get(
    "/user",
    getAllUserController
  );
  router.post( 
    "/addproduct",
   
    createProductController
  );
  router.post(
    "/deleteproduct/:id",
    deleteProductController
  ); 

  return router;
};