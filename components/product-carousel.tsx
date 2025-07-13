"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  { type: "image", src: "/images/cloud-cushion.jpg", alt: "Cloud Cushion Comfort" },
  { type: "image", src: "/images/rgb-lights.jpg", alt: "RGB Lighting Effects" },
  { type: "image", src: "/images/audio-immersion.jpg", alt: "7.1 Surround Sound" },
  { type: "image", src: "/images/beyond-ordinary.jpg", alt: "Beyond The Ordinary" },
  { type: "image", src: "/images/packaging.jpg", alt: "Complete Package" },
  { type: "image", src: "/images/features.png", alt: "Key Features" },
  {
    type: "video",
    src: "https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/00258507-5d09-4925-8956-1cc3d6c2b947", // Updated 3D video URL
    thumbnail: "/images/hero-banner.png", // Use hero banner as video thumbnail
    alt: "3D Product Showcase Video",
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const currentItem = carouselItems[currentIndex]

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 7000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {currentItem.type === "image" ? (
          <Image src={currentItem.src || "/placeholder.svg"} alt={currentItem.alt} fill className="object-cover" />
        ) : (
          <video
            key={currentItem.src} // Key ensures video reloads when source changes
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            className="w-full h-full object-cover select-none pointer-events-none"
            poster={currentItem.thumbnail || "/placeholder.svg"} // Use thumbnail as poster
            aria-label={currentItem.alt}
            onContextMenu={e => e.preventDefault()}
          >
            <source src={currentItem.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-4">
        {carouselItems.slice(0, 6).map((item, index) => (
          <button
            key={index}
            className={`relative aspect-square rounded border-2 overflow-hidden ${
              index === currentIndex ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={item.type === "image" ? item.src : item.thumbnail!}
              alt={item.alt}
              fill
              className="object-cover"
            />
            {item.type === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
