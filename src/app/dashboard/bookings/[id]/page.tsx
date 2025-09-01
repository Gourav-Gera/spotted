"use client";
import React, { useState, useEffect } from "react";
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2 card-surface">
        <div className="flex items-start gap-4">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&h=80" alt="hotel" className="w-24 h-20 rounded-md object-cover" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-2xl">Hotel Park Palace</div>
                <div className="text-sm text-gray-500">Booking Id: #{id}</div>
              </div>
              <div>
                <span className="status-badge">Upcoming</span>
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
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
                <a href={`/dashboard/bookings/cancel?id=${id}`} className="btn-primary-pill inline-block">Cancel Booking</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="price-card">
  <div className="font-semibold mb-4">Price breakdown</div>
        <div className="flex justify-between py-2"><span>$100 * 1 night</span><span>$100</span></div>
        <div className="flex justify-between py-2"><span>Service fee</span><span>$50</span></div>
        <div className="flex justify-between py-2"><span>Taxes</span><span>$40</span></div>
        <div className="flex justify-between py-3 border-t font-bold"><span>Grand Total</span><span>$690</span></div>
        <div className="flex justify-between py-2"><span>Platform fee</span><span className="text-red-500">-$20</span></div>
        <div className="mt-4 text-sm text-gray-600 font-semibold">Your Earning: $100</div>
      </div>
    </div>
  );
}
