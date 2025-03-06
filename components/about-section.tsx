"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
      },
    }),
  }

  const aboutText =
    "Dive into the future with Horizon'25 – a National AI Hackathon that challenges you to design cutting-edge AI solutions in a cyberpunk-inspired digital universe. Participants will leverage Generative AI to solve real-world problems."
  const aboutTextArray = aboutText.split(" ")

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary text-glow">About</span>{" "}
            <span className="text-secondary text-glow-secondary">Horizon'25</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl leading-relaxed text-white/80 mb-8">
              {aboutTextArray.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textRevealVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Innovate",
                description: "Create groundbreaking AI solutions that push the boundaries of what's possible",
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
                    className="h-10 w-10 mb-4 text-primary"
                  >
                    <path d="M2.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M5.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M8.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M11.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M14.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M17.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M20.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M2.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M5.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M8.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M11.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M14.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M17.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M20.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M2.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M5.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M8.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M11.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M14.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M17.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M20.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M2.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M5.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M8.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M11.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M14.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M17.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M20.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                  </svg>
                ),
              },
              {
                title: "Collaborate",
                description: "Work with talented peers to build solutions that matter",
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
                    className="h-10 w-10 mb-4 text-secondary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Transform",
                description: "Create AI solutions that can transform industries and lives",
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
                    className="h-10 w-10 mb-4 text-accent"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 flex flex-col items-center"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

