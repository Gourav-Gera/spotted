"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { FiMap, FiHeart } from "react-icons/fi";
import { MdOutlineLocationCity, MdOutlineEvent, MdHotel } from "react-icons/md";

type Props = {
  collapsed?: boolean;
  mobileOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
};

const items = [
  { label: "Dashboard", href: "/dashboard", icon: <AiOutlineDashboard /> },
  { label: "Bookings", href: "/dashboard/bookings", icon: <BiBookOpen /> },
  { label: "Orders", href: "/dashboard/orders", icon: <AiOutlineShoppingCart /> },
  { label: "Earnings", href: "/dashboard/earnings", icon: <FiHeart /> },
  { label: "Cities", href: "/dashboard/cities", icon: <MdOutlineLocationCity /> },
  { label: "Events", href: "/dashboard/events", icon: <MdOutlineEvent /> },
  { label: "Accommodations", href: "/dashboard/accommodations", icon: <MdHotel /> },
  { label: "Attractions", href: "/dashboard/attractions", icon: <FiMap /> },
  { label: "E-commerce", href: "/dashboard/ecommerce", icon: <AiOutlineShoppingCart /> },
  { label: "Crowdfunding", href: "/dashboard/crowdfunding", icon: <FiHeart /> },
  { label: "About Municipality", href: "/dashboard/about", icon: <FiMap /> },
];

export default function Sidebar({ collapsed = false, mobileOpen = false, onClose, isMobile = false }: Props) {
  const pathname = usePathname() || "/dashboard";

  // If we are on mobile, render an overlay that can animate in/out using transform & opacity.
  if (isMobile) {
    return (
      // outer container should not block pointer events when closed so header buttons remain clickable
      <div className={`fixed inset-0 z-50 flex ${mobileOpen ? '' : 'pointer-events-none'}`}>
      <div
          className={`w-64 bg-white p-4 border-r border-gray-100 h-full transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="font-bold text-2xl">Spotted.</div>
            <button aria-label="Close sidebar" onClick={() => onClose && onClose()} className="p-2 rounded-md hover:bg-gray-100">
              ✕
            </button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              {items.map((it) => {
                const active = pathname === it.href || pathname?.startsWith(it.href + "/");
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      onClick={() => onClose && onClose()}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                        active ? "bg-[var(--primary)] text-white font-semibold" : "hover:bg-gray-100"
                      }`}
                    >
                      <span className={`inline-flex w-8 h-8 items-center justify-center rounded-md ${active ? 'bg-[var(--primary)] text-white' : 'text-gray-600'}`}>
                        {it.icon}
                      </span>
                      {it.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div
          className={`flex-1 bg-black/40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => onClose && onClose()}
        />
      </div>
    );
  }

  return (
    <aside
      className={`bg-white p-4 border-r border-gray-100 flex flex-col transition-all duration-200 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className={`font-bold mb-8 ${collapsed ? "text-lg" : "text-2xl"}`}>Spotted.</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {items.map((it) => {
            const active = pathname === it.href || pathname?.startsWith(it.href + "/");
            // When collapsed we only want the icon to show the active color. When expanded keep
            // the full-row active background for clarity.
    const rowActiveClass = active && !collapsed ? "bg-[var(--primary)] text-white font-semibold" : "hover:bg-gray-100";
            // when collapsed, center content and remove horizontal padding so the icon sits
            // exactly centered (equal space both sides). When expanded use normal px-4.
    const paddingWhen = collapsed ? 'justify-center px-0' : 'px-3';
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={`flex items-center gap-3 py-2 rounded-lg ${paddingWhen} ${rowActiveClass}`}
                >
      <span className={`inline-flex w-8 h-8 items-center justify-center rounded-md ${active ? 'bg-[var(--primary)] text-white' : 'text-gray-600'}`} style={{fontSize:18}}>
                    {it.icon}
                  </span>
                  {!collapsed && it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
