import { LogosVue } from './techs/Vue'
import { LogosTailwindcssIcon } from './techs/Tailwind'
import { LogosTypescriptIcon } from './techs/TypeScript'
import { LogosJavascript } from './techs/Javascript'
// import { LogosNodejsIcon } from './techs/Node'
import { LogosGitIcon } from './techs/Git'
import { LogosReact } from './techs/React'
import { LogosWebpack } from './techs/Webpack'
import { LogosDocker } from './techs/Docker.jsx'
import { motion, AnimatePresence } from 'framer-motion'

const logos = [
  { component: <LogosJavascript />, key: 'javascript' },
  { component: <LogosTypescriptIcon />, key: 'typescript' },
  { component: <LogosVue />, key: 'vue' },
  { component: <LogosReact />, key: 'react' },
  { component: <LogosTailwindcssIcon />, key: 'tailwind' },
  { component: <LogosWebpack />, key: 'webpack' },
  { component: <LogosDocker />, key: 'docker' },
  // { component: <LogosNodejsIcon />, key: 'nodejs' },
  { component: <LogosGitIcon />, key: 'git' }
]

export const Skills = () => {
  return (
    <section id="skills" className="py-4 pb-16 mb-10 bg-gray-800 rounded-3xl relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold mb-6">
          My <span className="text-yellow-400">Skills</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <AnimatePresence>
            {logos.map((logo, index) => (
              <motion.div
                key={logo.key}
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ ease: 'easeOut', duration: 1.5, delay: index * 0.2 }}
                className="border-2 group transition-all border-yellow-600 relative min-w-40 max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-yellow-400/70">
                <div className="w-18 h-16 flex items-center justify-center rounded-full">
                  <div className="text-6xl w-16 h-16 rounded-full flex items-center justify-center">
                    {logo.component}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
