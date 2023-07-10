
import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import productRoutes from "./product";
export const routes = (dependencies: DepenteniciesData) => {
  const route = express.Router();

  const product = productRoutes(dependencies);

  route.use("/products", product);
  return route;
};
