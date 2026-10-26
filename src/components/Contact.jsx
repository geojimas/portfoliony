import { MaterialIconThemeEmail as EmailIcon } from './techs/Folder.jsx'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h3 id="contact-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in touch
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Have a project in mind or want to connect? I’d love to hear from you.
        </p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-gray-800 p-6 shadow-xl shadow-black/10 sm:p-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                <EmailIcon aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-gray-400">Email me</p>
                <a
                  className="mt-1 inline-block break-all text-base font-semibold text-white underline decoration-yellow-400/70 underline-offset-4 transition-colors hover:text-yellow-300 sm:text-lg"
                  href="mailto:georgiadis8636@gmail.com"
                >
                  georgiadis8636@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
