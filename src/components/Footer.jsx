import { useState } from 'react'
import { LogosGitlab } from './techs/Github'
import { LogosLinkedinIcon } from './techs/Linkedin'

export function Footer() {
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Dimitris Georgiadis</p>
        <div className="flex items-center gap-5">
          <a
            className="transition-colors hover:text-sea"
            href="mailto:georgiadis8636@gmail.com"
          >
            Email
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-sea"
            href="https://github.com/geojimas"
            target="_blank"
            rel="noreferrer"
          >
            <LogosGitlab aria-hidden="true" className="size-4" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-sea"
            href="https://www.linkedin.com/in/dimitris-georgiadis-47b8b21aa/"
            target="_blank"
            rel="noreferrer"
          >
            <LogosLinkedinIcon aria-hidden="true" className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
