"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RegistrationForm } from "@/components/registration-form"
import { Quiz } from "@/components/quiz"
import type { UserInfo } from "@/types/quiz"
import { Header } from "@/components/header"
// import { ChevronLeft, HomeIcon } from "lucide-react"

type Step = "landing" | "categories" | "registration" | "quiz"

export default function HomePage() {
  const [step, setStep] = useState<Step>("landing")
  const [selectedLevel, setSelectedLevel] = useState<"DÉBUTANT" | "AVANCÉ" | "EXCELLENT" | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    // Check if user info exists in localStorage
    const savedUserInfo = localStorage.getItem("quizUserInfo")
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo))
    }
  }, [])

  const categories = [
    {
      title: "DÉBUTANT",
      icon: "👤",
      description:
        "Pour ceux qui découvrent l'aquaculture. Questions simples sur les animaux aquatiques et les bases de l'aquaculture.",
    },
    {
      title: "AVANCÉ",
      icon: "👥",
      description:
        "Pour ceux qui ont des connaissances en aquaculture. Questions plus détaillées sur les techniques et les espèces.",
    },
    {
      title: "EXCELLENT",
      icon: "👔",
      description:
        "Pour les experts en aquaculture. Questions approfondies sur la gestion, l'environnement et l'économie de l'aquaculture.",
    },
  ]

  const handleRegistrationSubmit = (formData: Omit<UserInfo, "level">) => {
    const userInfo = {
      ...formData,
      level: selectedLevel!,
    }
    localStorage.setItem("quizUserInfo", JSON.stringify(userInfo))
    setUserInfo(userInfo)
    setStep("quiz")
  }

  const handleRestart = () => {
    localStorage.removeItem("quizUserInfo")
    setUserInfo(null)
    setSelectedLevel(null)
    setStep("landing")
  }

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-between py-12 overflow-hidden">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aquaculture-bg.jpg"
          alt="Aquaculture background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-teal-900/60" />
      </div>

      {/* Content */}
      <div className="relative w-full z-10 ">
        {step !== "landing" && (
          <Header
            onBack={() => {
              switch (step) {
                case "categories":
                  setStep("landing")
                  break
                case "registration":
                  setStep("categories")
                  break
                case "quiz":
                  setStep("registration")
                  break
              }
            }}
            onHome={handleRestart}
            showBack={true}
          />
        )}
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">

          {step === "landing" && (
            <>
              {/* Quiz Title */}
              <div className="text-center mt-20">
                <h1
                  className="text-6xl md:text-8xl font-bold text-white 
                tracking-wider
                [text-shadow:3px_3px_0_#000,
                -1px_-1px_0_#000,
                1px_-1px_0_#000,
                -1px_1px_0_#000,
                1px_1px_0_#000]"
                >
                  quaculture Quiz
                </h1>
                {/* <Image src="/svg/04.svg" alt="Aquaculture-Quiz" fill className="object-contain w-5 h-5" /> */}

                <p className="text-white text-xl md:text-2xl mt-4 tracking-wide">Testez vos connaissances !</p>
              </div>

              {/* Start Button */}
              <div className="mt-auto">
                <Button
                  onClick={() => setStep("categories")}
                  className="px-16 py-8 text-3xl font-bold uppercase
                  bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
                  hover:from-[#f0dfc3] hover:to-[#ceb17f]
                  border-4 border-[#8b7355]
                  rounded-xl
                  shadow-lg
                  transition-transform hover:scale-105"
                >
                  Start
                </Button>
                <p className="text-white text-center mt-4 tracking-wide uppercase text-sm">Participez et gagnez</p>
              </div>
            </>
          )}

          {step === "categories" && (
            <>
              {/* Category Selection */}
              <h2
                className="text-4xl md:text-5xl font-bold text-white mt-8 mb-12
              tracking-wider text-center
              [text-shadow:2px_2px_0_#000]"
              >
                Sélectionner votre Catégorie
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`relative group cursor-pointer
                    ${selectedLevel === category.title ? "bg-[#001f2a]/80" : ""}
                    rounded-2xl transition-colors`}
                    onClick={() => setSelectedLevel(category.title as "DÉBUTANT" | "AVANCÉ" | "EXCELLENT")}
                  >
                    <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-2xl" />
                    <div
                      className="relative p-6 flex flex-col items-center text-center gap-4
                    transition-transform group-hover:transform group-hover:scale-105"
                    >
                      {/* Category Title */}
                      <div className="w-48 h-14 relative bottom-12">
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
                        border-4 border-[#8b7355] rounded-xl shadow-lg
                        flex items-center justify-center text-[#2d4a54] font-black"
                        >
                          {category.title}
                        </div>
                      </div>

                      {/* Category Icon */}
                      <div
                        className="w-24 h-24 bg-white/90 rounded-2xl border-4 border-[#c4a775]
                      shadow-lg flex items-center justify-center text-4xl"
                      >
                        {category.icon}
                      </div>

                      {/* Category Description */}
                      <p className="text-white text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <div className="mt-12">
                <Button
                  onClick={() => setStep("registration")}
                  disabled={!selectedLevel}
                  className="px-16 py-6 text-2xl font-bold uppercase
                  bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
                  hover:from-[#f0dfc3] hover:to-[#ceb17f]
                  border-4 border-[#8b7355]
                  rounded-xl
                  shadow-lg
                  transition-transform hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </Button>
                <p className="text-white text-center mt-4 tracking-wide uppercase text-sm">Participez et gagnez</p>
              </div>
            </>
          )}

          {step === "registration" && (
            <RegistrationForm onSubmit={handleRegistrationSubmit} onBack={() => setStep("categories")} />
          )}

          {step === "quiz" && userInfo && (
            <Quiz onBack={() => setStep("registration")} onHome={handleRestart} onRestart={handleRestart} />
          )}
        </div>
      </div>
    </main>
  )
}

