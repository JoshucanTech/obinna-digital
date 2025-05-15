import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-us" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold  mb-6">
          Highly effective Digital Marketing Experts
        </h2>
        <p className="text-lg max-w-3xl  mb-10">
          With over 1.2 million hours of expertise and a team of 35 dedicated
          professionals, we bring a wealth of knowledge and creativity to every
          project. Our diverse team of specialists ensures that no matter the
          challenge, we have The solutions to meet your needs
        </p>

        <div className="flex  mb-10">
          <Button
            variant="outline"
            className="rounded-full  flex gap-12 bg-gray-200 hover:bg-gray-300"
          >
            <span className="font-bold">About Us</span>
            <div className="bg-[#1A2238] rounded-full p-3">
              <ArrowRight className="h-full w-6 text-white" />
            </div>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
          <div className="relative w-full md:w-1/2 h-72 md:h-80">
            <Image
              src="/about-us.png"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2 h-72 md:h-80">
            <Image
              src="/about-us.png"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex ">
          <Button className="bg-[#1A2238] text-white hover:bg-[#2a3756]">
            Let&apos;s Talk Impact
          </Button>
        </div>
      </div>
    </section>
  );
}
