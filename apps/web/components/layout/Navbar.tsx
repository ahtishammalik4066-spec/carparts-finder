import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">PartFinder PK</Link>
      </div>
      <div className="navbar-links">
        <Link href="/listings">Listings</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/shops">Shops</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}