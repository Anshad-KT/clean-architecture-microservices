import { UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllUser_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = () => {
    return userRepository.getAllUser();
  };
  return {
    execute,
  };
};
