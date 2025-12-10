import { Crosshair, Glasses, ShoppingCart, Star, Zap } from "lucide-react"

export function LetterContent() {
  return (
    <article className="bg-card rounded-none shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 border-4 border-black relative overflow-hidden group">

      {/* Background Halftone - CSS driven but ensuring z-index is correct */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Letter header */}
      <header className="text-center mb-8 pb-8 border-b-4 border-black border-dashed">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Glasses className="w-12 h-12 text-primary" />
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter transform -skew-x-12">
            INFO PENTING!
          </h2>
          <Crosshair className="w-12 h-12 text-destructive animate-spin-slow" />
        </div>
        <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm transform rotate-1">
          RAHASIA: CUMA BUAT MATA LU
        </div>
      </header>

      {/* Letter body */}
      <div className="space-y-6 text-black leading-relaxed font-bold font-sans text-lg md:text-xl relative z-10">
        <p className="first-letter:text-6xl first-letter:font-black first-letter:text-destructive first-letter:float-left first-letter:mr-4">
          Gokil, masih idup lu bro/sist? Padahal bounty (tagihan paylater) lu udah setinggi langit. Salut gw, lu emang real survivor.
        </p>

        <p className="bg-primary/20 p-2 transform -rotate-1 inline-block w-full">
          Skill lu makin GG. Makin jago ngeles, makin jago molor. Fix lu udah level S-Class... dalam hal rebahan.
        </p>

        <p>
          Gw udah bilang ke "Keluarga" kalo lu mau pensiun jadi "Muda", tapi yaudahlah ya, umur hanyalah angka (yang terus naik anjir sedih banget).
        </p>

        <blockquote className="border-l-8 border-black pl-6 py-4 my-8 bg-secondary/20 italic text-2xl font-black text-black relative">
          "Jagain orang yang lu sayang. Makan yang enak. Jangan lupa traktir gw."
        </blockquote>

        {/* Nagumo Special Appearance */}
        <div className="relative border-4 border-black p-4 my-8 bg-white transform rotate-1 shadow-[8px_8px_0px_0px_var(--primary)] group overflow-hidden">
          <div className="absolute top-0 right-0 bg-destructive text-white px-2 py-1 text-xs font-black uppercase">
            LIVE DARI TKP
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-24 h-24 flex-shrink-0 border-2 border-black overflow-hidden bg-black/10 relative">
              {/* Placeholder for Nagumo GIF - Using a static image with CSS shake for now */}
              <img
                src="https://static.wikia.nocookie.net/sakamoto-days/images/d/d3/Nagumo_Anime_Design.png"
                alt="Nagumo"
                className="w-full h-full object-cover animate-pulse group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 animate-pulse mix-blend-overlay" />
            </div>
            <div className="font-mono text-sm leading-tight">
              <p className="font-black text-lg uppercase text-primary mb-1">AGEN NAGUMO BILANG:</p>
              <p>"Woi~ Met ultah yee ✨. Jangan mokad dulu lu, ntar gw nyari temen sirkus dimana? Awas lu ye."</p>
              <p className="text-xs text-muted-foreground mt-2 italic">*Sambil muter-muter dadu*</p>
            </div>
          </div>
        </div>

        <p>
          Misi lu selanjutnya? Makan enak. Buka kado. Gausah mikirin diet, kalori gak diitung pas lagi ultah.
        </p>

        <p className="text-center pt-8">
          <span className="text-destructive font-black text-3xl block transform -rotate-2 uppercase" style={{ textShadow: "2px 2px 0px #000" }}>
            HBD WOI, LEGEND!
          </span>
        </p>
      </div>

      {/* Photo Gallery - Manga Panel Style */}
      <div className="my-12">
        <h3 className="text-3xl font-black text-center text-black uppercase italic mb-8 relative inline-block w-full">
          <span className="bg-secondary px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_#000]">LOG_AIB_TARGET.jpg</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
          {[
            "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=500&h=500&fit=crop", // Ramen or Food
            "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=500&h=500&fit=crop", // Cat (Sakamoto vibes)
            "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&h=500&fit=crop", // Party
            "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=500&h=500&fit=crop", // City/Store
          ].map((src, i) => (
            <div
              key={i}
              className="relative group cursor-pointer transition-all duration-300 hover:z-30 hover:scale-105"
            >
              <div className="bg-white border-4 border-black p-0 shadow-[8px_8px_0px_0px_#000] overflow-hidden">
                <div className="aspect-[4/3] relative grayscale hover:grayscale-0 transition-all duration-500 contrast-125">
                  <img
                    src={src}
                    alt={`Evidence ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Manga Speed Lines Overlay on Hover */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_11px,rgba(0,0,0,0.1)_12px)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Speech Bubble on Hover */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border-2 border-black px-2 py-1 text-xs font-black uppercase rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                      {["TARGET KEGEP", "CAKEP JUGA LU", "MODE BARBAR", "ANAK KARANGASEM"][i]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signature */}
      <footer className="mt-8 pt-8 border-t-4 border-black border-double text-center">
        <div className="inline-flex items-center gap-3 text-2xl font-black text-black">
          <ShoppingCart className="w-8 h-8" />
          <span>KELUARGA SAKAMOTO</span>
          <Star className="w-8 h-8 text-secondary fill-secondary animate-spin" />
        </div>
        <p className="text-black font-mono text-xs mt-4 uppercase">
          * Gak terima refund umur. Terima kasih telah berbelanja. *
        </p>
      </footer>
    </article>
  )
}
