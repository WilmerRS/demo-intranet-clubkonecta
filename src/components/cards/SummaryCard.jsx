import { MessageCircle, Star } from 'lucide-react'
import { formatRelativeDate } from '../../lib/relativeDate'

export default function SummaryCard({
  imageUrl,
  title,
  date,
  badge,
  comments = 0,
  rating = 0,
}) {
  return (
    <article className="group relative aspect-[6/5] overflow-hidden rounded-2xl bg-muted shadow-sm">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {badge}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-xs text-white/80">{formatRelativeDate(date)}</p>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-4 text-xs text-white/80">
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" />
            {comments}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  )
}
