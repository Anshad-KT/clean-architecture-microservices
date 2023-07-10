import { Subject,listener,ProductCreatedEvent } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { createProduct_UseCase } from "../../libs/usecases";


export class ProductCreatedListener extends listener<ProductCreatedEvent>{
    async onMessage(data: ProductCreatedEvent["data"], msg: Message) {
        const {  id,  price, title } = data;
    
        try {
          await createProduct_UseCase(dependencies).execute({
            id,
            title,
            price
          })
          msg.ack();

          console.log("%% USER: PRODUCT CREATED %%");
        } catch (error) {
          console.log(error);
        }
      }
    subject: Subject.ProductCreated = Subject.ProductCreated
    queueGroup: string='user-service';
    
}
