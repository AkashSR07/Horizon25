"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer id="contact" className="py-12 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-primary text-glow">
              HORIZON<span className="text-secondary text-glow-secondary">'25</span>
            </h3>
            <p className="text-white/70 mb-4">National Level AI Hackathon</p>
            <p className="text-white/70">April 3-4, 2025</p>
            <p className="text-white/70">KPR Institute of Engineering and Technology</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-white/70">
                <span className="text-primary text-glow">Mr. Prajeet Ragav R</span>
                <br />
                <a href="tel:+919600537544" className="hover:text-primary transition-colors duration-300">
                  +91 96005 37544
                </a>
              </p>
              <p className="text-white/70">
                <span className="text-secondary text-glow-secondary">Ms. Vethavarna V</span>
                <br />
                <a href="tel:+918248964837" className="hover:text-secondary transition-colors duration-300">
                  +91 82489 64837
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Themes", "Prizes"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSctOrk95xhwOy5rtZfSv3tU4wn3lxSOFBxud0IZMVkjEEoLIQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-glow-accent hover:text-accent/80 transition-colors duration-300"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} Horizon'25 | KPR Institute of Engineering and Technology
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

