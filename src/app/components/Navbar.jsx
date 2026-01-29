"use client";

import Image from "next/image";
import logo from "../assets/download.jpg";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.includes("dashboard-overview")) return "Dashboard Overview";
    if (pathname.includes("call-log")) return "Call Logs";
    if (pathname.includes("appointments")) return "Appointments";
    if (pathname.includes("settings")) return " Settings";

    return "Dashboard";
  };

  return (
    <nav className="w-full bg-[#111B3C] p-4 flex justify-between items-center">
      <h2 className="text-sm md:text-lg ml-14 md:ml-0 font-bold">
        {getTitle()}
      </h2>

      <div className="flex items-center mr-4 gap-6">
        <Bell />
        <Image
          src={logo}
          alt="Logo"
          className="rounded-full"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}
