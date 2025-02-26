import Image from "next/image";

import { Product } from "./products";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <h1 className="">{product.title}</h1>
          <p className="">{product.price}</p>
        </div>
      </div>
    </div>
  );
};
