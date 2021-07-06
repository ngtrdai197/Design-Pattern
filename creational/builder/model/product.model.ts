export class ProductModel implements IProduct {
  public name: string;
  public photos: string[];
  public price: number;
  public id: string;
  constructor(
    protected _name: string,
    protected _photos: string[],
    protected _price: number,
    protected _id: string
  ) {
    this.name = _name;
    this.photos = _photos;
    this.price = _price;
    this.id = _id;
  }
}

export interface IProduct {
  name: string;
  photos: string[];
  price: number;
  id: string;
}
