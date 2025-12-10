
"use client"

import { Receipt, ScanLine, ShoppingBag, Stamp } from "lucide-react"

interface EnvelopeProps {
  onOpen: () => void
}

export function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <button
      onClick={onOpen}
      className="group w-full cursor-pointer transition-all duration-300 hover:rotate-1 focus:outline-none"
      aria-label="Open mission brief"
    >
      <div className="relative bg-white text-black p-6 md:p-8 border-4 border-black shadow-[12px_12px_0px_0px_var(--primary)] transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[8px_8px_0px_0px_var(--primary)]">

        {/* Receipt Header */}
        <div className="border-b-4 border-black pb-4 mb-6 border-dashed flex justify-between items-start">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-black uppercase tracking-tighter transform -rotate-2">
              SAKAMOTO<br />MART RENON
            </h2>
            <p className="text-xs font-mono mt-1">EST. 2020 • CABANG BLOK M</p>
          </div>
          <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
        </div>

        {/* Receipt Body */}
        <div className="space-y-4 font-mono text-left mb-8">
          <div className="flex justify-between border-b border-black pb-1">
            <span>ITEM:</span>
            <span className="font-bold">RAHASIA NEGARA (RAQU)</span>
          </div>
          <div className="flex justify-between border-b border-black pb-1">
            <span>HARGA:</span>
            <span className="font-bold">RP 0 (GRATIS BOS)</span>
          </div>
          <div className="flex justify-between border-b border-black pb-1">
            <span>TARGET:</span>
            <span className="font-bold">ELU LAH</span>
          </div>
        </div>

        {/* Action Button Area */}
        <div className="relative py-4 text-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <ScanLine className="w-full h-full" />
          </div>
          <div className="inline-block bg-black text-white px-8 py-3 font-black text-xl uppercase tracking-widest transform group-hover:scale-110 transition-transform skew-x-[-10deg]">
            GASS BUKA!
          </div>
        </div>

        {/* Barcode & Stamps */}
        <div className="mt-6 pt-4 border-t-4 border-black border-dashed flex justify-between items-end opacity-70">
          <div className="h-12 w-32 bg-[repeating-linear-gradient(90deg,black,black_2px,white_2px,white_4px)]" />
          <Stamp className="w-12 h-12 rotate-[-15deg] text-destructive" />
        </div>

      </div>
    </button>
  )
}

