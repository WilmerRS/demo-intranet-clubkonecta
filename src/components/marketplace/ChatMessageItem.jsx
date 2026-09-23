import { MapPin, Reply } from 'lucide-react'
import Avatar from '../layout/Avatar'
import { currentUser } from '../../mocks/user'

export default function ChatMessageItem({ message, product, onReply }) {
  const isOwn = message.author === currentUser.name
  const author = isOwn ? currentUser : { name: message.author }

  return (
    <div
      className={`flex min-w-0 items-end gap-2 ${isOwn ? 'flex-row-reverse' : ''}`}
    >
      <Avatar user={author} size="h-8 w-8" textSize="text-xs" />
      <div
        className={`flex min-w-0 max-w-[80%] flex-col gap-1 ${
          isOwn ? 'items-end' : 'items-start'
        }`}
      >
        {!isOwn && (
          <span className="text-xs font-medium text-muted-foreground">
            {message.author}
          </span>
        )}

        <div
          className={`group flex min-w-0 items-center gap-1 ${
            isOwn ? 'flex-row-reverse' : ''
          }`}
        >
          <div
            className={`min-w-0 rounded-2xl px-3 py-2 text-xs ${
              isOwn
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground'
            }`}
          >
            {message.replyTo && (
              <div
                className={`mb-1.5 rounded-lg border-l-2 px-2 py-1 text-[11px] ${
                  isOwn
                    ? 'border-white/50 bg-white/10'
                    : 'border-primary/50 bg-background'
                }`}
              >
                <p className="line-clamp-1 break-words font-semibold opacity-80">
                  {message.replyTo.author}
                </p>
                <p className="line-clamp-1 break-words opacity-70">
                  {message.replyTo.text}
                </p>
              </div>
            )}

            <p>{message.text}</p>

            {product && (
              <div
                className={`mt-2 overflow-hidden rounded-xl ${
                  isOwn ? 'bg-white/15' : 'bg-background'
                }`}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-36 w-full object-cover"
                />
                <div className="p-2.5">
                  <p className="truncate text-xs font-semibold">
                    {product.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold">
                    S/ {product.price}
                  </p>
                  {product.location && (
                    <p className="mt-1 flex items-center gap-1 text-[11px] opacity-80">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{product.location}</span>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onReply(message)}
            aria-label="Responder"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
          >
            <Reply className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
