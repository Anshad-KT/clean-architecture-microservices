import { Subject,listener,UserUpdatedEvent } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { updateUserProfile_UseCase } from "../../libs/usecases";


export class UserUpdatedListener extends listener<UserUpdatedEvent>{
    async onMessage(data: UserUpdatedEvent["data"], msg: Message) {
        const {  id,  email } = data;
    
        
        try {
          await updateUserProfile_UseCase(dependencies).execute(
            id,email
          )
          msg.ack();
          console.log("%% ADMIN: USER UPDATED %%");
        } catch (error) {
          console.log(error);
        }
      }
    subject: Subject.UserUpdated = Subject.UserUpdated
    queueGroup: string='admin-service';
}


