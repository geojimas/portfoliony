import hero from '../assets/me.jpg'
import { LogosGitlab } from './techs/Github'
import { LogosLinkedinIcon } from './techs/Linkedin'

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="sm:max-w-xs h-full mt-6 object-cover rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white mt-5 font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Dimitris Georgiadis</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            Junior Fullstack Developer
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a
              href="https://github.com/geojimas"
              target={'_blank'}
              className="hover:scale-125 cursor-pointer "
              rel="noreferrer">
              <LogosGitlab />
            </a>
            <a
              href="https://www.linkedin.com/in/dimitris-georgiadis-47b8b21aa"
              target={'_blank'}
              className="hover:scale-125 cursor-pointer "
              rel="noreferrer">
              <LogosLinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
