import { Subject,listener,ProductCreatedEvent, ProductDeletedEvent } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { deleteProduct_UseCase } from "../../libs/usecases";


export class ProductDeletedListener extends listener<ProductDeletedEvent>{
    async onMessage(data: ProductDeletedEvent["data"], msg: Message) {
        const {  id } = data;
    
        try {

          await deleteProduct_UseCase(dependencies).execute({
            id
          });
          msg.ack();
          
          
        } catch (error) {
          console.log(error);
        }
      }
    subject: Subject.ProductDeleted = Subject.ProductDeleted
    queueGroup: string='cart-service';
    
} 
