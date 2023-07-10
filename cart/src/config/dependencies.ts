import { userRepository, productRepository, cartRepository } from "../libs/app/repository/mongo";
import {
  createProfile_UseCase,
  getUser_UseCase,
  getAllProducts_UseCase,
  getProduct_UseCase,
  deleteProduct_UseCase,
  createProduct_UseCase,
  createCart_UseCase,
  deleteCart_UseCase,
  sessionFetch_UseCase
} from "../libs/usecases";

class DependencyInitializer {
   userRepository: any;
   productRepository: any;
   cartRepository: any;

   createProfileUseCase: any;
   getUserUseCase: any;
   getAllProductsUseCase: any;
   getProductUseCase: any;
   deleteProductUseCase: any;
   createProductUseCase: any;
   createCartUseCase: any;
   deleteCartUseCase: any;
   sessionFetchUseCase: any

  constructor() {
    // Initialize repositories
    this.userRepository = userRepository;
    this.productRepository =  productRepository;
    this.cartRepository = cartRepository;

    // Initialize use cases
    this.createProfileUseCase =  createProfile_UseCase;
    this.getUserUseCase = getUser_UseCase;
    this.getAllProductsUseCase = getAllProducts_UseCase;
    this.getProductUseCase =  getProduct_UseCase;
    this.deleteProductUseCase =  deleteProduct_UseCase;
    this.createProductUseCase =  createProduct_UseCase;
    this.createCartUseCase =  createCart_UseCase;
    this.deleteCartUseCase =  deleteCart_UseCase;
    this.sessionFetchUseCase =  sessionFetch_UseCase;
  }

  getDependencies() {
    return {
      repository: {
        userRepository: this.userRepository,
        productRepository: this.productRepository,
        cartRepository: this.cartRepository
      },
      useCases: {
        createProfile_UseCase: this.createProfileUseCase,
        getUser_UseCase: this.getUserUseCase,
        getAllProducts_UseCase: this.getAllProductsUseCase,
        getProduct_UseCase: this.getProductUseCase,
        deleteProduct_UseCase: this.deleteProductUseCase,
        createProduct_UseCase: this.createProductUseCase,
        createCart_UseCase: this.createCartUseCase,
        deleteCart_UseCase: this.deleteCartUseCase,
        sessionFetch_UseCase: this.sessionFetchUseCase
      }
    };
  }
}

const dependencyInitializer = new DependencyInitializer();
export = dependencyInitializer.getDependencies();
