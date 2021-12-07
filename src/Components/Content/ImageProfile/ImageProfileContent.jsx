import ImageProfile from '../../../assets/images/image-profile.png'

import './ImageProfileContent.scss'

export default function ImageProfileContent(props) {
  return (
    <div className='image-profile'>
      <img src={ImageProfile} alt='' />
    </div>
  )
}
