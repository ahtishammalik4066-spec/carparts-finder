import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.content}>
            <span className={styles.label}>Need a Part?</span>

            <h2>Can&apos;t Find the Part You Need?</h2>

            <p>
              Tell us what part you are looking for and connect with
              suppliers across Pakistan.
            </p>
          </div>

          <Link href="/contact" className={styles.button}>
            Request a Part →
          </Link>
        </div>
      </div>
    </section>
  );
}