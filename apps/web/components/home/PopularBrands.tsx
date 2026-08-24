import Link from "next/link";
import styles from "./PopularBrands.module.css";

const brands = [
  { name: "Toyota", logo: "T" },
  { name: "Honda", logo: "H" },
  { name: "Suzuki", logo: "S" },
  { name: "Nissan", logo: "N" },
  { name: "KIA", logo: "K" },
  { name: "Hyundai", logo: "H" },
  { name: "Mitsubishi", logo: "M" },
  { name: "BMW", logo: "B" },
  { name: "Mercedes", logo: "M" },
  { name: "Daihatsu", logo: "D" },
  { name: "Mazda", logo: "M" },
  { name: "Audi", logo: "A" },
];

export default function PopularBrands() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Car Brands</span>

          <h2 className={styles.title}>Popular Brands</h2>

          <p className={styles.description}>
            Browse genuine and used parts for popular car brands in Pakistan.
          </p>
        </div>

        <div className={styles.grid}>
          {brands.map((brand) => (
            <Link
              href={`/brands/${brand.name.toLowerCase()}`}
              className={styles.brand}
              key={brand.name}
            >
              <span className={styles.logo}>{brand.logo}</span>

              <span className={styles.name}>{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}