export const About = () => {
  const info = [
    { text: 'Years experience', count: '1.5' },
    { text: 'Completed Projects', count: '10' },
    { text: 'Companies Work', count: '2' }
  ]

  const aboutMe = [
    {
      text: "Hi i'm a Jim, Junior Full Stack Developer, i have bachelor degree in computer science. I mainly work with MEVN Stack (MongoDB / MySQL, ExpressJS, VueJS, NodeJS) with TypeScript but i'am familiar with other languages and frameworks like PHP & Laravel. If you want check out my projects on GitHub. My goal is to get better every day. Also don't forget to check out my resume."
    }
  ]
  return (
    <section id="about" className="py-16 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-4">
              {aboutMe.map(content => (
                <p key={content} className="text-justify leading-7 w-11/12 mx-auto">
                  {content.text}
                </p>
              ))}
              <div className="flex mt-10 items-center gap-7">
                {info.map(content => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{' '}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className="flex justify-start">
                <a
                  target={'_blank'}
                  href="https://www.canva.com/design/DAEsOtedHcw/9nOcuUvuW3ZdK1oig9q1Xg/view?utm_content=DAEsOtedHcw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                  className="relative inline-flex items-center px-8 py-3 overflow-hidden text-WHITE border-2 rounded border-current group focus:outline-none focus:ring"
                  rel="noreferrer">
                  <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                    <img src="https://api.iconify.design/emojione-v1:right-arrow.svg" alt="arrow" />
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:mr-4">
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center hover:scale-105">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <section className="bg-gray-800 text-gray-100 rounded-3xl">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                  <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3"></div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                      <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                        {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                          <h3 className="text-xl font-semibold tracking-wide">
                            Donec porta enim vel{' '}
                          </h3>
                          <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                            Dec 2020
                          </time>
                          <p className="mt-3">
                            Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                          </p>
                        </div> */}
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                          <h3 className="text-xl font-semibold tracking-wide">arx.net S.A.</h3>
                          <time className="text-xs tracking-wide uppercase text-gray-400">
                            Nov 2021 - Present
                          </time>
                          <p className="mt-3">Frontend Web Developer</p>
                        </div>
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-600">
                          <h3 className="text-xl font-semibold tracking-wide">Lancom Ltd</h3>
                          <time className="text-xs tracking-wide uppercase text-gray-400">
                            Mar 2021 - Sep 2021
                          </time>
                          <p className="mt-3">Junior Full Stack Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
