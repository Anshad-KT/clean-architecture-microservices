import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@anutils/common";
import { UserUpdatedPublisher } from "../../../events/publisher/user-updated-publisher";
import { natsWrapper } from "../../../../nats-wrapper";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { updateUserProfile_UseCase },
  } = dependencies;

  const updateProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userId } = req.params;
      console.log(req.body);

      const userProfile = await updateUserProfile_UseCase(dependencies).execute(
        userId,
        req.body
      );

      if (!userProfile) {
        throw new BadRequestError("No such profile found");
      }

      await new UserUpdatedPublisher(natsWrapper.client).publish({
        email:userProfile.email,
        id:userId
      });

      res.json(userProfile);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return updateProfile;
};
