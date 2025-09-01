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

export default function Signup(){
  const router = useRouter();
  const { login } = useAuth();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');

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
        <form onSubmit={onSubmit} className="card-surface max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <div className="mb-3"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border rounded-md p-3"/></div>
        <div className="mb-3"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded-md p-3"/></div>
        <div className="mb-3"><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" className="w-full border rounded-md p-3"/></div>
        <div className="mb-6"><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full border rounded-md p-3"/></div>
        <button className="w-full btn-primary-pill">Create account</button>
        </form>
      </div>
    </div>
  )
}
