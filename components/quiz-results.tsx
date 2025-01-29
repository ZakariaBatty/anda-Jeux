"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, HomeIcon, Star } from "lucide-react"
import type { QuizResults } from "@/types/quiz"

interface QuizResultsProps {
  results: QuizResults
  onRestart: () => void
  onHome: () => void
}

export function QuizResults({ results, onRestart, onHome }: QuizResultsProps) {
  const totalStars = 5
  const earnedStars = Math.round((results.score / results.totalQuestions) * totalStars)

  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center">
      <div className="w-full flex justify-between mb-8">
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2" onClick={onRestart}>
          <ChevronLeft className="w-5 h-5" />
          Recommencer
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2" onClick={onHome}>
          <HomeIcon className="w-5 h-5" />
          Accueil
        </Button>
      </div>

      <div className="space-y-12">
        <div className="text-8xl font-bold text-white">
          {results.score}/{results.totalQuestions}
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalStars }).map((_, i) => (
            <Star
              key={i}
              className={`w-16 h-16 ${i < earnedStars ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"
                }`}
            />
          ))}
        </div>

        <div className="text-white text-xl">Niveau: {results.level}</div>

        <Button
          onClick={onHome}
          className="px-16 py-6 text-2xl font-bold uppercase
            bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
            hover:from-[#f0dfc3] hover:to-[#ceb17f]
            border-4 border-[#8b7355]
            rounded-xl
            shadow-lg
            transition-transform hover:scale-105"
        >
          Terminer
        </Button>
      </div>
    </div>
  )
}

