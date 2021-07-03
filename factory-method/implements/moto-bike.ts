import { Creator } from "../abstracts/creator.abstract";
import { ICar } from "../abstracts/car.interface";

class MotoBikeBase implements ICar {
  public operation(): string {
    return "MotoBikeBase Racing";
  }
}

export class MotoBikeModel extends MotoBikeBase {}

export class MotoBike extends Creator {
  protected factoryMethod(): MotoBikeModel {
    return new MotoBikeModel();
  }

  // override mission method
  public mission(): string {
    const product = this.factoryMethod();
    return `MotoBike -> Mission of product is ${product.operation()}`;
  }
}
