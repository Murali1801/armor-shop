import Image from "next/image"
import { Star, Verified } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Arjun Sharma",
    rating: 5,
    date: "2 days ago",
    review:
      "Amazing 7.1 surround sound quality! The detachable microphone works perfectly for gaming sessions. The fabric earcups are incredibly comfortable for long hours.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 5,
    date: "1 week ago",
    review:
      "Love the USB Type-C connectivity and the included Type-A adapter. Works seamlessly with my laptop and console. The in-line controller is very convenient.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
  {
    id: 3,
    name: "Rohit Kumar",
    rating: 4,
    date: "2 weeks ago",
    review:
      "Great build quality and the fabric cushions are so comfortable. The 7.1 surround sound gives me a competitive edge in gaming. Highly recommended!",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Real Customer Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-black font-semibold">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black">{review.name}</span>
                    {review.verified && <Verified className="h-4 w-4 text-green-600" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{review.review}</p>

              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={`Review by ${review.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
