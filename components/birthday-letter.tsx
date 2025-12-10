
"use client"

import { useState, useEffect } from "react"
import { Crosshair, ShoppingCart, Siren, Skull, Zap, Utensils, Award } from "lucide-react"
import { Envelope } from "./envelope"
import { LetterContent } from "./letter-content"
import { FloatingHearts } from "./floating-hearts"
import { Confetti } from "./confetti"

export function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center border-[20px] border-double border-primary/20">
      <FloatingHearts />
      {showConfetti && <Confetti />}

      {/* Manga Action Lines Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 40px, currentColor 41px, transparent 42px)', transform: 'skew(-20deg)' }} />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-spin-slow">
        <Crosshair className="w-16 h-16 text-destructive opacity-50" />
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce">
        <ShoppingCart className="w-16 h-16 text-primary opacity-50" />
      </div>

      {/* Dynamic Action Texts */}
      <div className="absolute top-1/4 right-10 font-black text-6xl text-secondary rotate-12 opacity-20">BAM!</div>
      <div className="absolute bottom-1/4 left-10 font-black text-6xl text-primary -rotate-12 opacity-20">POW!</div>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center relative z-10">
        {/* Header */}
        <header className="text-center mb-8 animate-fade-in group relative">
          <div className="absolute -top-5 -left-3 md:-top-5 md:left-20 bg-accent text-accent-foreground px-4 py-1 transform -rotate-6 font-black border-2 border-black shadow-[4px_4px_0px_0px_#000]">
            TARGET TERDETEKSI
          </div>

          <div className="flex items-center justify-center gap-4 mb-2 mt-5">
            <Skull className="w-10 h-10 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-8xl font-black text-foreground mb-4 text-balance uppercase italic tracking-tighter" style={{ textShadow: "4px 4px 0px var(--primary)" }}>
              MET ULTAH 🎂
            </h1>
            <Zap className="w-10 h-10 text-secondary animate-pulse" />
          </div>

          <div className="bg-card inline-block px-6 py-2 border-4 border-black transform rotate-2 shadow-[8px_8px_0px_0px_var(--secondary)]">
            <p className="text-xl md:text-2xl font-bold font-mono uppercase tracking-widest text-foreground">
              Status: <span className="text-destructive">BELOM PUNAH 🦕</span>
            </p>
          </div>

          <p className="text-muted-foreground/80 mt-6 font-bold max-w-lg mx-auto bg-white/80 dark:bg-black/80 p-2 backdrop-blur-sm rounded-lg border-2 border-dashed border-gray-400">
            "Aturan Keluarga #1: Dilarang mokad sebelum traktir makan-makan." - Warung Sakamoto
          </p>
        </header>

        {/* Envelope / Letter */}
        <div className="w-full max-w-2xl mt-8">
          {!isOpen ? (
            <div className="relative group perspective-1000">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-destructive text-white px-6 py-2 font-black text-xl uppercase transform -rotate-2 border-2 border-white shadow-lg animate-bounce">
                  <Utensils className="inline-block mr-2 w-5 h-5" />
                  JATAH PREMAN
                </div>
              </div>
              <Envelope onOpen={() => setIsOpen(true)} />
            </div>
          ) : (
            <LetterContent />
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center animate-fade-in text-xs font-mono uppercase tracking-widest opacity-50">
          <Award className="inline-block w-4 h-4 mr-1" />
          Di-acc sama Lord Sakamoto
        </footer>
      </div>
    </main>
  )
}
