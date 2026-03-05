"use client"

import Image from "next/image"
import { ParticleBackground } from "./particle-background"
import { TypedText } from "./typed-text"
import { ArrowRight, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#010124]"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-6 py-32 md:flex-row md:justify-between">
        {/* Text Content - appears first on mobile, left on desktop */}
        <div className="order-1 flex-1 text-center md:text-left">
          <p className="mb-2 text-lg font-medium text-white/70 font-serif">
            {"Hi There, \uD83D\uDC4B"}
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {"I'm "}
            <span className="text-[#FF7F50]">Sujeet Kumar</span>
          </h1>
          <p className="mb-8 text-xl font-medium text-white/80 md:text-2xl">
            <TypedText />
          </p>

          <div className="mb-8 flex items-center justify-center gap-4 md:justify-start">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById("about")
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70
                  window.scrollTo({ top, behavior: "instant" as ScrollBehavior })
                }
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF7F50] px-7 py-3 font-semibold text-white transition-all hover:bg-[#e06a3f] hover:shadow-lg"
            >
              Explore More <ArrowRight size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5 md:justify-start">
            <a
              href="https://www.linkedin.com/in/sujeet-kumar-51396236a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#FF7F50] hover:text-[#FF7F50]"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-lg" />
            </a>
            <a
              href="https://github.com/Sujeet-Kumar-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#FF7F50] hover:text-[#FF7F50]"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-lg" />
            </a>
            <a
              href="mailto:sujeetpawan.14@gmail.com"
              onClick={(e) => {
                e.preventDefault()
                window.open("mailto:sujeetpawan.14@gmail.com", "_blank")
                navigator.clipboard?.writeText("sujeetpawan.14@gmail.com")
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#FF7F50] hover:text-[#FF7F50]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Hero Image - appears second on mobile, right on desktop */}
        <div className="order-2 flex-shrink-0">
          <div className="animate-float relative h-[240px] w-[240px] overflow-hidden rounded-full border-4 border-[#FF7F50]/30 shadow-2xl md:h-[340px] md:w-[340px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sujeet%20profile%20pic-sGyyFLDNiUoDAzdJSWHXbSyBVvOW8c.jpeg"
              alt="Sujeet Kumar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
