export default function BenefitCard({ imageUrl, title, badge }) {
  return (
    <article className="group relative aspect-[6/5] overflow-hidden rounded-2xl bg-muted shadow-sm">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {badge}
        </span>
      )}

      <h3 className="absolute inset-x-0 bottom-0 line-clamp-2 p-4 text-sm font-semibold text-white">
        {title}
      </h3>
    </article>
  )
}
