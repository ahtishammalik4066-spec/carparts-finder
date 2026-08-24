import type { Listing } from "@partfinder/shared";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="listing-card">
      <h3>{listing.title}</h3>
      <p>{listing.description}</p>
      <p className="listing-price">
        {listing.currency} {listing.price}
      </p>
      <p className="listing-location">{listing.city}</p>
    </article>
  );
}