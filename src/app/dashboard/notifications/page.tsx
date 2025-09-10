import React from 'react';

// Mock notifications (could later be fetched from API)
const notifications = Array.from({length:9}).map((_,i)=>({
  id:i+1,
  title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  body:'Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id feugiat libero. Donec eget interdum magna.',
  time:'12:00PM',
  read: i>2 // first 3 unread
}));

export default function NotificationsPage(){
  return (
    <div className="p-8">
      <h1 className="text-lg font-semibold mb-6">Notifications</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {notifications.map(n=> (
            <li key={n.id} className={`flex items-start gap-6 px-8 py-5 hover:bg-gray-50 transition ${n.read? 'bg-white':'bg-[#F5F9F7]'}`}>
              <div className="flex-1">
                <h3 className="text-[20px] leading-snug font-semibold text-gray-800 mb-2">{n.title}</h3>
                <p className="text-[16px] leading-relaxed text-gray-600 max-w-3xl">{n.body}</p>
              </div>
              <div className="text-[10px] font-medium text-gray-400 whitespace-nowrap pt-1">{n.time}</div>
            </li>
          ))}
        </ul>
        <div className="px-8 py-3 border-t text-[10px] text-gray-400 flex items-center justify-between">
          <span>© 2025 Copyright, All Right Reserved</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">About Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
