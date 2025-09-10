"use client";
import React, { useState } from 'react';

export default function ChangePasswordPage(){
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function submit(e:React.FormEvent){
    e.preventDefault();
    setError(null); setSuccess(false);
    if(next !== confirm){ setError('Passwords do not match'); return; }
    if(next.length < 6){ setError('Password should be at least 6 characters'); return; }
    setSaving(true);
    setTimeout(()=>{ setSaving(false); setSuccess(true); setCurrent(''); setNext(''); setConfirm(''); }, 900);
  }

  return (
    <div className="p-8">
      <h1 className="text-[26px] leading-tight font-semibold mb-10">Change Password</h1>
      <form onSubmit={submit} className="max-w-xl space-y-7">
        <div>
          <label className="block text-[13px] tracking-wide font-semibold mb-2">Current Password</label>
          <div className="relative">
            <input type={showCurrent? 'text':'password'} value={current} onChange={e=>setCurrent(e.target.value)} className="w-full rounded-full bg-white border border-gray-200 px-6 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#4A5D52]/25 pr-12" placeholder="Current password" />
            <button type="button" onClick={()=>setShowCurrent(s=>!s)} className="absolute inset-y-0 right-4 text-sm text-gray-500">{showCurrent? '🙈':'👁️'}</button>
          </div>
        </div>
        <div>
          <label className="block text-[13px] tracking-wide font-semibold mb-2">New Password</label>
          <input type="password" value={next} onChange={e=>setNext(e.target.value)} className="w-full rounded-full bg-white border border-gray-200 px-6 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#4A5D52]/25" placeholder="New password" />
        </div>
        <div>
          <label className="block text-[13px] tracking-wide font-semibold mb-2">Confirm Password</label>
          <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} className="w-full rounded-full bg-white border border-gray-200 px-6 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#4A5D52]/25" placeholder="Confirm password" />
        </div>
        {error && <div className="text-sm text-red-500">{error}</div>}
        {success && <div className="text-sm text-green-600">Password updated.</div>}
        <button disabled={saving} className="w-full rounded-full bg-[#3D4F45] text-white text-base py-4 font-medium disabled:opacity-50">{saving? 'Updating...' : 'Update Password'}</button>
      </form>
    </div>
  );
}
