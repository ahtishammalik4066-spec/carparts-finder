"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FeaturedListings.module.css";
import ConfirmVehicleModal from "./ConfirmVehicleModal";

const listings = [
  {
    slug: "toyota-corolla-headlight",
    name: "Toyota Corolla Headlight",
    vehicle: "Toyota Corolla 2018–2022",
    price: "PKR 18,500",
    location: "Lahore",
    condition: "Genuine",
    whatsapp: "923001234567",
  },
  {
    slug: "honda-civic-front-bumper",
    name: "Honda Civic Front Bumper",
    vehicle: "Honda Civic 2016–2021",
    price: "PKR 24,000",
    location: "Karachi",
    condition: "New",
    whatsapp: "923001234567",
  },
  {
    slug: "suzuki-alto-engine",
    name: "Suzuki Alto Engine",
    vehicle: "Suzuki Alto 2019–2023",
    price: "PKR 145,000",
    location: "Faisalabad",
    condition: "Used",
    whatsapp: "923001234567",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.62 1.4 5.12L2 22l5.11-1.51c1.44.79 3.1 1.24 4.85 1.24h.04c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.1h-.03c-1.54 0-3.05-.41-4.35-1.19l-.31-.18-3.03.9.9-2.95-.2-.31a8.15 8.15 0 0 1-1.25-4.36c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.66 8.08-8.06 8.08z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function FeaturedListings() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePart, setActivePart] = useState<string | undefined>();

  const openCallModal = (partName: string) => {
    setActivePart(partName);
    setModalOpen(true);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.label}>Marketplace</span>

            <h2 className={styles.title}>Featured Parts</h2>

            <p className={styles.description}>
              Hand-picked auto parts from trusted suppliers across Pakistan.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {listings.map((listing) => (
            <article className={styles.card} key={listing.slug}>
              <Link
                href={`/listings/${listing.slug}`}
                className={styles.imageLink}
              >
                <div className={styles.image}>
                  <span className={styles.imagePlaceholder}>
                    Auto Part Image
                  </span>

                  <span className={styles.condition}>
                    {listing.condition}
                  </span>
                </div>
              </Link>

              <div className={styles.content}>
                <Link href={`/listings/${listing.slug}`}>
                  <h3 className={styles.partName}>{listing.name}</h3>
                </Link>

                <p className={styles.vehicle}>{listing.vehicle}</p>

                <div className={styles.priceRow}>
                  <div className={styles.price}>{listing.price}</div>

                  <div className={styles.location}>
                    📍 {listing.location}
                  </div>
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.whatsappBtn}
                    onClick={() => openCallModal(listing.name)}
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    className={styles.callBtn}
                    onClick={() => openCallModal(listing.name)}
                  >
                    <CallIcon />
                    Click to Call
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ConfirmVehicleModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        partName={activePart}
      />
    </section>
  );
}