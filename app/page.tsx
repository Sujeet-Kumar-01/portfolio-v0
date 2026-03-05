"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { EntryAnimation } from "@/components/entry-animation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExploringSection } from "@/components/exploring-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && (
        <EntryAnimation onComplete={() => setIntroComplete(true)} />
      )}
      <main
        className={
          introComplete
            ? "opacity-100 transition-opacity duration-150"
            : "pointer-events-none opacity-0"
        }
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ExploringSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
