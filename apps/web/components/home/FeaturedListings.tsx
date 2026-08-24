import Link from "next/link";
import styles from "./FeaturedListings.module.css";

const listings = [
  {
    name: "Toyota Corolla Headlight",
    vehicle: "Toyota Corolla 2018–2022",
    price: "PKR 18,500",
    location: "Lahore",
    condition: "Genuine",
  },
  {
    name: "Honda Civic Front Bumper",
    vehicle: "Honda Civic 2016–2021",
    price: "PKR 24,000",
    location: "Karachi",
    condition: "New",
  },
  {
    name: "Suzuki Alto Engine",
    vehicle: "Suzuki Alto 2019–2023",
    price: "PKR 145,000",
    location: "Faisalabad",
    condition: "Used",
  },
];

export default function FeaturedListings() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.label}>Marketplace</span>

            <h2 className={styles.title}>Featured Parts</h2>

            <p className={styles.description}>
              Hand-picked auto parts from trusted suppliers across Pakistan.
            </p>
          </div>

          <Link href="/listings" className={styles.viewAll}>
            View All Parts →
          </Link>
        </div>

        <div className={styles.grid}>
          {listings.map((listing) => (
            <article className={styles.card} key={listing.name}>
              <div className={styles.image}>
                <span className={styles.imagePlaceholder}>
                  Auto Part Image
                </span>

                <span className={styles.condition}>
                  {listing.condition}
                </span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.partName}>{listing.name}</h3>

                <p className={styles.vehicle}>{listing.vehicle}</p>

                <div className={styles.bottom}>
                  <div>
                    <div className={styles.price}>{listing.price}</div>

                    <div className={styles.location}>
                      📍 {listing.location}
                    </div>
                  </div>

                  <Link
                    href="/listings"
                    className={styles.button}
                  >
                    View Part
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}