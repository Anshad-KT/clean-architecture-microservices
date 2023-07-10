import express from "express";
import { body, validationResult } from "express-validator";
import {
  BadRequestError,
  currentUser,
  requireAuth,
  
} from "@anutils/common";

import { userController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getProfileController, updateProfileController,loginController,signUpController } =
    userController(dependencies);

  router.get(
    "/profile/:userId",
    currentUser,
  
    getProfileController
  );
  router.post(
    "/login",
    loginController
  );
  router.post(
    "/signup",
   signUpController
  );
  router.post(
    "/update/:userId",
    currentUser,
  
    updateProfileController
  );

  return router;
};