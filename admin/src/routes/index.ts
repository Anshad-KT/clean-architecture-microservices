
import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import adminRoutes from "./admin";
export const routes = (dependencies: DepenteniciesData) => {
  const route = express.Router();

  const admin = adminRoutes(dependencies);

  route.use("/admin", admin);
  return routes;
};
