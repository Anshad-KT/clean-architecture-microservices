
import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import userRoutes from "./user";
export const routes = (dependencies: DepenteniciesData) => {
  const route = express.Router();

  const user = userRoutes(dependencies);

  route.use("/user", user);
  return routes;
};
