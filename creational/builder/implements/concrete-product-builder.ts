import { AbstractProductBuilder } from "../abstracts/builder.abstract";
import { IProduct, ProductModel } from "../model/product.model";

export class ConcreteProductBuilder
  extends AbstractProductBuilder
  implements IProduct
{
  public id!: string;
  public name!: string;
  public photos!: string[];
  public price!: number;

  public setProductName(name: string) {
    this.name = name;
    return this;
  }
  public setProductId(id: string): this {
    this.id = id;
    return this;
  }
  public setProductPhotos(urls: string[]): this {
    this.photos = urls;
    return this;
  }
  public setProductPrice(price: number): this {
    this.price = price;
    return this;
  }
  public build(): ProductModel {
    return new ProductModel(this.name, this.photos, this.price, this.id);
  }

  public log(logName: string): void {
    console.log(logName);
    console.log("this.id :>> ", this.id);
    console.log("this.name :>> ", this.name);
    console.log("this.photos :>> ", this.photos);
    console.log("this.price :>> ", this.price);
  }
}
