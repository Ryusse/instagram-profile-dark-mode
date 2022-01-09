import './Header.scss'

import UserName from '../../Components/UserName/UserName'
import New from '../../Components/New/New'
import Menu from '../../Components/Menu/Menu'

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
