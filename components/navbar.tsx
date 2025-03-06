"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="text-2xl font-bold text-primary text-glow">
                HORIZON<span className="text-secondary text-glow-secondary">'25</span>
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Themes", "Prizes", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-gray-300 hover:text-primary hover:text-glow px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSctOrk95xhwOy5rtZfSv3tU4wn3lxSOFBxud0IZMVkjEEoLIQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="bg-secondary text-black font-bold px-4 py-2 rounded-md hover:bg-secondary/80 transition-all duration-300 neon-border-secondary"
              >
                Register
              </motion.a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
            {["Home", "About", "Themes", "Prizes", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary hover:text-glow block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSctOrk95xhwOy5rtZfSv3tU4wn3lxSOFBxud0IZMVkjEEoLIQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-black font-bold block px-3 py-2 rounded-md hover:bg-secondary/80 transition-all duration-300 neon-border-secondary"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

