import React from 'react';

const MinimalFooter = () => (
  // positioned absolutely inside the dashboard right content wrapper
  <footer className="absolute left-0 right-0 bottom-0 bg-transparent">
    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-[#E5E5E5] pt-3 pb-3 bg-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div>&copy; {new Date().getFullYear()} Copyright, All Right Reserved</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Term & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">About Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default MinimalFooter;
