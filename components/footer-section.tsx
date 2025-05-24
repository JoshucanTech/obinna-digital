// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

// export default function FooterSection() {
//   return (
//     <footer className="bg-black text-white">
//       <div className="bg-gray-800 py-16">
//         <div className="container mx-auto px-6">
//           {/* Newsletter Section */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
//             <div className="mb-6 md:mb-0">
//               <h3 className="text-xl font-bold mb-2">Join Our Newsletter</h3>
//               <p className="text-gray-300 text-sm max-w-xs">
//                 Subscribe today an get notifications about the latest updates
//               </p>
//             </div>
//             <div className="flex w-full md:w-auto gap-2">
//               <Input type="email" placeholder="Your Email" className="bg-transparent border-gray-600 text-white" />
//               <Button className="bg-white text-black hover:bg-gray-200 whitespace-nowrap">Subscribe</Button>
//             </div>
//           </div>

//           {/* Footer Links */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
//             {/* Tools Column */}
//             <div>
//               <h4 className="font-bold mb-4">Tools</h4>
//               <ul className="space-y-2">
//                 <li className="text-sm text-gray-300">Widgets</li>
//                 <li className="text-sm text-gray-300">Finances</li>
//                 <li className="text-sm text-gray-300">API</li>
//                 <li className="text-sm text-gray-300">RSS</li>
//                 <li className="text-sm text-gray-300">Stock Porfolio</li>
//                 <li className="text-sm text-gray-300">Advance Charts</li>
//               </ul>
//             </div>

//             {/* Community Column */}
//             <div>
//               <h4 className="font-bold mb-4">Community</h4>
//               <ul className="space-y-2">
//                 <li className="text-sm text-gray-300">FAQ</li>
//                 <li className="text-sm text-gray-300">Help</li>
//                 <li className="text-sm text-gray-300">Contact</li>
//                 <li className="text-sm text-gray-300">Report a Bug</li>
//                 <li className="text-sm text-gray-300">About</li>
//                 <li className="text-sm text-gray-300">Blog</li>
//               </ul>
//             </div>

//             {/* Reviews Column */}
//             <div>
//               <h4 className="font-bold mb-4">Reviews</h4>
//               <ul className="space-y-2">
//                 <li className="text-sm text-gray-300">FAQ</li>
//                 <li className="text-sm text-gray-300">Help</li>
//                 <li className="text-sm text-gray-300">Contact</li>
//                 <li className="text-sm text-gray-300">Report a Bug</li>
//                 <li className="text-sm text-gray-300">About</li>
//                 <li className="text-sm text-gray-300">Blog</li>
//               </ul>
//             </div>

//             {/* Brokers Column */}
//             <div>
//               <h4 className="font-bold mb-4">Brokers</h4>
//               <ul className="space-y-2">
//                 <li className="text-sm text-gray-300">FAQ</li>
//                 <li className="text-sm text-gray-300">Help</li>
//                 <li className="text-sm text-gray-300">Contact</li>
//                 <li className="text-sm text-gray-300">Report a Bug</li>
//                 <li className="text-sm text-gray-300">About</li>
//                 <li className="text-sm text-gray-300">Blog</li>
//               </ul>
//             </div>

//             {/* Platforms Column */}
//             <div>
//               <h4 className="font-bold mb-4">Platforms</h4>
//               <ul className="space-y-2">
//                 <li className="text-sm text-gray-300">Widgets</li>
//                 <li className="text-sm text-gray-300">Finances</li>
//                 <li className="text-sm text-gray-300">API</li>
//                 <li className="text-sm text-gray-300">RSS</li>
//                 <li className="text-sm text-gray-300">Stock Porfolio</li>
//                 <li className="text-sm text-gray-300">Advance Charts</li>
//               </ul>
//             </div>

//             {/* Support Column */}
//             <div>
//               <h4 className="font-bold mb-4">Support</h4>
//               <ul className="space-y-2">
//                 <li className="text-sm text-gray-300">FAQ</li>
//                 <li className="text-sm text-gray-300">Help</li>
//                 <li className="text-sm text-gray-300">Contact</li>
//                 <li className="text-sm text-gray-300">Report a Bug</li>
//                 <li className="text-sm text-gray-300">About</li>
//                 <li className="text-sm text-gray-300">Blog</li>
//               </ul>
//             </div>
//           </div>

//           {/* Logo and Social Media */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//             <div>
//               <h3 className="text-xl font-bold">TradeHall Logo</h3>
//               <p className="text-sm text-gray-300">Short Description</p>
//             </div>
//             <div className="mt-6 md:mt-0">
//               <p className="text-sm text-gray-300 mb-2">Follow Us</p>
//               <div className="flex space-x-4">
//                 <Facebook className="h-5 w-5 text-gray-300" />
//                 <Twitter className="h-5 w-5 text-gray-300" />
//                 <Youtube className="h-5 w-5 text-gray-300" />
//                 <Instagram className="h-5 w-5 text-gray-300" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-black py-6">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//             <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
//               <a href="#" className="text-xs text-gray-400 hover:text-white">
//                 Terms
//               </a>
//               <span className="text-gray-600">|</span>
//               <a href="#" className="text-xs text-gray-400 hover:text-white">
//                 Privacy
//               </a>
//               <span className="text-gray-600">|</span>
//               <a href="#" className="text-xs text-gray-400 hover:text-white">
//                 Site Map
//               </a>
//               <span className="text-gray-600">|</span>
//               <a href="#" className="text-xs text-gray-400 hover:text-white">
//                 Site Map Calendar
//               </a>
//             </div>
//             <div className="flex space-x-2">
//               <img src="/app-store.png" alt="App Store" className="h-8" />
//               <img src="/google-play.png" alt="Google Play" className="h-8" />
//               <img src="/app-gallery.png" alt="App Gallery" className="h-8" />
//               <img src="/amazon-appstore.png" alt="Amazon Appstore" className="h-8" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-500 text-center md:text-left">
//             Lorem ipsum dolor sit amet consectetur. Eget ullamcorper amet amet enim nisl ut. Justo odio adipiscing amet
//             enim vitae! amet placerat amet. Accumsan tellus amet odio nisi mattis odio vivamus a. Morbi lacus arcu
//             placerat nisi purus fermentum amet. Volutpat dolor mauris convallis non id amet adipisci sed et. Bibendum
//             scelerisque et sit ultricies. Sed molestie dignissim ut urna egestas mi id est dui. Vel mattis.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FooterSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("footer");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="footer" className="bg-black text-white">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Newsletter Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-300 text-sm max-w-xs">
                Subscribe today and get notifications about the latest updates
                and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800/70 border-gray-700 text-white focus:border-blue-500 rounded-lg"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white whitespace-nowrap rounded-lg">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {/* Tools Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold mb-4 text-lg">Tools</h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Widgets
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Finances
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  API
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  RSS
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Stock Portfolio
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Advance Charts
                </li>
              </ul>
            </motion.div>

            {/* Community Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 text-lg">Community</h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  FAQ
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Help
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Report a Bug
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  About
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Blog
                </li>
              </ul>
            </motion.div>

            {/* Reviews Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold mb-4 text-lg">Reviews</h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  FAQ
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Help
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Report a Bug
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  About
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Blog
                </li>
              </ul>
            </motion.div>

            {/* Brokers Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold mb-4 text-lg">Brokers</h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  FAQ
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Help
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Report a Bug
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  About
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Blog
                </li>
              </ul>
            </motion.div>

            {/* Platforms Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="font-bold mb-4 text-lg">Platforms</h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Widgets
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Finances
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  API
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  RSS
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Stock Portfolio
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Advance Charts
                </li>
              </ul>
            </motion.div>

            {/* Support Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  FAQ
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Help
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Report a Bug
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  About
                </li>
                <li className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Blog
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Logo and Social Media */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-800 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Townhall Media
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Connecting businesses with their audience since 2015
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500" />
                </a>
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </a>
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                Site Map
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                Site Map Calendar
              </a>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-8"
                />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-8"
                />
              </a>
              <a
                href="https://appgallery.huawei.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/huawei-appgallery-badge.png"
                  alt="Get it on AppGallery"
                  className="h-8"
                />
              </a>
              <a
                href="https://www.amazon.com/gp/mas/get/amazonapp"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/amazon-appstore-badge.png"
                  alt="Available at Amazon Appstore"
                  className="h-8"
                />
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Townhall Media. All rights reserved.
            Townhall Media is a leading digital marketing agency dedicated to
            helping businesses grow their online presence and connect with their
            target audience through innovative strategies and cutting-edge
            technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
