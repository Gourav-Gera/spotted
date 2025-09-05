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

export default function VerifyCode(){
  const router = useRouter();
  const [code, setCode] = useState(['','','',''].join(''));

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    router.push('/auth/reset-password');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB]">
      <AuthHeader rightLabel="Need Help?" />
      <div className="flex-1 flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="card-surface max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold mb-3">Verify Code</h1>
          <p className="text-md text-gray-400 mb-8">
            Please enter the 4 digit code sent to your registered email id
            <b> johndoe123@gmail.com</b></p>

          <div className="flex justify-center gap-3 mb-10">
            {[0,1,2,3].map(i=> (
              <input key={i} className="w-16 h-16 text-center rounded-xl border border-[#E5E5E5]" maxLength={1} />
            ))}
          </div>

          <button className="w-full btn-primary-pill">Verify</button>
          <div className="text-sm  pt-6 w-full ">Resend code in 
            <a href="/auth/login" className="text-[var(--primary)] font-medium"> 00:30</a>
          </div>
        </form>
      </div>
    </div>
  )
}
