export default function ComingSoon({ title }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 py-24 text-center">
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      <p className="text-muted-foreground">
        Esta sección se construirá en una siguiente iteración del prototipo.
      </p>
    </div>
  )
}
