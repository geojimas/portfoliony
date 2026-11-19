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
    },
    {
      id: 2,
      name: 'Lancom Ltd',
      period: 'Mar 2021 to Aug 2021',
      position: 'Junior full-stack developer',
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
          <li
            key={company.id}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-3"
          >
            <div>
              <p className="font-medium">{company.name}</p>
              <p className="text-sm text-muted">{company.position}</p>
            </div>
            <p className="text-sm tabular-nums text-muted">{company.period}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
