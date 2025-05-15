import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WorksSection() {
  const projects = [
    {
      title: "Megabus Nigeria Ltd",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Digital Marketing", "Social Media", "Advertising", "SEO", "Content Creation"],
      link: "#",
    },
    {
      title: "Macdonalds",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Digital Marketing", "Social Media", "Advertising", "SEO", "Content Creation"],
      link: "#",
    },
    {
      title: "Exco Trader",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Digital Marketing", "Social Media", "Advertising", "SEO", "Content Creation"],
      link: "#",
    },
  ]

  return (
    <section id="works" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Our Works</h2>

        <div className="flex items-center gap-4 mb-12">
          <Link href="#works" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
            <ArrowRight className="text-white" size={20} />
          </Link>
          <span className="text-sm text-gray-400">SEE ALL OUR WORKS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1A2747] rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-xs text-gray-400 mb-4">{project.tags.join(" • ")}</p>
                <Link href={project.link} className="text-sm text-blue-400 hover:text-blue-300">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="#works" className="inline-block btn-primary">
            LEARN MORE PROJECTS
          </Link>
        </div>
      </div>
    </section>
  )
}
