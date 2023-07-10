import { ProductData, ProductStructure, UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const createProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: {productRepository},
  } = dependencies;

  if (!productRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    id,
    title,price
  }: ProductData) => {
    if(!id){
      id=undefined
    }
    const productStructure = new ProductStructure({
      id,title,price
    });
    return productRepository.createProduct(productStructure)
  };
  return {
    execute,
  };
};
