import arxnetLogo from '../assets/arxnet.png'
import lancomLogo from '../assets/lancom.png'

const careerStart = { year: 2021, month: 2 } // March 2021

function yearsOfExperience() {
  const now = new Date()
  const months
    = (now.getFullYear() - careerStart.year) * 12 + (now.getMonth() - careerStart.month)

  return Math.max(1, Math.floor(months / 12))
}

export function Memorial() {
  const companies = [
    {
      id: 1,
      name: 'ΑΡΧ ΝΕΤ Α.Ε.',
      period: 'Nov 2021 to now',
      position: 'Front-end developer',
      logo: arxnetLogo,
    },
    {
      id: 2,
      name: 'Lancom Ltd',
      period: 'Mar 2021 to Aug 2021',
      position: 'Junior full-stack developer',
      logo: lancomLogo,
    },
  ]

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-sm font-semibold">Experience</h3>
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{yearsOfExperience()}+</span>
          {' years'}
        </p>
      </div>
      <ul className="mt-3">
        {companies.map(company => (
          <li key={company.id} className="border-t border-line py-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <img
                src={company.logo}
                alt=""
                className="h-4 w-16 shrink-0 object-contain object-left mix-blend-multiply"
              />
              <div className="min-w-0 flex-1">
                <p className="font-medium">{company.name}</p>
                <p className="text-sm text-muted">{company.position}</p>
              </div>
              <p className="w-full pl-[4.75rem] text-sm tabular-nums text-muted sm:ml-auto sm:w-auto sm:pl-0">
                {company.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
