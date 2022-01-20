import './Stats.scss'

export default function Stats() {
  return (
    <div className='stats'>
      <div className='stats__column'>
        <span className='stats__number stats-text'>20</span>
        <p className='stats__category text-regular'>Post</p>
      </div>
      <div className='stats__column'>
        <span className='stats__number stats-text'>175</span>
        <p className='stats__category text-regular'>Followers</p>
      </div>
      <div className='stats__column'>
        <span className='stats__number stats-text'>235</span>
        <p className='stats__category text-regular'>Following</p>
      </div>
    </div>
  )
}
