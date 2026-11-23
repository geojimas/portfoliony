import { LogosCodex } from './techs/Codex'
import { LogosCopilot } from './techs/Copilot'
import { LogosDocker } from './techs/Docker.jsx'
import { LogosGitIcon } from './techs/Git'
import { LogosJavascript } from './techs/Javascript'
import { LogosNodejsIcon } from './techs/Node'
import { LogosOpenCode } from './techs/OpenCode'
import { LogosReact } from './techs/React'
import { LogosTailwindcssIcon } from './techs/Tailwind'
import { LogosTypescriptIcon } from './techs/TypeScript'
import { LogosVitejs } from './techs/Vite.jsx'
import { LogosVue } from './techs/Vue'

const groups = [
  {
    id: 1,
    title: 'Languages',
    skills: [
      { name: 'JavaScript', Icon: LogosJavascript },
      { name: 'TypeScript', Icon: LogosTypescriptIcon },
    ],
  },
  {
    id: 2,
    title: 'Frameworks and runtime',
    skills: [
      { name: 'Vue', Icon: LogosVue },
      { name: 'React', Icon: LogosReact },
      { name: 'Node.js', Icon: LogosNodejsIcon },
    ],
  },
  {
    id: 3,
    title: 'Build and tools',
    skills: [
      { name: 'Vite', Icon: LogosVitejs },
      { name: 'Tailwind CSS', Icon: LogosTailwindcssIcon },
      { name: 'Docker', Icon: LogosDocker },
      { name: 'Git', Icon: LogosGitIcon },
    ],
  },
  {
    id: 4,
    title: 'AI tools',
    skills: [
      { name: 'Copilot', Icon: LogosCopilot },
      { name: 'Codex', Icon: LogosCodex },
      { name: 'OpenCode', Icon: LogosOpenCode },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Skills</h2>
        <p className="mt-4 max-w-[54ch] text-muted">
          The languages, frameworks, and tools I use day to day.
        </p>
        <dl className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(group => (
            <div key={group.id}>
              <dt className="text-sm font-semibold text-sea">{group.title}</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap items-center gap-4">
                  {group.skills.map(({ name, Icon }) => (
                    <li
                      key={name}
                      className="group/icon relative flex size-8 items-center justify-center"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-7 transition-transform duration-200 ease-out group-hover/icon:-translate-y-0.5 group-hover/icon:scale-105"
                      />
                      <span className="sr-only">{name}</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded bg-ink px-1.5 py-0.5 text-[11px] font-medium leading-4 text-paper opacity-0 transition duration-150 group-hover/icon:translate-y-0 group-hover/icon:opacity-100"
                      >
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
