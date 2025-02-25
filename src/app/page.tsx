import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {PRODUCTS.map((product) => (
        <div className={styles.card} key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}
