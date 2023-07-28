import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant={`ghost`} size={`icon`} className="md:hidden">
        <Menu className="w-8 h-8" />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
      
    </div>
  )
}
