"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

const sample = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  orderId: `#234${67 + i}`,
  hotel: "Hotel Name",
  user: `User ${i + 1}`,
  amount: "$100",
  date: "3 July 2025",
}));

export default function BookingsPage() {
  const [tab, setTab] = useState("upcoming");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return sample;
    return sample.filter((s) =>
      [s.orderId, s.hotel, s.user].some((v) => v.toLowerCase().includes(term))
    );
  }, [q]);

  return (
    <div className="min-h-screen bg-[#FAFBFB] p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-xl mb-4">Bookings</h2>
        <div className="card-surface">
          <div className="flex items-center gap-4 mb-6">
          {[
            { key: "upcoming", label: "Upcoming" },
            { key: "ongoing", label: "Ongoing" },
            { key: "completed", label: "Completed" },
            { key: "cancelled", label: "Cancelled" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`pill-tab ${tab === t.key ? 'bg-[var(--primary)] text-white' : 'bg-[#F6F7F9] text-[var(--gray)]'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

          <div className="mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search bookings..."
            className="search-pill w-full text-sm"
          />
        </div>

          <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm booking-table">
            <thead>
              <tr className="text-left text-[var(--gray)]">
                <th className="">#</th>
                <th>Order Id</th>
                <th>Hotel Name</th>
                <th>User Name</th>
                <th>Amount</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id}>
                  <td className="">{String(r.id).padStart(2, '0')}</td>
                  <td className="text-[var(--primary)]">{r.orderId}</td>
                  <td className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=32&h=32" alt="hotel" className="w-10 h-10 rounded-md object-cover" />
                    <span className="font-semibold">{r.hotel}</span>
                  </td>
                  <td>{r.user}</td>
                  <td className="font-semibold">{r.amount}</td>
                  <td>{r.date}</td>
                  <td className="flex items-center gap-4">
                    <Link href={`/dashboard/bookings/${r.id}`} className="text-sm text-[var(--primary)]">Details</Link>
                    <Link href={`/dashboard/bookings/cancel?id=${r.id}`} className="text-sm text-red-500">Cancel</Link>
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
