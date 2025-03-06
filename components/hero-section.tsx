"use client"

import { useRef, Suspense } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import Three.js components with SSR disabled
const ThreeScene = dynamic(() => import("@/components/three-scene"), { ssr: false })

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <ThreeScene />
        </Suspense>
      </div>

      <div
        ref={containerRef}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
            <span className="text-primary text-glow">HORIZON</span>
            <span className="text-secondary text-glow-secondary">'25</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-white/90"
          >
            National Level AI Hackathon
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-lg border border-primary/30 neon-border">
              <p className="text-lg font-medium">
                <span className="text-primary">Date:</span> April 3-4, 2025
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-lg border border-secondary/30 neon-border-secondary">
              <p className="text-lg font-medium">
                <span className="text-secondary">Location:</span> KPR Institute of Engineering and Technology
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSctOrk95xhwOy5rtZfSv3tU4wn3lxSOFBxud0IZMVkjEEoLIQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/80 text-white font-bold text-lg px-8 py-4 rounded-md transition-all duration-300 neon-border-accent"
            >
              Register Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <a href="#about" className="text-white/70 hover:text-white">
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
              className="h-8 w-8"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

