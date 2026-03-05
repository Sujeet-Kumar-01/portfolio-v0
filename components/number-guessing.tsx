"use client"

import { useState, useRef } from "react"

interface Guess {
  value: number
  hint: "correct" | "high" | "low"
}

export function NumberGuessing() {
  const targetRef = useRef(Math.floor(Math.random() * 100) + 1)
  const [input, setInput] = useState("")
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [won, setWon] = useState(false)

  const handleGuess = () => {
    const num = parseInt(input)
    if (isNaN(num) || num < 1 || num > 100) return

    let hint: Guess["hint"] = "correct"
    if (num > targetRef.current) hint = "high"
    else if (num < targetRef.current) hint = "low"

    setGuesses((prev) => [...prev, { value: num, hint }])
    setInput("")

    if (hint === "correct") setWon(true)
  }

  const resetGame = () => {
    targetRef.current = Math.floor(Math.random() * 100) + 1
    setGuesses([])
    setWon(false)
    setInput("")
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-white/60">
        {"I'm thinking of a number between 1 and 100..."}
      </p>

      {!won && (
        <div className="flex items-center gap-3">
          <input
            type="number"
            min={1}
            max={100}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            placeholder="Enter your guess"
            className="w-48 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center text-white outline-none placeholder:text-white/40 focus:border-[#FFD700]"
          />
          <button
            onClick={handleGuess}
            className="rounded-lg bg-[#FFD700] px-5 py-3 font-semibold text-[#010124] transition-all hover:bg-[#FFD700]/80"
          >
            Guess
          </button>
        </div>
      )}

      {won && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-lg font-bold text-emerald-400">
            Correct! The number was {targetRef.current}!
          </p>
          <p className="text-sm text-white/60">
            You got it in {guesses.length} attempt{guesses.length > 1 ? "s" : ""}!
          </p>
          <button
            onClick={resetGame}
            className="rounded-lg bg-[#FFD700] px-5 py-3 font-semibold text-[#010124] transition-all hover:bg-[#FFD700]/80"
          >
            New Game
          </button>
        </div>
      )}

      {guesses.length > 0 && (
        <div className="flex max-h-[200px] flex-wrap justify-center gap-2 overflow-y-auto">
          {guesses.map((g, i) => (
            <span
              key={i}
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                g.hint === "correct"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : g.hint === "high"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {g.value} {g.hint === "high" ? "\u2191" : g.hint === "low" ? "\u2193" : "\u2713"}
            </span>
          ))}
        </div>
      )}

      {!won && guesses.length > 0 && (
        <p className="text-sm text-white/50">
          Attempts: {guesses.length} | Last hint:{" "}
          <span
            className={
              guesses[guesses.length - 1].hint === "high"
                ? "text-red-400"
                : "text-blue-400"
            }
          >
            {guesses[guesses.length - 1].hint === "high"
              ? "Too High"
              : "Too Low"}
          </span>
        </p>
      )}
    </div>
  )
}
