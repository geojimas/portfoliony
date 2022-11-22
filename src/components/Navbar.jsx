import { useEffect, useState } from 'react'
import { MaterialSymbolsMenu } from '../components/techs/BurgerMenu'

export const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const menuLinks = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'CONTACT', link: '#contact' }
  ]
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  }, [])
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? 'bg-white  text-gray-900' : 'text-white'
      }`}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            Dim<span className="text-cyan-600">it</span>ris
          </h4>
        </div>
        <div
          className={` ${
            sticky ? 'md:bg-white/0 bg-white' : 'bg-white'
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
          <ul className="flex items-center gap-1 py-2 text-lg font-bold">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            sticky ? 'text-gray-900' : 'text-gray-100'
          } text-3xl md:hidden m-5`}>
          <MaterialSymbolsMenu />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? 'right-0' : 'right-[-100%]'}`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
