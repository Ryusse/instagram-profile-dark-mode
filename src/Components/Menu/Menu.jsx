import './Menu.scss'

import SettingsIcon from '../../icons/SettingsIcon'
import SaveIcon from '../../icons/SaveIcon'
import ThemeIcon from '../../icons/ThemeIcon'

export default function menu({ open, menuRef }) {
  return (
    <div ref={menuRef} className={`menu  ${open ? 'open' : ''} `}>
      <ul className='menu__list'>
        <li className='menu__item'>
          <figure>
            <SettingsIcon />
          </figure>
          <p>Settings</p>
        </li>
        <li className='menu__item'>
          <figure>
            <SaveIcon />
          </figure>
          <p>Saved</p>
        </li>
        <li className='menu__item'>
          <figure>
            <ThemeIcon />
          </figure>
          <p>Theme</p>
        </li>
      </ul>
    </div>
  )
}
