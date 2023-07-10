import { UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const loginProfile_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    email,
    password,

  }: any) => {
    const credentials = {email,password}
    return userRepository.signInUser(credentials);
  };
  return {
    execute,
  };
};
