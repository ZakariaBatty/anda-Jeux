import { useEffect } from "react"
import { createWinner } from "@/app/actions/winners"
import { Button } from "@/components/ui/button"
import type { QuizResults, UserInfo } from "@/types/quiz"

interface QuizResultsProps {
  results: QuizResults
  onRestart: () => void
  onHome: () => void
}

export function QuizResults({ results, onRestart, onHome }: QuizResultsProps) {
  useEffect(() => {
    const handleQuizComplete = async (results: QuizResults) => {
      const storedUserInfo = localStorage.getItem("quizUserInfo")
      if (storedUserInfo) {
        const userInfo: UserInfo = JSON.parse(storedUserInfo)
        console.log("isWinner", results.isWinner)
        if (!results.isWinner) {
          return
        }
        const winner = {
          fullName: userInfo.fullName,
          email: userInfo.email,
          phone: userInfo.phone,
          profession: userInfo.profession,
          level: userInfo.level,
          score: results.score,
          wonLevels: [results.quizState],
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

  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center">
      <div className="mb-8"></div>

      <div className="space-y-12">
        <div className="text-8xl font-bold text-white">
          {results.score}/{results.totalQuestions}
        </div>

        <div className="text-white text-xl">Niveau: {results.level}</div>
        <div className="text-white text-xl">
          Pourcentage de réponses correctes: {results.percentageCorrect.toFixed(2)}%
        </div>

        {results.isWinner ? (
          <div className="text-green-400 text-2xl font-bold">
            ✅ Félicitations ! Vous avez gagné.
            {results.winnerCode && (
              <div className="mt-4">
                Votre code gagnant: <span className="text-yellow-400">{results.winnerCode}</span>
                <p className="text-sm mt-2">Présentez ce code à l&apos;accueil du stand pour récupérer votre cadeau.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-yellow-400 text-2xl font-bold">
            ❌ Désolé, vous n&apos;avez pas gagné cette fois-ci. Continuez à apprendre et réessayez !
          </div>
        )}

        <div className="flex justify-center space-x-4">
          <Button
            onClick={onRestart}
            className="px-16 py-6 text-2xl font-bold uppercase
              bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
              hover:from-[#f0dfc3] hover:to-[#ceb17f]
              border-4 border-[#8b7355]
              rounded-xl
              shadow-lg
              transition-transform hover:scale-105"
          >
            Recommencer
          </Button>
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
    </div>
  )
}

