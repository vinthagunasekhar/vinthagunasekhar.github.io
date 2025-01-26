'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export function TimeGreeting() {
  const [greeting, setGreeting] = useState('')
  const [time, setTime] = useState('')
  
  useEffect(() => {
    // Function to update greeting and time
    const updateDateTime = () => {
      // Get Toronto time
      const torontoTime = toZonedTime(new Date(), 'America/Toronto')
      const hour = torontoTime.getHours()
      
      // Set greeting based on time of day
      let newGreeting = ''
      if (hour < 12) {
        newGreeting = 'Good morning'
      } else if (hour < 18) {
        newGreeting = 'Good afternoon'
      } else {
        newGreeting = 'Good evening'
      }
      
      // Format time for display
      const formattedTime = format(torontoTime, 'h:mm a')
      
      setGreeting(newGreeting)
      setTime(formattedTime)
    }

    // Update immediately and then every minute
    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-sm text-muted-foreground">
      <span className="font-medium">{greeting}</span> • {time} EST
    </div>
  )
}