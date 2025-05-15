"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-neutral-700 ">
        <div className="container mx-auto text-white py-4 px-6 flex justify-between items-center">
          <div className="font-bold text-lg">Townhall Media</div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button
              variant="default"
              className="bg-black text-white hover:bg-zinc-800"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
      <nav
        className={`bg-black/90 transition-all ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto  text-white py-3 px-6 flex justify-between items-center">
          <div className="flex space-x-8">
            <Link
              href="#solutions"
              onClick={scrollToSection("solutions")}
              className="hover:text-gray-300 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#our-works"
              onClick={scrollToSection("our-works")}
              className="hover:text-gray-300 transition-colors"
            >
              Our works
            </Link>
            <Link
              href="#about-us"
              onClick={scrollToSection("about-us")}
              className="hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#work-with-us"
              onClick={scrollToSection("work-with-us")}
              className="hover:text-gray-300 transition-colors"
            >
              Work with us
            </Link>
            <Link
              href="#pricing"
              onClick={scrollToSection("pricing")}
              className="hover:text-gray-300 transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Status</span>
            </div>
            <Search className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </header>
  );
}
