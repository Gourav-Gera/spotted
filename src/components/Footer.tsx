import React from "react";

const Footer = () => (
  <footer className="w-full bg-white mt-10 px-0 py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10 pb-6">
        {/* Left: Logo and description */}
        <div>
          <div className="font-bold text-2xl text-gray-900 mb-2">Spotted.</div>
          <div className="text-gray-500 text-sm max-w-xs">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </div>
        </div>
        {/* Right: Links */}
        <div className="flex flex-1 justify-between md:justify-end gap-16">
          <div>
            <div className="uppercase text-xs text-gray-400 font-semibold mb-3 tracking-widest">Company</div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          <div>
            <div className="uppercase text-xs text-gray-400 font-semibold mb-3 tracking-widest">Legal</div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 mb-4" />
      <div className="text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Copyright. All Right Reserved
      </div>
    </div>
  </footer>
);

export default Footer;