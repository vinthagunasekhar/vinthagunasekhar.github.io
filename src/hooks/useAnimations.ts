'use client'

import { Variants } from 'framer-motion'

export function useAnimations() {
  // Animation for elements that fade in and slide up
  const fadeInUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  // Animation for staggered children elements
  const staggerContainer: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return {
    fadeInUp,
    staggerContainer
  }
}