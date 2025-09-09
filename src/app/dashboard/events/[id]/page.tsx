"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import Slider from "react-slick";
// Import slick CSS (important)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// react-slick with no SSR
// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// interface Props {
//   params: { id: string };
// }

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const id = params?.id || "1";
  const title = "Florence Jazz Festival";

  const sliderRef = useRef<any>(null);

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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

        <Slider {...settings}>
            <div>
              <Image
                src="/images/why-1.webp"
                alt="img1"
                width={900}
                height={320}
                className="object-cover"
              />
              </div>
               <div>
              <Image
                src="/images/why-1.webp"
                alt="img1"
                width={900}
                height={320}
                className="object-cover"
              />
              </div>
               <div>
              <Image
                src="/images/why-1.webp"
                alt="img1"
                width={900}
                height={320}
                className="object-cover"
              />
              </div>
               <div>
              <Image
                src="/images/why-1.webp"
                alt="img1"
                width={900}
                height={320}
                className="object-cover"
              />
              </div>
        
        </Slider>


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
