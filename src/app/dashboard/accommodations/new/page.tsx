"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewAccommodationPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    const urls = files.map(f => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach(u => URL.revokeObjectURL(u));
  }, [files]);

  function triggerUpload() { fileInputRef.current?.click(); }
  function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const list = e.target.files; if(!list) return; setFiles(Array.from(list).slice(0,5));
  }

  return (
    <div className="min-h-screen p-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-primary">Accommodation</h1>
        <Link href="/dashboard/accommodations" className="text-sm text-[var(--gray)]">Cancel</Link>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-6">
          <div>
            <input className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]" placeholder="Enter Accommodation Name" />
          </div>
          <div>
            <textarea className="w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-4 text-[var(--gray)]" style={{ minHeight: 140 }} placeholder="About Accommodation details.." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]">
                <option>Number of Rooms</option>
              </select>
            </div>
            <div>
              <select className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]">
                <option>Guests Per Room</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input className="flex-1 bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]" placeholder="Add Price" />
              <span className="text-sm text-[var(--gray)] whitespace-nowrap">$/night</span>
            </div>
          </div>
          <div>
            <input className="w-full bg-white border border-[#E5E7EB] rounded-full px-4 py-3 text-[var(--gray)]" placeholder="Add Location" />
          </div>
          <div>
            <div className="rounded-xl border border-[#EDEDED] bg-white p-6 text-center shadow-sm">
              <div className="text-lg text-[var(--gray)] mb-1 font-semibold">Upload Accommodation Images</div>
              <div className="text-md text-[var(--gray)] mb-6">Add up to 5 images to showcase the city to travelers."</div>
              <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={onFiles} className="hidden" />
              <button type="button" onClick={triggerUpload} className="inline-flex items-center gap-2 border-2 border-[#4A5D52] rounded-full px-6 py-2 text-md cursor-pointer text-[var(--primary)]">+ Upload Photo</button>
              {previews.length > 0 && (
                <div className="mt-4 flex items-center gap-3 justify-center flex-wrap">
                  {previews.map((src,i) => <img key={i} src={src} alt={`prev-${i}`} className="w-24 h-24 object-cover rounded-md border" />)}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-[var(--primary)] text-white rounded-full py-4 text-lg font-semibold cursor-pointer shadow-sm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
