// components/ui/Hero.tsx
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="h-screen flex items-center justify-center px-16"
    >
      <div className="text-center space-y-8 max-w-4xl">
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-7xl font-bold bg-gradient-to-r from-black to-samsung-blue bg-clip-text text-transparent"
        >
          Galaxy S26 Ultra
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-gray-600 max-w-2xl mx-auto"
        >
          Le futur est ici. Snapdragon 8 Elite Gen 5, 200MP AI, design minimaliste.
        </motion.p>
      </div>
    </motion.section>
  )
}
