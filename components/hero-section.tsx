// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#1b1e32] text-white pt-32 pb-16">
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 space-y-6">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             Full-Funnel Digital Marketing
//           </h1>
//           <p className="text-xl max-w-lg">
//             For every business, there are Customers near and far, we help you
//             find them, connect them and keep them coming Back
//           </p>
//           <Button className="bg-white text-black hover:bg-gray-200 mt-4">
//             Let&apos;s Talk Impact
//           </Button>
//         </div>
//         <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end ">
//           <div className="relative w-full max-w-lg aspect-[3/3] ">
//             <Image
//               src="hero-image.png"
//               alt="Digital Marketing on Mobile"
//               fill
//               className="object-fill "
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(79,70,229,0.8) 0%, rgba(79,70,229,0) 70%)`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Full-Funnel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                Digital Marketing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8">
              For every business, there are customers near and far. We help you
              find them, connect with them, and keep them coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 h-auto text-lg"
                size="lg"
              >
                Let&apos;s Talk Impact
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 h-auto text-lg"
                size="lg"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <Image
                  src="/phone-mockup.png"
                  alt="Digital Marketing on Mobile"
                  width={400}
                  height={800}
                  className="object-contain mx-auto"
                  priority
                />

                {/* Floating social media icons */}
                <div className="absolute top-1/4 -left-8 w-16 h-16 bg-pink-500/90 rounded-full flex items-center justify-center animate-float">
                  <span className="text-white text-2xl">♥</span>
                </div>
                <div className="absolute top-1/3 -right-10 w-12 h-12 bg-blue-500/90 rounded-full flex items-center justify-center animate-float-delay">
                  <span className="text-white text-xl">@</span>
                </div>
                <div className="absolute bottom-1/4 -left-12 w-14 h-14 bg-purple-500/90 rounded-full flex items-center justify-center animate-float-slow">
                  <span className="text-white text-2xl">#</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
