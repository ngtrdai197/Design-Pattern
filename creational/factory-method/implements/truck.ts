import { Creator } from "../abstracts/creator.abstract";
import { ICar } from "../abstracts/car.interface";

export class TruckModel implements ICar {
  public operation(): string {
    return "Delivery";
  }
}


export class Truck extends Creator {
  protected factoryMethod(): ICar {
    return new TruckModel();
  }
}
