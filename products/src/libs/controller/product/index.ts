import getProductController from "./getProductController";
import getAllProductsController from './getAllProductController'


export = (dependencies: any) => {
  return {
    getAllProductsController: getAllProductsController(dependencies),
    getProductController: getProductController(dependencies),
  };
};
