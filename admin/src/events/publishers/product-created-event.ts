import { ProductCreatedEvent, Publisher, Subject } from "@anutils/common";


export class ProductCreatedPublisher extends Publisher<ProductCreatedEvent>{
    subject: Subject.ProductCreated = Subject.ProductCreated
}