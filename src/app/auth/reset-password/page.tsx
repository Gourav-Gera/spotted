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

export default function ResetPassword(){
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    router.push('/auth/password-updated');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6">Reset Password</h1>

          <div className="mb-4">
            <label className="block text-sm mb-2">New Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full border rounded-md p-3" />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Confirm Password</label>
            <input value={confirm} onChange={(e)=>setConfirm(e.target.value)} type="password" className="w-full border rounded-md p-3" />
          </div>

          <button className="w-full btn-primary-pill">Reset Password</button>
        </form>
      </div>
    </div>
  )
}
