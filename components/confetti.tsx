"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: number
  color: string
  delay: number
  duration: number
}

const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"]

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const newPieces = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }))
    setPieces(newPieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute w-3 h-3 ${piece.id % 2 === 0 ? 'rounded-full' : 'rounded-none'} ${piece.color} animate-confetti`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
