import Link from 'next/link';

export default function NewCityPage() {
  // Static, non-interactive form placeholder to avoid hydration
  return (
    <div className="min-h-screen bg-[#FAFBFB] p-8">
      <div className="max-w-3xl mx-auto card-surface p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Add New City</h1>
          <Link href="/dashboard/cities" className="btn-ghost">Cancel</Link>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">City name</label>
            <div className="w-full border rounded px-3 py-2 text-[var(--gray)]">(static input)</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Short description</label>
            <div className="w-full border rounded px-3 py-2 text-[var(--gray)]" style={{ minHeight: 96 }}>(static textarea)</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="btn-primary-pill" role="button">Save city (disabled)</div>
            <Link href="/dashboard/cities" className="btn-ghost">Discard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
