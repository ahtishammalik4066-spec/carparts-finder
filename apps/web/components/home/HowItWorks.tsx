import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    icon: "🚗",
    title: "Select Your Vehicle",
    text: "Choose your car make, model and year to find parts that fit your vehicle.",
  },
  {
    number: "02",
    icon: "🔎",
    title: "Find Your Part",
    text: "Browse available parts from verified suppliers and auto-part shops.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Contact the Seller",
    text: "Compare options and contact the seller directly to get the best deal.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Simple Process</span>

          <h2 className={styles.title}>How It Works</h2>

          <p className={styles.description}>
            Find the right auto part in three simple steps.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div className={styles.card} key={step.number}>
              <span className={styles.number}>{step.number}</span>

              <div className={styles.icon}>{step.icon}</div>

              <h3 className={styles.cardTitle}>{step.title}</h3>

              <p className={styles.cardText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}