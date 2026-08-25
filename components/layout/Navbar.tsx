import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logo}>P</span>

          <span className={styles.brandText}>
            PartFinder <span></span>
          </span>
        </Link>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/listings">Find Parts</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/shops">Shops</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>

        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Login
          </Link>

          <Link href="/register" className={styles.register}>
            Register
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}