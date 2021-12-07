import { useState } from 'react'

import './Tabs.scss'

import GridIcon from './Icons/GridIcon'
import ReelIcon from './Icons/ReelIcon'
import IgtvIcon from './Icons/IgtvIcon'
import TagsIcon from './Icons/TagsIcon'
import PublicationsList from './PublicationsList/PublicationsList'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='tabs'>
      <nav className='nav'>
        <ul className='nav__list'>
          <li
            className={`nav__item ${activeTab === 0 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(0)
            }}
          >
            <GridIcon active={activeTab == 0 ? 'active' : null} />
          </li>
          <li
            className={`nav__item ${activeTab === 1 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(1)
            }}
          >
            <ReelIcon active={activeTab == 1 ? 'active' : null} />
          </li>
          <li
            className={`nav__item ${activeTab === 2 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(2)
            }}
          >
            <IgtvIcon active={activeTab == 2 ? 'active' : null} />
          </li>
          <li
            className={`nav__item ${activeTab === 3 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(3)
            }}
          >
            <TagsIcon active={activeTab == 3 ? 'active' : null} />
          </li>
        </ul>
      </nav>

      <div className='content'>
        <div className='content__item' hidden={activeTab != 0}>
          <PublicationsList />
        </div>
        <div className='content__item' hidden={activeTab != 1}>
          tab2
        </div>
        <div className='content__item' hidden={activeTab != 2}>
          tab3
        </div>
        <div className='content__item' hidden={activeTab != 3}>
          tab4
        </div>
      </div>
    </div>
  )
}
