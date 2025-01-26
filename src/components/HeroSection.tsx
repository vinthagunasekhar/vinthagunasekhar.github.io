'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAnimations } from '@/hooks/useAnimations'

export function HeroSection() {
  // Get our predefined animations
  const { fadeInUp, staggerContainer } = useAnimations()

  return (
    <motion.div 
      className="min-h-[80vh] flex flex-col justify-center items-center text-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Main heading with animation */}
      <motion.h1 
        className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
        variants={fadeInUp}
      >
        Your Name
      </motion.h1>

      {/* Subheading with role */}
      <motion.p 
        className="text-xl text-muted-foreground mb-8"
        variants={fadeInUp}
      >
        Full Stack Developer | Creating Digital Experiences
      </motion.p>

      {/* Brief introduction */}
      <motion.p 
        className="max-w-2xl text-lg mb-8 text-muted-foreground"
        variants={fadeInUp}
      >
        I craft responsive websites and applications, focusing on clean code 
        and user-centered design. Passionate about building digital solutions 
        that make a difference.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div 
        className="flex gap-4"
        variants={fadeInUp}
      >
        <Link href="/projects">
          <Button size="lg">View My Work</Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="outline">Get in Touch</Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}