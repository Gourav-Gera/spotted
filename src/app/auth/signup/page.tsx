"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '../../../hooks/useAuth';

function AuthHeader({ rightLabel, rightHref }: { rightLabel?: string; rightHref?: string }){
  return (
    <div className="flex items-center justify-between py-5 px-0 border-b border-[#E5E5E5] mx-8 bg-white">
      <div className="text-2xl font-bold">Spotted.</div>
      <div>
        {rightLabel ? <a href={rightHref|| '#'} className="px-5 py-2 text-sm rounded-full border">{rightLabel}</a> : null}
      </div>
    </div>
  )
}

export default function Signup(){
  const router = useRouter();
  const { login } = useAuth();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dob, setDob] = useState('');

  function onSubmit(e:React.FormEvent){
    e.preventDefault();
    // mock create account and sign in
    login({ name: name || email.split('@')[0] || 'User', email });
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Login" rightHref="/auth/login" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-xl w-full text-center">
          <h1 className="text-3xl font-semibold mb-2">Sign Up</h1>
          <p className="text-sm mb-6 text-gray-400">Enter your details to create your account.</p>

          <div className="mb-4 relative">
            <img src="/images/password-icon.svg" alt="user" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-4" />
          </div>

          <div className="mb-4 relative">
            <img src="/images/mail-icon.svg" alt="mail" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-4" />
          </div>

          <div className="mb-4 relative">
            {/* left calendar placeholder icon (inline SVG) */}
            <img src="/images/birth-icon.svg" alt="mail" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input value={dob} onChange={e=>setDob(e.target.value)} placeholder="Date of birth" className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-12" />
            {/* right calendar small icon */}
            <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#000" strokeOpacity="0.6" strokeWidth="1.2"/>
              <path d="M8 2v4M16 2v4" stroke="#000" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="mb-6 relative">
            <img src="/images/password-icon.svg" alt="lock" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-12"
              placeholder="Password"
              aria-label="Password"
            />
            <img
              src="/images/eye-fill.svg"
              alt={showPassword ? 'hide password' : 'show password'}
              onClick={()=>setShowPassword(s=>!s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') setShowPassword(s=>!s)}}
              className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80 cursor-pointer"
            />
          </div>

          <button type="submit" className="w-full btn-primary-pill mb-4">Continue</button>

          <div className="text-center footer-bottom-line text-sm text-[var(--gray)] pt-6 w-full border-t border-[#E5E5E5]">
            Already have an account? <a href="/auth/login" className="text-[var(--primary)] underline">Login</a>
          </div>
        </form>
      </div>
    </div>
  )
}
