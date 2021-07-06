import { IAbstractFactory } from "./abstracts/abstract-factory";
import { ConcreteFactory1 } from "./implements/concrete-factory";

function clientCode(factory: IAbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulMissionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

console.log("Client: Testing client code with the first factory type...");
clientCode(new ConcreteFactory1());

console.log("");

// console.log('Client: Testing the same client code with the second factory type...');
// clientCode(new ConcreteFactory2());
