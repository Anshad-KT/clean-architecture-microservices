import {Subject,Publisher,UserUpdatedEvent} from '@anutils/common'

export class UserUpdatedPublisher extends Publisher<UserUpdatedEvent>{
    subject: Subject.UserUpdated = Subject.UserUpdated
}