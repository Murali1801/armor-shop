"use client"

import { useState } from "react"
import { X, Truck } from "lucide-react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-black text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-sm font-medium">
        <Truck className="h-4 w-4 mr-2" />
        <span>Immediate Shipping!</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
