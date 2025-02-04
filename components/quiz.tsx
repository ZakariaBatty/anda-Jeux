import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Timer, CheckCircle2, XCircle } from "lucide-react"
import type { QuizState, QuizResults, UserInfo } from "@/types/quiz"
import { getRandomQuestions } from "@/data/questions"
import { QuizResults as QuizResultsComponent } from "./quiz-results"

interface QuizProps {
  onBack: () => void
  onHome: () => void
  onRestart: () => void
}

export function Quiz({ onHome, onRestart }: QuizProps) {
  const [quizState, setQuizState] = useState<QuizState>(() => ({
    currentQuestionIndex: 0,
    selectedQuestions: [],
    score: 0,
    answers: {},
    currentLevel: "DÉBUTANT",
    totalScore: 0,
  }))
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(15)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex]

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("quizUserInfo")
    if (storedUserInfo) {
      const userInfo: UserInfo = JSON.parse(storedUserInfo)

      const selectedQuestions = getRandomQuestions(6, userInfo.level)

      if (selectedQuestions.length === 0) {
        console.error("No questions available")
        onRestart()
        return
      }

      setQuizState((prevState) => ({
        ...prevState,
        selectedQuestions,
        currentLevel: userInfo.level,
      }))
    }
  }, [onRestart])

  const handleAnswerSubmit = useCallback(() => {
    if (!currentQuestion) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    setIsAnswerCorrect(isCorrect)
    setShowFeedback(true)

    setQuizState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      totalScore: prev.totalScore + 1,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: selectedAnswer || "",
      },
    }))
  }, [currentQuestion, selectedAnswer])

  const handleTimeUp = useCallback(() => {
    if (!showFeedback) {
      setShowFeedback(true)
      setIsAnswerCorrect(false)
      handleAnswerSubmit()
    }
  }, [showFeedback, handleAnswerSubmit])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (!showResults) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            handleTimeUp()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [handleTimeUp, showResults])

  const handleAnswerSelect = (answerId: string) => {
    if (showFeedback) return
    setSelectedAnswer(answerId)
  }

  const handleNextQuestion = () => {
    const isLastQuestion = quizState.currentQuestionIndex === quizState.selectedQuestions.length - 1

    if (isLastQuestion) {
      setShowResults(true)
    } else {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }))
    }

    setSelectedAnswer(null)
    setShowFeedback(false)
    setTimeLeft(15)
  }

  const generateWinnerCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  if (showResults) {
    const totalQuestions = quizState.selectedQuestions.length
    const percentageCorrect = (quizState.score / totalQuestions) * 100
    const isWinner = percentageCorrect >= 50
    const generatedCode = isWinner ? generateWinnerCode() : null
    console.log("quizState", quizState)
    const results: QuizResults = {
      score: quizState.score,
      totalQuestions,
      level: quizState.currentLevel,
      isWinner,
      winnerCode: generatedCode,
      percentageCorrect,
      quizState: quizState,
    }

    return <QuizResultsComponent results={results} onRestart={onRestart} onHome={onHome} />
  }

  if (!currentQuestion || quizState.selectedQuestions.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <p className="text-white text-xl">Une erreur s&apos;est produite. Veuillez réessayer.</p>
        <Button onClick={onRestart} className="mt-4 bg-white/20 text-white hover:bg-white/30">
          Retour
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8"></div>

      <div className="flex justify-between items-center mb-4">
        <div className="bg-[#001f2a]/80 px-4 py-2 rounded-lg border border-white/30">
          <span className="text-white">Question </span>
          <span className="text-white font-bold">
            {quizState.currentQuestionIndex + 1}/{quizState.selectedQuestions.length}
          </span>
        </div>
        <div className="flex gap-4">
          <div className="bg-white/90 w-12 h-12 rounded-lg flex items-center justify-center">
            <Timer className="w-6 h-6 text-teal-900" />
          </div>
          <div className="bg-[#2d4a54] w-12 h-12 rounded-lg border-4 border-[#45818e] flex items-center justify-center">
            <span className="text-white font-bold">{timeLeft}</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" p-6 bg-[#001f2a]/80 rounded-lg border-2 border-dashed border-white/30  mb-8">
        <h2 className="text-2xl text-white font-bold mb-8">{currentQuestion.question}</h2>

        {/* {currentQuestion.image && (
          <div className="mb-6">
            <Image
              src={currentQuestion.image ? encodeURI(currentQuestion.image.trim()) : "/placeholder.svg"}
              alt="Question Image"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        )} */}

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-lg flex items-center gap-4
                ${selectedAnswer === option.id ? "bg-white/20" : "bg-transparent"}
                ${showFeedback && option.id === currentQuestion.correctAnswer ? "bg-green-500/20" : ""}
                ${showFeedback && selectedAnswer === option.id && option.id !== currentQuestion.correctAnswer ? "bg-red-500/20" : ""}
                border-2 border-dashed border-white/30 
                hover:bg-white/10 transition-colors
                group disabled:cursor-not-allowed`}
            >
              <div
                className={`w-12 h-12 rounded-full 
                ${selectedAnswer === option.id ? "bg-white" : "bg-white/80"}
                ${showFeedback && option.id === currentQuestion.correctAnswer ? "bg-green-500" : ""}
                ${showFeedback && selectedAnswer === option.id && option.id !== currentQuestion.correctAnswer ? "bg-red-500" : ""}
                flex items-center justify-center
                text-xl font-bold 
                ${showFeedback && (option.id === currentQuestion.correctAnswer || (selectedAnswer === option.id && option.id !== currentQuestion.correctAnswer)) ? "text-white" : "text-teal-900"}
                group-hover:bg-white transition-colors`}
              >
                {option.id}
              </div>
              <span className="text-white text-lg">{option.text}</span>
              {/* {option.image && (
                <Image
                  src={option.image ? encodeURI(option.image.trim()) : "/placeholder.svg"}
                  alt={option.text}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              )} */}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div
            className={`mt-6 p-4 rounded-lg border-2 border-dashed 
            ${isAnswerCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isAnswerCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
              <h3 className="text-white font-bold">
                {isAnswerCorrect ? "Bonne réponse !" : "La bonne réponse :"} {currentQuestion.correctAnswer}
              </h3>
            </div>
            <p className="text-white/90">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {!showFeedback ? (
        <Button
          onClick={handleAnswerSubmit}
          disabled={!selectedAnswer}
          className="w-full px-16 py-6 text-2xl font-bold uppercase
            bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
            hover:from-[#f0dfc3] hover:to-[#ceb17f]
            border-4 border-[#8b7355]
            rounded-xl
            shadow-lg
            transition-transform hover:scale-105
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Valider
        </Button>
      ) : (
        <Button
          onClick={handleNextQuestion}
          className="w-full px-16 py-6 text-2xl font-bold uppercase
            bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
            hover:from-[#f0dfc3] hover:to-[#ceb17f]
            border-4 border-[#8b7355]
            rounded-xl
            shadow-lg
            transition-transform hover:scale-105"
        >
          {quizState.currentQuestionIndex === quizState.selectedQuestions.length - 1 ? "Terminer" : "Suivant"}
        </Button>
      )}

      <div className="mt-4 text-center text-white">
        Score: {quizState.score}/{quizState.totalScore}
      </div>
    </div>
  )
}

