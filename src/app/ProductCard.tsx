import Image from "next/image";

import { Product } from "./products";

import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <div className="flex flex-col @md:flex-row">
        <div className="w-full h-auto @md:w-1/4">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-auto rounded-tl-2xl rounded-tr-2xl @md:rounded-tr-none rounded-bl-none @md:rounded-bl-2xl"
          />
        </div>
        <div className="w-full pl-1 @md:w-3/4 border border-t-0 @md:border-l-0 @md:border-t-1">
          <h1 className="text-2xl ml-1 content-auto">{product.title}</h1>
          <p className="italic text-bbo">{product.price}</p>
        </div>
      </div>
    </div>
  );
};
