import { src as arxnet } from '../assets/arxnet.png?&format=webp&as=metadata'
import { src as lancom } from '../assets/lancom.png?&format=webp&as=metadata'

export function Memorial() {
  const companies = [
    {
      name: 'ΑΡΧ ΝΕΤ Α.Ε.',
      period: 'Nov 2021 - Present',
      position: 'Front-End Developer',
      logo: arxnet,
      active: true,
    },
    {
      name: 'Lancom Ltd',
      period: 'Mar 2021 - Aug 2021',
      position: 'Junior Full Stack Developer',
      logo: lancom,
      active: false,
    },
  ]

  return (
    <div className="container transition-all max-w-5xl px-4 py-12 mx-auto">
      <div className="relative mx-4 col-span-12 px-4 space-y-6 sm:col-span-9">
        <div
          className="col-span-12 space-y-12 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-500"
        >
          { companies.map((company, index) => (
            <div
              key={index}
              className={`flex flex-col sm:relative sm:before:absolute sm:before:top-4 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-1 ${company.active ? 'before:bg-green-400' : 'before:bg-red-400'}`}
            >
              <div className="flex items-center justify-center">
                <img src={company.logo} alt="logo" className="rounded-full object-contain bg-white w-20 h-16 mr-2 mb-6" />
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">{company.name}</h3>
                  <time className="text-xs tracking-wide uppercase text-gray-300">
                    {company.period}
                  </time>
                  <p className="mt-2">{company.position}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}
