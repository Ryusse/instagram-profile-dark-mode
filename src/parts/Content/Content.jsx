import { useState, useEffect } from 'react'

import ImageProfileContent from '../../Components/ImageProfile/ImageProfile'
import Bio from '../../Components/Bio/Bio'
import Stats from '../../Components/Stats/Stats'
import Button from '../../Components/Button/Button'
import Dropdown from '../../Components/Dropdown/Dropdown'
import StoryList from '../../Components/StoryList/StoryList'
import Tabs from '../../Components/Tabs/Tabs'

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
          <Dropdown open={storyOpen} />
        </div>
      </div>

      <StoryList open={storyOpen} />

      <Tabs />
    </div>
  )
}
