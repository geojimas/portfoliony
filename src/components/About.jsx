import aboutImg from '../assets/about.png'

export const About = () => {
  const info = [
    { text: 'Years experience', count: '1.5' },
    { text: 'Completed Projects', count: '15' },
    { text: 'Companies Work', count: '2' }
  ]

  const aboutMe = [
    {
      text: "Hi i'm a Jim, Junior Full Stack Developer, i have bachelor degree in computer science. I mainly work with MEVN Stack (MongoDB / MySQL, ExpressJS, VueJS, NodeJS) with TypeScript but i'am familiar with other languages and frameworks like PHP & Laravel. If you want check out my projects on GitHub. My goal is to become a good developer with active role. Also don't forget to check out my resume."
    }
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
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
              <a
                target={'_blank'}
                href="https://www.canva.com/design/DAEsOtedHcw/9nOcuUvuW3ZdK1oig9q1Xg/view?utm_content=DAEsOtedHcw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                rel="noreferrer">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img src={aboutImg} alt="" className="w-full object-cover bg-cyan-600 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
