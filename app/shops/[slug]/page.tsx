interface ShopPageProps {
  params: { slug: string };
}

export default function ShopPage({ params }: ShopPageProps) {
  return (
    <main>
      <h1>Shop: {params.slug}</h1>
      <p>View this shop's listings and details.</p>
    </main>
  );
}
