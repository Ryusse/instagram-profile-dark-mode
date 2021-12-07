import { useState, useEffect } from 'react'

import ImageProfileContent from './ImageProfile/ImageProfileContent'
import Bio from './Bio/Bio'
import Stats from './Stats/Stats'
import Button from '../Button/Button'
import Dropdown from '../Button/Dropdown'
import Story from './Story/Story'
import Tabs from './Tabs/Tabs'

import './Content.scss'

import user from '../../assets/data/users.json'

export default function Content() {
  const [user, setUser] = useState(null)
  const [storyOpen, setStoryOpen] = useState(false)

  const handleToggle = () => {
    function toggleStory(prevStoryOpen) {
      return !prevStoryOpen
    }

    setStoryOpen(toggleStory)
  }

  return (
    <div className='content'>
      <div className='content__header'>
        <ImageProfileContent user={user} />
        <Stats user={user} />
      </div>

      <div className='content__bio'>
        <Bio />
      </div>

      <div className='content__buttons'>
        <Button content={'Follow'} className={'button--cta'} />
        <Button content={'Message'} className={'button--light'} />

        <div onClick={handleToggle}>
          <Dropdown />
        </div>
      </div>

      {storyOpen && (
        <div className='content__stories'>
          <Story />
        </div>
      )}

      <Tabs />
    </div>
  )
}
