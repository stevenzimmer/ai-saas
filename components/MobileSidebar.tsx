"use client";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

export default function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={`ghost`} size={`icon`} className="md:hidden">
          <Menu className="w-8 h-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={`left`} className="p-0">
        <Sidebar />
      </SheetContent>

    </Sheet> 
  )
}