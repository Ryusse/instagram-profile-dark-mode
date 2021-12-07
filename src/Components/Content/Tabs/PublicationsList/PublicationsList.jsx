import { useState, useEffect, useLayoutEffect } from 'react'

import './Publications.scss'

import Publication from '../Publication/Publication'

export default function PublicationsList() {
  const [publications, setPublications] = useState()
  const url = 'https://v1.nocodeapi.com/ryuse/instagram/QGmfsrXYVOLRSSPG'

  useEffect(() => {
    getPublications()
  }, [])

  const getPublications = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON)
    setPublications(responseJSON)
  }

  return (
    <div className='publications-grid'>
      {!publications
        ? 'LOADING'
        : Object.entries(publications) &&
          publications.data.map((publication, key) => <Publication key={key} publication={publication} />)}
    </div>
  )
}
