import { useNavigate } from 'react-router-dom'

const BENEFICIOS = [
  { title: 'Convenios corporativos', desc: 'Descuentos con marcas aliadas.' },
  { title: 'Asesorías', desc: 'Acompañamiento legal, financiero y de salud.' },
  { title: 'Licencias extendidas', desc: 'Más tiempo para lo que importa.' },
  { title: 'Préstamos', desc: 'Apoyo económico para colaboradores.' },
]

const TESTIMONIOS = [
  {
    name: 'Lucía Fernández',
    role: 'Asesora de Contact Center',
    quote:
      'Konecta me dio la oportunidad de crecer profesionalmente y sentirme parte de un equipo que realmente se preocupa por las personas.',
  },
  {
    name: 'Jorge Salcedo',
    role: 'Team Leader',
    quote:
      'Los programas de desarrollo interno me permitieron pasar de asesor a liderar mi propio equipo en menos de dos años.',
  },
  {
    name: 'Marina Torres',
    role: 'Back Office',
    quote:
      'El plan de bienestar y los convenios corporativos hacen una diferencia real en el día a día.',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/icon-rounded.png"
              alt="Club Konecta"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="text-lg font-semibold">Club Konecta</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#nosotros" className="hover:text-foreground">
              Quiénes somos
            </a>
            <a href="#beneficios" className="hover:text-foreground">
              Beneficios
            </a>
            <a href="#testimonios" className="hover:text-foreground">
              Testimonios
            </a>
          </nav>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ingresar a Intranet
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          Club Konecta
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Un lugar para crecer, conectar y sentirte parte
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          La comunidad que reúne beneficios, oportunidades y experiencias para
          todos los colaboradores de Konecta.
        </p>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="mt-8 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Iniciar sesión
        </button>
      </section>

      <section id="nosotros" className="border-t border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="aspect-video rounded-xl bg-accent" />
          <div>
            <h2 className="text-2xl font-semibold">Quiénes somos</h2>
            <p className="mt-4 text-muted-foreground">
              Somos una compañía global de gestión de experiencia de cliente
              (CX), presente en más de 20 países. Club Konecta es nuestro
              programa de beneficios y comunidad, pensado para acompañar a
              cada colaborador dentro y fuera del trabajo.
            </p>
          </div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Beneficios</h2>
        <p className="mt-2 text-muted-foreground">
          Algunas de las ventajas de ser parte de Konecta.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-border p-5"
            >
              <div className="mb-4 h-28 rounded-lg bg-accent" />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonios"
        className="border-t border-border bg-muted/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Testimonios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIOS.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <p className="text-sm text-foreground">“{t.quote}”</p>
                <footer className="mt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">
                    {t.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Konecta. Todos los derechos
          reservados.
        </div>
      </footer>
    </div>
  )
}
