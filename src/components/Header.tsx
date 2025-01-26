'use client'

import { MapPin, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export function Header() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [timeString, setTimeString] = useState('')
  const [greeting, setGreeting] = useState('')

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update time and greeting
  useEffect(() => {
    const updateDateTime = () => {
      const torontoTime = toZonedTime(new Date(), 'America/Toronto')
      const hour = torontoTime.getHours()
      const formattedTime = format(torontoTime, 'h:mm a ET')
      
      // Set greeting based on time of day
      let newGreeting = ''
      if (hour < 12) {
        newGreeting = 'Good Morning!'
      } else if (hour < 17) {
        newGreeting = 'Good Afternoon!'
      } else {
        newGreeting = 'Good Evening!'
      }
      
      setTimeString(formattedTime)
      setGreeting(newGreeting)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Location and Time Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Canada</span>
          </div>
          <div className="hidden md:block">
            <span className="text-sm text-muted-foreground">|</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {timeString}
          </div>
          <div className="hidden md:block">
            <span className="text-sm text-muted-foreground">|</span>
          </div>
          <div className="text-sm font-medium text-blue-500">
            {greeting}
          </div>
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}