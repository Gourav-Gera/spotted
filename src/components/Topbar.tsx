"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import Image from 'next/image';
type Props = { onToggle?: () => void };

export default function Topbar({ onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLInputElement | null>(null);
  const { user, logout } = useAuth();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  useEffect(()=>{
    if(showMobileSearch){
      const t = setTimeout(()=> mobileSearchRef.current?.focus(), 10);
      return ()=> clearTimeout(t);
    }
  },[showMobileSearch]);

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-gray-100 relative">
      <div className="flex items-center gap-2 sm:gap-4">
        <button onClick={() => onToggle && onToggle()} aria-label="Toggle sidebar" className="p-2 rounded-md hover:bg-gray-100">
          <span className="text-xl">☰</span>
        </button>
        {/* Desktop / tablet search */}
        <div className="relative hidden xs:block">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2 w-40 sm:w-56 md:w-72 lg:w-80 transition-all">
            <BiSearch className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none border-0 text-sm w-full"
            />
          </div>
        </div>
        {/* Mobile search icon */}
        <button
          aria-label="Open search"
          className="p-2 rounded-md hover:bg-gray-100 block xs:hidden"
          onClick={()=> setShowMobileSearch(true)}
        >
          <BiSearch className="text-gray-600" />
        </button>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(v => !v)}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer rounded-full bg-[#4A5D52] sm:pl-5 sm:pr-0 sm:py-0 text-white px-0"
          >
            <div className="hidden sm:block text-sm font-semibold px-3">{user ? `Hello, ${user.name}` : 'Hello'}</div>
            <img
              src={user?.avatar ? user.avatar : (user ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}` : 'https://randomuser.me/api/portraits/men/32.jpg')}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md py-1 z-40">
              {user ? (
                <>
                  <Link href="/dashboard/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Notifications</Link>
                  <Link href="/dashboard/profile/edit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Edit Profile</Link>
                  <Link href="/dashboard/profile/change-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Change Password</Link>
                  <Link href="/dashboard/profile/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Contact Us</Link>
                  <Link href="/dashboard/profile/subscription" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>Subscription</Link>
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
      {/* Mobile search overlay */}
      {showMobileSearch && (
        <div className="absolute inset-x-0 top-full left-0 bg-white border-b border-gray-200 px-4 pb-3 pt-3 xs:hidden z-30 shadow-sm">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2">
            <BiSearch className="text-gray-400" />
            <input ref={mobileSearchRef} type="text" placeholder="Search" className="bg-transparent outline-none border-0 text-sm flex-1" />
            <button aria-label="Close search" className="px-2 text-xs text-gray-600" onClick={()=> setShowMobileSearch(false)}>✕</button>
          </div>
        </div>
      )}
    </header>
  );
}
