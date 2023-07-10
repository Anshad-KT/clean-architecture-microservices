import { NotFoundError } from "@anutils/common";
import mongoose from "mongoose";

import { schemas } from "../../database/mongo";

const { Product,User } = schemas;

export const cartRepository = {
  createCart: async (id: string,product:string) => {
    const mongooseObject = await User.findById(id);
    if (!mongooseObject) {
      return new NotFoundError();
    }
    let flag = 0;
    mongooseObject?.cart?.forEach((element: any) => {
      if (element.product === product) {
        element.count++;
        flag = 1;
      }
    });

    if (flag === 0) {
      mongooseObject?.cart?.push({ count: 1, product: product });
    }
    console.log(mongooseObject.cart);
    mongooseObject.save();
    return await mongooseObject.save();
  },
  deleteCart: async (id:string,product:string) => {
    const mongooseObject = await User.findById(id);
     const arr = mongooseObject?.cart?.filter((element: any) => {
        return element.product + 1 !== product + 1;
      });
      mongooseObject!.cart = arr;
    await mongooseObject?.save();
    return mongooseObject
  },
};
