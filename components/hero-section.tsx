import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-[#1b1e32] text-white pt-32 pb-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Full-Funnel Digital Marketing
          </h1>
          <p className="text-xl max-w-lg">
            For every business, there are Customers near and far, we help you
            find them, connect them and keep them coming Back
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 mt-4">
            Let&apos;s Talk Impact
          </Button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end ">
          <div className="relative w-full max-w-lg aspect-[3/3] ">
            <Image
              src="hero-image.png"
              alt="Digital Marketing on Mobile"
              fill
              className="object-fill "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
