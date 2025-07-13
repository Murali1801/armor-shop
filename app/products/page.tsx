"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Wallet, Star, CreditCard } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ModernHeader } from "@/components/modern-header"
import { AuthModal } from "@/components/auth-modal"
import { ProductCarousel } from "@/components/product-carousel"
import { DeliveryChecker } from "@/components/delivery-checker"
import { TrustBadges } from "@/components/trust-badges"
import { ReviewsSection } from "@/components/reviews-section"
import Link from "next/link"

export default function ProductsPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [armorPoints, setArmorPoints] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <ModernHeader />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/home">
              <span>Home</span>
            </Link>
            <span className="mx-2">/</span> <span className="text-black font-medium">Products</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <ProductCarousel />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">version.H1</h1>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="border-black text-black">
                    Wired
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    USB Type C + A
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Over Ear
                  </Badge>
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  ₹2,999
                  <span className="text-lg font-normal text-gray-600 ml-2">includes all shipping and taxes</span>
                </div>

                {/* SEO Optimized Description */}
                <p className="text-gray-700 mb-4">
                  Armor Version H1 gaming headphones with 7.1 surround sound, detachable microphone, and comfortable
                  fabric earcups. Perfect for PC, laptop, and console gaming with universal USB connectivity.
                </p>

                {/* EMI Offer */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">EMI Available</span>
                  </div>
                  <p className="text-sm text-blue-700">Starting from ₹500/month. No cost EMI available!</p>
                </div>

                <DeliveryChecker />

                <div className="space-y-3">
                  <h3 className="font-semibold text-black">Key Features:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-black" />
                      7.1 Surround Sound
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-black" />
                      Detachable Microphone
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-black" />
                      Comfortable Fabric Earcups
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-black" />
                      In-line Audio Controller
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-black" />
                      Made for PC, Laptop & Console Use
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1 bg-black hover:bg-gray-800 text-white h-30 text-2xl font-bold py-4">
                    <ShoppingCart className="mr-3 h-8 w-8" />
                    BUY NOW
                  </Button>
                  {!isLoggedIn && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setIsAuthModalOpen(true)}
                      className="flex-1 border-black text-black hover:bg-black hover:text-white h-30 text-2xl font-bold py-4"
                    >
                      <Wallet className="mr-3 h-8 w-8" />
                      Earn Points
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Full Width Product Images */}
      <section className="py-0">
        <div className="space-y-0">
          <div className="w-full">
            <Image
              src="/images/cloud-cushion.jpg"
              alt="Cloud Cushion Comfort"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/rgb-lights.jpg"
              alt="RGB Lighting Effects"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/audio-immersion.jpg"
              alt="Total Audio Immersion"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/beyond-ordinary.jpg"
              alt="Beyond The Ordinary"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/packaging.jpg"
              alt="Fully Equipped Package"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Technical Specifications</h2>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="audio" className="w-full">
              <TabsList className="flex w-full overflow-x-auto no-scrollbar sm:grid sm:grid-cols-4 bg-white border border-gray-200 gap-1 p-1 whitespace-nowrap">
                <TabsTrigger value="audio" className="text-black text-xs sm:text-sm px-4 py-2 min-w-[120px] flex-1">
                  Audio
                </TabsTrigger>
                <TabsTrigger value="design" className="text-black text-xs sm:text-sm px-4 py-2 min-w-[120px] flex-1">
                  Design
                </TabsTrigger>
                <TabsTrigger value="connectivity" className="text-black text-xs sm:text-sm px-4 py-2 min-w-[120px] flex-1">
                  Connectivity
                </TabsTrigger>
                <TabsTrigger value="package" className="text-black text-xs sm:text-sm px-4 py-2 min-w-[120px] flex-1">
                  Package
                </TabsTrigger>
              </TabsList>

              <TabsContent value="audio" className="mt-6">
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-black mb-3">Audio Performance</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <strong>Surround Sound:</strong> 7.1 Virtual Surround
                          </li>
                          <li>
                            <strong>Driver Type:</strong> Dynamic Drivers
                          </li>
                          <li>
                            <strong>Audio Quality:</strong> High-Definition Audio
                          </li>
                          <li>
                            <strong>Compatibility:</strong> PC, Laptop, Console
                          </li>
                          <li>
                            <strong>Connection:</strong> USB Type-C + Type-A
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-3">Microphone</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <strong>Type:</strong> Detachable Boom Microphone
                          </li>
                          <li>
                            <strong>Noise Cancellation:</strong> Yes
                          </li>
                          <li>
                            <strong>Pickup Pattern:</strong> Unidirectional
                          </li>
                          <li>
                            <strong>Mute Control:</strong> In-line Controller
                          </li>
                          <li>
                            <strong>Voice Clarity:</strong> Crystal Clear
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="design" className="mt-6">
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-black mb-3">Comfort & Design</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <strong>Ear Cups:</strong> Over-Ear Design
                          </li>
                          <li>
                            <strong>Cushion Material:</strong> Premium Fabric
                          </li>
                          <li>
                            <strong>Headband:</strong> Adjustable & Padded
                          </li>
                          <li>
                            <strong>Build Quality:</strong> Durable Construction
                          </li>
                          <li>
                            <strong>Weight:</strong> Lightweight Design
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-3">Lighting</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <strong>RGB Zones:</strong> Ear Cup Rings
                          </li>
                          <li>
                            <strong>Colors:</strong> 16.7 Million
                          </li>
                          <li>
                            <strong>Effects:</strong> Breathing, Static, Cycle
                          </li>
                          <li>
                            <strong>Control:</strong> Software Customizable
                          </li>
                          <li>
                            <strong>Power:</strong> USB Powered
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="connectivity" className="mt-6">
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-black mb-3">Connectivity</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <strong>Primary Connection:</strong> USB Type-C
                          </li>
                          <li>
                            <strong>Adapter Included:</strong> USB Type-A
                          </li>
                          <li>
                            <strong>Cable Type:</strong> Braided Cable
                          </li>
                          <li>
                            <strong>In-line Controls:</strong> Volume & Microphone
                          </li>
                          <li>
                            <strong>Platform Support:</strong> PC, Laptop, Console
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-3">Software</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <strong>Armor Control Center:</strong> Windows/Mac
                          </li>
                          <li>
                            <strong>EQ Presets:</strong> Gaming, Music, Movie
                          </li>
                          <li>
                            <strong>Surround Sound:</strong> Customizable
                          </li>
                          <li>
                            <strong>RGB Control:</strong> Full Customization
                          </li>
                          <li>
                            <strong>Profiles:</strong> Game-specific Settings
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="package" className="mt-6">
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-black mb-3">What's in the Box</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Armor Version H1 Headset</li>
                        <li>• Detachable Microphone</li>
                        <li>• USB Type-C Cable (2.2m)</li>
                        <li>• USB-A Adapter</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• User Manual</li>
                        <li>• Fabric Storage Pouch</li>
                        <li>• Warranty Card</li>
                        <li>• Armor Stickers</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <ReviewsSection />

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
                  <a href="#" className="hover:text-white">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Armor. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}
