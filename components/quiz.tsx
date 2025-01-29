"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, HomeIcon, Timer, CheckCircle2, XCircle } from "lucide-react"
import type { QuizState, QuizResults, UserInfo } from "@/types/quiz"
import { getRandomQuestions } from "@/data/questions"
import { QuizResults as QuizResultsComponent } from "./quiz-results"

interface QuizProps {
  onBack: () => void
  onHome: () => void
}

export function Quiz({ onBack, onHome }: QuizProps) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [quizState, setQuizState] = useState<QuizState>(() => {
    const storedUserInfo = localStorage.getItem("quizUserInfo")
    if (storedUserInfo) {
      const userInfo: UserInfo = JSON.parse(storedUserInfo)
      setUserInfo(userInfo)
      const selectedQuestions = getRandomQuestions(userInfo.level, 8)
      return {
        currentQuestionIndex: 0,
        selectedQuestions,
        score: 0,
        answers: {},
      }
    }
    return {
      currentQuestionIndex: 0,
      selectedQuestions: [],
      score: 0,
      answers: {},
    }
  })
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(30)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex]

  useEffect(() => {
    if (!currentQuestion || showResults) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [showResults, currentQuestion]) // Removed unnecessary dependency: quizState.currentQuestionIndex

  const handleTimeUp = useCallback(() => {
    if (!showFeedback) {
      setShowFeedback(true)
      setIsAnswerCorrect(false)
    }
  }, [showFeedback])

  const handleAnswerSelect = (answerId: string) => {
    if (showFeedback) return
    setSelectedAnswer(answerId)
  }

  const handleAnswerSubmit = () => {
    if (!selectedAnswer || !currentQuestion) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    setIsAnswerCorrect(isCorrect)
    setShowFeedback(true)

    setQuizState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: selectedAnswer,
      },
    }))
  }

  const handleNextQuestion = () => {
    const isLastQuestion = quizState.currentQuestionIndex === quizState.selectedQuestions.length - 1

    if (isLastQuestion) {
      setShowResults(true)
      return
    }

    setSelectedAnswer(null)
    setShowFeedback(false)
    setTimeLeft(30)

    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }))
  }

  if (showResults) {
    const results: QuizResults = {
      score: quizState.score,
      totalQuestions: quizState.selectedQuestions.length,
      level: userInfo?.level || "DÉBUTANT",
    }
    return <QuizResultsComponent results={results} onRestart={onBack} onHome={onHome} />
  }

  if (!currentQuestion || quizState.selectedQuestions.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <p className="text-white text-xl">Une erreur s&apos;est produite. Veuillez réessayer.</p>
        <Button onClick={onBack} className="mt-4 bg-white/20 text-white hover:bg-white/30">
          Retour
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="w-full flex justify-between mb-8">
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2" onClick={onBack}>
          <ChevronLeft className="w-5 h-5" />
          Précédent
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2" onClick={onHome}>
          <HomeIcon className="w-5 h-5" />
          Accueil
        </Button>
      </div>

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

      <div className="bg-[#001f2a]/80 p-6 rounded-lg border-2 border-dashed border-white/30 mb-8">
        <h2 className="text-2xl text-white font-bold mb-8">{currentQuestion.question}</h2>

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
        Score: {quizState.score}/{quizState.currentQuestionIndex + 1}
      </div>
    </div>
  )
}

