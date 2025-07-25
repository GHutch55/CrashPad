const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

type Bug = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  created_at: string;
};

export default async function HomePage() {
  const res = await fetch(`${API_URL}/bugs`, { cache: "no-store" });
  const bugs: Bug[] = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">CrashPad Bugs</h1>
      <ul className="space-y-4">
        {bugs.map((bug) => (
          <li key={bug.id} className="border p-4 rounded shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{bug.title}</h2>
            <p className="text-sm text-gray-600">{bug.description}</p>
            <p className="text-xs text-gray-400 mt-2">
              Tags: {bug.tags.join(", ")} - Created:{" "}
              {new Date(bug.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
