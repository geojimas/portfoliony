import { motion } from 'framer-motion'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { src as project5 } from '../assets/auth.png?&format=webp&as=metadata'
import { src as project4 } from '../assets/bmi.png?&format=webp&as=metadata'
import { src as project7 } from '../assets/coupons.png?&format=webp&as=metadata'
import { src as project6 } from '../assets/lmn.png?&format=webp&as=metadata'
import { src as project1 } from '../assets/nxmov.png?&format=webp&as=metadata'
import { src as project3 } from '../assets/realt.png?&format=webp&as=metadata'
import { src as project2 } from '../assets/rec.png?&format=webp&as=metadata'
import { src as project8 } from '../assets/vibeVue.png?&format=webp&as=metadata'
import 'swiper/css'
import 'swiper/css/pagination'

export function Project() {
  const projects = [
    {
      id: 1,
      img: project1,
      name: 'Movie App',
      github_link: 'https://github.com/geojimas/nuxt-movies',
      live_link: 'https://mos.vercel.app',
    },
    {
      id: 2,
      img: project2,
      name: 'Recipes',
      github_link: 'https://github.com/geojimas/recipes-app',
      live_link: 'https://recipesq.netlify.app',
    },
    {
      id: 3,
      img: project3,
      name: 'Real Time App , Bitcoin Currency price changes every 8 seconds',
      github_link: 'https://github.com/geojimas/real-time-data-api',
      live_link: 'https://real-time-data-api.onrender.com',
    },
    {
      id: 4,
      img: project4,
      name: 'BMI Calculator',
      github_link: 'https://github.com/geojimas/vue-bmi-calc',
      live_link: 'https://vbmi.netlify.app',
    },
    {
      id: 5,
      img: project5,
      name: 'JWT Authentication',
      github_link: 'https://github.com/geojimas/jwt-auth-vue-typescript',
      live_link: 'https://climax245.up.railway.app',
    },
    {
      id: 6,
      img: project6,
      name: 'Stories REST API',
      github_link: 'https://github.com/geojimas/stories-REST-API',
    },
    {
      id: 7,
      img: project7,
      name: 'Job Coupons App',
      github_link: 'https://github.com/geojimas/job-coupons',
      live_link: 'https://job-coupons.netlify.app',
    },
    {
      id: 8,
      img: project8,
      name: 'Vue 3 + Vite Starter Template',
      github_link: 'https://github.com/geojimas/VibeVue',
      live_link: 'https://vibe-vue.vercel.app',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 2 }}
    >
      <section id="projects" className="py-16 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            My
            {' '}
            <span className="text-yellow-400">Projects</span>
          </h3>
        </div>
        <br />
        <div className="flex justify-center max-w-7xl gap-6 px-5 mx-auto items-center relative">
          <div className="lg:w-2/3 w-full">
            <Swiper
              slidesperview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project, _index) => (
                <SwiperSlide key={project.id}>
                  <div className="p-4 mb-9 bg-slate-700 rounded-xl">
                    <img src={project.img} alt="" className="rounded-lg" />
                    <h3 className="text-xl my-2">{project.name}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project.github_link}
                        target="_blank"
                        className="text-white hover:underline bg-gray-800 px-2 py-1 inline-block cursor-pointer rounded-md"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          className="text-white hover:underline bg-gray-800 px-2 py-1 inline-block cursor-pointer rounded-md"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
