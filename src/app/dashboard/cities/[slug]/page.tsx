import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export default function CityDetailPage({ params }: Props) {
  const slug = params?.slug || 'City';
  const title = decodeURIComponent(slug);

  return (
    <div className="min-h-screen bg-[#FAFBFB] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="card-surface p-6 rounded-xl">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-3xl font-bold flex items-center gap-4">
              <span className="inline-block w-1.5 h-10 bg-black rounded-sm -ml-2" aria-hidden />
              {title}
            </h1>

            <div>
              <Link href="/dashboard/cities" className="text-sm text-[var(--gray)]">Back</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                <p className="text-sm text-[var(--gray)] mb-4">Static city detail page. Replace with real data later.</p>

                <ul className="space-y-3 text-sm">
                  <li>
                    <span className="font-medium">Population:</span> 1,234,567
                  </li>
                  <li>
                    <span className="font-medium">Accommodations:</span> 12
                  </li>
                  <li>
                    <span className="font-medium">Attractions:</span> 6
                  </li>
                  <li>
                    <span className="font-medium">Events:</span> 3
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold mb-3">Actions</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/dashboard/cities/new" className="text-sm text-[var(--gray)]">Edit city</Link>
                  <div className="text-sm text-[var(--gray)]">Delete (disabled)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
