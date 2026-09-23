import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 py-24 text-center">
      <span className="text-sm font-semibold text-primary">Error 404</span>
      <h1 className="text-2xl font-semibold text-foreground">
        No encontramos esta página
      </h1>
      <p className="text-muted-foreground">
        Revisa la dirección o vuelve al inicio de la intranet.
      </p>
      <Link
        to="/inicio"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        Volver a Inicio
      </Link>
    </div>
  )
}
