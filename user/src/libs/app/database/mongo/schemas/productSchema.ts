import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface productAttrs {
  id: string;
  title:string
  price:number
}

interface productModel extends mongoose.Model<ProductDoc> {
  build(attrs: productAttrs): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  title:string
  price:number
  version: number;
}

const productSchema = new mongoose.Schema(
  {
     title:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

productSchema.set("versionKey", "version");
productSchema.plugin(updateIfCurrentPlugin);

productSchema.statics.build = (attrs: productAttrs) => {
  return new Product({
    _id: attrs.id,
    title:attrs.title,
    price:attrs.price
  });
};

const Product = mongoose.model<ProductDoc, productModel>("Product", productSchema);

export { Product };
