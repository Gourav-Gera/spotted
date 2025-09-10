"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type Props = { params: { id: string } };

export default function BookingDetail({ params }: Props) {
  const { id } = params;
  const search = useSearchParams();
  const cancelQuery = search?.get("cancel") === "true"; // reserved for future use
  const [showCancel] = useState<boolean>(!!cancelQuery);

  return (
    <div className="p-0">
      <h2 className="font-bold text-xl mb-6 text-primary">Booking Details</h2>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
        {/* Left card */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 px-5 sm:px-8 py-6 space-y-6">
          <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=160&q=60" alt="hotel" className="w-14 h-14 rounded-md object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold text-sm leading-tight truncate">Hotel Park Palace</div>
                  <div className="text-xs text-gray-500 mt-1">$100/night</div>
                </div>
                <span className="inline-block bg-[#9A4F1E] text-white rounded-md px-3 py-1 text-[10px] font-medium">Ongoing</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="font-semibold text-sm mb-2">Check-in / Check-out date</div>
              <div className="text-xs text-gray-600">29 June 2025 - 30 June 2025</div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">No of guests</div>
              <div className="text-xs text-gray-600">2</div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">Location</div>
              <div className="text-xs text-gray-600">Rome, Italy</div>
            </div>
          </div>
          <div className="pt-2">
            <a href={`/dashboard/bookings/cancel?id=${id}`} className="inline-block bg-[var(--primary)] text-white px-5 py-2.5 rounded-full text-xs font-medium">Cancel Booking</a>
          </div>
        </div>
        {/* Right card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 sm:px-8 py-6 h-fit">
          <h3 className="font-semibold text-sm mb-4">Price breakdown</h3>
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between py-2 text-xs"><span>$100 * 1 night</span><span className="font-medium">$100</span></li>
              <li className="flex justify-between py-2 text-xs"><span>Services fee</span><span className="font-medium">$10</span></li>
              <li className="flex justify-between py-2 text-xs"><span>Taxes</span><span className="font-medium">$10</span></li>
              <li className="flex justify-between py-2 text-xs font-semibold"><span>Grand Total</span><span>$120</span></li>
              <li className="flex justify-between py-2 text-xs"><span>Platform fee</span><span className="font-medium text-red-500">- $20</span></li>
              <li className="flex justify-between py-2 text-xs font-semibold"><span>Your Earning</span><span>$100</span></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
