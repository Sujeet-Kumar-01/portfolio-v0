"use client"

import { Code2, Cpu, Layers } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const exploringItems = [
  { label: "Full-stack Development", icon: Layers, desc: "Building end-to-end apps" },
  { label: "Python (Advanced)", icon: Cpu, desc: "ML, automation, scripting" },
  { label: "New Frameworks & Technologies", icon: Code2, desc: "Next.js, Tailwind, more" },
]

export function ExploringSection() {
  return (
    <section id="learning" className="bg-[#E5ECFB] py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-[#012970] md:text-4xl">
            Currently Exploring
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            {exploringItems.map((item) => (
              <div
                key={item.label}
                className="flex w-full max-w-xs items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-auto"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#2506AD]/10">
                  <item.icon size={22} className="text-[#2506AD]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#012970]">{item.label}</span>
                  <span className="text-xs text-[#555]">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
