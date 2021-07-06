import { ConcreteProductBuilder } from "./implements/concrete-product-builder";

(() => {
  const concreteProduct = new ConcreteProductBuilder();
  concreteProduct
    .setProductId(Math.random().toString(36).substring(2))
    .setProductName("Iphone 7Plus")
    .setProductPhotos(["url1", "url2", "url3"])
    .build();
  // .setProductPrice(500_000);
  concreteProduct.log(ConcreteProductBuilder.name);
})();
