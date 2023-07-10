import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const deleteCart_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {cartRepository},
  } = dependencies;

  if (!cartRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    id,product
  }: {id:string,product:string}) => {
    return cartRepository.deleteCart(id,product)
  };
  return {
    execute,
  };
};
