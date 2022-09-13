import { Swiper, SwiperSlide } from 'swiper/react'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.png'
import projectPerson from '../assets/project_person1.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

export const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'Movie App',
      github_link: 'https://github.com/Sridhar-C-25',
      live_link: 'https://myreactflix.netlify.app'
    },
    {
      img: project2,
      name: 'Job search Web App',
      github_link: 'https://github.com/Sridhar-C-25/jobsearchapp',
      live_link: 'https://myjobsearch.netlify.app'
    },
    {
      img: project3,
      name: 'Highking',
      github_link: 'https://github.com/Sridhar-C-25/highking',
      live_link: 'https://highking01.netlify.app'
    },
    {
      img: project4,
      name: 'React Nav',
      github_link: 'https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown',
      live_link: 'https://reacttailwindnavbar.netlify.app'
    },
    {
      img: project5,
      name: 'Vue Country',
      github_link: 'https://github.com/Sridhar-C-25',
      live_link: 'https://vuecountry05.netlify.app'
    }
  ]
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
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
            {projects.map((projectPerson, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={projectPerson.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{projectPerson.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={projectPerson.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      rel="noreferrer">
                      Github
                    </a>
                    <a
                      href={projectPerson.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={projectPerson} alt="" />
        </div>
      </div>
    </section>
  )
}
