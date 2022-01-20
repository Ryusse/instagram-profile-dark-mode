import { useState, useEffect, useLayoutEffect } from 'react'

import './PublicationsList.scss'

import Publication from '../Publication/Publication'
import Loader from '../Loader/Loader'

export default function PublicationsList() {
  const [publications, setPublications] = useState()
  const url = 'https://v1.nocodeapi.com/ryuse/instagram/vhYJlKPzKrCAnQPr'

  const getPublications = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON)
    setPublications(responseJSON)
  }

  useEffect(() => {
    getPublications()
  }, [])

  return (
    <div className='publications-grid'>
      {/* {!publications ? (
        <Loader />
      ) : (
        Object.entries(publications) &&
        publications.data.map((publication, key) => <Publication key={key} publication={publication} />)
      )} */}
      <p>no funciona ******</p>
    </div>
  )
}
