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

export default function PasswordUpdated(){
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="card-surface max-w-md w-full text-center">
          <div className="mb-6 text-4xl">✅</div>
          <h1 className="text-2xl font-bold mb-4">Password Updated</h1>
          <p className="text-sm text-[var(--gray)] mb-6">Your password has been updated successfully.</p>
          <button onClick={()=>router.push('/auth/login')} className="btn-primary-pill">Back to login</button>
        </div>
      </div>
    </div>
  )
}
