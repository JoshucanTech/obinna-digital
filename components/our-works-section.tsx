import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Project data to match the image exactly
const projects = [
  {
    id: 1,
    client: "Mogrex Nigeria Ltd",
    location: "Abuja",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 2,
    client: "MaximusFx",
    location: "Abuja",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 3,
    client: "Exco Trader",
    location: "Abuja",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 4,
    client: "Mogrex Nigeria Ltd",
    location: "Abuja",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 5,
    client: "MaximusFx",
    location: "Abuja",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 6,
    client: "Exco Trader",
    location: "Abuja",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
];

export default function OurWorksSection() {
  return (
    <section id="our-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Our Works</h2>

        <div className="flex justify-start mb-10">
          <Button
            variant="outline"
            className="rounded-full  flex gap-12 bg-gray-200 hover:bg-gray-300"
          >
            <span className="font-bold text-slate-900 ">See All Our Works</span>
            <div className="bg-[#1A2238] rounded-full p-3">
              <ArrowRight className="h-full w-6 text-white" />
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black rounded-lg overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src="/our-work.png"
                  alt={`${project.client} project`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-bold">{project.client}</h3>
                  <span className="text-white">{project.location}</span>
                </div>
                <p className="text-white text-xs leading-tight">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <Button className="bg-[#1A2238] text-white hover:bg-[#2a3756]">
            Let&apos;s Talk Impact
          </Button>
        </div>
      </div>
    </section>
  );
}
