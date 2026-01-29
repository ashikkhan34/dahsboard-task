"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, Phone, Calendar, Menu, X, LogOut } from "lucide-react";
import Swal from "sweetalert2";

const menuItems = [
  {
    name: "Dashboard Overview",
    icon: <Home size={20} />,
    href: "/dashboard/dashboard-overview",
  },
  {
    name: "Call Logs",
    icon: <Phone size={20} />,
    href: "/dashboard/call-log",
  },
  {
    name: "Appointments",
    icon: <Calendar size={20} />,
    href: "/dashboard/appointments",
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLogOut = () => {
    Swal.fire({
      title: "Log Out!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#111B3C] text-white p-2 rounded-lg"
      >
        <Menu />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-[241px]  bg-[#111B3C] text-white z-50
          flex flex-col
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4">
          <div className="mx-auto">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F6339A] to-[#AD46FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(173,70,255,0.4)]">
              ⚡
            </div>
          </div>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X />
          </button>
        </div>

        {/* Menu */}
        <ul className="mt-6 space-y-2 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "border border-white bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.35)]"
                        : "hover:bg-white/10"
                    }
                  `}
                >
                  {item.icon}
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <button
          onClick={handleLogOut}
          className="flex items-center text-red-600 gap-3 px-4 py-2 mx-3 mb-4 mt-auto rounded-xl hover:bg-white/10 transition-colors"
        >
          <LogOut className="text-black" />
          LogOut
        </button>
      </aside>
    </>
  );
}
