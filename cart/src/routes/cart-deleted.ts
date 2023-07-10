import express, { Response } from "express";

import {
  currentUser,
  NotFoundError,
 
} from "@anutils/common";
import { natsWrapper } from "../../nats-wrapper";
import { Product } from "../models/products";
import { User } from "../models/users";
import { CartAddedPublisher } from "../events/publishers/cart-added-event";
import { Number } from "mongoose";
import { CartDeletedPublisher } from "../events/publishers/cart-deleted-event";

const router = express.Router();

interface userDetails{
    jwt?:string,
    userDetails?:{
        email?:string
        password?:string
    }
}
declare global{
    namespace Express{
        interface Request{
              session?:userDetails
        }
    }
}
router.get(
  "/api/cart/deletecart/:id",
   currentUser,
 
   async (req: any, res: Response) => {
    try {
      const { id } = req.params;
      console.log(id);
  
      const product = await Product.findOne({ title: id });
      if (!product) throw new NotFoundError();
  
      const user = await User.findOne({ email: req.session?.userDetails.email });
      console.log(user);
  
      if (!user) throw new NotFoundError();
  
      const arr = user.cart.filter((element: any) => {
        return element.product + 1 !== id + 1;
      });

      user.cart = arr;
  
      await user?.save();
  
      new CartDeletedPublisher(natsWrapper.client).publish({
        id: id,
        userId: req.session?.userDetails.email
      });
      res.json({ status: true });
    } catch (error) {
      console.log(error);
    }
  }
  
);

export { router as deleteCartRouter };
