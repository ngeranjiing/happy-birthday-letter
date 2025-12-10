"use client"

import { useEffect, useState } from "react"

interface FloatingItem {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  emoji: string
}

const FUNNY_EMOJIS = ["👓", "🍜", "🔫", "🏪", "🥓", "🍡", "🕶️", "💥", "👟", "🖊️"]

export function FloatingHearts() {
  const [items, setItems] = useState<FloatingItem[]>([])

  useEffect(() => {
    const newItems = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 20 + Math.random() * 20,
      emoji: FUNNY_EMOJIS[Math.floor(Math.random() * FUNNY_EMOJIS.length)],
    }))
    setItems(newItems)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float opacity-50 hover:opacity-100 transition-opacity"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  )
}
