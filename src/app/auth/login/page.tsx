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

export default function LoginPage(){
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    // mock login -> persist user
    login({ name: email.split('@')[0] || 'User', email });
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Sign Up" rightHref="/auth/signup" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-2xl w-full text-center">
          <div className="min-h-[calc(60vh-72px)]">
              <h1 className="text-3xl font-semibold mb-5">Login</h1>
              <p className="text-md mb-8 text-gray-400">Enter your account email address and password to log in.</p>

              <div className="mb-4 relative">
                <img src="/images/mail-icon.svg" alt="mail" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full border-[#E5E5E5] border rounded-full p-4 pl-12 pr-4" placeholder="Email" />
              </div>

              <div className="mb-4 relative">
                <img src="/images/password-icon.svg" alt="lock" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
                <input
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border-[#E5E5E5] border rounded-full p-4 pl-12 pr-12"
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

              <button type="submit" className="w-full btn-primary-pill mb-4">Login</button>

              <div className="flex items-center justify-center mb-6">
                  <a href="/auth/forgot-password" className="text-md underline font-medium text-[var(--primary)]">Forgot password?</a>
              </div>
            </div>
          <div className="text-center footer-bottom-line text-sm text-[var(--gray)] w-full pt-6 border-t border-[#E5E5E5]">
            Don't have an account? <a href="/auth/signup" className="text-[var(--primary)] font-semibold">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}