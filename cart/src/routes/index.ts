
import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import cartRoutes from "./cart";
export const routes = (dependencies: DepenteniciesData) => {
  const route = express.Router();

  const cart = cartRoutes(dependencies);

  route.use("/cart", cart);
  return routes;
};
