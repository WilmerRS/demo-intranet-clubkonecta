import { Play } from 'lucide-react'

export default function VideoCard({ title, duration, thumbnailUrl }) {
  return (
    <article className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-muted shadow-sm">
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />

      <span className="absolute right-2 top-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-white">
        {duration}
      </span>

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow">
          <Play className="ml-0.5 h-4 w-4 fill-primary text-primary" />
        </span>
      </span>

      <h3 className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 text-xs font-semibold text-white">
        {title}
      </h3>
    </article>
  )
}
