import { Memorial } from './Memorial.jsx'
import meImage from '../assets/me.png?format=webp&as=metadata'

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-16">
          <div>
            <p className="max-w-[62ch] text-[1.0625rem] leading-[1.75]">
              I&#39;m Dimitris, a front-end developer based in Greece. I build web interfaces for two companies, mainly with JavaScript, Vue, and Tailwind CSS.
            </p>
            <ul className="mt-5 max-w-[62ch] list-disc space-y-1.5 pl-5 text-[1.0625rem] leading-[1.6] marker:text-sea/70">
              <li>Translate UX/UI designs into production code.</li>
              <li>Maintain complex cross-platform projects across devices.</li>
              <li>Test rigorously for performance and reliability.</li>
              <li>Work in Agile teams and with Micro Frontends.</li>
            </ul>
            <div className="mt-10">
              <Memorial />
            </div>
            <p className="mt-6 text-sm">
              <a
                className="font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-sea"
                href="https://app.enhancv.com/share/9f7135a3/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                target="_blank"
                rel="noreferrer"
              >
                View my resume
              </a>
            </p>
          </div>
          <div className="md:pt-1">
            <img
              src={meImage.src}
              srcSet={meImage.srcset}
              sizes="(max-width: 768px) 70vw, 256px"
              width={meImage.width}
              height={meImage.height}
              alt="Dimitris Georgiadis"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full max-w-[16rem] rounded-md border border-line object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
