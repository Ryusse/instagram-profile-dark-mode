import './ContactEmpty.scss'

export function ContactEmpty() {
  return (
    <div className='contact-empty'>
      <h3 className='contact-empty__title stats-text'>
        Photos and <br /> videos of you
      </h3>
      <p className='contact-empty__text'>
        When people tag you in photos and <br /> videos, they’ll appear here.
      </p>
    </div>
  )
}
