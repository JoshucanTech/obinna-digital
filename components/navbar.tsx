// "use client";

// import type React from "react";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "./mode-toggle";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
//     e.preventDefault();
//     const section = document.getElementById(sectionId);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 100,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <header className="fixed top-0 w-full z-50">
//       <div className="bg-neutral-700 ">
//         <div className="container mx-auto text-white py-4 px-6 flex justify-between items-center">
//           <div className="font-bold text-lg">Townhall Media</div>
//           <div className="flex items-center gap-4">
//             <ModeToggle />
//             <Button
//               variant="default"
//               className="bg-black text-white hover:bg-zinc-800"
//             >
//               Let&apos;s Talk
//             </Button>
//           </div>
//         </div>
//       </div>
//       <nav
//         className={`bg-black/90 transition-all ${scrolled ? "shadow-md" : ""}`}
//       >
//         <div className="container mx-auto  text-white py-3 px-6 flex justify-between items-center">
//           <div className="flex space-x-8">
//             <Link
//               href="#solutions"
//               onClick={scrollToSection("solutions")}
//               className="hover:text-gray-300 transition-colors"
//             >
//               Solutions
//             </Link>
//             <Link
//               href="#our-works"
//               onClick={scrollToSection("our-works")}
//               className="hover:text-gray-300 transition-colors"
//             >
//               Our works
//             </Link>
//             <Link
//               href="#about-us"
//               onClick={scrollToSection("about-us")}
//               className="hover:text-gray-300 transition-colors"
//             >
//               About Us
//             </Link>
//             <Link
//               href="#work-with-us"
//               onClick={scrollToSection("work-with-us")}
//               className="hover:text-gray-300 transition-colors"
//             >
//               Work with us
//             </Link>
//             <Link
//               href="#pricing"
//               onClick={scrollToSection("pricing")}
//               className="hover:text-gray-300 transition-colors"
//             >
//               Pricing
//             </Link>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 rounded-full bg-green-500"></div>
//               <span className="text-sm">Status</span>
//             </div>
//             <Search className="w-5 h-5" />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-white font-bold text-xl md:text-2xl tracking-tight"
          >
            Townhall Media
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              onClick={scrollToSection("services")}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Solutions
            </Link>
            <Link
              href="#works"
              onClick={scrollToSection("works")}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Our Works
            </Link>
            <Link
              href="#about"
              onClick={scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              onClick={scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Work with us
            </Link>
            <Link
              href="#pricing"
              onClick={scrollToSection("pricing")}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 text-white/80">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs">Status</span>
            </div>
            <Search className="hidden md:block w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
            <ModeToggle />
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6"
            >
              Let&apos;s Talk
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="#services"
              onClick={scrollToSection("services")}
              className="text-white/80 hover:text-white transition-colors py-2 text-lg"
            >
              Solutions
            </Link>
            <Link
              href="#works"
              onClick={scrollToSection("works")}
              className="text-white/80 hover:text-white transition-colors py-2 text-lg"
            >
              Our Works
            </Link>
            <Link
              href="#about"
              onClick={scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors py-2 text-lg"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              onClick={scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors py-2 text-lg"
            >
              Work with us
            </Link>
            <Link
              href="#pricing"
              onClick={scrollToSection("pricing")}
              className="text-white/80 hover:text-white transition-colors py-2 text-lg"
            >
              Pricing
            </Link>
            <div className="flex items-center gap-1 text-white/80 py-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs">Status</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
