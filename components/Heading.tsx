import { LucideIcon } from 'lucide-react'
import React from 'react'
interface HeadingProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor?: string
  bgColor?: string
}

export default function Heading({
  title,
  description,
  icon: Icon,
  iconColor = "text-black",
  bgColor,
}: HeadingProps) {
  return (
    <div className='px-4 lg:px-8 flex items-center gap-x-3 mb-8'>
      <div className={`p-2 w-fit rounded-md ${bgColor}`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}
