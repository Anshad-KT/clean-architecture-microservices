import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getProduct_UseCase },
  } = dependencies;

  const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const product = await getProduct_UseCase(dependencies).execute({
        id
      });

      if (!product) {
        throw new BadRequestError("No such product found");
      }

      res.json(product);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
};
