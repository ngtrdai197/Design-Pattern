import { ICar } from "factory-method/abstracts/car.interface";

export abstract class Creator {
  protected abstract factoryMethod(): ICar;

  public mission(): string {
    const product = this.factoryMethod();
    return `Mission of product is ${product.operation()}`;
  }
}
