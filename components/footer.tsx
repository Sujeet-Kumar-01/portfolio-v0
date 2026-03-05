"use client"

import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#010124] py-10">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-8 h-px bg-white/10" />

        <div className="text-center">
          <p className="mb-2 text-lg font-semibold text-white">
            Designed & Built by Sujeet Kumar
          </p>
          <p className="mb-6 text-sm text-white/50">
            {"B.Tech CSE \u00B7 IIIT Kalyani"}
          </p>

          <div className="flex items-center justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/sujeet-kumar-51396236a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#FF7F50] hover:text-[#FF7F50]"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://github.com/Sujeet-Kumar-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#FF7F50] hover:text-[#FF7F50]"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="mailto:sujeetpawan.14@gmail.com"
              onClick={(e) => {
                e.preventDefault()
                window.open("mailto:sujeetpawan.14@gmail.com", "_blank")
                navigator.clipboard?.writeText("sujeetpawan.14@gmail.com")
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#FF7F50] hover:text-[#FF7F50]"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
