"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Facebook, Chrome, Wallet, Star } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-2 border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-black">Join Armor Community</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger value="login" className="text-black">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="text-black">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Chrome className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Facebook className="mr-2 h-4 w-4" />
                Continue with Facebook
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 focus:border-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 focus:border-black"
                />
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Login
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="h-5 w-5 text-black" />
                <span className="font-semibold text-black">Armor Wallet Benefits</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  Earn Armor Points on every purchase
                </li>
                <li className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  Use points for discounts on checkout
                </li>
                <li className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  Exclusive member-only offers
                </li>
              </ul>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Chrome className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Facebook className="mr-2 h-4 w-4" />
              Sign up with Facebook
            </Button>
            <Button className="w-full bg-black hover:bg-gray-800 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Sign up with Email
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
