import { useFetch } from '../../hooks/useFetch'

import Publication from '../Publication/Publication'
import Loader from '../Loader/Loader'

import './PublicationsList.scss'

export default function PublicationsList() {
  const url = 'https://v1.nocodeapi.com/ryuse/instagram/vhYJlKPzKrCAnQPr'

  const { publications, isLoading } = useFetch(url)

  return (
    <div className='publications-grid'>
      {isLoading ? (
        <Loader />
      ) : (
        publications &&
        publications.map((publication, key) => <Publication key={key} publication={publication} />)
      )}
    </div>
  )
}
