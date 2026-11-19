import project4 from '../assets/auth.png?w=600&h=300&format=webp&as=metadata'
import project6 from '../assets/coupons.png?w=600&h=300&format=webp&as=metadata'
import project5 from '../assets/lmn.png?w=600&h=300&format=webp&as=metadata'
import project3 from '../assets/realt.png?w=600&h=300&format=webp&as=metadata'
import project2 from '../assets/rec.png?w=600&h=300&format=webp&as=metadata'
import project7 from '../assets/vibeVue.png?w=600&h=300&format=webp&as=metadata'

export function Project() {
  const projects = [
    {
      id: 1,
      img: project7,
      name: 'VibeVue starter',
      stars: 18,
      github_link: 'https://github.com/geojimas/VibeVue',
      live_link: 'https://vibe-vue.vercel.app',
    },
    {
      id: 2,
      img: project6,
      name: 'Job coupons',
      github_link: 'https://github.com/geojimas/job-coupons',
      live_link: 'https://job-coupons.netlify.app',
    },
    {
      id: 3,
      img: project2,
      name: 'Recipes',
      github_link: 'https://github.com/geojimas/recipes-app',
      live_link: 'https://recipesq.netlify.app',
    },
    {
      id: 4,
      img: project4,
      name: 'JWT authentication',
      github_link: 'https://github.com/geojimas/jwt-auth-vue-typescript',
      live_link: 'https://authentication-system-yopy.onrender.com',
    },
    {
      id: 5,
      img: project3,
      name: 'Real-time bitcoin prices',
      github_link: 'https://github.com/geojimas/real-time-data-api',
      live_link: 'https://real-time-data-api.onrender.com',
    },
    {
      id: 6,
      img: project5,
      name: 'Stories REST API',
      github_link: 'https://github.com/geojimas/stories-REST-API',
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="shell">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Work</h2>
        <p className="mt-4 max-w-[52ch] text-muted">
          Six projects from 2021 to now. Each links to its source, and most have a live preview.
        </p>
        <ul className="mt-10 border-t border-line">
          {projects.map(project => (
            <li
              key={project.id}
              className="group flex flex-col-reverse gap-4 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold leading-snug md:text-xl">
                  {project.name}
                  {project.stars && (
                    <span className="inline-flex items-center gap-1 rounded-[3px] bg-marker px-1.5 py-0.5 text-[11px] font-semibold leading-4 text-ink">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-3"
                      >
                        <path d="M8 1.5l1.9 3.85 4.25.62-3.07 3 .72 4.24L8 11.21l-3.8 2 .72-4.24-3.07-3 4.25-.62L8 1.5Z" />
                      </svg>
                      {project.stars} stars
                      <span className="sr-only"> on GitHub</span>
                    </span>
                  )}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
                  <a
                    className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-sea hover:decoration-sea"
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                  {project.live_link && (
                    <a
                      className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-sea hover:decoration-sea"
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live preview
                    </a>
                  )}
                </div>
              </div>
              <div className="overflow-hidden rounded-md border border-line transition-colors duration-300 group-hover:border-sea/40 sm:shrink-0">
                <img
                  src={project.img.src}
                  srcSet={project.img.srcset}
                  sizes="112px"
                  width={project.img.width}
                  height={project.img.height}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:aspect-auto sm:h-16 sm:w-28"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
