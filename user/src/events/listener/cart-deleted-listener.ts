

///////////////////////////////////////////////////////////////////////////////////////////

import { Subject,listener,CartAddedEvent, NotFoundError, CartDeletedEvent } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { deleteCart_UseCase } from "../../libs/usecases";





export class CartDeletedListener extends listener<CartDeletedEvent>{
    
    async onMessage(data: CartDeletedEvent["data"], msg: Message) {
      const id=data.userId
      const product = data.id
        try {
          await deleteCart_UseCase(dependencies).execute({
            id,product
          })
          msg.ack();
          console.log("%% USER: CART DELETED %%");
        } catch (error) {
          console.log(error);
        }
      }
      
    subject: Subject.CartDeleted = Subject.CartDeleted
    queueGroup: string='user-cart-service';
    
}
