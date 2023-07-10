import { UserData,ProductData } from "./index";
import { Document } from "mongoose";
import { NotFoundError } from "@anutils/common";

export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface repositoryData {

  userRepository: {
    createUser: (user: any) => Promise<Document<UserData>>;
    getUser: (email: string) => Promise<Document<UserData> | null>;
    getUserProfile: (id: string) => Promise<Document<UserData> | null>;
    updateUserProfile: (id: string, data: any) => Promise<Document<UserData> | null>;
    signInUser: (user: {email:string,password:String}) => Promise<Document<UserData> | false>;
  }
  productRepository:{
    createProduct: (product: ProductData) => Promise<Document<ProductData>>;
    deleteProduct: (id: string) => Promise<Document<ProductData> | null>;
    
  }
  cartRepository:{
    createCart: (id: string,product: string) => Promise<Document<UserData> | NotFoundError>;
    deleteCart: (id: string,product:string) => Promise<Document<ProductData> | null>;
  }
}

export interface useCaseData {
  createProfile_UseCase: any;
  getUserProfile_UseCase: any;
  updateUserProfile_UseCase: any;
  getUser_UseCase:any,
  loginProfile_UseCase:any
  createProduct_UseCase:any
  deleteProduct_UseCase:any
  createCart_UseCase:any
  deleteCart_UseCase:any
}
