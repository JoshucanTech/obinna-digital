// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Star, Heart } from "lucide-react";

// // Testimonial data to match the image exactly
// const testimonials = [
//   {
//     id: 1,
//     quote:
//       '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
//     name: "David Martins",
//     location: "Abuja",
//     rating: 2.5,
//     verified: true,
//   },
//   {
//     id: 2,
//     quote:
//       '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
//     name: "Senator D.",
//     location: "Port Harcourt",
//     rating: 2.5,
//     verified: true,
//   },
//   {
//     id: 3,
//     quote:
//       '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
//     name: "David Martins",
//     location: "Abuja",
//     rating: 2.5,
//     verified: true,
//   },
//   {
//     id: 4,
//     quote:
//       '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
//     name: "Senator D.",
//     location: "Port Harcourt",
//     rating: 2.5,
//     verified: true,
//   },
//   {
//     id: 5,
//     quote:
//       '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
//     name: "David Martins",
//     location: "Abuja",
//     rating: 2.5,
//     verified: true,
//   },
//   {
//     id: 6,
//     quote:
//       '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
//     name: "Senator D.",
//     location: "Port Harcourt",
//     rating: 2.5,
//     verified: true,
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section id="testimonials" className="py-20 bg-[#1A2238] text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
//         <div className="flex justify-start mb-10">
//           <Button
//             variant="outline"
//             className="rounded-full  flex gap-12 bg-gray-200 hover:bg-gray-300"
//           >
//             <span className="font-bold text-slate-900 ">Our Clients Say</span>
//             <div className="bg-[#1A2238] rounded-full p-3">
//               <ArrowRight className="h-full w-6 text-white" />
//             </div>
//           </Button>
//         </div>

//         <h3 className="text-3xl font-bold text-center mb-4">
//           What Clients Say About Us
//         </h3>
//         <p className="text-center max-w-3xl mx-auto mb-12 text-gray-300">
//           Our latest transaction highlights our commitment to excellence and
//           innovation. We successfully completed this deal with a focus on
//           delivering value and strengthening our partnerships.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white rounded-lg p-6 text-black"
//             >
//               <p className="mb-4 text-sm">{testimonial.quote}</p>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <p className="font-bold">{testimonial.name} </p>
//                     <Heart className="h-4 w-4 fill-black" />
//                   </div>
//                   <p className="text-sm">{testimonial.location}</p>
//                   <div className="flex items-center">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`h-3 w-3 ${
//                             i < Math.floor(testimonial.rating)
//                               ? "fill-black text-black"
//                               : i < testimonial.rating
//                               ? "fill-black text-black opacity-50"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-xs ml-1">2.5 (8)</span>
//                   </div>
//                 </div>
//                 <div className="relative w-12 h-12 rounded-full overflow-hidden">
//                   <Image
//                     src={
//                       testimonial.id % 2 === 1
//                         ? "/avatar-1.png"
//                         : "/avatar-2.png"
//                     }
//                     alt={`${testimonial.name} avatar`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <Button className="bg-transparent border border-white text-white hover:bg-white/10">
//             Let&apos;s Talk Impact
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

// Testimonial data to match the image exactly
const testimonials = [
  {
    id: 1,
    quote:
      '"WealthMagnate has completely transformed my financial outlook. The returns are impressive, and the platform is incredibly secure."',
    name: "David Martins",
    location: "Abuja",
    rating: 4.5,
    verified: true,
    image: "/avatar-1.png",
  },
  {
    id: 2,
    quote:
      '"Finally, an investment platform that delivers what it promises. I\'m thrilled with the results so far!"',
    name: "Senator D.",
    location: "Port Harcourt",
    rating: 5,
    verified: true,
    image: "/avatar-2.png",
  },
  {
    id: 3,
    quote:
      '"Their marketing strategy completely revolutionized our approach. We\'ve seen a 200% increase in qualified leads."',
    name: "Sarah Johnson",
    location: "Lagos",
    rating: 5,
    verified: true,
    image: "/avatar-3.png",
  },
  {
    id: 4,
    quote:
      '"The team at Townhall Media are true professionals. They delivered beyond our expectations."',
    name: "Michael Chen",
    location: "Kano",
    rating: 4.5,
    verified: true,
    image: "/avatar-4.png",
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Testimonials
          </h2>

          <Button
            variant="outline"
            className="rounded-full px-6 py-5 h-auto flex items-center gap-2 group border-white/20 hover:border-white/40 transition-colors"
          >
            <span className="font-medium text-white group-hover:text-white/80 transition-colors">
              Our Clients Say
            </span>
            <div className="bg-blue-600 rounded-full p-2 transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </Button>
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What Clients Say About Us
        </motion.h3>

        <motion.p
          className="text-center max-w-3xl mx-auto mb-16 text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our latest transaction highlights our commitment to excellence and
          innovation. We successfully completed this deal with a focus on
          delivering value and strengthening our partnerships.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white transition-all duration-500 ${
                index === activeIndex ||
                index === (activeIndex + 1) % testimonials.length
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-95"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible
                  ? index === activeIndex ||
                    index === (activeIndex + 1) % testimonials.length
                    ? 1
                    : 0.5
                  : 0,
                y: isVisible ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <p className="mb-6 text-lg font-light italic">
                {testimonial.quote}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{testimonial.name}</p>
                    {testimonial.verified && (
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    )}
                  </div>
                  <p className="text-sm text-white/70">
                    {testimonial.location}
                  </p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(testimonial.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400 opacity-50"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs ml-1 text-white/70">
                      {testimonial.rating} (8)
                    </span>
                  </div>
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-blue-500 w-6" : "bg-white/30"
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 h-auto">
            Let&apos;s Talk Impact
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
