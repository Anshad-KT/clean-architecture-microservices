import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const createCart_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {cartRepository},
  } = dependencies;

  if (!cartRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    id,product
  }: {id:string,product:string}) => {
    const credentials = {id,product}
    return cartRepository.createCart(id,product)
  };
  return {
    execute,
  };
};
