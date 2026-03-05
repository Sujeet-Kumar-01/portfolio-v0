"use client"

import { useState } from "react"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import { SectionReveal } from "./section-reveal"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-[#012970] md:text-4xl">
            Get In Touch
          </h2>
        </SectionReveal>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* 3D Animation */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center">
              {/* Orbiting dots */}
              <div className="absolute inset-0">
                <div className="animate-orbit1 absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-[#FF7F50]" />
                <div className="animate-orbit2 absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-[#2506AD]" />
                <div className="animate-orbit3 absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#FFD700]" />
              </div>

              {/* Core */}
              <div className="animate-pulse-glow flex h-20 w-20 items-center justify-center rounded-full bg-[#2506AD]">
                <Send size={28} className="text-white" />
              </div>

              {/* Contact Links */}
              <div className="absolute -bottom-4 flex gap-4">
                <a
                  href="mailto:sujeetpawan.14@gmail.com"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open("mailto:sujeetpawan.14@gmail.com", "_blank")
                    navigator.clipboard?.writeText("sujeetpawan.14@gmail.com")
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5ECFB] text-[#2506AD] transition-all hover:bg-[#2506AD] hover:text-white"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujeet-kumar-51396236a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5ECFB] text-[#2506AD] transition-all hover:bg-[#2506AD] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://github.com/Sujeet-Kumar-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5ECFB] text-[#2506AD] transition-all hover:bg-[#2506AD] hover:text-white"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center gap-3 rounded-lg border border-[#d1d9e6] px-4 py-3 focus-within:border-[#2506AD] focus-within:ring-2 focus-within:ring-[#2506AD]/20">
                <User size={18} className="text-[#2506AD]" />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="flex-1 bg-transparent text-[#222] outline-none placeholder:text-[#999]"
                />
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-[#d1d9e6] px-4 py-3 focus-within:border-[#2506AD] focus-within:ring-2 focus-within:ring-[#2506AD]/20">
                <Mail size={18} className="text-[#2506AD]" />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="flex-1 bg-transparent text-[#222] outline-none placeholder:text-[#999]"
                />
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-[#d1d9e6] px-4 py-3 focus-within:border-[#2506AD] focus-within:ring-2 focus-within:ring-[#2506AD]/20">
                <MessageSquare size={18} className="mt-1 text-[#2506AD]" />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="flex-1 resize-none bg-transparent text-[#222] outline-none placeholder:text-[#999]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2506AD] px-6 py-3 font-semibold text-white transition-all hover:bg-[#3B28CC] hover:shadow-lg"
              >
                <Send size={16} />
                Send Message
              </button>

              {submitted && (
                <div className="animate-fade-in-up rounded-lg bg-emerald-50 p-4 text-center font-medium text-emerald-600">
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
