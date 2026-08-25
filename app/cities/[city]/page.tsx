interface CityPageProps {
  params: { city: string };
}

export default function CityPage({ params }: CityPageProps) {
  return (
    <main>
      <h1>City: {params.city}</h1>
      <p>Browse parts available in this city.</p>
    </main>
  );
}
