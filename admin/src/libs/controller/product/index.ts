import getProductController from "./getProductController";
import getAllProductsController from './getAllProductController'
import deleteProductController from "./deleteProductController";
import createProductController from "./createProductController";

export = (dependencies: any) => {
  return {
    getAllProductsController: getAllProductsController(dependencies),
    getProductController: getProductController(dependencies),
    deleteProductController:deleteProductController(dependencies),
    createProductController:createProductController(dependencies)
  };
};
