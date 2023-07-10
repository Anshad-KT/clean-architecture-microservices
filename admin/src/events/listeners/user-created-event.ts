import { Subject,listener,UserCreatedEvent } from "@anutils/common";
import { Message } from "node-nats-streaming";
import dependencies from "../../config/dependencies";
import { createProfile_UseCase } from "../../libs/usecases";

export class UserCreatedListener extends listener<UserCreatedEvent>{
    async onMessage(data: UserCreatedEvent["data"], msg: Message) {
        const {  id,  email } = data;
    
        try {
          await createProfile_UseCase(dependencies).execute({
            email,id
          })
          msg.ack();
          console.log("%% ADMIN: USER CREATED %%");
        } catch (error) {
          console.log(error);
        }
      }
    subject: Subject.UserCreated = Subject.UserCreated
    queueGroup: string='admin-service';
}
