"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code2, Gamepad2 } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const projects = [
  {
    title: "LegalEase (WebApp)",
    type: "Web App",
    description:
      "AI-powered legal simplification tool that translates complex legal documents into simple, easy-to-understand language in multiple languages.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/legalease-XXcCsykQc6T49Jiwskys7kh0ilbkY5.png",
    hasImage: true,
    links: [
      {
        label: "View",
        href: "https://clarifyflow.streamlit.app/",
        icon: ExternalLink,
      },
    ],
    badges: [],
  },
  {
    title: "Portfolio Website",
    type: "Web App",
    description:
      "A modern, interactive portfolio website with animated particle backgrounds, typed text effects, and smooth scroll animations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IJTpTV6WvW5eR29JqJdAnQlIbydTdM.png",
    hasImage: true,
    links: [
      { label: "View", href: "#home", icon: ExternalLink },
      {
        label: "Code",
        href: "https://github.com/Sujeet-Kumar-01",
        icon: Code2,
      },
    ],
    badges: [],
  },
  {
    title: "Mini Games",
    type: "Web App",
    description: "",
    image: null,
    hasImage: false,
    gradient: "from-[#010124] to-[#3B28CC]",
    links: [],
    badges: ["Snake-Water-Gun", "Number Guessing"],
    gameLink: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#010124] py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Projects
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image / Gradient */}
                <div className="relative h-[200px] w-full overflow-hidden">
                  {project.hasImage && project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
                    >
                      {project.gameLink ? (
                        <Gamepad2 size={48} className="text-white/40" />
                      ) : (
                        <Code2 size={48} className="text-white/40" />
                      )}
                    </div>
                  )}
                </div>

                {/* Title Bar */}
                <div className="flex items-center justify-between bg-[#FFD700] px-4 py-3">
                  <span className="font-bold text-[#010124]">
                    {project.title}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-1 text-xs font-semibold text-[#010124] transition-colors hover:text-[#2506AD]"
                      >
                        <link.icon size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                  {project.badges.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-[#2506AD]/30 px-3 py-1 text-xs font-medium text-[#FF7F50]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
