import { UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const createProfile_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    email,password
  }: UserData) => {
    const userProfile = new UserProfile({
   
      email,password

    });
    return userRepository.createUser(userProfile);
  };
  return {
    execute,
  };
};
