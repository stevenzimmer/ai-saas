"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight:"600",
  subsets:["latin"],
});

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "home",
  },
];


export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white ">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className={`text-2xl font-bold ${montserrat.className}`}>
            Zeemyus
          </h1>  
        </Link>
      </div>
    </div>
  )
}
