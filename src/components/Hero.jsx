import { src } from '../assets/me.png?&format=webp&as=metadata'
import { LogosGitlab } from './techs/Github'
import { LogosLinkedinIcon } from './techs/Linkedin'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export const Hero = () => {
  return (<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeIn', duration: 1 }}>
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={src} alt="img" loading={'lazy'} className="hidden md:block md:max-w-xs h-full mt-6 object-cover rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white mt-5 font-bold">
              <span className="text-yellow-400 md:text-6xl text-5xl">
                Hello!
                <br />
              </span>
          <span>
            <Typewriter
                words={['My Name is Dimitris Georgiadis']}
                typeSpeed={120}
                delaySpeed={1000}
                cursor={true}
                cursorStyle='_'
                cursorBlinking={true}
            />
            </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            <span className="text-yellow-400">Front-End</span> Developer
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a
              href="https://github.com/geojimas"
              target={'_blank'}
              className="hover:scale-125 cursor-pointer transition-all"
              rel="noreferrer">
              <LogosGitlab />
            </a>
            <a
              href="https://www.linkedin.com/in/dimitris-georgiadis-47b8b21aa/"
              target={'_blank'}
              className="hover:scale-125 cursor-pointer transition-all"
              rel="noreferrer">
              <LogosLinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  </motion.div>)
}
