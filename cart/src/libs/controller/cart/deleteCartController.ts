import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";
import { CartDeletedPublisher } from "../../../events/publishers/cart-deleted-event";
import { natsWrapper } from "../../../../nats-wrapper";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { deleteCart_UseCase,sessionFetch_UseCase },
  } = dependencies;

  const deleteCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sesssionVariable = req.session
      const {product} = req.params
      const id = await sessionFetch_UseCase(dependencies).execute({
        sesssionVariable
      })
      const cart = await deleteCart_UseCase(dependencies).execute({
         id,product
      });

      if (!cart) {
        throw new BadRequestError("No cart found");
      }
      new CartDeletedPublisher(natsWrapper.client).publish({
        id: product,
        userId: id
      });
      res.json(cart);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return deleteCart;
};
