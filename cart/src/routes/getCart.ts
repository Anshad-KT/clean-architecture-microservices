// import express, { Request, Response } from "express";
// import {

//   currentUser,
//   NotFoundError,
//   requireAuth,

// } from "@anutils/common";
// import { User } from "../models/users";

// const  router = express.Router();

// router.get(
//   "/api/cart/getcart",
//    currentUser,
//    //requireAuth,
//   async (req: any, res: Response) => {
//     try {
     
//       const user = await User.findOne({email:req.session?.userDetails.email});


//       if (!user) throw new NotFoundError();
//      console.log(user);
     
//       const products = user.cart.map((element: any) => {
//         return element
//       });
// console.log(products);



//       res.json({products});
    
//     } catch (error) {
    
//       console.log(error);
      
//     }
//   }
// );

// export { router as getCartRouter };
