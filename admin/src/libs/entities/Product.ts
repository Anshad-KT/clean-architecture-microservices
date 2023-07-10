
export interface ProductData {
    id?:string
    title:string,
    price:number
  }
  
  export class ProductStructure {
    id?:string
    title:string
    price:number
  
    constructor({ id,title,price }: ProductData) {
      id ? this.id = id : null
      this.title=title
      this.price=price
    }
  }