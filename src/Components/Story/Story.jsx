import './Story.scss'

import Story1 from '../../assets/images/story1.png'
import Story2 from '../../assets/images/story2.png'
import Story3 from '../../assets/images/story3.png'

export default function Slider({ imageUrl }) {
  return (
    <>
      <div className='story'>
        <figure className='story__image-container'>
          <img className='story__image' src={imageUrl} alt='story' />
        </figure>
        <p className='story__title text-medium'> Story 1 </p>
      </div>
    </>
  )
}
