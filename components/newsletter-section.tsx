"use client"

import type React from "react"

import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log({ email })
  }

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#0F1A33] border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">Join Our Newsletter</h3>
            <p className="text-gray-400 text-sm">Stay updated with our latest news and offers</p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow md:w-64 px-4 py-2 bg-[#1A2747] rounded-l-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-white text-[#0F1A33] px-4 py-2 rounded-r-md font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
