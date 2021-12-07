import './Header.scss'

import New from './New/New'
import Menu from './Menu/Menu'

import UserName from './UserName/UserName'

export default function Header() {
  return (
    <header className='header'>
      <UserName />
      <div className='header__container'>
        <New />
        <Menu />
      </div>
    </header>
  )
}
