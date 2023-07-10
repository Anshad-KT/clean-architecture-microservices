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
  findProduct: async (title: string) => {
    const mongooseObject = await Product.findOne({title});
    return mongooseObject;
  },
  find: async () => {
    const mongooseObject = await Product.find();
    return mongooseObject;
  },
};
