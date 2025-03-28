import { motion } from 'framer-motion'
import { ResumeButton } from './ResumeButton.jsx'
import { Card } from './Card.jsx'

export const About = () => {
  const info = [{ text: 'Years experience', count: '3' }, {
    text: 'Completed Projects', count: '8'
  }, { text: 'Companies Work', count: '2' }]

  const aboutMe = [{
    text: 'Hi i\'m a Jim, Frontend Web Developer, i have bachelor degree in computer science. I mainly work with VueJS, Vuex, TailwindCSS, NodeJS. If you want check out my projects on GitHub and my Resume.'
  }]
  return (<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeIn', duration: 1 }}>
    <section id="about" className="py-16 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-yellow-400">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-4">
              {aboutMe.map(content => (<p key={content} className="text-justify leading-7 w-11/12 mx-auto">
                {content.text}
              </p>))}
              <div className="flex justify-center mt-10 items-center gap-7">
                {info.map(content => (<div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-yellow-400">
                    {content.count}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>))}
              </div>
              <br />
              <div className="flex justify-center">
                <a
                  target={'_blank'}
                  href="https://www.canva.com/design/DAEsOtedHcw/jbCPzBBTbc125M5MXdEr4w/edit?utm_content=DAEsOtedHcw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  rel="noreferrer">
                  <ResumeButton text={'Resume'} />
                </a>
                {/* <a */}
                {/*  target={'_blank'} */}
                {/*  href="https://drive.google.com/file/d/13N0k6XVarBfqA3k8o_JjjbdBzSZuB7Hs/view?usp=share_link" */}
                {/*  className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white border-2 rounded group focus:outline-none ml-10 hover:text-sky-950 hover:bg-yellow-500 hover:shadow-lg" */}
                {/*  rel="noreferrer"> */}
                {/*    <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4"> */}
                {/*      <img */}
                {/*        src="https://api.iconify.design/emojione-v1:right-arrow.svg" */}
                {/*        alt="arrow" */}
                {/*      /> */}
                {/*    </span> */}

                {/*  <span className="text-md font-bold transition-all group-hover:mr-4"> */}
                {/*      Thesis */}
                {/*    </span> */}
                {/* </a> */}
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center hover:scale-105">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <Card>
                <div className="container transition-all max-w-5xl px-4 py-12 mx-auto">
                  <div className="relative mx-8 col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div
                      className="col-span-12 space-y-12 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-500">
                      <div
                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-400">
                        <h3 className="text-xl font-semibold tracking-wide">
                          ΑΡΧ ΝΕΤ Α.Ε.
                        </h3>
                        <time className="text-xs tracking-wide uppercase text-gray-400">
                          Nov 2021 - Present
                        </time>
                        <p className="mt-3">Frontend Web Developer</p>
                      </div>
                      <div
                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-400">
                        <h3 className="text-xl font-semibold tracking-wide">Lancom Ltd</h3>
                        <time className="text-xs tracking-wide uppercase text-gray-400">
                          Mar 2021 - Aug 2021
                        </time>
                        <p className="mt-3">Junior Full Stack Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>)
}
