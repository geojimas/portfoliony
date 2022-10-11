import { Swiper, SwiperSlide } from 'swiper/react'
import project1 from '../assets/nxmov.png'
import project2 from '../assets/typer.png'
import project3 from '../assets/weather.png'
import project4 from '../assets/bmi.png'
import project5 from '../assets/lot.png'
import project6 from '../assets/rng.png'
import project7 from '../assets/auth.png'
import project8 from '../assets/lmn.png'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

export const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'Movie App',
      github_link: 'https://github.com/geojimas/nuxt-movies',
      live_link: 'https://mos.vercel.app'
    },
    {
      img: project2,
      name: 'Type game',
      github_link: 'https://github.com/geojimas/vue-typing-game',
      live_link: 'https://typv.netlify.app'
    },
    {
      img: project3,
      name: 'Weather App',
      github_link: 'https://github.com/geojimas/vue-weather',
      live_link: 'https://opweather.netlify.app'
    },
    {
      img: project4,
      name: 'BMI Calculator',
      github_link: 'https://github.com/geojimas/vue-bmi-calc',
      live_link: 'https://vbmi.netlify.app'
    },
    {
      img: project5,
      name: 'Lottery Game',
      github_link: 'https://github.com/geojimas/lottery-game',
      live_link: 'https://lott.netlify.app'
    },
    {
      img: project6,
      name: 'Random Password Generator',
      github_link: 'https://github.com/geojimas/randy',
      live_link: 'https://randy66.netlify.app'
    },
    {
      img: project7,
      name: 'JWT Authentication',
      github_link: 'https://github.com/geojimas/jwt-auth-vue-typescript',
      live_link: 'https://climax245.herokuapp.com'
    },
    {
      img: project8,
      name: 'Stories REST API',
      github_link: 'https://github.com/geojimas/stories-REST-API'
    }
  ]
  return (
    <section id="projects" className="py-16 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex justify-center max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            loop={true}
            autoplay={{
              delay: 3000
            }}
            pagination={{
              clickable: true
            }}
            modules={[Pagination, Autoplay]}>
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block hover:scale-105 cursor-pointer rounded-md"
                      rel="noreferrer">
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block hover:scale-105 cursor-pointer rounded-md"
                      rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
