import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const sessionFetch_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {cartRepository},
  } = dependencies;

  if (!cartRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (credentials: any) => {
    const {userDetails} = credentials
    const {email} = userDetails
    return cartRepository.extract(email)
  };
  return {
    execute,
  };
};
