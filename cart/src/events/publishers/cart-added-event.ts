import { CartAddedEvent, Publisher, Subject } from "@anutils/common";


export class CartAddedPublisher extends Publisher<CartAddedEvent>{
    subject: Subject.CartAdded = Subject.CartAdded
}