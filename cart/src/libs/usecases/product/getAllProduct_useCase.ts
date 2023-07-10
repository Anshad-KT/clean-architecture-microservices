import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllProducts_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {productRepository},
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = 
  () => {
    return productRepository.find()
  };
  return {
    execute,
  };
};
