interface PartPageProps {
  params: { part: string };
}

export default function PartPage({ params }: PartPageProps) {
  return (
    <main>
      <h1>Part: {params.part}</h1>
      <p>Browse listings for this part.</p>
    </main>
  );
}
