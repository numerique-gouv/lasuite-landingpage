import { useCallback, useEffect, useRef, useState } from 'react'

type AnnouncePoliteness = 'polite' | 'assertive'

type UseLiveAnnouncerOptions = {
  politeness?: AnnouncePoliteness
  atomic?: boolean
}

export const useLiveAnnouncer = ({
  politeness = 'polite',
  atomic = true,
}: UseLiveAnnouncerOptions = {}) => {
  const [announcement, setAnnouncement] = useState('')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const announce = useCallback((message: string) => {
    if (!message) return

    // Clear first so identical consecutive messages are announced again.
    setAnnouncement('')

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setAnnouncement(message)
      timeoutRef.current = null
    }, 0)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    announcement,
    announce,
    liveRegionProps: {
      'aria-live': politeness,
      'aria-atomic': atomic,
    } as const,
  }
}
