import { useEffect, useRef, useState } from 'react'
import { LogosDocker } from './techs/Docker.jsx'
// import { LogosNodejsIcon } from './techs/Node'
import { LogosGitIcon } from './techs/Git'
import { LogosJavascript } from './techs/Javascript'
import { LogosReact } from './techs/React'
import { LogosTailwindcssIcon } from './techs/Tailwind'
import { LogosTypescriptIcon } from './techs/TypeScript'
import { LogosVitejs } from './techs/Vite.jsx'
import { LogosVue } from './techs/Vue'

const logos = [
  { component: <LogosJavascript />, key: 'javascript' },
  { component: <LogosTypescriptIcon />, key: 'typescript' },
  { component: <LogosVue />, key: 'vue' },
  { component: <LogosReact />, key: 'react' },
  { component: <LogosTailwindcssIcon />, key: 'tailwind' },
  { component: <LogosVitejs />, key: 'vite' },
  { component: <LogosDocker />, key: 'docker' },
  // { component: <LogosNodejsIcon />, key: 'nodejs' },
  { component: <LogosGitIcon />, key: 'git' },
]

export function Skills() {
  const skillsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = skillsRef.current
    if (!section)
      return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-4 pb-16 mb-10 bg-gray-800 rounded-3xl relative lg:mb-40">
      <div className="mt-8 text-gray-100 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
          What I work with
        </p>
        <h3 id="skills-title" className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Skills
        </h3>
        <div
          ref={skillsRef}
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
        >
          {logos.map((logo, index) => (
            <div
              key={logo.key}
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 700ms ease-out ${isVisible ? index * 80 : 0}ms, transform 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 350ms ease, border-color 350ms ease`,
              }}
              className="group relative min-w-40 max-w-[16rem] rounded-xl border border-yellow-600 bg-gray-900 p-10 hover:scale-105 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/50"
            >
              <div className="w-18 h-16 flex items-center justify-center rounded-full">
                <div className="text-6xl w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                  {logo.component}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
