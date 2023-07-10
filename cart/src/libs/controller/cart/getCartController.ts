import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";
import { getCart_UseCase } from "../../usecases/cart/getCart.useCase";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createCart_UseCase,sessionFetch_UseCase },
  } = dependencies;

  const getCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sesssionVariable = req.session
      const email = await sessionFetch_UseCase(dependencies).execute({
        sesssionVariable
      })
      const cart = await getCart_UseCase(dependencies).execute({
        email
      });

      if (!cart) {
        throw new BadRequestError("No cart found");
      }

      res.json(cart);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getCart;
};
