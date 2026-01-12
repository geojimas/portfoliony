import { Card } from './Card.jsx'
import { Memorial } from './Memorial.jsx'
import { ResumeButton } from './ResumeButton.jsx'

export function About() {
  const info = [{ text: 'Years experience', count: '4' }, {
    text: 'Completed Projects',
    count: '8',
  }, { text: 'Companies Work', count: '2' }]

  return (
    <div>
      <section id="about" className="py-16 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold mb-8">
            About
            {' '}
            <span className="text-yellow-400">Me</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-4">
                <ol>
                  <li>Hi, I&#39;m Dimitris, a Front-End Developer.</li>
                  <li>I have a Bachelor&#39;s degree in Computer Science.</li>
                  <li>I mainly work with Vue.js, React, Tailwind CSS, and Node.js.</li>
                  <li>You can check out my projects on Github.</li>
                  <li>Also feel free to view my Resume.</li>
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
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm hover:scale-105">
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
