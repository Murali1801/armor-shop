"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Truck, Clock } from "lucide-react"

export function DeliveryChecker() {
  const [pincode, setPincode] = useState("")
  const [deliveryInfo, setDeliveryInfo] = useState<{
    available: boolean
    days: number
    location: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Auto-detect location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode to get pincode
          setPincode("110001") // Demo pincode
        },
        (error) => {
          console.log("Location access denied")
        },
      )
    }
  }, [])

  const checkDelivery = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      if (pincode.length === 6) {
        setDeliveryInfo({
          available: true,
          days: Math.floor(Math.random() * 3) + 1,
          location: "Delhi, India",
        })
      } else {
        setDeliveryInfo({
          available: false,
          days: 0,
          location: "",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="h-5 w-5 text-black" />
        <span className="font-semibold text-black">Check Delivery</span>
      </div>

      <div className="flex gap-2 mb-3">
        <Input
          placeholder="Enter pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          maxLength={6}
          className="border-gray-300 focus:border-black"
        />
        <Button
          onClick={checkDelivery}
          disabled={isLoading || pincode.length !== 6}
          className="bg-black hover:bg-gray-800 text-white"
        >
          {isLoading ? "..." : "Check"}
        </Button>
      </div>

      {deliveryInfo && (
        <div className="space-y-2">
          {deliveryInfo.available ? (
            <>
              <div className="flex items-center gap-2 text-green-600">
                <Truck className="h-4 w-4" />
                <span className="text-sm font-medium">Available for delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm">
                  Delivery in {deliveryInfo.days} {deliveryInfo.days === 1 ? "day" : "days"} to {deliveryInfo.location}
                </span>
              </div>
            </>
          ) : (
            <div className="text-red-600 text-sm">Delivery not available for this pincode</div>
          )}
        </div>
      )}
    </div>
  )
}
