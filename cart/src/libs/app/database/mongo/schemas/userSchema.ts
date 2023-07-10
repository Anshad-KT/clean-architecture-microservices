import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface UserAttrs {
    
    email:string
    id:string
}

interface UserModal extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}
interface cartItems{
  count:Number
  product:String
}
interface UserDoc extends mongoose.Document {
  email:string
  
  cart?:cartItems[],
  version:number
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cart: []
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

userSchema.set("versionKey", "version");
userSchema.plugin(updateIfCurrentPlugin);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User({
    email:attrs.email,
    _id:attrs.id
  });
};

const User = mongoose.model<UserDoc, UserModal>("User", userSchema);

export { User };
