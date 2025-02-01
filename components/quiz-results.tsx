import { Button } from "@/components/ui/button"
import type { QuizResults } from "@/types/quiz"

interface QuizResultsProps {
  results: QuizResults
  onRestart: () => void
  onHome: () => void
}

export function QuizResults({ results, onHome }: QuizResultsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center">
      <div className="mb-8">
      </div>

      <div className="space-y-12">
        <div className="text-8xl font-bold text-white">
          {results.score}/{results.totalQuestions}
        </div>

        <div className="text-white text-xl">Niveau: {results.level}</div>

        {results.isWinner ? (
          <div className="text-green-400 text-2xl font-bold">
            ✅ Félicitations ! Vous avez gagné.
            {results.winnerCode && (
              <div className="mt-4">
                Votre code gagnant : <span className="text-yellow-400">{results.winnerCode}</span>
                <p className="text-sm mt-2">Présentez ce code à l&apos;accueil du stand pour récupérer votre cadeau.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-yellow-400 text-2xl font-bold">
            ❌ Désolé, vous n&apos;avez pas gagné cette fois-ci. Continuez à apprendre et réessayez !
          </div>
        )}

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

