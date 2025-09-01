"use client";
import React, { useState } from "react";
import EarningChart from '../../../components/EarningChart';

function StatCard({title, value}:{title:string; value:string}){
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
      <div className="text-sm text-[var(--gray)] mb-2">{title}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  )
}

export default function EarningsPage() {
  const [mode, setMode] = useState<'monthly'|'weekly'|'today'>('monthly');
  const [category, setCategory] = useState<'all'|'accommodation'|'ecommerce'>('all');
  const [showPriceMenu, setShowPriceMenu] = useState(false);
  const [showDateMenu, setShowDateMenu] = useState(false);
  const rows = new Array(8).fill(0).map((_,i)=>({
    id: `#${2300+i}`,
    product: i%2? 'Product Name':'Hotel Name',
    user: 'User Name',
    earning: `$${100+i*10}`,
    date: '3 July 2025'
  }))

  return (
    <div className="min-h-screen bg-[#FAFBFB] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Earnings</h1>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Earning</div>
              <div className="space-x-2">
                {(['monthly','weekly','today'] as const).map(m=> (
                  <button key={m} onClick={()=>setMode(m)} className={`px-3 py-1 rounded-full text-sm ${mode===m? 'bg-[var(--primary)] text-white':'border'}`}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>
                ))}
              </div>
            </div>
            <EarningChart mode={mode} />
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="font-semibold mb-3">Earning</div>
            <div className="bg-[var(--primary)] text-white p-4 rounded-lg mb-4 text-center">$200<br/><span className="text-sm">Total Earning</span></div>
            <div className="grid grid-cols-2 gap-3">
              <StatCard title="Accommodation" value="$120" />
              <StatCard title="E-commerce" value="$80" />
            </div>
          </div>
        </div>

        {/* Tabs row (full width, single column) */}
        <div className="mb-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-full p-2 shadow-sm flex justify-center">
              <div className="w-3/4 flex justify-between">
                {(['all','accommodation','ecommerce'] as const).map(c=> (
                  <button key={c} onClick={()=>setCategory(c)} className={`px-6 py-2 rounded-full text-sm ${category===c? 'bg-[var(--primary)] text-white':'border'}`}>
                    {c==='all'? 'All': c==='accommodation'? 'Accommodation':'E-commerce'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search row */}
        <div className="mb-3">
          <div className="max-w-6xl mx-auto">
            <input placeholder="Search here..." className="w-full border rounded-full px-4 py-3 bg-white" />
          </div>
        </div>

        {/* Dropdown row */}
        <div className="mb-6">
          <div className="max-w-6xl mx-auto flex gap-3">
            <div className="relative">
              <button onClick={()=>{ setShowPriceMenu(v=>!v); setShowDateMenu(false); }} className="px-4 py-2 rounded-full bg-white border text-sm flex items-center gap-2">Price Range <span className="text-xs">▾</span></button>
              {showPriceMenu ? (
                <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-48 z-20">
                  <div className="p-2 text-sm">$0 - $50</div>
                  <div className="p-2 text-sm">$50 - $200</div>
                  <div className="p-2 text-sm">$200+</div>
                </div>
              ) : null}
            </div>

            <div className="relative">
              <button onClick={()=>{ setShowDateMenu(v=>!v); setShowPriceMenu(false); }} className="px-4 py-2 rounded-full bg-white border text-sm flex items-center gap-2">By Date <span className="text-xs">▾</span></button>
              {showDateMenu ? (
                <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-48 z-20">
                  <div className="p-2 text-sm">Last 7 days</div>
                  <div className="p-2 text-sm">Last 30 days</div>
                  <div className="p-2 text-sm">This year</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#FAFBFB]">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Transaction id</th>
                <th className="p-4">Product Name/Accommodation</th>
                <th className="p-4">User Name</th>
                <th className="p-4">Earning</th>
                <th className="p-4">Date</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,idx)=> (
                <tr key={r.id} className={idx%2? '':'bg-white'}>
                  <td className="p-4">{idx+1}</td>
                  <td className="p-4">{r.id}</td>
                  <td className="p-4 flex items-center gap-3"> 
                    <div className="w-10 h-8 bg-gray-100 rounded-md" />
                    <div>{r.product}</div>
                  </td>
                  <td className="p-4">{r.user}</td>
                  <td className="p-4">{r.earning}</td>
                  <td className="p-4">{r.date}</td>
                  <td className="p-4">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
