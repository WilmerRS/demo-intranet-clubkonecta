export const NOW = new Date('2026-09-22T15:00:00')

export function formatRelativeDate(dateStr) {
  const date = new Date(dateStr)
  const diffHours = Math.floor((NOW - date) / 3_600_000)
  const diffDays = Math.floor(diffHours / 24)

  if (diffHours < 1) return 'Hace unos minutos'
  if (diffHours < 24) {
    return `Hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`
  }
  if (diffDays < 7) {
    return `Hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`
  }

  return date.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
