import {Subject,Publisher,UserCreatedEvent} from '@anutils/common'

export class UserCreatedPublisher extends Publisher<UserCreatedEvent>{
    subject: Subject.UserCreated = Subject.UserCreated
}