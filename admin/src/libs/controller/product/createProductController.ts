import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";
import { ProductCreatedPublisher } from "../../../events/publishers/product-created-event";
import { natsWrapper } from "../../../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createProduct_UseCase },
  } = dependencies;

  const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("hh");
      
      const { title,price } = req.body;
      const product = await createProduct_UseCase(dependencies).execute({
        title,price
      });
      await new ProductCreatedPublisher(natsWrapper.client).publish({
        id: product._id,
        title:product.title,
        price:product.price
    })
    console.log(product);
    
      res.json(product);
      
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProduct;
};
