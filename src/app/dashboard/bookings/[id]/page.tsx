"use client";
import React, { useState, useEffect } from "react";
import MinimalFooter from '../../../../components/MinimalFooter';
import { useSearchParams, useRouter } from "next/navigation";

type Props = { params: { id: string } };

export default function BookingDetail({ params }: Props) {
  const { id } = params;
  const search = useSearchParams();
  const router = useRouter();
  const cancelQuery = search?.get("cancel") === "true";
  const [showCancel, setShowCancel] = useState<boolean>(!!cancelQuery);

  useEffect(() => {
    setShowCancel(!!cancelQuery);
  }, [cancelQuery]);

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="col-span-2 bg-white p-10 rounded-2xl shadow-lg">
        <div className="flex items-center gap-6">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=120&h=96" alt="hotel" className="w-20 h-20 rounded-lg object-cover block" />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-extrabold text-4xl leading-tight">Hotel Park Palace</div>
                <div className="text-sm text-gray-500 mt-1">Booking Id: #{id}</div>
                <div className="text-sm text-[var(--gray)] mt-2 font-semibold">$100/night</div>
              </div>
              <div>
                <span className="status-badge">Upcoming</span>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-6" />
            <div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">Check-in / Check-out date</div>
                <div className="text-sm text-gray-600">29 June 2025 - 30 June 2025</div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">No of guests</div>
                <div className="text-sm text-gray-600">2</div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">Location</div>
                <div className="text-sm text-gray-600">Rome, Italy</div>
              </div>

              <div className="mt-4">
                <a href={`/dashboard/bookings/cancel?id=${id}`} className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold">Cancel Booking</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="price-card self-start">
        <div className="font-semibold mb-4">Price breakdown</div>
        <div className="flex justify-between py-2"><span>$100 * 1 night</span><span>$100</span></div>
        <div className="flex justify-between py-2"><span>Service fee</span><span>$50</span></div>
        <div className="flex justify-between py-2"><span>Taxes</span><span>$40</span></div>
        <div className="flex justify-between py-3 border-t font-bold"><span>Grand Total</span><span>$690</span></div>
        <div className="flex justify-between py-2"><span>Platform fee</span><span className="text-red-500">-$20</span></div>
        <div className="mt-4 text-sm text-gray-600 font-semibold">Your Earning: $100</div>
      </div>
    </div>
    
    <div className="mt-10">
      <MinimalFooter />
    </div>
    </>
  );
}
