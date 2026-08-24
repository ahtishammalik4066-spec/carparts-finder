interface ListingDetailPageProps {
  params: { id: string };
}

export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  return (
    <main>
      <h1>Listing Details</h1>
      <p>Listing ID: {params.id}</p>
    </main>
  );
}
