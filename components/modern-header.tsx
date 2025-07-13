"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, User, ShoppingCart, Menu, X, Wallet, Heart, Phone, Mail } from "lucide-react"
import { AuthModal } from "@/components/auth-modal"

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [armorPoints, setArmorPoints] = useState(250)
  const [cartItems, setCartItems] = useState(0)

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/home" className="flex items-center">
              <Image src="/images/armor-logo.png" alt="Armor Logo" width={32} height={12} className="h-3 w-auto" />
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for gaming headphones..."
                  className="pl-10 border-gray-300 focus:border-black"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              {isLoggedIn ? (
                <div className="hidden md:flex items-center space-x-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Wallet className="h-4 w-4 text-black" />
                    <span className="font-medium">{armorPoints} Points</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="hidden md:flex text-black hover:bg-gray-100"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )}

              {/* Wishlist */}
              <Button variant="ghost" size="sm" className="hidden md:flex text-black hover:bg-gray-100">
                <Heart className="h-4 w-4" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative text-black hover:bg-gray-100">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center p-0">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center space-x-8">
              <Link href="/home" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link href="/support" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                Support
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+91 9999999999</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>support@armor.shop</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search products..." className="pl-10 border-gray-300 focus:border-black" />
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-3">
                <Link href="/home" className="block text-sm font-medium text-black">
                  Home
                </Link>
                <Link href="/products" className="block text-sm font-medium text-black">
                  Products
                </Link>
                <Link href="/about" className="block text-sm font-medium text-black">
                  About
                </Link>
                <Link href="/support" className="block text-sm font-medium text-black">
                  Support
                </Link>
              </div>

              {/* Mobile User Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {isLoggedIn ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">My Account</span>
                    <div className="flex items-center gap-2 text-sm">
                      <Wallet className="h-4 w-4" />
                      <span>{armorPoints} Points</span>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full border-black text-black hover:bg-black hover:text-white"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Login / Sign Up
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  )
}
