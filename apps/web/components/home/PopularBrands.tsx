import Image from "next/image";
import Link from "next/link";
import styles from "./PopularBrands.module.css";

const brands = [
  { name: "Suzuki", logo: "/brands/suzuki.png" },
  { name: "Toyota", logo: "/brands/toyota.png" },
  { name: "Honda", logo: "/brands/honda.png" },
  { name: "Daihatsu", logo: "/brands/daihatsu.png" },
  { name: "Nissan", logo: "/brands/nissan.png" },
  { name: "Mitsubishi", logo: "/brands/mitsubishi.png" },
  { name: "Hyundai", logo: "/brands/hyundai.png" },
  { name: "Kia", logo: "/brands/kia.png" },
  { name: "Mercedes", logo: "/brands/mercedes.png" },
  { name: "Faw", logo: "/brands/faw.png" },
  { name: "Mazda", logo: "/brands/mazda.png" },
  { name: "Chevrolet", logo: "/brands/chevrolet.png" },
  { name: "Daewoo", logo: "/brands/daewoo.png" },
  { name: "Audi", logo: "/brands/audi.png" },
  { name: "Prince", logo: "/brands/prince.png" },
  { name: "BMW", logo: "/brands/bmw.png" },
  { name: "Subaru", logo: "/brands/subaru.png" },
  { name: "United", logo: "/brands/united.png" },
];

export default function PopularBrands() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {brands.map((brand) => (
            <Link
              href={`/brands/${brand.name.toLowerCase()}`}
              className={styles.brand}
              key={brand.name}
            >
              <div className={styles.logoWrap}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className={styles.logoImg}
                />
              </div>

              <span className={styles.name}>{brand.name}</span>
            </Link>
          ))}
        </div>

        <div className={styles.viewAllWrap}>
          <Link href="/brands" className={styles.viewAll}>
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}