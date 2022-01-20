import { useState, useEffect } from 'react'

export function usePreloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })
  })
  return isLoading
}
