import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactSection() {
  return (
    <section id="contact-us" className="py-20 bg-white text-neutral-900">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-3">
            <div className="bg-gray-200 rounded-full p-2 mt-1">
              <Phone className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+2348066723433</p>
              <p className="text-sm text-gray-600">+2348235552</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-gray-200 rounded-full p-2 mt-1">
              <Mail className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-gray-600">tradehall@gmail.com</p>
              <p className="text-sm text-gray-600">tradehall@outlook.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-gray-200 rounded-full p-2 mt-1">
              <MapPin className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-sm text-gray-600">
                Sector 2 Street, Wuse Zone
              </p>
              <p className="text-sm text-gray-600">5, Abuja Nigeria</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gray-300 rounded-md p-6">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Enter Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter Your Full Name"
                  className="w-full p-3 bg-gray-100 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Enter Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  className="w-full p-3 bg-gray-100 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 bg-gray-100 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter Your Description"
                  rows={5}
                  className="w-full p-3 bg-gray-100 rounded-md"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="bg-gray-400 text-black hover:bg-gray-500"
              >
                Send
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">FAQs</h3>
            <p className="text-gray-600 mb-6">Frequently Asked Questions</p>

            <Accordion type="single" collapsible className="w-full">
              {[1, 2, 3, 4].map((item) => (
                <AccordionItem
                  key={item}
                  value={`item-${item}`}
                  className="border-b border-gray-200 py-2"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full text-left font-normal">
                    What does Tradehall do?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-2 text-gray-600">
                      Tradehall provides comprehensive digital marketing
                      solutions to help businesses grow their online presence
                      and connect with customers.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
