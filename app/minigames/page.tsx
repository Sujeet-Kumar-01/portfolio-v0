"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Gamepad2 } from "lucide-react"
import { SnakeWaterGun } from "@/components/snake-water-gun"
import { NumberGuessing } from "@/components/number-guessing"

export default function MiniGamesPage() {
  const [activeGame, setActiveGame] = useState<"swg" | "number">("swg")

  return (
    <div className="min-h-screen bg-[#080820]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0D0D2B]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Gamepad2 size={24} className="text-[#FFD700]" />
            <span className="text-lg font-bold text-white">Mini Games Hub</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="py-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          Mini Games Hub
        </h1>
        <p className="text-white/50">
          Take a break and have some fun with these browser games!
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="mx-auto max-w-[600px] px-6">
        <div className="mb-8 flex rounded-xl bg-[#0D0D2B] p-1">
          <button
            onClick={() => setActiveGame("swg")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              activeGame === "swg"
                ? "bg-[#FFD700] text-[#010124]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Snake-Water-Gun
          </button>
          <button
            onClick={() => setActiveGame("number")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              activeGame === "number"
                ? "bg-[#FFD700] text-[#010124]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Number Guessing
          </button>
        </div>

        {/* Game Panel */}
        <div className="rounded-2xl bg-[#0D0D2B] p-8">
          {activeGame === "swg" ? <SnakeWaterGun /> : <NumberGuessing />}
        </div>
      </div>
    </div>
  )
}
