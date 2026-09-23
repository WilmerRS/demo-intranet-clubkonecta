export default function EventCard({ title, date, imageUrl, color }) {
  const d = new Date(date)
  const day = d.toLocaleDateString('es-PE', { day: '2-digit' })
  const month = d.toLocaleDateString('es-PE', { month: 'short' }).replace('.', '')

  return (
    <article className="flex w-72 shrink-0 items-center gap-3 rounded-2xl bg-background p-3 shadow-sm">
      <div
        className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl text-center ${color}`}
      >
        <span className="text-lg font-bold leading-none">{day}</span>
        <span className="text-[10px] font-semibold uppercase">{month}</span>
      </div>
      <h3 className="line-clamp-2 flex-1 text-xs font-semibold text-foreground">
        {title}
      </h3>
      <img
        src={imageUrl}
        alt=""
        className="h-14 w-14 shrink-0 rounded-xl object-cover"
      />
    </article>
  )
}
