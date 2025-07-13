"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Shield, Truck, Headphones, Volume2, Mic, Zap, Award, Users, TrendingUp } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ModernHeader } from "@/components/modern-header"

export default function LandingPage() {
  const features = [
    {
      icon: Volume2,
      title: "7.1 Surround Sound",
      description: "Experience immersive 7.1 virtual surround sound for competitive gaming advantage",
    },
    {
      icon: Mic,
      title: "Detachable Microphone",
      description: "Crystal clear communication with noise-cancelling detachable boom microphone",
    },
    {
      icon: Headphones,
      title: "Comfortable Fabric Earcups",
      description: "Premium fabric cushions designed for extended gaming sessions",
    },
    {
      icon: Zap,
      title: "In-line Audio Controller",
      description: "Easy volume and microphone control with convenient in-line controller",
    },
  ]

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Star, value: "4.8/5", label: "Customer Rating" },
    { icon: Award, value: "1 Year", label: "Warranty" },
    { icon: TrendingUp, value: "99%", label: "Satisfaction Rate" },
  ]

  const galleryImages = [
    {
      src: "/images/hero-banner.png",
      alt: "Armor Version H1 - Main Product View",
      title: "The Ultimate Gaming Headset",
    },
    { src: "/images/cloud-cushion.jpg", alt: "Cloud Cushion Comfort", title: "Unrivaled Comfort" },
    { src: "/images/rgb-lights.jpg", alt: "RGB Lighting Effects", title: "Dynamic RGB Illumination" },
    { src: "/images/audio-immersion.jpg", alt: "Total Audio Immersion", title: "Immersive 7.1 Surround Sound" },
    { src: "/images/beyond-ordinary.jpg", alt: "Beyond The Ordinary Experience", title: "Beyond Ordinary Gaming" },
    { src: "/images/packaging.jpg", alt: "Fully Equipped Package", title: "Premium Unboxing Experience" },
    { src: "/images/features.png", alt: "Key Features Overview", title: "All Key Features at a Glance" },
  ]

  const videoUrl =
    "https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/00258507-5d09-4925-8956-1cc3d6c2b947"

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <ModernHeader />

      {/* Hero Section - Integrated 3D Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Armor Version H1 3D Product Showcase"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 text-center space-y-8 px-4 py-20">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              ARMOR
              <br />
              <span className="text-gray-300">VERSION</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">H1</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Experience gaming like never before with professional-grade audio, premium comfort, and stunning RGB
              lighting effects. Made for PC, Laptop & Console Use.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 max-w-md mx-auto">
            <div>
              <div className="text-3xl font-bold text-white">₹2,999</div>
              <div className="text-sm text-gray-300">Starting Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-sm text-gray-300">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Floating Elements (Adjusted for dark background) */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-700">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium text-white">1 Year Warranty</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-20 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-700">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-white">Free Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Armor?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered for gamers, built for champions. Every detail crafted for the ultimate gaming experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="bg-black/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-black/10 transition-colors">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">Built for Gaming Excellence</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Armor Version H1 delivers professional-grade audio performance with 7.1 surround sound technology.
                  Designed specifically for PC, laptop, and console gaming with universal USB Type-C and Type-A
                  compatibility.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">7.1 Virtual Surround Sound Technology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Detachable Noise-Cancelling Microphone</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Premium Fabric Ear Cushions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Universal USB Type-C + Type-A Compatibility</span>
                  </li>
                </ul>
              </div>
              <Link href="/products">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/audio-immersion.jpg"
                alt="Audio Immersion"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Visual Showcase</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deeper into the design and features of Armor Version H1.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First image spans two columns on large screens for prominence */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={galleryImages[0].src || "/placeholder.svg"}
                    alt={galleryImages[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-black">{galleryImages[0].title}</h3>
                  <p className="text-sm text-gray-600">{galleryImages[0].alt}</p>
                </CardContent>
              </Card>
            </div>
            {/* Remaining images in a regular grid */}
            {galleryImages.slice(1).map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-black">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.alt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Gamers Worldwide</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-black">Ready to Level Up Your Gaming?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference with Armor Version H1. Premium quality, unmatched comfort, and
              professional-grade audio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
                  Shop Now - ₹2,999
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/images/armor-logo.png"
                alt="Armor Logo"
                width={100}
                height={32}
                className="h-8 w-auto mb-4 filter invert"
              />
              <p className="text-gray-400 text-sm">Built for Comfort. Designed to Last.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    Gaming Headsets
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/support" className="hover:text-white">
                    Customer Service
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="hover:text-white">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Armor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
