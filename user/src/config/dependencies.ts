import  {productRepository, userRepository,cartRepository} from "../libs/app/repository/mongo";
import {
  createProfile_UseCase,
  getUserProfile_UseCase,
  updateUserProfile_UseCase,
  getUser_UseCase,
  loginProfile_UseCase,
  deleteProduct_UseCase,
  createProduct_UseCase,
   createCart_UseCase,
   deleteCart_UseCase
} from "../libs/usecases";

const useCases = {
  createProfile_UseCase,
  getUserProfile_UseCase,
  updateUserProfile_UseCase,
  getUser_UseCase,
  loginProfile_UseCase,
  deleteProduct_UseCase,
  createProduct_UseCase,
  createCart_UseCase,
  deleteCart_UseCase
};

const repository = {
  userRepository,
  productRepository,
  cartRepository
};

export = {
  useCases,
  repository,
  
};
