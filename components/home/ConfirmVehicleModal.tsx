"use client";

import { useState } from "react";
import styles from "./ConfirmVehicleModal.module.css";

type ConfirmVehicleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  partName?: string;
};

export default function ConfirmVehicleModal({
  isOpen,
  onClose,
  partName,
}: ConfirmVehicleModalProps) {
  const [condition, setCondition] = useState("used");

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h3>Confirm Your Vehicle and Part</h3>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className={styles.field}>
            <label>Select Make</label>
            <select defaultValue="">
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

          <div className={styles.field}>
            <label>Select Model</label>
            <select defaultValue="">
              <option value="" disabled>
                Select Your Model
              </option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Select Year</label>
            <select defaultValue="">
              <option value="" disabled>
                Select Your Model Year
              </option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Select Parts</label>

            <div className={styles.tagInput}>
              <span className={styles.tag}>
                {partName ?? "Select Part"}
                <button
                  type="button"
                  className={styles.tagRemove}
                  aria-label="Remove part"
                >
                  ✕
                </button>
              </span>
            </div>
          </div>

          <div className={styles.field}>
            <label>Select Parts Condition</label>

            <div className={styles.conditionBox}>
              <span className={styles.conditionLabel}>
                Condition Required?
              </span>

              <div className={styles.radioRow}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="condition"
                    checked={condition === "used"}
                    onChange={() => setCondition("used")}
                  />
                  Used
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="condition"
                    checked={condition === "new"}
                    onChange={() => setCondition("new")}
                  />
                  New
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="condition"
                    checked={condition === "any"}
                    onChange={() => setCondition("any")}
                  />
                  Doesn&apos;t matter
                </label>
              </div>
            </div>
          </div>

          <div className={styles.field}>
            <label>Enter Valid Whatsapp Number</label>

            <div className={styles.phoneRow}>
              <span className={styles.countryCode}>PAK +92</span>

              <input
                type="tel"
                placeholder="Mobile/WhatsApp Number"
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Get Free Price Quotes
          </button>
        </form>
      </div>
    </div>
  );
}