"use client";
import React, { useState } from 'react';

export default function SubscriptionPage(){
  const [plan] = useState({ name:'Basic', price:19, period:'month', nextBilling:'12 August 2025', card:'6037' });
  const [upgrading,setUpgrading] = useState(false);
  const [updatingCard,setUpdatingCard] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-[26px] font-semibold text-[var(--primary)] mb-10">Subscription</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="flex-1 space-y-6">
            <div>
              <div className="text-[11px] tracking-wide font-semibold mb-4">CURRENT PLAN : {plan.name.toUpperCase()}</div>
              <div className="flex items-end gap-2">
                <div className="text-5xl font-bold leading-none">${plan.price}</div>
                <div className="text-sm font-medium mb-2">/ {plan.period}</div>
              </div>
              <div className="mt-4 text-xs text-gray-500">Next billing date: {plan.nextBilling}</div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <div className="text-[11px] tracking-wide font-semibold mb-3">PAYMENT DETAILS</div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-sm"><span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">💳</span> ************{plan.card}</div>
                <button onClick={()=>{setUpdatingCard(true); setTimeout(()=>setUpdatingCard(false),800);}} className="bg-[#3D4F45] text-white text-sm font-medium px-8 py-3 rounded-full disabled:opacity-50" disabled={updatingCard}>{updatingCard? 'Updating...' : 'Upgrade Payment Details'}</button>
              </div>
            </div>
          </div>
          <div className="md:w-64 flex flex-col gap-6">
            <button onClick={()=>{setUpgrading(true); setTimeout(()=>setUpgrading(false),800);}} className="bg-[#3D4F45] text-white text-sm font-medium px-8 py-4 rounded-full disabled:opacity-50" disabled={upgrading}>{upgrading? 'Processing...' : 'Upgrade Subscription'}</button>
            <div className="text-xs text-gray-500 leading-relaxed">Upgrade to unlock advanced analytics, priority listing placement, and unlimited gallery uploads. Cancel anytime.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
