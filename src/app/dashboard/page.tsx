import React from "react";
import EarningChart from "../../components/EarningChart";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const StatCard = ({ icon, value, label }: { icon: string; value: string; label: string }) => (
  <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm flex-1 min-w-[160px]">
    <div className="bg-gray-100 rounded-full p-3">
      <span className="text-2xl text-[var(--gray)]">{icon}</span>
    </div>
    <div>
      <div className="font-bold text-lg">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <>
      <div>
        <h2 className="font-bold text-xl mb-4 text-primary">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard icon="hotel" value="56" label="Accommodations listed" />
          <StatCard icon="attach_money" value="$12K" label="Earning" />
          <StatCard icon="shopping_cart" value="100" label="Products listed" />
          <StatCard icon="place" value="50" label="Attractions listed" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow p-6 col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg">Order Summary</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-[#F6F7F9] text-[var(--primary)] font-semibold text-xs border border-[var(--primary)]">Monthly</button>
                <button className="px-3 py-1 rounded-full bg-white text-gray-500 font-semibold text-xs border border-gray-200">Weekly</button>
                <button className="px-3 py-1 rounded-full bg-white text-gray-500 font-semibold text-xs border border-gray-200">Today</button>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-between bg-[#E6F4EA] rounded-2xl p-2">
              <div className=" text-[var(--primary)] rounded-lg px-4 py-3 flex gap-4 items-center">
                <div className="font-bold text-3xl text-white bg-[#68D585] p-2 px-3 rounded-md">25</div>
                <div className="text-md text-black font-semibold">New Orders</div>
                <span className="w-4 h-4 bg-[#68D585] rounded-full"></span>
              </div>
              <div className="flex flex-col justify-end pr-3">
                <a href="#" className="font-semibold text-sm hover:underline text-[#68D585]">Manage Orders </a>
              </div>
               </div>
              <div className="flex-1 flex justify-between gap-2">
                <div className="border border-[#E5E5E5] rounded-lg px-4 py-3 flex flex-col items-center flex-1">
                  <div className="font-bold text-lg">25</div>
                  <div className="text-xs text-gray-500">On the Way</div>
                </div>
                <div className="bg-gray-50 rounded-lg px-4 py-3 flex flex-col items-center flex-1">
                  <div className="font-bold text-lg">60</div>
                  <div className="text-xs text-gray-500">Delivered</div>
                </div>
                <div className="bg-gray-50 rounded-lg px-4 py-3 flex flex-col items-center flex-1">
                  <div className="font-bold text-lg">07</div>
                  <div className="text-xs text-gray-500">Cancelled</div>
                </div>
              </div>
              
           
          </div>
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg">Earning</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-[#F6F7F9] text-[var(--primary)] font-semibold text-xs border border-[var(--primary)]">Monthly</button>
                <button className="px-3 py-1 rounded-full bg-white text-gray-500 font-semibold text-xs border border-gray-200">Weekly</button>
                <button className="px-3 py-1 rounded-full bg-white text-gray-500 font-semibold text-xs border border-gray-200">Today</button>
              </div>
            </div>
            <div>
              <EarningChart />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 table-column-wrap">
          <div className="font-bold text-lg mb-4">Today&apos;s Bookings</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left background-[#F6F6F6] text-[var(--gray)]">
                  <th className="py-2 px-2">#</th>
                  <th className="py-2 px-2">Order Id</th>
                  <th className="py-2 px-2">Hotel Name</th>
                  <th className="py-2 px-2">User Name</th>
                  <th className="py-2 px-2">Amount</th>
                  <th className="py-2 px-2">Booking Date</th>
                  <th className="py-2 px-2 flex justify-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4].map((i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 px-2 font-semibold">{`0${i}`}</td>
                    <td className="py-2 px-2 font-semibold">#234677</td>
                    <td className="py-2 px-2 flex items-center gap-2">
                       <div className="flex items-center gap-3">
                        <Image src="/images/hotel-img-table.png" alt="hotel" width={40} height={40} className="w-10 h-10 rounded-md object-cover block" />
                        <span className="font-semibold">Hotel Name</span>
                      </div>
                    </td>
                    <td className="py-2 px-2">User Name</td>
                    <td className="py-2 px-2 font-semibold">$100</td>
                    <td className="py-2 px-2">3 July 2025</td>
                    <td className="py-2 px-2 flex items-center justify-end gap-2">
                      <Link href="#" className="text-sm">
                        <Image src="/images/edit-icon.svg" alt="edit icon" width={16} height={16} className="w-4 h-4 block" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>  
  <Footer />
    </>
  );
}