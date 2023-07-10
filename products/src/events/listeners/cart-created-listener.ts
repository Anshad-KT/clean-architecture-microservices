import { Subject,listener,CartAddedEvent, NotFoundError } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { createCart_UseCase } from "../../libs/usecases";




export class CartCreatedListener extends listener<CartAddedEvent>{
    async onMessage(data: CartAddedEvent["data"], msg: Message) {
        const { id,product } = data;
        try {
          await createCart_UseCase(dependencies).execute({
            id,
            product
          })
          msg.ack();

          console.log("%% PRODUCT: CART CREATED %%");
        } catch (error) { 
          console.log(error);
        }
      }
    subject: Subject.CartAdded = Subject.CartAdded
    queueGroup: string='product-cart-service';
    
}
