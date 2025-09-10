import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-0">
      <div className="">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary">About Hallstatt Municipality</h1>
          <div className="flex items-center gap-3">
            <Link href="/dashboard/about/edit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#445B50] text-white text-sm">Edit About</Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 text-primary border-[#4A5D52] text-sm">Delete About</button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="overflow-hidden rounded-lg">
              <Image src="/images/rome-city-image-1.png" alt="img-1" width={800} height={400} className="w-full h-56 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image src="/images/rome-city-image-2.png" alt="img-2" width={800} height={400} className="w-full h-56 object-cover" />
            </div>
          </div>

          <div className="space-y-4 text-sm text-[var(--gray)] leading-relaxed">
            <p>Tucked away in the Salzkammergut region of Upper Austria, Hallstatt is a captivating lakeside municipality known for its breathtaking natural landscape and deep historical roots. Surrounded by the crystal-clear waters of Lake Hallstatt and the towering Dachstein mountains, this charming village offers an unforgettable experience that blends nature, culture, and tradition.</p>
            <p>Hallstatt’s story begins over 7,000 years ago, with archaeological evidence revealing it as one of the world’s oldest known salt production centers. This ancient connection to salt—once known as "white gold"—gave rise to a flourishing community that played a vital role in trade and cultural exchange across Europe. The region even lent its name to the "Hallstatt Culture," a key phase in early European history. Walking through the village feels like stepping into a postcard—narrow alleyways lined with pastel-colored alpine houses, vibrant floral balconies, and traditional Austrian architecture at every turn. The municipality takes immense pride in preserving its heritage, with well-maintained structures, local museums, and ongoing cultural festivals that celebrate its roots.</p>
            <p>Beyond its aesthetic appeal, Hallstatt is a hub for exploration and learning. Visitors can discover underground salt mines, enjoy panoramic views from the Skywalk platform, take boat rides across the lake, or hike through lush forest trails. Educational exhibits and guided tours help people of all ages understand the social and environmental evolution of this unique settlement.</p>
            <p>Despite its global recognition and influx of tourism, Hallstatt remains a close-knit community. The municipality focuses on sustainability, environmental care, and maintaining a peaceful rhythm of life that respects both locals and visitors. Every element, from municipal planning to community events, reflects a harmonious balance between tradition and progress.</p>
            <p>Whether you're a history enthusiast, a nature lover, or a curious traveler, Hallstatt’s municipality offers a one-of-a-kind narrative—one that continues to evolve while remaining deeply rooted in Europe’s cultural foundation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
