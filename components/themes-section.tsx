"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ThemesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const themes = [
    {
      title: "AI for Social Good",
      description: "Develop AI solutions that address social challenges and improve quality of life for communities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4 text-primary"
        >
          <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.4 11.5 7.6 11.7.2.1.5.1.8 0 .2-.2 7.6-6.3 7.6-11.7a8 8 0 0 0-8-8z"></path>
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
      ),
      color: "primary",
    },
    {
      title: "AI in Healthcare",
      description: "Create innovative AI applications for diagnosis, treatment, and healthcare management.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4 text-secondary"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 8.5 9.5"></path>
          <path d="M12 5v16"></path>
        </svg>
      ),
      color: "secondary",
    },
    {
      title: "AI in Automated Stores",
      description: "Build AI systems for inventory management, customer experience, and automated retail operations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4 text-accent"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      color: "accent",
    },
    {
      title: "AI in Disaster Prediction & Response",
      description: "Develop AI solutions for early warning systems, disaster management, and emergency response.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4 text-primary"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
      ),
      color: "primary",
    },
  ]

  return (
    <section id="themes" className="py-20 relative overflow-hidden bg-black/80">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent text-glow-accent">Hackathon</span> <span className="text-white">Themes</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
            Choose from these cutting-edge themes and build innovative AI solutions that can transform the future.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={`bg-black/60 backdrop-blur-md p-6 rounded-lg border border-${theme.color}/30 hover:border-${theme.color} transition-all duration-300 flex flex-col items-center text-center h-full neon-border-${theme.color === "primary" ? "" : theme.color}`}
              >
                <div className={`text-${theme.color}`}>{theme.icon}</div>
                <h3
                  className={`text-xl font-bold mb-3 text-${theme.color} text-glow-${theme.color === "primary" ? "" : theme.color}`}
                >
                  {theme.title}
                </h3>
                <p className="text-white/70">{theme.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

