import express from "express";
import { body, validationResult } from "express-validator";
import {

  currentUser,
  requireAuth,
  
} from "@anutils/common";

import { productController, userController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies1: DepenteniciesData) => {
  const router = express.Router();
  
   //console.log(dependencies1,"yass");
   
  
  const { getAllProductsController,createProductController,deleteProductController } =
    productController(dependencies1);
  const {getAllUserController} = userController(dependencies1)
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