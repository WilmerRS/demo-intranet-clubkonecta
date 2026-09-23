import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AUTOPLAY_MS = 5000

export default function FlyerCarousel({ slides }) {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [index, slides.length])

  function go(e, delta) {
    e.stopPropagation()
    setIndex((i) => (i + delta + slides.length) % slides.length)
  }

  function goTo(e, i) {
    e.stopPropagation()
    setIndex(i)
  }

  const slide = slides[index]

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(slide.to)}
      onKeyDown={(e) => e.key === 'Enter' && navigate(slide.to)}
      className={`group relative flex min-h-[220px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-white shadow-sm sm:min-h-[260px] sm:p-8 ${slide.gradient}`}
    >
      <div className="max-w-sm">
        <h3 className="text-xl font-bold">{slide.title}</h3>
        <p className="mt-2 text-sm text-white/70">{slide.subtitle}</p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          navigate(slide.to)
        }}
        className="w-fit rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/25"
      >
        Ver más
      </button>

      <button
        type="button"
        onClick={(e) => go(e, -1)}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:bg-white/25"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={(e) => go(e, 1)}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:bg-white/25"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ir a la diapositiva ${i + 1}`}
            onClick={(e) => goTo(e, i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
