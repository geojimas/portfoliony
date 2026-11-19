import { LogosGitlab } from './techs/Github'
import { LogosLinkedinIcon } from './techs/Linkedin'

export function Hero() {
  return (
    <section id="home">
      <div className="shell pt-28 pb-14 md:pt-32 md:pb-16">
        <div className="hero-rise">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] [font-stretch:112%]">
            <span className="block">Dimitris</span>
            <span className="block">Georgiadis</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-pretty text-lg leading-[1.6] text-muted md:text-xl">
            Front-end developer in Greece. I build interfaces with Vue and TypeScript that stay fast and easy to maintain.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="rounded-[3px] bg-marker px-1.5 py-0.5 font-semibold text-ink">Available for work</span>
            <span className="text-muted">Open to front-end roles.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              className="inline-flex h-11 items-center rounded-md bg-sea px-5 text-sm font-semibold text-paper transition-colors hover:bg-sea-deep"
              href="https://app.enhancv.com/share/9f7135a3/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="group inline-flex items-center gap-1.5 text-sm font-medium"
              href="https://github.com/geojimas"
              target="_blank"
              rel="noreferrer"
            >
              <LogosGitlab aria-hidden="true" className="size-4" />
              <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-sea">GitHub</span>
            </a>
            <a
              className="group inline-flex items-center gap-1.5 text-sm font-medium"
              href="https://www.linkedin.com/in/dimitris-georgiadis-47b8b21aa/"
              target="_blank"
              rel="noreferrer"
            >
              <LogosLinkedinIcon aria-hidden="true" className="size-4" />
              <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-sea">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
