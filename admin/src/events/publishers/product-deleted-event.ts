import { ProductCreatedEvent, Publisher, Subject,ProductDeletedEvent } from "@anutils/common";


export class ProductDeletedPublisher extends Publisher<ProductDeletedEvent>{
    subject: Subject.ProductDeleted = Subject.ProductDeleted
}