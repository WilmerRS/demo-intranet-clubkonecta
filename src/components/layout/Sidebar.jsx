import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  HeartHandshake,
  Home,
  Megaphone,
  PartyPopper,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SECTIONS = [
  { to: '/inicio', label: 'Inicio', icon: Home },
  { to: '/mi-desarrollo', label: 'Mi Desarrollo', icon: TrendingUp },
  { to: '/mi-bienestar', label: 'Mi Bienestar', icon: HeartHandshake },
  { to: '/recursos', label: 'Recursos', icon: BookOpen },
  { to: '/vida-konecta', label: 'Vida Konecta', icon: PartyPopper },
  { to: '/comunicacion', label: 'Comunicación', icon: Megaphone },
  { to: '/mi-gestion', label: 'Mi Gestión', icon: FolderKanban },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <aside
      className={`sticky top-0 hidden h-svh shrink-0 flex-col border-r border-border bg-background transition-all duration-300 ease-in-out md:flex ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Contraer menú' : 'Expandir menú'}
        className="absolute -right-3 top-20 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm hover:text-foreground"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <button
        type="button"
        onClick={() => navigate('/inicio')}
        className="flex h-16 shrink-0 items-center gap-2 px-4"
      >
        <img
          src="/icon-rounded.png"
          alt="Club Konecta"
          className="h-9 w-9 shrink-0 rounded-lg object-contain"
        />
        {isOpen && (
          <span className="truncate text-base font-semibold text-foreground">
            Club Konecta
          </span>
        )}
      </button>

      <nav className="mt-2 flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-2">
        {SECTIONS.map((s) => (
          <NavLink
            key={s.to}
            to={s.to}
            className={({ isActive }) =>
              `group flex shrink-0 items-center gap-3 rounded-xl p-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              } ${!isOpen && 'justify-center'}`
            }
          >
            {({ isActive }) => (
              <>
                <s.icon
                  className={`h-5 w-5 shrink-0 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground group-hover:text-foreground'
                  }`}
                />
                {isOpen && <span className="truncate">{s.label}</span>}
                {isOpen && isActive && (
                  <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
