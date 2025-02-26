import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

export default function Home() {
  return (
    <main className="">
      {PRODUCTS.map((product) => (
        <div className="" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}
