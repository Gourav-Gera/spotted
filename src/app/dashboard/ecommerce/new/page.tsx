"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewProductPage(){
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(()=>{ const urls = files.map(f=>URL.createObjectURL(f)); setPreviews(urls); return ()=> urls.forEach(u=>URL.revokeObjectURL(u)); },[files]);
  function triggerUpload(){ fileInputRef.current?.click(); }
  function onFiles(e: React.ChangeEvent<HTMLInputElement>){ const l=e.target.files; if(!l) return; setFiles(Array.from(l).slice(0,5)); }

  return (
    <div className="min-h-screen p-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-primary">Add New Product</h1>
        <Link href="/dashboard/ecommerce" className="text-sm text-[var(--gray)]">Cancel</Link>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-6">
          <input className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]" placeholder="Enter Product Name" />
          <textarea className="w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-4 text-[var(--gray)]" style={{ minHeight: 140 }} placeholder="About Product" />
          <input className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]" placeholder="Enter Product Id" />
          <div className="relative">
            <select className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 pr-10 text-[var(--gray)] appearance-none">
              <option>Add Sizes</option>
              <option>S, M, L</option>
              <option>XL, XXL</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#6B7280]">▾</span>
          </div>
          <div className="relative">
            <select className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 pr-10 text-[var(--gray)] appearance-none">
              <option>Add Colors</option>
              <option>Green</option>
              <option>Black</option>
              <option>White</option>
              <option>Brown</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#6B7280]">▾</span>
          </div>
          <div className="rounded-xl border border-[#EDEDED] bg-white p-6 shadow-sm">
            <div className="text-[var(--gray)] mb-2 font-semibold">Upload Images</div>
            <div className="text-xs text-[var(--gray)] mb-4">Add up to 5 product images</div>
            <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={onFiles} className="hidden" />
            <button type="button" onClick={triggerUpload} className="inline-flex items-center gap-2 border-2 border-[#4A5D52] rounded-full px-6 py-2 text-sm cursor-pointer text-[var(--primary)]">+ Upload Photo</button>
            {previews.length>0 && (
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                {previews.map((src,i)=> <img key={i} src={src} alt={`prev-${i}`} className="w-20 h-24 object-cover rounded-md border" />)}
              </div>
            )}
          </div>
          <button className="w-full bg-[var(--primary)] text-white rounded-full py-4 text-sm font-semibold cursor-pointer shadow-sm">Submit</button>
        </div>
      </div>
    </div>
  );
}
