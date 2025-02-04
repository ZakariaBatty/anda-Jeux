import { useEffect } from "react"
import { createWinner } from "@/app/actions/winners"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { UserInfo } from "@/types/quiz"

interface QuizResultsProps {
  results: QuizResults
  onRestart: () => void
  onHome: () => void
}

interface QuizResults {
  score: number
  totalQuestions: number
  level: string
  isWinner: boolean
  winnerCode?: string | null
  percentageCorrect: number
}

export function QuizResults({ results, onHome }: QuizResultsProps) {
  useEffect(() => {
    const handleQuizComplete = async (results: QuizResults) => {
      const storedUserInfo = localStorage.getItem("quizUserInfo")
      if (storedUserInfo) {
        const userInfo: UserInfo = JSON.parse(storedUserInfo)
        const winner = {
          fullName: userInfo.fullName,
          email: userInfo.email,
          phone: userInfo.phone,
          profession: userInfo.profession,
          level: userInfo.level,
          score: results.score,
          wonLevels: [results.level],
          winnerCode: results.winnerCode || "",
        }
        const response = await createWinner(winner)
        if (response.success) {
          console.log("Winner saved:", response.winner)
        } else {
          console.error("Error saving winner:", response.error)
        }
      }
    }

    handleQuizComplete(results)
  }, [results])

  // Calculate how many stars should be filled based on the score percentage
  const filledStars = Math.round((results.score / results.totalQuestions) * 5)


  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center">

      <div className="text-green-400 text-2xl font-bold mt-24">
        ✅ Merci d’avoir participé à notre quiz
        {results.winnerCode && (
          <div className="mt-4">
            Votre score est <span className="text-yellow-400">{results.winnerCode}</span>
          </div>
        )}
      </div>

      {/* Score Display */}
      <div className=" pb-2 text-center">
        <div className="text-[120px] font-bold text-white mb-8">
          {results.score}/{results.totalQuestions}
        </div>
        <div className="flex justify-center mb-16 gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-12 h-12 ${i < filledStars ? "text-yellow-400 fill-yellow-400" : "text-brown-500 fill-brown-500 opacity-50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Finish Button */}
      <div className="flex justify-center space-x-4 ">
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

