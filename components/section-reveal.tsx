"use client"

import { useInView } from "@/hooks/use-in-view"

export function SectionReveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}
