import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";
import { ProductDeletedPublisher } from "../../../events/publishers/product-deleted-event";
import { natsWrapper } from "../../../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { deleteProduct_UseCase },
  } = dependencies;

  const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const product = await deleteProduct_UseCase(dependencies).execute({
       id
      });

    await new ProductDeletedPublisher(natsWrapper.client).publish({
        id
    })
      res.json(product);
      
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProduct;
};
