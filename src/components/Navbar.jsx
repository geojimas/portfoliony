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
              <li key={menu?.id} className="px-6 hover:text-yellow-500 transition-colors duration-500">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-999 text-3xl md:hidden m-5 transition-colors duration-500 ${
            sticky && open ? 'text-sky-950' : 'text-white'
          }`}
        >
          <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
            {open ? <CloseMenu /> : <MaterialSymbolsMenu color={sticky ? 'black' : 'white'} />}
          </div>
        </div>
        <div
          className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 transition-all duration-300 ease-in-out ${
            open ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-xl font-bold">
            {menuLinks?.map(menu => (
              <li onClick={() => setOpen(false)} key={menu?.id} className="px-6">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
