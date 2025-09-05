"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function ForgotPasswordPage(){
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    // simple client-side validation
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    // navigate to verify code page
    router.push('/auth/verify-code');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" rightHref="/auth/signup" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-xl w-full text-center">
          <h1 className="text-3xl font-semibold mb-3">Forgot Password?</h1>
          <p className="text-sm mb-6 text-gray-400">Enter your email address and we'll send you a 4 digit verification code to reset your password.</p>

          {error ? <div className="text-sm text-red-600 mb-4">{error}</div> : null}

          <div className="mb-6 relative">
            <img src="/images/mail-icon.svg" alt="mail" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-4"
              placeholder="Email"
              aria-label="Email"
            />
          </div>

          <button type="submit" className="w-full btn-primary-pill">Continue</button>
          <div className="text-center footer-bottom-line text-sm back-to-login pt-6 w-full border-t border-[#E5E5E5]">Back to
            <a href="/auth/login" className="text-[var(--primary)] underline font-medium"> Login</a>
          </div>
        </form>
      </div>
    </div>
  )
}