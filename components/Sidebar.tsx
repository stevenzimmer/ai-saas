"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { routes } from "@/lib/routes";
import {usePathname} from "next/navigation"

const montserrat = Montserrat({
  weight:"600",
  subsets:["latin"],
});


export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white ">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className={`text-2xl font-bold ${montserrat.className}`}>
            Zeemyus
          </h1>  
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link className={`text-sm group p-3 font-medium rounded-lg hover:text-white hover:bg-white/10 transition w-full flex justify-start cursor-pointer ${pathname === route.path ? "bg-white/10 text-white" : "text-zinc-400"}`} key={route.path} href={route.path}>
              <div className="flex items-center flex-1">
                <route.icon className={`w-5 h-5 mr-3 ${route.color}`} />
                {route.name}
              </div>
             
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
