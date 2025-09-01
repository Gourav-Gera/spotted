"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function AuthHeader({ rightLabel, rightHref }: { rightLabel?: string; rightHref?: string }){
  return (
    <div className="flex items-center justify-between py-5 px-6 border-b bg-white">
      <div className="text-sm font-semibold">Spotted.</div>
      <div>
        {rightLabel ? <a href={rightHref|| '#'} className="px-3 py-1 text-sm rounded-full border">{rightLabel}</a> : null}
      </div>
    </div>
  )
}

export default function ForgotPasswordPage(){
  const router = useRouter();
  const [email, setEmail] = useState('');

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    // mock: navigate to verify code page
    router.push('/auth/verify-code');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6">Forgot password?</h1>
          <p className="text-sm text-[var(--gray)] mb-4">Enter your email and we will send a verification code to reset your password.</p>

          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full border rounded-md p-3" placeholder="you@example.com" />
          </div>

          <button type="submit" className="w-full btn-primary-pill">Send code</button>
        </form>
      </div>
    </div>
  )
}