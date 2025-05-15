import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExpertsSection() {
  return (
    <section id="about" className="section-padding bg-[#0A1428]">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Highly effective Digital Marketing Experts</h2>
          <p className="text-gray-300 max-w-3xl">
            With over 12 million hours of expertise and a team of 35 dedicated professionals, we specialize in strategy,
            design, and creating brilliant projects. Our diverse team of specialists ensures that no matter the
            challenge, we have the solutions to meet your needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=320&width=500" alt="Team meeting" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=320&width=500"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#about" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
            <ArrowRight className="text-white" size={20} />
          </Link>
          <span className="text-sm text-gray-400">LEARN MORE ABOUT US</span>
        </div>
      </div>
    </section>
  )
}
