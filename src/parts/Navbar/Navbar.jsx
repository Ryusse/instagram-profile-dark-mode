import './Navbar.scss'

import ImageProfile from '../../assets/images/image-profile-navbar.png'
import HomeIcon from '../../icons/HomeIcon'
import SearchIcon from '../../icons/SearchIcon'
import ReelsIcon from '../../icons/ReelsIcon'
import StoreIcon from '../../icons/StoreIcon'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item icon'>
          <HomeIcon />
        </li>
        <li className='navbar__item icon'>
          <SearchIcon />
        </li>
        <li className='navbar__item icon'>
          <ReelsIcon />
        </li>
        <li className='navbar__item icon'>
          <StoreIcon />
        </li>
        <li className='navbar__item icon'>
          <img className='navbar__item-image' src={ImageProfile} alt='profile' />
        </li>
      </ul>
    </nav>
  )
}
