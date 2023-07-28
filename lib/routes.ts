import { LayoutDashboard, MessageSquare, ImageIcon, Code, VideoIcon, Settings, Music } from "lucide-react";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    name: "Conversation",
    path: "/conversation",
    icon: MessageSquare,
    bgColor: "bg-violet-50",
    color: "text-violet-500",
    isTool: true,
  },
  {
    name: "Image Generation",
    path: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-50",
    isTool: true,
  },
  {
    name: "Video Generation",
    path: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    isTool: true,
  },
  {
    name: "Music Generation",
    path: "/music",
    icon: Music,
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",

    isTool: true,
  },
  {
    name: "Code Generation",
    path: "/code",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-50",

    isTool: true,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];