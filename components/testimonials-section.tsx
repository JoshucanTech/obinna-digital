import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"

// Testimonial data to match the image exactly
const testimonials = [
  {
    id: 1,
    quote:
      '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
    name: "David Martins",
    location: "Abuja",
    rating: 2.5,
    verified: true,
  },
  {
    id: 2,
    quote: '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
    name: "Senator D.",
    location: "Port Harcourt",
    rating: 2.5,
    verified: true,
  },
  {
    id: 3,
    quote:
      '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
    name: "David Martins",
    location: "Abuja",
    rating: 2.5,
    verified: true,
  },
  {
    id: 4,
    quote: '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
    name: "Senator D.",
    location: "Port Harcourt",
    rating: 2.5,
    verified: true,
  },
  {
    id: 5,
    quote:
      '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
    name: "David Martins",
    location: "Abuja",
    rating: 2.5,
    verified: true,
  },
  {
    id: 6,
    quote: '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
    name: "Senator D.",
    location: "Port Harcourt",
    rating: 2.5,
    verified: true,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#1A2238] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>

        <div className="flex justify-start mb-12">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 h-auto flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black"
          >
            <span className="font-medium">Our Clients Say</span>
            <div className="bg-[#1A2238] rounded-full p-2">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </Button>
        </div>

        <h3 className="text-3xl font-bold text-center mb-4">What Clients Say About Us</h3>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Our latest transaction highlights our commitment to excellence and innovation. We successfully completed this
          deal with a focus on delivering value and strengthening our partnerships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 text-black">
              <p className="mb-4 text-sm">{testimonial.quote}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{testimonial.name} </p>
                    <Heart className="h-4 w-4 fill-black" />
                  </div>
                  <p className="text-sm">{testimonial.location}</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(testimonial.rating)
                              ? "fill-black text-black"
                              : i < testimonial.rating
                                ? "fill-black text-black opacity-50"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs ml-1">2.5 (8)</span>
                  </div>
                </div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.id % 2 === 1 ? "/avatar-1.png" : "/avatar-2.png"}
                    alt={`${testimonial.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-transparent border border-white text-white hover:bg-white/10">
            Let&apos;s Talk Impact
          </Button>
        </div>
      </div>
    </section>
  )
}
