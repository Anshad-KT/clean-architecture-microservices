import getProfileController from "./getProfileController";
import loginController from './loginController'
import signupController from './signupController'
import updateController from './updateController'

export = (dependencies: any) => {
  return {
    getProfileController: getProfileController(dependencies),
    loginController: loginController(dependencies),
    signUpController:signupController(dependencies),
    updateProfileController:updateController(dependencies)
  };
};
