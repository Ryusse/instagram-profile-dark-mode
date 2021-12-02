import { useState } from 'react'

import ImageProfileContent from './ImageProfile/ImageProfileContent'
import Bio from './Bio/Bio'
import Stats from './Stats/Stats'
import Button from '../Button/Button'

import './Content.scss'
import Dropdown from '../Button/Dropdown'

export default function Content() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='content'>
      <div className='content__header'>
        <ImageProfileContent />
        <Stats />
      </div>

      <div className='content__bio'>
        <Bio />
      </div>

      <div className='content__buttons'>
        <Button content={'Follow'} className={'button--cta'} />
        <Button content={'Message'} className={'button--light'} />
        <Dropdown onClick={(e) => setIsActive(!isActive)} />
      </div>

      <div className='content__slider'></div>
    </div>
  )
}
