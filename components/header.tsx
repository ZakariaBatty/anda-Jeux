"use client";

import { ChevronLeft, Home } from "lucide-react"
import Image from "next/image";

interface HeaderProps {
  onBack?: () => void
  onHome?: () => void
  showBack?: boolean
}

export function Header({ onBack, onHome, showBack = true }: HeaderProps) {
  return (
    <div className="w-full  py-4 px-16">
      <div className="mx-auto flex justify-between items-center">
        {showBack ? (
          <button onClick={onBack} className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <ChevronLeft className="w-6 h-6" />
            <span className="text-lg">Précédent</span>
          </button>
        ) : (
          <div className="w-[104px]" />
        )}

        <div className="text-center">
          {/* Logo */}
          <div className="w-64 h-24 relative">
            <Image src="/Logo.svg" alt="ANDA Logo" fill className="object-contain" />
          </div>
        </div>

        <button onClick={onHome} className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
          <span className="text-lg">Accueil</span>
          <Home className="w-6 h-6" />
        </button>
      </div>
    </div >
  )
}