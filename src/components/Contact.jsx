import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 1 }}>
      <section id="contact" className="py-16 px-3 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            Contact <span className="text-yellow-400">Me</span>
          </h3>
          <div className="container flex flex-col max-w-xl p-4 mx-auto divide-y rounded-md  bg-sky-950 text-gray-100">
            <div className="flex flex-wrap justify-center sm:justify-between p-4 border-4 rounded-3xl hover:shadow-lg hover:shadow-yellow-400/70">
              <div className="flex space-x-2 items-center">
                <span className="text-md font-bold text-white">🟢 Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-4 space-y-2">
                  <p className="lg:text-xl font-bold text-white tracking-wider">
                    georgiadis8636@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
