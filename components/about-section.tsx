// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section id="about-us" className="py-10 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl text-gray-900 font-bold  mb-6">
//           Highly effective Digital Marketing Experts
//         </h2>
//         <p className="text-lg max-w-3xl text-gray-900 mb-10">
//           With over 1.2 million hours of expertise and a team of 35 dedicated
//           professionals, we bring a wealth of knowledge and creativity to every
//           project. Our diverse team of specialists ensures that no matter the
//           challenge, we have The solutions to meet your needs
//         </p>

//         <div className="flex  mb-10">
//           <Button
//             variant="outline"
//             className="rounded-full  flex gap-12 bg-gray-200 hover:bg-gray-300"
//           >
//             <span className="font-bold text-gray-900">About Us</span>
//             <div className="bg-[#1A2238] rounded-full p-3">
//               <ArrowRight className="h-full w-6 text-white" />
//             </div>
//           </Button>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
//           <div className="relative w-full md:w-1/2 h-72 md:h-80">
//             <Image
//               src="/about-us.png"
//               alt="Team meeting"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="relative w-full md:w-1/2 h-72 md:h-80">
//             <Image
//               src="/about-us.png"
//               alt="Team meeting"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="flex ">
//           <Button className="bg-[#1A2238] text-white hover:bg-[#2a3756]">
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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
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

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Highly effective{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Digital Marketing
            </span>{" "}
            Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 1.2 million hours of expertise and a team of 35 dedicated
            professionals, we bring a wealth of knowledge and creativity to
            every project. Our diverse team of specialists ensures that no
            matter the challenge, we have the solutions to meet your needs.
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 h-auto flex items-center gap-3 group border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <span className="font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                About Us
              </span>
              <div className="bg-blue-600 rounded-full p-2 transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative rounded-2xl overflow-hidden h-80 md:h-96"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/about-us.png"
              alt="Team meeting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Strategy Sessions
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden h-80 md:h-96"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Image
              src="/about-us.png"
              alt="Team collaboration"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                Creative Collaboration
              </span>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 h-auto">
              Let&apos;s Talk Impact
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
