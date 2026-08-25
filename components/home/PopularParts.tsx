import Link from "next/link";
import styles from "./PopularParts.module.css";

const parts = [
  {
    icon: "🔧",
    name: "Engine Parts",
    text: "Engines, filters, belts and other engine components.",
  },
  {
    icon: "🛞",
    name: "Brake Parts",
    text: "Brake pads, discs, calipers and complete brake systems.",
  },
  {
    icon: "💡",
    name: "Lights & Electrical",
    text: "Headlights, tail lights, bulbs and electrical components.",
  },
  {
    icon: "🚗",
    name: "Body Parts",
    text: "Bumpers, doors, mirrors, bonnets and body panels.",
  },
  {
    icon: "⚙️",
    name: "Suspension",
    text: "Shocks, struts, control arms and suspension components.",
  },
  {
    icon: "🔋",
    name: "Batteries",
    text: "Car batteries and electrical power solutions.",
  },
  {
    icon: "❄️",
    name: "AC & Cooling",
    text: "Radiators, compressors, condensers and cooling parts.",
  },
  {
    icon: "🧰",
    name: "Interior Parts",
    text: "Seats, dashboards, switches and interior accessories.",
  },
];

export default function PopularParts() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Categories</span>

          <h2 className={styles.title}>Popular Parts</h2>

          <p className={styles.description}>
            Find the most searched auto parts and components.
          </p>
        </div>

        <div className={styles.grid}>
          {parts.map((part) => (
            <Link
              href="/parts"
              className={styles.card}
              key={part.name}
            >
              <div className={styles.icon}>{part.icon}</div>

              <h3 className={styles.name}>{part.name}</h3>

              <p className={styles.text}>{part.text}</p>

              <span className={styles.arrow}>
                Browse Parts →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}