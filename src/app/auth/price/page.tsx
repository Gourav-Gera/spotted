import React from 'react';

export const metadata = {
  title: 'Pricing - Spotted',
};

export default function PricePage(){
  return (
    <div className="min-h-screen bg-gray-200 font-gilroy">
      <div className="w-full bg-white min-h-screen shadow-sm">
        <header className="flex items-center justify-between px-10 py-6 border-b">
          <div className="text-lg font-bold">Spotted.</div>
          <div>
            <button className="text-sm px-4 py-1.5 rounded-full border border-gray-300">Need Help?</button>
          </div>
        </header>

        <main className="px-10 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">Price & Planning</h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
            {/* Basic */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="uppercase text-xs font-bold tracking-widest mb-4 text-[#4A5D52]">Basic</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold"><span className="text-2xl font-bold">$</span>19</span>
                <span className="text-base font-medium ml-2.5 mb-1"> / month</span>
              </div>
              <div className="text-sm text-[var(--gray)] mb-6">billed monthly</div>
              <ul className="text-sm space-y-3 mb-6">
                <li className="flex items-center justify-between"><span className="font-semibold">Digital Infopoint</span><span className="text-green-600 font-bold">✓</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">AI Chatbot</span><span className="text-sm">Limited</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Interactive Map</span><span className="text-sm">10 POIs</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Booking System</span><span className="text-sm">Inquiry Only</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">E-commerce</span><span className="text-sm">1-2 Products</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Crowdfunding</span><span className="text-red-500 font-bold">✗</span></li>
              </ul>
              <button className="w-full border border-[#4A5D52] rounded-full py-2 font-medium text-[#4A5D52] hover:bg-gray-100 transition">Buy Now →</button>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="uppercase text-xs font-bold tracking-widest mb-4 text-[#4A5D52]">Pro</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold"><span className="text-2xl font-bold">$</span>49</span>
                <span className="text-base font-medium ml-2.5 mb-1"> / month</span>
              </div>
              <div className="text-sm text-[var(--gray)] mb-6">billed monthly</div>
              <ul className="text-sm space-y-3 mb-6">
                <li className="flex items-center justify-between"><span className="font-semibold">Digital Infopoint</span><span className="text-green-600 font-bold">✓</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">AI Chatbot</span><span className="text-sm">Unlimited</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Interactive Map</span><span className="text-sm">25 POIs</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Booking System</span><span className="text-sm">Full Calendar</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">E-commerce</span><span className="text-sm">10 Products</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Crowdfunding</span><span className="text-red-500 font-bold">✗</span></li>
              </ul>
              <button className="w-full border border-[#4A5D52] rounded-full py-2 font-medium text-[#4A5D52] hover:bg-gray-100 transition">Buy Now →</button>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="uppercase text-xs font-bold tracking-widest mb-4 text-[#4A5D52]">Premium</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold"><span className="text-2xl font-bold">$</span>99</span>
                <span className="text-base font-medium ml-2.5 mb-1"> / month</span>
              </div>
              <div className="text-sm text-[var(--gray)] mb-6">billed monthly</div>
              <ul className="text-sm space-y-3 mb-6">
                <li className="flex items-center justify-between"><span className="font-semibold">Digital Infopoint</span><span className="text-green-600 font-bold">✓</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">AI Chatbot</span><span className="text-sm">Unlimited</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Interactive Map</span><span className="text-sm">Unlimited</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Booking System</span><span className="text-sm">Full Calendar</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">E-commerce</span><span className="text-sm">20 Products + Variants</span></li>
                <li className="flex items-center justify-between"><span className="font-semibold">Crowdfunding</span><span className="text-green-600 font-bold">✓</span></li>
              </ul>
              <button className="w-full border border-[#4A5D52] rounded-full py-2 font-medium text-[#4A5D52] hover:bg-gray-100 transition">Buy Now →</button>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}
