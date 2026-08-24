import type { Listing } from "@partfinder/shared";
import ListingCard from "./ListingCard";

interface ListingGridProps {
  listings: Listing[];
}

export default function ListingGrid({ listings }: ListingGridProps) {
  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}