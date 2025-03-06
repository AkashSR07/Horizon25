"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function PrizesSection() {
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

  const prizes = [
    {
      place: "1st Place",
      amount: "₹10,000",
      icon: "🥇",
      color: "primary",
    },
    {
      place: "2nd Place",
      amount: "₹8,000",
      icon: "🥈",
      color: "secondary",
    },
    {
      place: "3rd Place",
      amount: "₹6,000",
      icon: "🥉",
      color: "accent",
    },
  ]

  return (
    <section id="prizes" className="py-20 relative overflow-hidden">
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
            <span className="text-primary text-glow">Prizes</span>{" "}
            <span className="text-secondary text-glow-secondary">&</span>{" "}
            <span className="text-accent text-glow-accent">Rewards</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
            Compete for exciting prizes and gain recognition for your innovative AI solutions.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className={`bg-black/60 backdrop-blur-md p-8 rounded-lg border border-${prize.color}/30 hover:border-${prize.color} transition-all duration-300 flex flex-col items-center text-center h-full neon-border-${prize.color === "primary" ? "" : prize.color}`}
              >
                <div className="text-5xl mb-4">{prize.icon}</div>
                <h3
                  className={`text-2xl font-bold mb-3 text-${prize.color} text-glow-${prize.color === "primary" ? "" : prize.color}`}
                >
                  {prize.place}
                </h3>
                <p className="text-3xl font-bold text-white">{prize.amount}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 bg-black/40 backdrop-blur-md p-6 rounded-lg border border-primary/20 inline-block"
          >
            <h3 className="text-xl font-bold mb-3 text-white">Additional Benefits</h3>
            <ul className="text-white/70 text-left">
              <li className="flex items-center mb-2">
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
                  className="h-5 w-5 mr-2 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Certificates for all participants
              </li>
              <li className="flex items-center mb-2">
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
                  className="h-5 w-5 mr-2 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Networking opportunities with industry experts
              </li>
              <li className="flex items-center">
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
                  className="h-5 w-5 mr-2 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Potential internship opportunities for top performers
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

