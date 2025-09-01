import Link from 'next/link';

// Static sample data for server-rendered list
const rows = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  name: `City ${i + 1}`,
  accommodations: 5 + (i % 6),
  attractions: 1 + (i % 4),
  events: i % 3,
}));

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFB] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Cities</h1>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-[var(--gray)]">Showing {rows.length} cities</div>
            <Link href="/dashboard/cities/new" className="btn-primary-pill">Add new city</Link>
          </div>

          <div className="overflow-hidden rounded-md">
            <table className="w-full text-left">
              <thead className="bg-[#FAFBFB]">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Accommodations</th>
                  <th className="p-4">Attractions</th>
                  <th className="p-4">Events</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b">
                    <td className="p-4">{String(r.id).padStart(2, '0')}</td>
                    <td className="p-4">{r.name}</td>
                    <td className="p-4">{r.accommodations}</td>
                    <td className="p-4">{r.attractions}</td>
                    <td className="p-4">{r.events}</td>
                    <td className="p-4 text-right">
                      <Link href={`/dashboard/cities/${encodeURIComponent(r.name)}`} className="text-[var(--gray)]">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
