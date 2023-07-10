import addCartController from "./addCartController";
import deleteCartController from './deleteCartController'
import getCartController from "./getCartController";

export = (dependencies: any) => {
  return {
    addCartController: addCartController(dependencies),
    deleteCartController: deleteCartController(dependencies),
    getCartController:getCartController(dependencies)
  };
};
