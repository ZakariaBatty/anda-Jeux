import { useEffect } from "react"
import { createWinner } from "@/app/actions/winners"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import type { QuizResults, UserInfo } from "@/types/quiz"

interface QuizResultsProps {
  results: QuizResults
  onRestart: () => void
  onHome: () => void
}

export function QuizResults({ results, onHome }: QuizResultsProps) {
  useEffect(() => {
    const handleQuizComplete = async (results: QuizResults) => {
      const storedUserInfo = localStorage.getItem("quizUserInfo")
      if (storedUserInfo) {
        const userInfo: UserInfo = JSON.parse(storedUserInfo)
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

  // Calculate how many stars should be filled based on the score percentage
  const filledStars = Math.round((results.score / results.totalQuestions) * 5)

  // Create the QR code content with both the winner code and a message
  // const qrCodeContent = results.winnerCode
  //   ? JSON.stringify({
  //     code: results.winnerCode,
  //     message: "Félicitations ! Vous avez gagné. Présentez ce code à l'accueil du stand pour récupérer votre cadeau.",
  //   })
  //   : ""



  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center">
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

      {/* QR Code Section */}
      {results.isWinner && results.winnerCode && (
        <div className="text-center mb-2">
          <div className="text-green-400 text-2xl font-bold mb-4">
            ✅ Félicitations ! Vous avez gagné.
            <div className="mt-4">
              {/* Votre code gagnant: <span className="text-yellow-400">{results.winnerCode}</span> */}
              <p className="text-sm mt-2">Présentez ce code à l&apos;accueil du stand pour récupérer votre cadeau.</p>
            </div>
          </div>
          <h2 className="text-[#7eb5c2] text-xl mb-4">
            Scannez le code QR pour récupérer le code
            <br />
            du lot à l&apos;accueil du stand.
          </h2>
          <div className="inline-block bg-white/90 p-4 rounded-xl">
            <QRCodeSVG value={results.winnerCode} size={200} level="H" className="mx-auto" />
          </div>
        </div>
      )}

      {!results.isWinner && (
        <div className="text-center mb-16">
          <h2 className="text-yellow-400 text-2xl font-bold">
            ❌ vous n&apos;avez pas gagné cette fois-ci.
            <br />
            Continuez à apprendre et réessayez !
          </h2>
        </div>
      )}

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

