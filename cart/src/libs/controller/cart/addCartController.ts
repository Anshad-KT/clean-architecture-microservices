import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";
import { CartAddedPublisher } from "../../../events/publishers/cart-added-event";
import { natsWrapper } from "../../../../nats-wrapper";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createCart_UseCase,sessionFetch_UseCase },
  } = dependencies;

  const createCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sesssionVariable = req.session
      const id = await sessionFetch_UseCase(dependencies).execute({
        sesssionVariable
      })
      const { product } = req.params;
      const cart = await createCart_UseCase(dependencies).execute({
         id,product
      });
     console.log("id is",id);
     console.log("product is ",product);
     
     
      if (!cart) {
        throw new BadRequestError("No cart found");
      }
      new CartAddedPublisher(natsWrapper.client).publish({
        id,
        product
      })
      res.json(cart);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createCart;
};
