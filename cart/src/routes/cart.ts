import express from "express";
import { body, validationResult } from "express-validator";
import {
  BadRequestError,
  currentUser,
  requireAuth,
  
} from "@anutils/common";

import { cartController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { addCartController,deleteCartController,getCartController } =
    cartController(dependencies);

  router.get(
    "/addtocart/:product",
    currentUser,
    requireAuth,
    addCartController
  );
  router.get(
    "/deletecart/:product",
    currentUser,
    requireAuth,
    deleteCartController
  );
  router.get(
    "/",
    getCartController
  );

  return router;
};