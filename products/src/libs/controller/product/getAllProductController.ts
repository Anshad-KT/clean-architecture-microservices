import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";
import { getAllProducts_UseCase } from "../../usecases";
//getAllProducts_UseCase
export = (dependencies: DepenteniciesData): any => {

//console.log(dependencies.useCases.getAllProducts_UseCase());
// const {
//   getAllProducts_UseCase 
// } = dependencies?.useCases;
  const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const product = await getAllProducts_UseCase(dependencies).execute();

      if (!product) {
        throw new BadRequestError("No products found");
      }

      res.json(product);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
};
