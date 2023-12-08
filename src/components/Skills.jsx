/* eslint-disable react/jsx-key */
import React from 'react'
import { LogosVue } from './techs/Vue'
// import { LogosLaravel } from './techs/Laravel'
import { LogosTailwindcssIcon } from './techs/Tailwind'
import { LogosTypescriptIcon } from './techs/TypeScript'
import { LogosJavascript } from './techs/Javascript'
import { LogosNodejsIcon } from './techs/Node'
import { LogosGitIcon } from './techs/Git'
import { LogosReact } from './techs/React'
import { motion, AnimatePresence } from 'framer-motion'

const logos = [
  <LogosJavascript />,
  <LogosTypescriptIcon />,
  <LogosVue />,
  <LogosReact />,
  <LogosTailwindcssIcon />,
  <LogosNodejsIcon />,
  // <LogosLaravel />,
  <LogosGitIcon />
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
              key={index}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ ease: 'easeOut', duration: 3, delay: index * 0.2 }} // Add delay based on index
              className="border-2 group transition-all border-yellow-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-yellow-400/70"
              >
              <div className="w-18 h-16 flex items-center justify-center rounded-full">
                <div className="text-6xl w-16 h-16 rounded-full flex items-center justify-center">
                  {logo}
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
