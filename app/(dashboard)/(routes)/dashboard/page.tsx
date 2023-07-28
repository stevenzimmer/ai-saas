"use client"
import { useState, useEffect } from "react"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import { routes } from "@/lib/routes"
import { useRouter } from "next/navigation"


export default function DashboardPage() {
  const router = useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with an AI to experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {routes.filter((tool) => {
          return tool.isTool;
        }).map((tool) => {
            return (
              <Card key={tool.path} className="p-4 border-black/5 flex items-center shadow transition cursor-pointer justify-between"
              onClick={() => router.push(tool.path)}>
                <div className="flex items-center gap-x-4">
                  <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                    <tool.icon className={`w-8 h-8 ${tool.color}`} />
                  </div>
                  <div className="font-semibold">
                    {tool.name}
                  </div>
                </div>
                <ArrowRight className="w-8 h-8 text-black/50" />
              </Card>
            )
        })} 
      </div>
    </div>
  )
}
