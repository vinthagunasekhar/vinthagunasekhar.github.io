'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'

// Sample project data - you can replace this with your actual projects
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js and Node.js',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    previewUrl: '#',
    githubUrl: '#'
  },
  // Add more projects here
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <Card className="cursor-pointer transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col gap-2">
                  <a 
                    href={project.previewUrl}
                    className="text-sm text-primary hover:underline"
                  >
                    Live Preview
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-sm text-primary hover:underline"
                  >
                    View Source
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}