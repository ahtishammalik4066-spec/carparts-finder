import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span>PF</span>
              PartFinder <b>PK</b>
            </Link>

            <p>
              Pakistan&apos;s automotive spare parts marketplace.
              Find genuine and used parts from trusted suppliers
              across Pakistan.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <h3>Marketplace</h3>

            <div className={styles.links}>
              <Link href="/listings">Browse Parts</Link>
              <Link href="/brands">Car Brands</Link>
              <Link href="/shops">Auto Shops</Link>
              <Link href="/parts">Part Categories</Link>
            </div>
          </div>

          <div>
            <h3>Company</h3>

            <div className={styles.links}>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div>
            <h3>Support</h3>

            <div className={styles.links}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/contact">Help Center</Link>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} PartFinder PK. All rights reserved.
          </p>

          <p>
            Made for Pakistan&apos;s automotive community 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
}