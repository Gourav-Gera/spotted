"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useAuth } from '../hooks/useAuth';

type Props = { onToggle?: () => void };

export default function Topbar({ onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button onClick={() => onToggle && onToggle()} aria-label="Toggle sidebar" className="p-2 rounded-md hover:bg-gray-100">
          <span className="text-xl">☰</span>
        </button>
        <div className="relative">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2">
            <BiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none border-0 text-sm w-64"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-gray-100 rounded-full p-2">
          <IoNotificationsOutline className="text-gray-500" />
        </button>
        <div className="relative" ref={ref}>
          <button onClick={() => setOpen(v => !v)} className="flex items-center gap-3 bg-[var(--gray)] rounded-full px-3 py-1 text-white">
            <div className="text-sm font-semibold">{user ? `Hello, ${user.name}` : 'Hello'}</div>
            <img src={user ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}` : 'https://randomuser.me/api/portraits/men/32.jpg'} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md py-1 z-40">
              {user ? (
                <>
                  <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Profile</Link>
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer" onClick={()=>{ logout(); setOpen(false); }}>Sign out</div>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Login</Link>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Signup</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
