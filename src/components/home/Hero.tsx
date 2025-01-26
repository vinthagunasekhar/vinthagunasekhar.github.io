'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAnimations } from '@/hooks/useAnimations'
import { SocialLinks } from './SocialLinks'

// Personal information object for easy updates
const personalInfo = {
  name: "Gunasekhar Vintha",
  title: "Software Engineer",
  description: `Passionate software developer with expertise in building modern AI and web applications. 
                Focused on creating clean, efficient code and exceptional user experiences. 
                Currently working with FastAPI, Langchain, and SpringBoot.`,
  currentStatus: "Open to new opportunities",
  skills: ["FastAPI", "Langchain", "SpringBoot", "AWS", "MongoDB"]
}

export function Hero() {
  const { fadeInUp, staggerContainer } = useAnimations()

  return (
    <section className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div 
        className="container min-h-[90vh] flex flex-col justify-center items-center text-center relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Profile section */}
        <motion.div variants={fadeInUp} className="mb-6">
          <p className="text-sm md:text-base bg-primary/10 text-primary px-4 py-1 rounded-full">
            {personalInfo.currentStatus}
          </p>
        </motion.div>

        {/* Name and title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-6 text-muted-foreground"
          variants={fadeInUp}
        >
          {personalInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p 
          className="max-w-2xl text-base md:text-lg mb-8 text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          {personalInfo.description}
        </motion.p>

        {/* Social Links */}
        <motion.div 
          variants={fadeInUp}
          className="mb-8"
        >
          <SocialLinks />
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={fadeInUp}
        >
          <Link href="/projects">
            <Button size="lg" className="w-full sm:w-auto">
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Let's Connect
            </Button>
          </Link>
        </motion.div>

        {/* Skills section */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 border-t w-full max-w-2xl"
        >
          <p className="text-sm text-muted-foreground">
            Currently working with{' '}
            {personalInfo.skills.map((skill, index) => (
              <span key={skill}>
                <span className="text-foreground">{skill}</span>
                {index < personalInfo.skills.length - 1 && ', '}
              </span>
            ))}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}