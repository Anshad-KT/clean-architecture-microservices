import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const getProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {productRepository},
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = 
  ({
    id
  }: {id:string}) => {
    return productRepository.findProduct(id)
  };
  return {
    execute,
  };
};
