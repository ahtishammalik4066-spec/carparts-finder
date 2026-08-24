import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>PartFinder PK</h3>
          <p>Pakistan's automotive spare parts marketplace.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PartFinder PK. All rights reserved.</p>
      </div>
    </footer>
  );
}