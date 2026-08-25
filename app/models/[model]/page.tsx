interface ModelPageProps {
  params: { model: string };
}

export default function ModelPage({ params }: ModelPageProps) {
  return (
    <main>
      <h1>Model: {params.model}</h1>
      <p>Browse parts for this model.</p>
    </main>
  );
}
