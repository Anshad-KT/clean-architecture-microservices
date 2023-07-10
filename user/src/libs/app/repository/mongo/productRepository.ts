import mongoose from "mongoose";

import { schemas } from "../../database/mongo";

const { Product } = schemas;

export const productRepository = {
  createProduct: async (product: any) => {
    const mongooseObject = Product.build(product);
    return await mongooseObject.save();
  },
  deleteProduct: async (id: string) => {
    const mongooseObject = await Product.findByIdAndDelete(id);
    return mongooseObject;
  },
};
