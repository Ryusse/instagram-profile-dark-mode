import Button from '../Button/Button'

import './DiscoverCard.scss'

export default function DiscoverCard({ url }) {
  return (
    <div className='discover-card'>
      <figure className='discover-card__image'>
        <img src={url} alt='profile image' />
      </figure>
      <h3 className='discover-card__title title-semibold'>Jennifer_billons</h3>
      <p className='discover-card__text'>
        Followed by <br /> cute_littlesparkie{' '}
      </p>
      <Button content={'Follow'} className={'button--cta'} />
    </div>
  )
}
