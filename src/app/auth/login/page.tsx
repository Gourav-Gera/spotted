"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '../../../hooks/useAuth';

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

export default function LoginPage(){
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    // mock login -> persist user
    login({ name: email.split('@')[0] || 'User', email });
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" rightHref="#" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6">Login</h1>

        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full border rounded-md p-3" placeholder="you@example.com" />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full border rounded-md p-3" placeholder="Enter your password" />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div></div>
          <a href="/auth/forgot-password" className="text-sm text-[var(--primary)]">Forgot password?</a>
        </div>

        <button type="submit" className="w-full btn-primary-pill mb-4">Login</button>

          <div className="text-center text-sm text-[var(--gray)]">
            Dont have an account? <a href="/auth/signup" className="text-[var(--primary)]">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}