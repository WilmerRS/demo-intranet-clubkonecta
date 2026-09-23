import {
  Bell,
  Briefcase,
  Home,
  LogOut,
  Newspaper,
  Search,
  ShoppingBag,
  SquarePen,
  Store,
} from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { currentUser } from '../../mocks/user'
import Avatar from './Avatar'

const CENTER_NAV = [
  { to: '/inicio', label: 'Inicio', icon: Home },
  { to: '/noticias', label: 'Noticias', icon: Newspaper },
  { to: '/mercado-konecta', label: 'Mercado Konecta', icon: Store },
  { to: '/mi-bienestar', label: 'Beneficios', icon: ShoppingBag },
  { to: '/mi-desarrollo', label: 'Vacantes', icon: Briefcase },
]

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-20 grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-border bg-background px-4 sm:px-6">
      <div className="relative w-56 justify-self-start sm:w-72 lg:w-96">
        <input
          type="search"
          placeholder="¿Qué estás buscando hoy?"
          className="w-full rounded-full border border-primary/20 bg-primary/5 py-2.5 pl-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/25"
        />
        <Search className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60" />
      </div>

      <nav className="hidden h-16 items-center gap-2 lg:flex">
        {CENTER_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            title={item.label}
            className={({ isActive }) =>
              `flex h-11 w-20 items-center justify-center rounded-t-lg border-b-[3px] transition-colors ${
                isActive
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`
            }
          >
            <item.icon className="h-6 w-6" />
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2 justify-self-end">
        <button
          type="button"
          aria-label="Notificaciones"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-white">
            3
          </span>
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 hover:bg-secondary"
          >
            <Avatar user={currentUser} />
            <span className="hidden text-sm font-medium text-foreground sm:inline">
              {currentUser.name}
            </span>
          </button>

          {profileOpen && (
            <>
              <button
                type="button"
                aria-hidden="true"
                tabIndex={-1}
                className="fixed inset-0 z-10 cursor-default"
                onClick={() => setProfileOpen(false)}
              />
              <div className="absolute right-0 z-20 mt-2 w-80 rounded-2xl border border-border bg-background p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Avatar user={currentUser} size="h-12 w-12" textSize="text-base" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {currentUser.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentUser.role}
                    </p>
                  </div>
                </div>

                <div className="my-3 border-t border-border" />

                <dl className="space-y-1.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Correo</dt>
                    <dd className="text-foreground">{currentUser.email}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Superior directo</dt>
                    <dd className="text-foreground">{currentUser.manager}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Cumpleaños</dt>
                    <dd className="text-foreground">
                      {currentUser.birthDate}
                    </dd>
                  </div>
                </dl>

                <div className="my-3 border-t border-border" />

                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-lg p-2 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    <SquarePen className="h-4 w-4" />
                    Editar información
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 rounded-lg p-2 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  >
                    <LogOut className="h-4 w-4" />
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
