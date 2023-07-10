import { UserData,ProductData, UserProfile } from "./index";
import { Document } from "mongoose";
import { NotFoundError } from "@anutils/common";

export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}
interface cartItems{
  count:Number
  product:String
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
    createProduct: ({id,price,title}:{id?:string,price:number,title:string}) => Promise<Document<ProductData>>;
    deleteProduct: (id: string) => Promise<Document<ProductData> | null>;
    findProduct: (title: string) => Promise<Document<ProductData> | null>;
    find: () => Promise<Document<ProductData>[]>;
  }
  cartRepository:{
    getCart(email: string): unknown;
    createCart: (id: string,product: string) => Promise<Document<UserData> | NotFoundError>;
    deleteCart: (id: string,product:string) => Promise<Document<ProductData> | null>;
    extract:(email:string) => Promise<cartItems[] | undefined>
  }
}

export interface useCaseData {
  createProfile_UseCase:any,
  getUser_UseCase:any,
  getAllProducts_UseCase:any,
  getProduct_UseCase:any,
  deleteProduct_UseCase:any,
  createProduct_UseCase:any,
  createCart_UseCase:any,
  deleteCart_UseCase:any
  sessionFetch_UseCase:any
}
