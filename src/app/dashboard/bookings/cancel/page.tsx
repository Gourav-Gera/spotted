"use client";
import React from 'react';
import CancelForm from './CancelForm';

export default function CancelBooking(){
  return (
    <div className="p-6">
      <h2 className="font-bold text-xl mb-2">Cancel Booking</h2>
      <p className="text-sm text-[var(--gray)] mb-6">Are you sure you want to cancel this booking?</p>
      <div className="max-w-lg">
        <CancelForm />
      </div>
  {/* DashboardFooter from DashboardShell will render here; removed MinimalFooter to avoid duplication */}
    </div>
  )
}
