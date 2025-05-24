// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Project data to match the image exactly
// const projects = [
//   {
//     id: 1,
//     client: "Mogrex Nigeria Ltd",
//     location: "Abuja",
//     description:
//       "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
//   },
//   {
//     id: 2,
//     client: "MaximusFx",
//     location: "Abuja",
//     description:
//       "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
//   },
//   {
//     id: 3,
//     client: "Exco Trader",
//     location: "Abuja",
//     description:
//       "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
//   },
//   {
//     id: 4,
//     client: "Mogrex Nigeria Ltd",
//     location: "Abuja",
//     description:
//       "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
//   },
//   {
//     id: 5,
//     client: "MaximusFx",
//     location: "Abuja",
//     description:
//       "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
//   },
//   {
//     id: 6,
//     client: "Exco Trader",
//     location: "Abuja",
//     description:
//       "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
//   },
// ];

// export default function WorksSection() {
//   return (
//     <section id="our-works" className="py-20 text-neutral-900 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold mb-6">Our Works</h2>

//         <div className="flex justify-start mb-10">
//           <Button
//             variant="outline"
//             className="rounded-full  flex gap-12 bg-gray-200 hover:bg-gray-300"
//           >
//             <span className="font-bold text-slate-900 ">See All Our Works</span>
//             <div className="bg-[#1A2238] rounded-full p-3">
//               <ArrowRight className="h-full w-6 text-white" />
//             </div>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-black rounded-lg overflow-hidden"
//             >
//               <div className="relative h-60">
//                 <Image
//                   src="/our-work.png"
//                   alt={`${project.client} project`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-white font-bold">{project.client}</h3>
//                   <span className="text-white">{project.location}</span>
//                 </div>
//                 <p className="text-white text-xs leading-tight">
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-start">
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
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Project data to match the image exactly
const projects = [
  {
    id: 1,
    client: "Mogrex Nigeria Ltd",
    location: "Abuja",
    category: "marketing",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 2,
    client: "MaximusFx",
    location: "Abuja",
    category: "design",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 3,
    client: "Exco Trader",
    location: "Abuja",
    category: "branding",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 4,
    client: "Mogrex Nigeria Ltd",
    location: "Abuja",
    category: "marketing",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 5,
    client: "MaximusFx",
    location: "Abuja",
    category: "design",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
  {
    id: 6,
    client: "Exco Trader",
    location: "Abuja",
    category: "branding",
    description:
      "Digital Marketing, Search Engine Optimisation, Landing Pages, Social Media Advertising, UI/UX Design, Email Marketing, Content Creation, Training of Sales Team, Lead Generation & Brand Image and Awareness Campaigns",
  },
];

export default function WorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("works");
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

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="works" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 dark:text-white">
            Our Works
          </h2>

          <Button
            variant="outline"
            className="rounded-full px-6 py-5 h-auto flex items-center gap-2 group border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <span className="font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              See All Our Works
            </span>
            <div className="bg-blue-600 rounded-full p-2 transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </Button>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-full mb-8 flex justify-center">
              <TabsTrigger
                value="all"
                onClick={() => setFilter("all")}
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                onClick={() => setFilter("marketing")}
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger
                value="design"
                onClick={() => setFilter("design")}
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                value="branding"
                onClick={() => setFilter("branding")}
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6"
              >
                Branding
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src="/our-work.png"
                        alt={`${project.client} project`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.client}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                        <Button
                          variant="ghost"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto"
                        >
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src="/our-work.png"
                        alt={`${project.client} project`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.client}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                        <Button
                          variant="ghost"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto"
                        >
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src="/our-work.png"
                        alt={`${project.client} project`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.client}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                        <Button
                          variant="ghost"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto"
                        >
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="branding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src="/our-work.png"
                        alt={`${project.client} project`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.client}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.location}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                        <Button
                          variant="ghost"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto"
                        >
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 h-auto">
            Let&apos;s Talk Impact
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
