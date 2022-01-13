import ImageProfileImg from '../../assets/images/image-profile.png'

import './ImageProfile.scss'

export default function ImageProfile(props) {
  return (
    <div className='profile'>
      <img className='profile__img' src={ImageProfileImg} alt='' />
    </div>
  )
}
