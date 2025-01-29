"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, HomeIcon } from "lucide-react"
import type { UserInfo } from "@/types/quiz"

interface RegistrationFormProps {
  onSubmit: (data: UserInfo) => void
  onBack: () => void
}

export function RegistrationForm({ onSubmit, onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState<UserInfo>({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    level: "DÉBUTANT",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("quizUserInfo", JSON.stringify(formData))
    onSubmit(formData)
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="w-full flex justify-between mb-8">
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2" onClick={onBack}>
          <ChevronLeft className="w-5 h-5" />
          Précédent
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
          <HomeIcon className="w-5 h-5" />
          Accueil
        </Button>
      </div>

      <h2
        className="text-4xl md:text-5xl font-bold text-white mb-12
        tracking-wider text-center
        [text-shadow:2px_2px_0_#000]"
      >
        Veuillez remplir le formulaire
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          required
          type="text"
          placeholder="Nom complet"
          className="h-14 bg-[#001f2a]/80 border-2 border-dashed border-white/30 
            text-white placeholder:text-white/50 text-lg"
          value={formData.fullName}
          onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
        />
        <Input
          required
          type="email"
          placeholder="Adresse mail"
          className="h-14 bg-[#001f2a]/80 border-2 border-dashed border-white/30 
            text-white placeholder:text-white/50 text-lg"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
        />
        <Input
          required
          type="tel"
          placeholder="N° de Téléphone"
          className="h-14 bg-[#001f2a]/80 border-2 border-dashed border-white/30 
            text-white placeholder:text-white/50 text-lg"
          value={formData.phone}
          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
        />
        <Input
          required
          type="text"
          placeholder="Profession"
          className="h-14 bg-[#001f2a]/80 border-2 border-dashed border-white/30 
            text-white placeholder:text-white/50 text-lg"
          value={formData.profession}
          onChange={(e) => setFormData((prev) => ({ ...prev, profession: e.target.value }))}
        />
        <select
          required
          className="w-full h-14 bg-[#001f2a]/80 border-2 border-dashed border-white/30 
            text-white text-lg rounded-md"
          value={formData.level}
          onChange={(e) => setFormData((prev) => ({ ...prev, level: e.target.value as UserInfo["level"] }))}
        >
          <option value="DÉBUTANT">DÉBUTANT</option>
          <option value="AVANCÉ">AVANCÉ</option>
          <option value="EXCELLENT">EXCELLENT</option>
        </select>

        <div className="pt-6">
          <Button
            type="submit"
            className="w-full px-16 py-6 text-2xl font-bold uppercase
              bg-gradient-to-b from-[#e6d5b9] to-[#c4a775]
              hover:from-[#f0dfc3] hover:to-[#ceb17f]
              border-4 border-[#8b7355]
              rounded-xl
              shadow-lg
              transition-transform hover:scale-105"
          >
            Commencer
          </Button>
          <p className="text-white text-center mt-4 tracking-wide uppercase text-sm">Participez et gagnez</p>
        </div>
      </form>
    </div>
  )
}

