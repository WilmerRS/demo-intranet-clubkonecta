export default function ProductCard({ name, price, seller, imageUrl }) {
  return (
    <article className="w-48 shrink-0 overflow-hidden rounded-2xl bg-background shadow-sm">
      <img
        src={imageUrl}
        alt={name}
        className="h-32 w-full object-cover"
      />
      <div className="p-3">
        <p className="font-semibold text-foreground">S/ {price}</p>
        <h3 className="mt-0.5 truncate text-sm text-foreground">{name}</h3>
        <p className="mt-1 truncate text-xs text-muted-foreground">
          {seller}
        </p>
      </div>
    </article>
  )
}
