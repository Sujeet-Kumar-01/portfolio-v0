"use client"

import Image from "next/image"
import { MapPin, GraduationCap } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const educationData = [
  {
    institution: "IIIT Kalyani",
    degree: "B.Tech - Computer Science & Engineering",
    status: "Currently Pursuing",
    statusColor: "bg-emerald-500",
    location: "Kalyani, West Bengal",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IIIT%20Kalyani-OuE8U6skaLCCMpEfTsJ506CpzQSyBp.jpeg",
  },
  {
    institution: "Mahaviri Saraswati Vidya Mandir",
    degree: "Schooling",
    status: "Completed",
    statusColor: "bg-blue-500",
    location: "Bihar, India",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mahaviri%201-cLToJaFhI1UkQzmr2hqilMC7pmzy66.jpg",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="bg-[#E5ECFB] py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-[#012970] md:text-4xl">
            Education
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <SectionReveal key={edu.institution}>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">
                {/* Image */}
                <div className="relative h-[200px] w-full overflow-hidden md:h-auto md:w-[400px]">
                  <Image
                    src={edu.image}
                    alt={edu.institution}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#012970]/10 transition-opacity group-hover:opacity-0" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <div className="mb-2 flex items-center gap-2 text-[#2506AD]">
                    <GraduationCap size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {index === 0 ? "Higher Education" : "School"}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-[#012970]">
                      {edu.institution}
                    </h3>
                    <span
                      className={`${edu.statusColor} rounded-full px-3 py-1 text-xs font-semibold text-white`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="mb-3 text-[#555]">{edu.degree}</p>
                  <div className="flex items-center gap-2 text-sm text-[#555]">
                    <MapPin size={14} className="text-[#2506AD]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
