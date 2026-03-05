"use client"

import { useRef, useCallback } from "react"
import { SectionReveal } from "./section-reveal"

const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "UI/UX Design", icon: "devicon-figma-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
]

function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-[#FF7F50]/30 hover:bg-white/10"
      style={{ transformStyle: "preserve-3d" }}
    >
      <i className={`${skill.icon} text-4xl text-white`} />
      <span className="text-sm font-medium text-white/90">{skill.name}</span>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #2506AD 0%, #3B28CC 50%, #010124 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Skills & Technologies
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
