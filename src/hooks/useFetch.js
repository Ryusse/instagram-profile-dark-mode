import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [publications, setPublications] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getPublications = async () => {
    try {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setPublications(responseJSON.data)
      setIsLoading(false)
      console.log('PUBLICACIONES: ', responseJSON)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPublications()
  }, [])

  return { publications, isLoading }
}
