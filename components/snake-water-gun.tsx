"use client"

import { useState } from "react"

const choices = ["Snake", "Water", "Gun"] as const
type Choice = (typeof choices)[number]

const icons: Record<Choice, string> = {
  Snake: "\uD83D\uDC0D",
  Water: "\uD83D\uDCA7",
  Gun: "\uD83D\uDD2B",
}

function getResult(player: Choice, computer: Choice): "Win" | "Lose" | "Tie" {
  if (player === computer) return "Tie"
  if (
    (player === "Snake" && computer === "Water") ||
    (player === "Water" && computer === "Gun") ||
    (player === "Gun" && computer === "Snake")
  ) {
    return "Win"
  }
  return "Lose"
}

export function SnakeWaterGun() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null)
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null)
  const [result, setResult] = useState<string>("")
  const [score, setScore] = useState({ wins: 0, ties: 0, losses: 0 })

  const play = (choice: Choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)]
    const gameResult = getResult(choice, compChoice)

    setPlayerChoice(choice)
    setComputerChoice(compChoice)
    setResult(gameResult)

    setScore((prev) => ({
      ...prev,
      wins: prev.wins + (gameResult === "Win" ? 1 : 0),
      ties: prev.ties + (gameResult === "Tie" ? 1 : 0),
      losses: prev.losses + (gameResult === "Lose" ? 1 : 0),
    }))
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-4">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-xl bg-white/10 text-white transition-all hover:bg-[#FFD700]/20 hover:scale-105 active:scale-95"
          >
            <span className="text-3xl">{icons[choice]}</span>
            <span className="text-xs font-medium">{choice}</span>
          </button>
        ))}
      </div>

      {playerChoice && computerChoice && (
        <div className="flex flex-col items-center gap-3 rounded-xl bg-white/5 p-6 text-center">
          <div className="flex items-center gap-6 text-2xl">
            <span>
              {icons[playerChoice]} <span className="text-sm text-white/60">You</span>
            </span>
            <span className="text-white/40">vs</span>
            <span>
              {icons[computerChoice]} <span className="text-sm text-white/60">CPU</span>
            </span>
          </div>
          <span
            className={`text-lg font-bold ${
              result === "Win"
                ? "text-emerald-400"
                : result === "Lose"
                  ? "text-red-400"
                  : "text-[#FFD700]"
            }`}
          >
            {result === "Win"
              ? "You Win!"
              : result === "Lose"
                ? "You Lose!"
                : "It's a Tie!"}
          </span>
        </div>
      )}

      <div className="flex gap-6 text-sm text-white/70">
        <span>
          Wins: <span className="font-bold text-emerald-400">{score.wins}</span>
        </span>
        <span>
          Ties: <span className="font-bold text-[#FFD700]">{score.ties}</span>
        </span>
        <span>
          Losses: <span className="font-bold text-red-400">{score.losses}</span>
        </span>
      </div>
    </div>
  )
}
