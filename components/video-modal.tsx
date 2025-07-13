"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  videoAlt: string
}

export function VideoModal({ isOpen, onClose, videoSrc, videoAlt }: VideoModalProps) {
  // This file is no longer needed as the video is directly integrated into the landing page.
  // It can be safely removed if not used elsewhere.
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl p-0 border-none bg-transparent">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black">
          <video
            key={videoSrc} // Key ensures video reloads when source changes
            controls
            autoPlay
            preload="metadata"
            className="w-full h-full object-contain"
            aria-label={videoAlt}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>
      </DialogContent>
    </Dialog>
  )
}
