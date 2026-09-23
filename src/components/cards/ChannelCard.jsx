import { HeartHandshake, Megaphone, Shield } from 'lucide-react'

const ICONS = {
  shield: Shield,
  'heart-handshake': HeartHandshake,
  megaphone: Megaphone,
}

export default function ChannelCard({ title, icon }) {
  const Icon = ICONS[icon]

  return (
    <article className="flex w-64 shrink-0 items-center justify-between gap-4 rounded-2xl bg-background p-3 shadow-sm">
      <div>
        <span className="text-xs font-bold uppercase tracking-wide text-primary">
          Canal
        </span>
        <h3 className="mt-1 text-sm font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        <Icon className="h-7 w-7" />
      </span>
    </article>
  )
}
