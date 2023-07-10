import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllUser_UseCase },
  } = dependencies;

  const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      
      const user = await getAllUser_UseCase(dependencies).execute();

      if (!user) {
        throw new BadRequestError("No such user found");
      }

      res.json(user);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getUsers;
};
