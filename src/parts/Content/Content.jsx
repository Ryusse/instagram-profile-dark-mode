import { useState, useEffect } from 'react'
import { DiscoverCardList } from '../../Components/DiscoverCardList/DiscoverCardList'

import ImageProfileContent from '../../Components/ImageProfile/ImageProfile'
import Bio from '../../Components/Bio/Bio'
import Stats from '../../Components/Stats/Stats'
import Button from '../../Components/Button/Button'
import Dropdown from '../../Components/Dropdown/Dropdown'
import StoryList from '../../Components/StoryList/StoryList'
import Tabs from '../../Components/Tabs/Tabs'

import './Content.scss'

export default function Content() {
  const [user, setUser] = useState(null)
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false)

  const handleToggle = () => {
    function toggleDiscoverOpen(prevIsDiscoverOpen) {
      return !prevIsDiscoverOpen
    }

    setIsDiscoverOpen(toggleDiscoverOpen)
  }

  return (
    <main className='content'>
      <div className='content__header'>
        <ImageProfileContent user={user} />
        <Stats user={user} />
      </div>

      <div className='content__bio'>
        <Bio />
      </div>

      <div className='content__buttons'>
        <Button content={'Edit profile'} className={'button--light'} />

        <Dropdown open={isDiscoverOpen} onClick={handleToggle} />
      </div>

      {isDiscoverOpen && <DiscoverCardList />}

      <StoryList open={isDiscoverOpen} />

      <Tabs />
    </main>
  )
}
