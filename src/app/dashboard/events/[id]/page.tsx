"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
// Removed slider; using static image grid


// react-slick with no SSR
// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// interface Props {
//   params: { id: string };
// }

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const id = params?.id || "1";
  const title = "Florence Jazz Festival";

  const images = ["/images/why-1.webp","/images/why-2.webp","/images/why-3.webp","/images/why-1.webp"]; // duplicate for demo
  const perSlide = 3;
  const slideCount = useMemo(()=> Math.ceil(images.length / perSlide),[images.length]);
  const [slide,setSlide] = useState(0);
  function go(i:number){ if(i<0||i>=slideCount) return; setSlide(i); }

  return (
    <div className="min-h-screen p-0">
      <div className="card-surface rounded-xl p-6">
        {/* Top section: Title + Actions */}
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-4 text-primary">
            {title}
          </h1>

          <div className="flex items-center gap-3">
            <Link
              href={`/dashboard/events/${id}/edit`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#445B50] text-white text-sm"
            >
              <BiEdit className="w-4 h-4" />
              Edit Event
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 text-primary border-[#4A5D52] text-sm">
              <FiTrash2 className="w-4 h-4" />
              Delete Event
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500 ease-out" style={{width:`${slideCount*100}%`, transform:`translateX(-${slide*100}%)`}}>
              {Array.from({length:slideCount}).map((_,s)=>(
                <div key={s} className="w-full grid grid-cols-3 gap-4">
                  {images.slice(s*perSlide,s*perSlide+perSlide).map((src,i)=>(
                    <div key={i} className="overflow-hidden rounded-lg h-48">
                      <Image src={src} alt={`img-${s}-${i}`} width={600} height={320} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button onClick={()=>go(slide-1)} disabled={slide===0} aria-label="Previous images" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-2 rounded-full text-sm text-primary disabled:opacity-30">‹</button>
            <button onClick={()=>go(slide+1)} disabled={slide===slideCount-1} aria-label="Next images" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-2 rounded-full text-sm text-primary disabled:opacity-30">›</button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({length:slideCount}).map((_,i)=>(
              <button key={i} onClick={()=>go(i)} className={`w-2 h-2 rounded-full transition-colors ${i===slide? 'bg-[#445B50]' : 'bg-[#C9D2CE]'}`} aria-label={`Go to slide ${i+1}`}></button>
            ))}
          </div>
        </div>


        {/* Bottom Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <p className="text-sm text-[var(--gray)] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Vestibulum venenatis libero purus, ut interdum est venenatis et.
              Nunc facilisis ipsum ac congue tincidunt. Duis sed bibendum odio.
              Sed facilisis mollis enim, ut egestas felis auctor a.
            </p>

            <div className="mt-4 overflow-hidden rounded-lg">
              <Image
                src="/images/home-banner-img.webp"
                alt="map"
                width={900}
                height={320}
                className="w-full h-64 md:h-72 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">
                  Important things to remember
                </h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <span className="font-medium">Event Entry</span>{" "}
                    <span className="float-right">Free</span>
                  </li>
                  <li>
                    <span className="font-medium">Date</span>{" "}
                    <span className="float-right">August 15, 2025</span>
                  </li>
                  <li>
                    <span className="font-medium">Time Duration</span>{" "}
                    <span className="float-right">3 PM - 11 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
