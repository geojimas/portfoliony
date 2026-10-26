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
      pauseOnMouseEnter: true,
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
      <section id="projects" aria-labelledby="projects-title" className="px-4 py-20 text-white sm:px-6 lg:pb-44">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Selected work
              </p>
              <h3 id="projects-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Projects
              </h3>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-300">
              A collection of things I’ve built, from web apps to APIs.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="w-full">
            <Swiper className="pt-4" {...swiperParams}>
              {projects.map(project => (
                <SwiperSlide key={project.id}>
                  <article className="mb-10 flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl bg-gray-800 shadow-lg shadow-black/10 transition-[transform,box-shadow] duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20 motion-reduce:transform-none motion-reduce:transition-none">
                    <div className="relative overflow-hidden bg-slate-800">
                      <img
                        src={project.img.src}
                        srcSet={project.img.srcset}
                        sizes="(max-width: 729px) calc(100vw - 2rem), (max-width: 919px) 50vw, 33vw"
                        width={project.img.width}
                        height={project.img.height}
                        alt={`${project.name} preview`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h4 className="text-xl font-semibold leading-7 text-white">
                        {project.name}
                      </h4>
                      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                        <a
                          href={project.github_link}
                          target="_blank"
                          className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                          rel="noopener noreferrer"
                        >
                          Source code
                        </a>
                        {project.live_link && (
                          <a
                            href={project.live_link}
                            target="_blank"
                            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-yellow-400 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                            rel="noopener noreferrer"
                          >
                            Live preview
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}
