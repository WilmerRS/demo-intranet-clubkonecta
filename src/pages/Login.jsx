import { useNavigate } from 'react-router-dom'
import SimpleLayout from '../layouts/SimpleLayout'

export default function Login() {
  const navigate = useNavigate()

  return (
    <SimpleLayout>
      <h1 className="text-2xl font-semibold text-foreground">
        Iniciar sesión
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Ingresa con tu cuenta corporativa Konecta.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          Correo corporativo
          <input
            type="email"
            readOnly
            value="colaborador@konecta.com"
            className="rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          Contraseña
          <input
            type="password"
            readOnly
            value="••••••••"
            className="rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
          />
        </label>

        <p className="text-xs text-muted-foreground">
          Prototipo de diseño — datos de ejemplo, sin autenticación real.
        </p>

        <button
          type="button"
          onClick={() => navigate('/inicio')}
          className="mt-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ingresar a la Intranet
        </button>
      </form>
    </SimpleLayout>
  )
}
