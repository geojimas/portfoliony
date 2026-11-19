import { useEffect, useRef, useState } from 'react'
import { MaterialSymbolsMenu } from './techs/BurgerMenu'
import { CloseMenu } from './techs/CloseMenu'
import { LogosGitlab } from './techs/Github'
import { LogosLinkedinIcon } from './techs/Linkedin'

const links = [
  { id: 1, name: 'Home', link: '#home' },
  { id: 2, name: 'About', link: '#about' },
  { id: 3, name: 'Skills', link: '#skills' },
  { id: 4, name: 'Work', link: '#projects' },
  { id: 5, name: 'Contact', link: '#contact' },
]

export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    let ticking = false

    function handleScroll() {
      if (ticking)
        return
      ticking = true

      requestAnimationFrame(() => {
        setSticky(window.scrollY > 8)
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = links
      .map(link => document.getElementById(link.link.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setActiveLink(`#${entry.target.id}`)
      })
    }, { rootMargin: '-40% 0px -45% 0px' })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open)
      return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    function handleDesktop(event) {
      if (event.matches)
        setOpen(false)
    }

    const desktop = window.matchMedia('(min-width: 768px)')
    desktop.addEventListener('change', handleDesktop)
    window.addEventListener('keydown', handleKeyDown)
    menuRef.current?.querySelector('a')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      desktop.removeEventListener('change', handleDesktop)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function isCurrent(link) {
    return activeLink === link ? 'location' : undefined
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/90 backdrop-blur-sm transition-colors duration-200 ${
        sticky ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-end" aria-label="Main">
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(menu => (
            <li key={menu.id}>
              <a
                href={menu.link}
                aria-current={isCurrent(menu.link)}
                onClick={() => setActiveLink(menu.link)}
                className={`text-sm transition-colors ${
                  activeLink === menu.link
                    ? 'marker font-semibold text-ink'
                    : 'text-muted hover:text-sea'
                }`}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-xl text-ink transition-colors hover:border-sea/40 hover:text-sea md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(value => !value)}
        >
          {open
            ? <CloseMenu aria-hidden="true" />
            : <MaterialSymbolsMenu color="currentColor" aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="menu-in absolute inset-x-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-y-auto bg-paper px-5 pb-10 pt-4 md:hidden"
        >
          <ul className="divide-y divide-line">
            {links.map(menu => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  aria-current={isCurrent(menu.link)}
                  onClick={() => {
                    setActiveLink(menu.link)
                    setOpen(false)
                  }}
                  className={`flex items-center py-4 text-2xl font-semibold tracking-tight transition-colors ${
                    activeLink === menu.link
                      ? 'marker text-ink'
                      : 'text-ink hover:text-sea'
                  }`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-5 text-sm">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="rounded-[3px] bg-marker px-1.5 py-0.5 font-semibold text-ink">Available for work</span>
              <span className="text-muted">Front-end developer in Greece</span>
            </p>
            <div className="flex items-center gap-6">
              <a className="font-medium text-muted transition-colors hover:text-sea" href="mailto:georgiadis8636@gmail.com">
                Email
              </a>
              <a
                className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-sea"
                href="https://github.com/geojimas"
                target="_blank"
                rel="noreferrer"
              >
                <LogosGitlab aria-hidden="true" className="size-4" />
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-sea"
                href="https://www.linkedin.com/in/dimitris-georgiadis-47b8b21aa/"
                target="_blank"
                rel="noreferrer"
              >
                <LogosLinkedinIcon aria-hidden="true" className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
