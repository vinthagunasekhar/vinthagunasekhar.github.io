'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// We'll use this interface to ensure type safety for our project data
interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: 'Spendify',
    description: 'A modern AI application that helps you manage your spendings with a confidence choice.',
    technologies: ['Langchain', 'AWS', 'FastAPI', 'PostgreSQL'],
    link: '/projects/ecommerce',
    featured: true
  },
  // Add more projects as needed
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">
              Some of my recent work that showcases my skills and experience
            </p>
          </div>
          <Link href="/projects">
            <Button variant="ghost">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link}>
                  <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}