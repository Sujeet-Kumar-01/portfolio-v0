"use client"

import Image from "next/image"
import { Mail, MapPin, Download } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const RESUME_URL =
  "https://blobs.vusercontent.net/blob/Sujeet_Kumar_Resume-3E8h0rBMxRNCzNN4Iaf0VFejdROhF0.pdf"

export function AboutSection() {
  return (
    <section id="about" className="bg-[#E5ECFB] py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-[#012970] md:text-4xl">
            About Me
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="relative h-[320px] w-[280px] overflow-hidden rounded-2xl shadow-xl ring-4 ring-[#2506AD]/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red%20h-cXYVwPA5XgbX6yiIWMNFiLXBE7HPjI.jpeg"
                  alt="Sujeet Kumar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#FF7F50]">
                Who I Am
              </p>
              <h3 className="mb-4 text-xl font-bold text-[#012970]">
                B.Tech CSE Student | Innovation | Development
              </h3>
              <p className="mb-6 leading-relaxed text-[#555]">
                {
                  "I am a B.Tech CSE student at IIIT Kalyani, passionate about Innovation and technology-driven development. I enjoy building practical solutions and exploring new technologies. I have hands-on experience with web development using React, JavaScript, HTML, and CSS. I also love working on projects that solve real-world problems and contribute to open source."
                }
              </p>

              <div className="mb-6 flex flex-col gap-3">
                <a
                  href="mailto:sujeetpawan.14@gmail.com"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open("mailto:sujeetpawan.14@gmail.com", "_blank")
                    navigator.clipboard?.writeText("sujeetpawan.14@gmail.com")
                  }}
                  className="flex items-center gap-3 text-[#555] transition-colors hover:text-[#2506AD]"
                >
                  <Mail size={18} className="text-[#2506AD]" />
                  <span className="text-sm">sujeetpawan.14@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-[#555]">
                  <MapPin size={18} className="text-[#2506AD]" />
                  <span className="text-sm">IIIT Kalyani, West Bengal, India</span>
                </div>
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2506AD] px-6 py-3 font-semibold text-white transition-all hover:bg-[#3B28CC] hover:shadow-lg"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
