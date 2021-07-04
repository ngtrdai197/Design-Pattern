import {
  IAbstractFactory,
  IAbstractProductA,
  IAbstractProductB,
} from "../abstracts/abstract-factory";
import { ConcreteProductA, ConcreteProductB } from "./concrete-product";

export class ConcreteFactory1 implements IAbstractFactory {
  createProductA(): IAbstractProductA {
    return new ConcreteProductA();
  }
  createProductB(): IAbstractProductB {
    return new ConcreteProductB();
  }
}
