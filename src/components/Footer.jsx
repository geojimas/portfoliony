import { useState } from 'react'

export function Footer() {
  const [year] = useState(() => new Date().getFullYear())

  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      Copyright &#169;
      {' '}
      {year}
      {' '}
      by Dimitris Georgiadis, All Rights reserved.
    </div>
  )
}
