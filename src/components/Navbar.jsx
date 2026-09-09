import { useEffect, useState } from 'react'
import { MaterialSymbolsMenu } from '../components/techs/BurgerMenu'
import { CloseMenu } from './techs/CloseMenu'

export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const menuLinks = [
    { id: 1, name: 'HOME', link: '#home' },
    { id: 2, name: 'ABOUT', link: '#about' },
    { id: 3, name: 'SKILLS', link: '#skills' },
    { id: 4, name: 'PROJECTS', link: '#projects' },
    { id: 5, name: 'CONTACT', link: '#contact' },
  ]
  useEffect(() => {
    let isScrolling = false

    function handleScroll() {
      if (isScrolling)
        return
      isScrolling = true

      requestAnimationFrame(() => {
        const shouldBeSticky = window.scrollY > 0
        setSticky(shouldBeSticky)
        isScrolling = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-999 transition-colors duration-500 ease-in-out ${
        sticky ? 'bg-white text-sky-950' : 'text-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            Dim
            <span className="text-yellow-400">it</span>
            ris
          </h4>
        </div>
        <div
          className={`md:block hidden px-7 py-2 font-medium rounded-bl-full transition-colors duration-500 ease-in-out ${
            sticky ? 'bg-white' : 'bg-white/80'
          }`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg font-bold text-sky-950">
            {menuLinks?.map(menu => (
              <li
                key={menu?.id}
                className="px-2 transition-all duration-300"
              >
                <a
                  href={menu?.link}
                  className="block rounded-full px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-yellow-300/30 hover:to-sky-400/20 hover:text-yellow-500 hover:shadow-[0_8px_20px_rgba(14,116,144,0.12)] active:scale-95"
                >
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-999 text-3xl md:hidden m-5 transition-colors duration-500 ${
            open || sticky ? 'text-sky-950' : 'text-white'
          }`}
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
              open || sticky
                ? 'border-sky-200 bg-white/90 text-sky-950 shadow-lg shadow-sky-100'
                : 'border-white/40 bg-transparent text-white'
            } cursor-pointer hover:scale-110 hover:shadow-xl transition-transform duration-300`}
          >
            {open ? <CloseMenu /> : <MaterialSymbolsMenu color={sticky ? 'black' : 'white'} />}
          </div>
        </div>
        <div
          className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-slate-50/95 text-sky-950 top-0 border-l border-slate-200 shadow-2xl backdrop-blur-sm transition-all duration-300 ease-in-out ${
            open ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-4 py-2 text-xl font-bold">
            {menuLinks?.map(menu => (
              <li
                onClick={() => setOpen(false)}
                key={menu?.id}
                className="px-2"
              >
                <a
                  href={menu?.link}
                  className="block rounded-2xl border border-sky-100 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-linear-to-r hover:from-yellow-100 hover:to-sky-100 hover:text-yellow-500 hover:shadow-[0_10px_25px_rgba(14,116,144,0.12)] active:scale-95"
                >
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
