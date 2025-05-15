"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What does TownHall do?",
      answer:
        "We provide full-funnel digital marketing services including SEO, PPC, social media marketing, content creation, and more.",
    },
    {
      question: "How does TownHall do?",
      answer:
        "We use data-driven strategies, creative design, and industry expertise to deliver results for our clients.",
    },
    {
      question: "What does TownHall do?",
      answer:
        "We help businesses grow their online presence, attract more customers, and increase revenue through digital marketing.",
    },
    {
      question: "What does TownHall do?",
      answer:
        "Our team of experts works closely with clients to develop customized marketing strategies that meet their specific goals and needs.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-[#0A1428]">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button
                className="flex justify-between items-center w-full text-left py-2"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openIndex === index && <div className="mt-2 text-gray-300">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
