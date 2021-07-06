export interface IAbstractProductA {
  usefulMissionA(): string;
}
export interface IAbstractProductB {
  usefulMissionB(): string;
  anotherUsefulFunctionB(collaborator: IAbstractProductA): string;
}

export interface IAbstractFactory {
  createProductA(): IAbstractProductA;
  createProductB(): IAbstractProductB;
}
