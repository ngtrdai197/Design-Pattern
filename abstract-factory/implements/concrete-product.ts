import {
  IAbstractProductA,
  IAbstractProductB,
} from "../abstracts/abstract-factory";

export class ConcreteProductA implements IAbstractProductA {
  public usefulMissionA(): string {
    return "The result of the product A1.";
  }
}

export class ConcreteProductB implements IAbstractProductB {
  public anotherUsefulFunctionB(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulMissionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
  public usefulMissionB(): string {
    return "The result of the product A2.";
  }
}
