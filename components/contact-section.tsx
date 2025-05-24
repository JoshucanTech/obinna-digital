// import { Phone, Mail, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export default function ContactSection() {
//   return (
//     <section id="contact-us" className="py-20 bg-white text-neutral-900">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold mb-10">Contact Us</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="flex items-start gap-3">
//             <div className="bg-gray-200 rounded-full p-2 mt-1">
//               <Phone className="h-5 w-5 text-gray-600" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-1">Phone</h3>
//               <p className="text-sm text-gray-600">+2348066723433</p>
//               <p className="text-sm text-gray-600">+2348235552</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <div className="bg-gray-200 rounded-full p-2 mt-1">
//               <Mail className="h-5 w-5 text-gray-600" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-1">Email</h3>
//               <p className="text-sm text-gray-600">tradehall@gmail.com</p>
//               <p className="text-sm text-gray-600">tradehall@outlook.com</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <div className="bg-gray-200 rounded-full p-2 mt-1">
//               <MapPin className="h-5 w-5 text-gray-600" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-1">Address</h3>
//               <p className="text-sm text-gray-600">
//                 Sector 2 Street, Wuse Zone
//               </p>
//               <p className="text-sm text-gray-600">5, Abuja Nigeria</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div className="bg-gray-300 rounded-md p-6">
//             <form>
//               <div className="mb-4">
//                 <label
//                   htmlFor="fullName"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Enter Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="Enter Your Full Name"
//                   className="w-full p-3 bg-gray-100 rounded-md"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Enter Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   placeholder="Enter Phone Number"
//                   className="w-full p-3 bg-gray-100 rounded-md"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Enter Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Enter Your Email"
//                   className="w-full p-3 bg-gray-100 rounded-md"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="description"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   placeholder="Enter Your Description"
//                   rows={5}
//                   className="w-full p-3 bg-gray-100 rounded-md"
//                 ></textarea>
//               </div>

//               <Button
//                 type="submit"
//                 className="bg-gray-400 text-black hover:bg-gray-500"
//               >
//                 Send
//               </Button>
//             </form>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-2">FAQs</h3>
//             <p className="text-gray-600 mb-6">Frequently Asked Questions</p>

//             <Accordion type="single" collapsible className="w-full">
//               {[1, 2, 3, 4].map((item) => (
//                 <AccordionItem
//                   key={item}
//                   value={`item-${item}`}
//                   className="border-b border-gray-200 py-2"
//                 >
//                   <AccordionTrigger className="flex justify-between items-center w-full text-left font-normal">
//                     What does Tradehall do?
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <p className="py-2 text-gray-600">
//                       Tradehall provides comprehensive digital marketing
//                       solutions to help businesses grow their online presence
//                       and connect with customers.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
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
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="flex items-start gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 mt-1 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">+2348066723433</p>
              <p className="text-gray-600 dark:text-gray-300">+2348235552</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4 mt-1 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30 transition-colors">
              <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                tradehall@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                tradehall@outlook.com
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 mt-1 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
              <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sector 2 Street, Wuse Zone
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                5, Abuja Nigeria
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Send us a message
              </h3>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    placeholder="Enter Your Full Name"
                    className="w-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter Phone Number"
                    className="w-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Enter Your Message"
                    rows={5}
                    className="w-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  ></Textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                FAQs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Frequently Asked Questions
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-200 dark:border-gray-700 py-2"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    What services does Townhall Media offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-4 text-gray-600 dark:text-gray-300">
                      Townhall Media offers a comprehensive suite of digital
                      marketing services including SEO, social media marketing,
                      content creation, email marketing, PPC advertising, web
                      design, and brand content creation, email marketing, PPC
                      advertising, web design, and brand development. We provide
                      end-to-end solutions to help businesses establish and grow
                      their online presence.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-200 dark:border-gray-700 py-2"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    How do you measure the success of your marketing campaigns?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-4 text-gray-600 dark:text-gray-300">
                      We use a combination of key performance indicators (KPIs)
                      tailored to your specific goals. These may include website
                      traffic, conversion rates, engagement metrics, lead
                      generation, ROI, and more. We provide regular reports with
                      detailed analytics to track progress.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-b border-gray-200 dark:border-gray-700 py-2"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    What industries do you specialize in?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-4 text-gray-600 dark:text-gray-300">
                      We have experience working with clients across various
                      industries including finance, healthcare, e-commerce,
                      education, technology, and more. Our diverse team brings
                      specialized knowledge to each sector we serve.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-b border-gray-200 dark:border-gray-700 py-2"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    How long does it take to see results from digital marketing?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-4 text-gray-600 dark:text-gray-300">
                      Results vary depending on the strategies implemented and
                      your industry. Some tactics like PPC can show immediate
                      results, while SEO and content marketing typically take
                      3-6 months to demonstrate significant impact. We focus on
                      both short-term wins and long-term sustainable growth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
