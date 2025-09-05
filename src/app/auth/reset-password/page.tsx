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

export default function ResetPassword(){
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    router.push('/auth/password-updated');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-xl w-full text-center">
          <h1 className="text-3xl font-semibold mb-2">Reset Password</h1>
          <p className="text-md mb-8 text-gray-400">Enter a strong password to secure your account.</p>

          <div className="mb-4 relative">
            <img src="/images/password-icon.svg" alt="lock" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-12"
              placeholder="New Password"
              aria-label="New Password"
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

          <div className="mb-6 relative">
            <img src="/images/password-icon.svg" alt="lock" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80" />
            <input
              value={confirm}
              onChange={(e)=>setConfirm(e.target.value)}
              type={showConfirm ? 'text' : 'password'}
              className="w-full border-[#E5E5E5] border rounded-full p-3 pl-12 pr-12"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
            <img
              src="/images/eye-fill.svg"
              alt={showConfirm ? 'hide password' : 'show password'}
              onClick={()=>setShowConfirm(s=>!s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') setShowConfirm(s=>!s)}}
              className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80 cursor-pointer"
            />
          </div>

          <button type="submit" className="w-full btn-primary-pill font-medium">Update Password</button>
        </form>
      </div>
    </div>
  )
}
