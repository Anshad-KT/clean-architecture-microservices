import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const deleteProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {productRepository},
  } = dependencies;

  if (!productRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    id
  }: {id:string}) => {
    return productRepository.deleteProduct(id)
  };
  return {
    execute,
  };
};
