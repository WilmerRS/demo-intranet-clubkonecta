import { MessageCircle } from 'lucide-react'

export default function ChatbotFab() {
  return (
    <div className="group fixed bottom-6 right-6 z-30">
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatbot Konecta"
        className="animate-float flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-600"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <div className="pointer-events-none absolute bottom-1/2 right-full mr-3 w-56 translate-y-1/2 rounded-xl border border-white/50 bg-white/60 p-3 text-left opacity-0 shadow-xl backdrop-blur-md transition-opacity group-hover:opacity-100">
        <p className="text-sm font-semibold text-foreground">
          Chatbot Konecta
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Resuelve tus dudas al instante: pagos, boletas, beneficios y más
          consultas frecuentes.
        </p>
      </div>
    </div>
  )
}
