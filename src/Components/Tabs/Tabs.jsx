import { useState } from 'react'

import './Tabs.scss'

import GridIcon from '../../icons/GridIcon'
import ReelIcon from '../../icons/ReelIcon'
import IgtvIcon from '../../icons/IgtvIcon'
import TagsIcon from '../../icons/TagsIcon'
import PublicationsList from '../PublicationsList/PublicationsList'
import { ContactEmpty } from '../ContactEmpty/ContactEmpty'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='tabs'>
      <nav className='tabnav'>
        <ul className='tabnav__list'>
          <li
            className={`tabnav__item ${activeTab === 0 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(0)
            }}
          >
            <GridIcon className={'tabnav__icon'} active={activeTab == 0 ? 'active' : null} />
          </li>
          <li
            className={`tabnav__item ${activeTab === 1 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(1)
            }}
          >
            <ReelIcon className={'tabnav__icon'} active={activeTab == 1 ? 'active' : null} />
          </li>
          <li
            className={`tabnav__item ${activeTab === 2 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(2)
            }}
          >
            <IgtvIcon className={'tabnav__icon'} active={activeTab == 2 ? 'active' : null} />
          </li>
          <li
            className={`tabnav__item ${activeTab === 3 ? 'active' : null}`}
            onClick={() => {
              setActiveTab(3)
            }}
          >
            <TagsIcon className={'tabnav__icon'} active={activeTab == 3 ? 'active' : null} />
          </li>
        </ul>
      </nav>

      <div className='tabcontent'>
        <div className='tabcontent__item ' hidden={activeTab != 0}>
          <PublicationsList />
        </div>
        <div className='tabcontent__item tabcontent__empty' hidden={activeTab != 1}>
          <ContactEmpty />
        </div>
        <div className='tabcontent__item tabcontent__empty' hidden={activeTab != 2}>
          <ContactEmpty />
        </div>
        <div className='tabcontent__item tabcontent__empty' hidden={activeTab != 3}>
          <ContactEmpty />
        </div>
      </div>
    </div>
  )
}
