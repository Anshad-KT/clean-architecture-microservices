import getAllUserController from "./getUserController";


export = (dependencies: any) => {
  return {
    getAllUserController: getAllUserController(dependencies),
  };
};
