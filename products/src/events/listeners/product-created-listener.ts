import { Subject,listener,ProductCreatedEvent } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { createProduct_UseCase, createProfile_UseCase } from "../../libs/usecases";


export class ProductCreatedListener extends listener<ProductCreatedEvent>{
    async onMessage(data: ProductCreatedEvent["data"], msg: Message) {
        const {  id,  price, title } = data;
    
        try {

          await createProduct_UseCase(dependencies).execute({
            price,title,id
          });
          msg.ack();
          
          
        } catch (error) {
          console.log(error);
        }
      }
    subject: Subject.ProductCreated = Subject.ProductCreated
    queueGroup: string='product-service';
    
}
