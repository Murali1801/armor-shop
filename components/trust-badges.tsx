import { Shield, Truck, RotateCcw, Headphones, Award, Star } from "lucide-react"

const badges = [
  { icon: Shield, text: "1 Year Warranty", subtext: "Manufacturer warranty" },
  { icon: Truck, text: "Free Shipping", subtext: "On all orders" },
  { icon: RotateCcw, text: "7 Day Returns", subtext: "Easy returns policy" },
  { icon: Headphones, text: "24/7 Support", subtext: "Customer service" },
  { icon: Award, text: "Certified Quality", subtext: "Premium materials" },
  { icon: Star, text: "4.8/5 Rating", subtext: "From 2000+ reviews" },
]

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-8 border-t border-b border-gray-200">
      {badges.map((badge, index) => (
        <div key={index} className="text-center">
          <badge.icon className="h-8 w-8 text-black mx-auto mb-2" />
          <div className="text-sm font-semibold text-black">{badge.text}</div>
          <div className="text-xs text-gray-600">{badge.subtext}</div>
        </div>
      ))}
    </div>
  )
}
