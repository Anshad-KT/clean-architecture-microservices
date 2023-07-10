
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@anutils/common";
import generateToken from "../../utils/jsonwebtoken";


export = (dependencies:DepenteniciesData):any =>{
   const {useCases:{
     loginProfile_UseCase
   }} = dependencies
   const loginUser = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const { email, password } = req.body;
        const userProfile = await loginProfile_UseCase(dependencies).execute({
           email,password
          });

          if (!userProfile) throw new BadRequestError("Invalid Credentials");

          const token: any = generateToken(userProfile);
    
          req.session = {
            jwt: token,
            userDetails: userProfile,
          };
    
          res.json(userProfile);
      } catch (error) {
        console.log(error);
      }
   }
   return loginUser
}