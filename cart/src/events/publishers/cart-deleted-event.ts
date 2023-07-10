import { CartAddedEvent, CartDeletedEvent, Publisher, Subject } from "@anutils/common";


export class CartDeletedPublisher extends Publisher<CartDeletedEvent>{
    subject: Subject.CartDeleted = Subject.CartDeleted
}