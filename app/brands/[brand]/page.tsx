interface BrandPageProps {
  params: { brand: string };
}

export default function BrandPage({ params }: BrandPageProps) {
  return (
    <main>
      <h1>Brand: {params.brand}</h1>
      <p>Browse parts for this brand.</p>
    </main>
  );
}
