import { useState } from 'react'

export default function Avatar({ user, size = 'h-9 w-9', textSize = 'text-sm' }) {
  const [imgFailed, setImgFailed] = useState(false)

  if (!user.avatarUrl || imgFailed) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground ${size} ${textSize}`}
      >
        {user.name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={user.avatarUrl}
      alt={user.name}
      onError={() => setImgFailed(true)}
      className={`shrink-0 rounded-full object-cover ${size}`}
    />
  )
}
