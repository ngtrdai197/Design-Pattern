import { ICar } from "factory-method/abstracts/car.interface";

export abstract class Creator {
  protected abstract factoryMethod(): ICar; // or protected abstract product: ICar;

  public mission(): string {
    const product = this.factoryMethod(); // const product = this.product;
    return `Mission of product is ${product.operation()}`;
  }
}
