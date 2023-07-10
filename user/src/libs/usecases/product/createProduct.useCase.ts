import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const createProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {productRepository},
  } = dependencies;

  if (!productRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    title,price
  }: ProductData) => {
    const productStructure = new ProductStructure({
     price,title
    });
    return productRepository.createProduct(productStructure)
  };
  return {
    execute,
  };
};
