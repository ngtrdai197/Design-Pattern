import { MotoBike } from "./factory-method/implements/moto-bike";
import { Creator } from "./factory-method/abstracts/creator.abstract";
import { Truck } from "./factory-method/implements/truck";

function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.mission());
}

clientCode(new Truck());
console.log("---");
clientCode(new MotoBike());
