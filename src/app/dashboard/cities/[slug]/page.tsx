import Link from 'next/link';
import Image from 'next/image';
import { BiEdit } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

interface Props {
  params: { slug: string };
}

export default function CityDetailPage({ params }: Props) {
  const slug = params?.slug || 'City';
  const title = decodeURIComponent(slug);

  return (
    <div className="min-h-screen p-0">
      <div className="">
        <div className="card-surface rounded-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-4 text-primary">
                {title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Link href={`/dashboard/cities/new?slug=${encodeURIComponent(title)}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#445B50] text-white text-sm">
                <BiEdit className="w-4 h-4" />
                Edit City
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 text-primary border-[#4A5D52] text-sm">
                <FiTrash2 className="w-4 h-4" />
                Delete City
              </button>
            </div>
          </div>
          <div className="text-md mb-4 mt-2">
            <Link href="/dashboard/cities" className="text-primary text-lg font-semibold">Back</Link>
          </div>
          {/* Hero: images + description + tags (overview removed) */}
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <div className="grid grid-cols-1 gap-2">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/rome-city-image-1.png" alt="img1" width={420} height={420} className="w-full h-90 object-cover rounded-2xl" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/rome-city-image-2.png" alt="img2" width={420} height={420} className="w-full h-90 object-cover rounded-2xl" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/rome-city-image-3.png" alt="img3" width={420} height={420} className="w-full h-90 object-cover rounded-2xl" />
                </div>
              </div>

              <p className="text-sm text-[var(--gray)] mb-2">Suspenseful text placeholder. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Integer id feugiat libero. Donec eget interdum magna. Proin sit amet aliquam dolor. Duis non volutpat purus. Proin eleifend convallis leo, nec gravida erat lacinia quis.</p>

               <p className="text-sm text-[var(--gray)] mb-2">Suspenseful text placeholder. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Integer id feugiat libero. Donec eget interdum magna. Proin sit amet aliquam dolor. Duis non volutpat purus. Proin eleifend convallis leo, nec gravida erat lacinia quis.</p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#B3541E] text-sm">
                  <Image src="/images/public-transport-icon.svg" alt="pt" width={16} height={16} className="w-4 h-4" />
                  Public Transportations
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#B3541E] text-sm">
                  <Image src="/images/nature-advanture-icon.svg" alt="nature" width={16} height={16} className="w-4 h-4" />
                  Nature & Adventure
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#B3541E] text-sm">
                  <Image src="/images/accomodation-icon.svg" alt="acc" width={16} height={16} className="w-4 h-4" />
                  Private Transportations
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#B3541E] text-sm">
                  <Image src="/images/business-tour-icon.svg" alt="biz" width={16} height={16} className="w-4 h-4" />
                  Business Tours
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#B3541E] text-sm">
                  <Image src="/images/local-visit-icon.svg" alt="local" width={16} height={16} className="w-4 h-4" />
                  Local Visit
                </span>
              </div>
            </div>
          </div>

          {/* Accommodation section - table with search + add button */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl text-primary font-semibold">Accommodation</h3>
              <div className="flex items-center gap-3">
                <Link href="/dashboard/accommodations/new" className="
                text-gray-400 text-md underline">See all</Link>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 border border-[#EFEFEF] shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#9aa09e]">
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <input placeholder="Search by accommodation name..." className="w-72 text-sm  outline-none" />
                </div>
              </div>
               <Link href="/dashboard/accommodations/new" className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white border-2 text-primary border-[#4A5D52] text-sm">+ Add New Accommodation</Link>
            </div>
            <div className="overflow-x-auto booking-table-wrap">
              <table className="min-w-full text-sm booking-table table-fixed">
                <thead>
                  <tr className="text-left bg-[#F6F6F6] text-[var(--gray)]">
                    <th className="w-12 py-4 pl-6 first:rounded-tl-2xl">#</th>
                    <th className="w-64 py-4">Hotel Name</th>
                    <th className="w-40 py-4">Location</th>
                    <th className="w-28 py-4">Total Earning</th>
                    <th className="w-24 py-4 last:rounded-tr-2xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="align-middle border-t border-[#E9E9E9]">
                      <td className="py-6 text-sm text-[#6a6f6d]">{String(i + 1).padStart(2, '0')}</td>
                      <td className="py-6">Hotel Name</td>
                      <td className="py-6">Rome, Italy</td>
                      <td className="py-6 font-medium">$100</td>
                      <td className="py-6 text-right">
                        <div className="inline-flex items-center justify-end gap-3">
                          <Link href={`/dashboard/accommodations/${i}`} className="text-[var(--primary)]">
                            <Image src="/images/eye-icon.svg" alt="view" width={20} height={20} className="w-5 h-5" />
                          </Link>

                          <button aria-label="More" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
                            <Image src="/images/edit-icon.svg" alt="more" width={18} height={18} className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
