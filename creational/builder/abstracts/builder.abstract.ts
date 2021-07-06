import { ProductModel } from "../model/product.model";

export abstract class AbstractProductBuilder {
  protected abstract setProductName(value: string): this;
  protected abstract setProductId(value: string): this;
  protected abstract setProductPhotos(value: string[]): this;
  protected abstract setProductPrice(value: number): this;
  protected abstract build(): ProductModel;
}
