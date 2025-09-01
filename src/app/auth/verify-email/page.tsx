"use client";
import React from "react";
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

export default function VerifyEmail(){
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="card-surface max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Verify Email Address</h1>
          <p className="text-sm text-[var(--gray)] mb-6">Enter the 4-digit code sent to your email.</p>
          <div className="flex justify-center gap-3 mb-6">
            {[0,1,2,3].map(i=> <input key={i} className="w-12 h-12 text-center border rounded-md" maxLength={1} />)}
          </div>
          <button onClick={()=>router.push('/auth/password-updated')} className="w-full btn-primary-pill">Verify</button>
        </div>
      </div>
    </div>
  )
}
