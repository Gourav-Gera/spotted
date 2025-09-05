"use client";
import React from 'react';
import CancelForm from './CancelForm';
import Footer from '../../../../components/Footer';

export default function CancelBooking(){
  return (
    <div className="p-6">
      <h2 className="font-bold text-xl mb-2">Cancel Booking</h2>
      <p className="text-sm text-[var(--gray)] mb-6">Are you sure you want to cancel this booking?</p>
      <div className="max-w-lg">
        <CancelForm />
      </div>

      {/* Ensure footer is consistent with other dashboard pages */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  )
}
