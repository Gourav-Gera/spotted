import React from "react";

const DashboardFooter = () => (
  <footer className="w-full bg-white mt-10 px-0">
    <div className="">
      <div className="border-t border-[#E5E5E5] py-4 px-8">
        <div className="flex items-center justify-between text-md text-gray-black">
          <div>&copy; {new Date().getFullYear()} Copyright, All Right Reserved</div>
          <div className="flex gap-4 justify-between">
            <a href="#" className="underline text-primary ">Term & Conditions</a>
            <a href="#" className="underline text-primary">Privacy Policy</a>
            <a href="#" className="underline text-primary">About Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default DashboardFooter;
