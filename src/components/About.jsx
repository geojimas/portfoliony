import { Card } from './Card.jsx'
import { Memorial } from './Memorial.jsx'
import { ResumeButton } from './ResumeButton.jsx'

export function About() {
  const info = [
    {
      text: 'Years experience',
      count: '5',
    },
    {
      text: 'Completed Projects',
      count: '7',
    },
    {
      text: 'Companies Work',
      count: '2',
    },
  ]

  return (
    <div>
      <section id="about" className="pb-4 pt-16 text-white md:py-16 lg:pb-40">
        <div className="text-center mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            A little
          </p>
          <h3 id="about-title" className="mb-5 text-4xl font-semibold tracking-tight md:mb-8 sm:text-5xl">
            About me
          </h3>
          <div className="flex flex-col items-center gap-8 px-5 mx-auto max-w-6xl md:flex-row md:gap-6 md:px-10">
            <div className="p-2">
              <div className="text-gray-300 my-4">
                <ol>
                  <li>Hi, I&#39;m Dimitris, a Front-End Developer.</li>
                  <li>I hold a Bachelor&#39;s degree in Computer Science.</li>
                  <li>I specialize in JavaScript, Vue.js, React, Tailwind CSS, and Node.js.</li>
                  <li>You can explore my work on GitHub.</li>
                  <li>Feel free to review my resume as well.</li>
                </ol>
                <div className="flex justify-center mt-10 items-center gap-7">
                  {info.map(content => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-yellow-400">
                        {content.count}
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span>
                    </div>
                  ))}
                </div>
                <br />
                <div className="flex justify-center">
                  <a
                    target="_blank"
                    href="https://app.enhancv.com/share/9f7135a3/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                    rel="noreferrer"
                  >
                    <ResumeButton text="Resume" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                <Card>
                  <Memorial />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
