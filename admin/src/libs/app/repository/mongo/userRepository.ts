import mongoose from "mongoose";
import { Password } from "../../../utils/password";
import { schemas } from "../../database/mongo";

const { User } = schemas;

export const userRepository = {
  createUser: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },
  getUser:async(email:string)=>{
    const mongooseObject = await User.findOne({email})
    return mongooseObject
  },
  getAllUser:async()=>{
    const mongooseObject = await User.find()
    return mongooseObject
  },
  getUserProfile: async (id: string) => {
    const mongooseObject = await User.findById(id);
    return mongooseObject;
  },

  updateUserProfile: async (id: string, data: any) => {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return user;
  },
  signInUser: async (user: any) => {
    const existingUser: any = await User.findOne({ email: user.email });

    if (existingUser) {
      const passwordsMatch = await Password.compare(
        existingUser.password,
        user.password
      );
      if (passwordsMatch) {
        return existingUser;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
};
