export const Contact = () => {
  // const contactInfo = [
  //   { logo: 'mail', text: 'codeaprogram@gmail.com' },
  //   { logo: 'logo-whatsapp', text: '123 456 780' },
  //   {
  //     logo: 'location',
  //     text: 'demo location'
  //   }
  // ]
  return (
    <section id="contact" className="py-16 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        {/* <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contactInfo.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row
                  text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">{contact.text}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="container flex flex-col max-w-2xl p-6 mx-auto divide-y rounded-md bg-gray-600 text-gray-100">
          <div className="flex flex-wrap justify-between p-4 border-4 rounded-3xl hover:shadow-lg hover:shadow-cyan-600/70">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://api.iconify.design/emojione-v1:boy.svg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Dimitris Georgiadis</h4>
                <span className="text-xs text-gray-400">🟢 Active now</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-4 space-y-2">
                <p className="lg:text-xl md:text-xs font-bold text-white tracking-wider">
                  georgiadis8636@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
