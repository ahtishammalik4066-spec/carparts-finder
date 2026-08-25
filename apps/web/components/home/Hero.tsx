"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [start, target, duration]);

  return value;
}

function Counter({
  target,
  suffix = "",
  start,
}: {
  target: number;
  suffix?: string;
  start: boolean;
}) {
  const value = useCountUp(target, 1500, start);

  return (
    <strong>
      {value.toLocaleString()}
      {suffix}
    </strong>
  );
}

/* Word-by-word heading renderer.
   `startIndex` lets each line continue the stagger delay from where the previous line left off. */
function AnimatedWords({
  text,
  startIndex = 0,
  accent = false,
}: {
  text: string;
  startIndex?: number;
  accent?: boolean;
}) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className={`${styles.word} ${accent ? styles.accentWord : ""}`}
          style={{ animationDelay: `${(startIndex + i) * 0.09}s` }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const [startCount, setStartCount] = useState(false);
  const trustRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trustRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // word counts for each line, used to keep the stagger delay continuous
  const line1Words = "Find the Right".split(" ").length; // 3
  const line2Words = "Auto Parts".split(" ").length; // 2

  return (
    <section className="hero">
      <div className="container">
        <div className={styles.heroLayout}>

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="hero-badge">
             Auto Parts Marketplace
            </div>

            {/* MAIN HEADING — word by word reveal */}
            <h1 className={styles.heroTitle}>
  <AnimatedWords text="Find the" startIndex={0} />
  {"\u00A0"}
  <AnimatedWords text="Right" startIndex={2} accent />
  {"\u00A0"}
  <AnimatedWords text="Auto Parts" startIndex={3} accent />
  <br />
  <AnimatedWords text="for Your Vehicle" startIndex={5} />
</h1>

            <p>
              Search genuine and used car parts from trusted suppliers,
              shops and auto-part dealers across Pakistan.
            </p>

            <div className="hero-buttons">
              <a
                href="#vehicle-search"
                className="btn btn-primary"
              >
                Find Auto Parts →
              </a>

              <a
                href="#request-part"
                className="btn btn-outline hero-light-btn"
              >
                Request a Part
              </a>
            </div>

            {/* COUNTERS */}
            <div
              className="hero-trust"
              ref={trustRef}
            >
              <div>
                <Counter
                  target={10000}
                  suffix="+"
                  start={startCount}
                />
                <span>Parts Listed</span>
              </div>

              <div>
                <Counter
                  target={500}
                  suffix="+"
                  start={startCount}
                />
                <span>Verified Sellers</span>
              </div>

              <div>
                <Counter
                  target={100}
                  suffix="+"
                  start={startCount}
                />
                <span>Cities Covered</span>
              </div>
            </div>

          </div>


          {/* RIGHT SIDE SEARCH FORM */}
          <div
            id="vehicle-search"
            className={styles.searchBox}
          >

            <div className={styles.searchHeader}>
              <span className={styles.freeText}>
                100% FREE
              </span>

              <h2>
                Search Your Part Here
              </h2>

              <p>
                Find the right parts for your vehicle
              </p>
            </div>


            <form className={styles.form}>

              {/* MAKE */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Vehicle Make
                </label>

                <select
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Make
                  </option>

                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Suzuki</option>
                  <option>Nissan</option>
                  <option>KIA</option>
                  <option>Hyundai</option>
                </select>
              </div>


              {/* MODEL */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Vehicle Model
                </label>

                <select
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Model
                  </option>

                  <option>Corolla</option>
                  <option>Civic</option>
                  <option>City</option>
                  <option>Swift</option>
                  <option>Alto</option>
                </select>
              </div>


              {/* YEAR */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Model Year
                </label>

                <select
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Model Year
                  </option>

                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>


              {/* PART */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Part Required
                </label>

                <select
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Part
                  </option>

                  <option>Engine</option>
                  <option>Brake Parts</option>
                  <option>Suspension</option>
                  <option>Body Parts</option>
                  <option>Lights</option>
                  <option>Electrical</option>
                </select>
              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className={styles.searchButton}
              >
                Find My Part
                <span>→</span>
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}