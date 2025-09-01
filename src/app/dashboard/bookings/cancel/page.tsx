"use client";
import React from 'react';

function CancelForm() {
  return (
    <form className="space-y-4">
      <p className="text-sm text-gray-600">Are you sure you want to cancel this booking?</p>
      <div className="flex items-center space-x-3">
        <button type="button" className="px-4 py-2 bg-gray-200 rounded">No, keep booking</button>
        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Yes, cancel booking</button>
      </div>
    </form>
  );
}

export default function CancelBooking(){
  return (
    <div className="p-6">
      <h2 className="font-bold text-xl mb-6">Cancel Booking</h2>
      <div className="max-w-2xl mx-0">
        <CancelForm />
      </div>
    </div>
  )
}
