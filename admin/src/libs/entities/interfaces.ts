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
    getAllUser:()=>Promise<any>
    getUserProfile: (id: string) => Promise<Document<UserData> | null>;
    updateUserProfile: (id: string, data: any) => Promise<Document<UserData> | null>;
    signInUser: (user: {email:string,password:String}) => Promise<Document<UserData> | false>;
  }
  productRepository:{
    createProduct: (product: ProductData) => Promise<Document<ProductData>>;
    deleteProduct: (id: string) => Promise<Document<ProductData> | null>;
    findProduct: (title: string) => Promise<Document<ProductData> | null>;
    find1: () => Promise<Document<ProductData>[]>;
  }
  cartRepository:{
    createCart: (id: string,product: string) => Promise<Document<any> | NotFoundError>;
    deleteCart: (id: string,product:string) => Promise<Document<ProductData> | null>;
  }
}

export interface useCaseData {
  createProfile_UseCase:any
  getUser_UseCase:any
  getAllProducts_UseCase:any
  getProduct_UseCase:any
  deleteProduct_UseCase:any
  createProduct_UseCase:any
  createCart_UseCase:any
  deleteCart_UseCase:any
  getAllUser_UseCase:any
}
