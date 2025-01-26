'use client'

import { Github, Linkedin, MailIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'


// This interface defines the structure of our social link data
interface SocialLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  username: string
}

// We store all social links in an array for easy maintenance and updates
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/vinthagunasekhar',
    username: '@vinthagunasekhar'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/gunasekharvintha',
    username: 'Gunasekhar Vintha'
  },
  {
    name: 'Twitter',
    icon: XIcon,
    href: 'https://twitter.com/_Gunaa',
    username: '@_Gunaaa'
  },
  {
    name: 'Email',
    icon: MailIcon,
    href: 'mailto:gunasekharvintha@icloud.com',
    username: 'gunasekharvintha@icloud.com'
  }
]

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <HoverCard key={link.name}>
          <HoverCardTrigger asChild>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Button>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">{link.name}</p>
              <p className="text-sm text-muted-foreground">{link.username}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}