import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

export default function Home() {
  return (
    <main className="max-w-[960px] mx-auto flex flex-wrap">
      {PRODUCTS.map((product) => (
        <div className="w-full md:w-1/3 p-2" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}
