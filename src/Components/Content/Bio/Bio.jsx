import './Bio.scss'

export default function Bio() {
  return (
    <div className='bio'>
      <span className='bio__name text-bold '>Joel Angel</span>
      <p className='bio__content text-regular'>Front end developer</p>
      <a href='#' className='bio__website text-regular'>
        example.com
      </a>
    </div>
  )
}
