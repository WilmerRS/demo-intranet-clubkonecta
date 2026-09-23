export default function SimpleLayout({ children }) {
  return (
    <div className="min-h-svh grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 py-12 sm:px-16">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-10 flex items-center gap-2">
            <img
              src="/icon-rounded.png"
              alt="Club Konecta"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="text-lg font-semibold text-foreground">
              Club Konecta
            </span>
          </div>
          {children}
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-primary p-16">
        <div className="max-w-md text-primary-foreground">
          <h2 className="text-3xl font-semibold leading-tight">
            Un solo lugar para vivir la experiencia Konecta
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Noticias, beneficios, programas y gestión de tu día a día,
            reunidos en la Intranet Konecta.
          </p>
        </div>
      </div>
    </div>
  )
}
