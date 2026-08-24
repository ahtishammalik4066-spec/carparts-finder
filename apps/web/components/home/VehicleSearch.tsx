import styles from "./VehicleSearch.module.css";

export default function VehicleSearch() {
  return (
    <section id="vehicle-search" className={styles.wrapper}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.header}>
            <h2 className={styles.title}>Find Parts for Your Vehicle</h2>

            <p className={styles.description}>
              Select your vehicle details to find the right auto parts.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Make</label>

              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  Select Make
                </option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Suzuki</option>
                <option>Nissan</option>
                <option>KIA</option>
                <option>Hyundai</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Model</label>

              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  Select Model
                </option>
                <option>Corolla</option>
                <option>Civic</option>
                <option>City</option>
                <option>Swift</option>
                <option>Alto</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Year</label>

              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  Select Year
                </option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Part</label>

              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  Select Part
                </option>
                <option>Engine</option>
                <option>Brake Parts</option>
                <option>Suspension</option>
                <option>Body Parts</option>
                <option>Lights</option>
                <option>Electrical</option>
              </select>
            </div>

            <button type="submit" className={styles.searchButton}>
              Search Parts →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}