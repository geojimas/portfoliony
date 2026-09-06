import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import project4 from '../assets/auth.png?w=600&h=300&format=webp&as=metadata'
import project6 from '../assets/coupons.png?w=600&h=300&format=webp&as=metadata'
import project5 from '../assets/lmn.png?w=600&h=300&format=webp&as=metadata'
import project1 from '../assets/nxmov.png?w=600&h=300&format=webp&as=metadata'
import project3 from '../assets/realt.png?w=600&h=300&format=webp&as=metadata'
import project2 from '../assets/rec.png?w=600&h=300&format=webp&as=metadata'
import project7 from '../assets/vibeVue.png?w=600&h=300&format=webp&as=metadata'
import 'swiper/css'
import 'swiper/css/pagination'

export function Project() {
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 20,
    touchRatio: 1,
    threshold: 12,
    touchAngle: 45,
    resistanceRatio: 0.85,
    grabCursor: false,
    preventClicks: false,
    preventClicksPropagation: false,
    breakpoints: {
      730: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 3,
      },
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Autoplay],
  }

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
      name: 'JWT Authentication',
      github_link: 'https://github.com/geojimas/jwt-auth-vue-typescript',
      live_link: 'https://authentication-system-yopy.onrender.com',
    },
    {
      id: 5,
      img: project5,
      name: 'Stories REST API',
      github_link: 'https://github.com/geojimas/stories-REST-API',
    },
    {
      id: 6,
      img: project6,
      name: 'Job Coupons App',
      github_link: 'https://github.com/geojimas/job-coupons',
      live_link: 'https://job-coupons.netlify.app',
    },
    {
      id: 7,
      img: project7,
      name: 'Vue 3 + Vite Starter Template',
      github_link: 'https://github.com/geojimas/VibeVue',
      live_link: 'https://vibe-vue.vercel.app',
    },
  ]
  return (
    <div>
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
          <div className="w-full">
            <Swiper {...swiperParams}>
              {projects.map(project => (
                <SwiperSlide key={project.id}>
                  <div className="p-4 mb-9 bg-slate-700 rounded-xl">
                    <img src={project.img.src} alt="" className="rounded-lg" />
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
    </div>
  )
}
