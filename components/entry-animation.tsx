"use client"

import { useState, useRef, useEffect, useCallback } from "react"

export function EntryAnimation({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const finish = useCallback(() => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setVisible(false)
      onComplete()
    }, 100)
  }, [fading, onComplete])

  useEffect(() => {
    // Safety fallback: if video hasn't ended in 8 seconds, skip it
    const timeout = setTimeout(() => {
      finish()
    }, 8000)
    return () => clearTimeout(timeout)
  }, [finish])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#010124] transition-opacity duration-150 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/entry30-PqVN3aoMpIUcuHM5kh7RDoua56kA2n.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finish}
        className="h-full w-full object-contain"
      />

      <button
        onClick={finish}
        className="absolute bottom-8 right-8 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
      >
        Skip Intro
      </button>
    </div>
  )
}
