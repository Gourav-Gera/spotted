"use client";
import React, { useState } from "react";
import EarningChart from '../../../components/EarningChart';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

export default function EarningsPage(){
  const [mode,setMode] = useState<'monthly'|'weekly'|'today'>('monthly');
  const [category,setCategory] = useState<'all'|'accommodation'|'ecommerce'>('all');
  const [showPriceMenu,setShowPriceMenu] = useState(false);
  const [showDateMenu,setShowDateMenu] = useState(false);

  const rows = Array.from({length:10}).map((_,i)=>({
    id: `#${23467+i}`,
    product: i%2? 'Product Name':'Hotel Name',
    user: 'User Name',
    earning: '$100',
    date: '3 July 2025'
  }));

  return (
    <div className="min-h-screen p-0">
      <div className="">
        <h1 className="text-lg font-semibold mb-6">Earnings</h1>
        {/* Top cards */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-sm">Earning</div>
              <div className="flex items-center gap-2">
                {(['monthly','weekly','today'] as const).map(m=> (
                  <button key={m} onClick={()=>setMode(m)} className={`px-3 py-1 rounded-full text-xs md:text-sm ${mode===m? 'bg-[var(--primary)] text-white':'bg-gray-100 text-gray-600'}`}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>
                ))}
              </div>
            </div>
            <EarningChart mode={mode} />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col">
            <div className="font-semibold text-sm mb-3">Earning</div>
            <div className="rounded-lg bg-[var(--primary)] text-white text-center py-6 text-lg font-semibold mb-4">$200<div className="text-xs font-normal mt-1">Total Earning</div></div>
            <div className="grid grid-cols-2 gap-3 text-center flex-1">
              <div className="rounded-md border border-[#E5E5E5] flex flex-col items-center justify-center py-3">
                <div className="text-xs text-gray-500 mb-1">Accommodation</div>
                <div className="font-semibold">$120</div>
              </div>
              <div className="rounded-md border border-[#E5E5E5] flex flex-col items-center justify-center py-3">
                <div className="text-xs text-gray-500 mb-1">E-commerce</div>
                <div className="font-semibold">$80</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs (match Orders segmented style) */}
  <div className="flex items-center justify-between gap-4 mb-4 rounded-full border border-[#E5E5E5] overflow-hidden w-full">
          {(['all','accommodation','ecommerce'] as const).map(c=> (
            <button
              key={c}
              onClick={()=>setCategory(c)}
              className={`pill-tab w-[33.33%] ${category===c? 'bg-[var(--primary)] text-white' : 'bg-[#F6F7F9] text-[var(--gray)]'}`}
            >
              {c==='all'? 'All': c==='accommodation'? 'Accommodation':'E-commerce'}
            </button>
          ))}
        </div>

        {/* Search */}
  <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 border border-[#E5E5E5] mb-4 w-full max-w-none">
          <BiSearch className="text-gray-400" />
          <input placeholder="Search here..." className="w-full text-sm bg-transparent outline-none" />
        </div>

        {/* Filter pills */}
  <div className="flex gap-3 mb-6 flex-wrap">
          <div className="relative">
            <button onClick={()=>{ setShowPriceMenu(v=>!v); setShowDateMenu(false); }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs md:text-sm">Price Range <span className="text-xs">▾</span></button>
            {showPriceMenu && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-48 z-20 text-sm">
                {['$0 - $50','$50 - $200','$200+'].map(opt=> <div key={opt} className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={()=> setShowPriceMenu(false)}>{opt}</div>)}
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={()=>{ setShowDateMenu(v=>!v); setShowPriceMenu(false); }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs md:text-sm">By Date <span className="text-xs">▾</span></button>
            {showDateMenu && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-48 z-20 text-sm">
                {['Last 7 days','Last 30 days','This year'].map(opt=> <div key={opt} className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={()=> setShowDateMenu(false)}>{opt}</div>)}
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm md:table">
            <thead className="bg-[#FAFBFB] text-gray-600">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Transaction Id</th>
                <th className="p-4 text-left">Product Name/Accommodation</th>
                <th className="p-4 text-left">User Name</th>
                <th className="p-4 text-left">Earning</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i)=>(
                <tr key={r.id} className="border-t border-gray-100">
                  <td className="p-4 align-middle">{String(i+1).padStart(2,'0')}</td>
                  <td className="p-4 align-middle">{r.id}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-8 bg-gray-100 rounded-md" />
                      <span>{r.product}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">{r.user}</td>
                  <td className="p-4 align-middle">{r.earning}</td>
                  <td className="p-4 align-middle">{r.date}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <a href="#" className="text-[var(--primary)]">
                        <Image src="/images/eye-icon.svg" alt="view" width={16} height={16} className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-sm">
                        <Image src="/images/edit-icon.svg" alt="edit" width={16} height={16} className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
