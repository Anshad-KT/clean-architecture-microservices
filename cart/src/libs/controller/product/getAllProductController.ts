import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllProducts_UseCase },
  } = dependencies;

  const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try { 
      const product = await getAllProducts_UseCase(dependencies).execute({
      });

      if (!product) {
        throw new BadRequestError("No products found");
      }

      res.json(product);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
}
