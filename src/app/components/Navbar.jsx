"use client";

import Image from "next/image";
import logo from "../assets/download.jpg";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const handleNotification = () => {
    Swal.fire({
      title: "No New Notifications",
      icon: "success",
      draggable: true,
    });
  };

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

      <div className="flex items-center mr-4 gap-4">
        <button
          onClick={handleNotification}
          className="relative cursor-pointer hover:bg-slate-800/50 transition rounded-full p-2"
        >
          <Bell />
        </button>
        <Link href="/dashboard/settings">
          <Image
            src={logo}
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
}
