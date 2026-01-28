"use client";
import Image from "next/image";
import logo from "../assets/download.jpg";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#111B3C]  p-4 flex justify-between items-center">
      <h2 className="text-lg font-bold">Dashboard Overview</h2>
      <div className="flex items-center gap-2">
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
