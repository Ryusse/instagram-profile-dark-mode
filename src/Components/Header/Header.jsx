import './Header.scss'

import New from './New/New'
import Menu from './Menu/Menu'

const user = {
  userName: 'ryuse.99'
}

export default function Header() {
  return (
    <header className='header'>
      <h2 className='header__username'> {user.userName} </h2>
      <div className='header__container'>
        <New />
        <Menu />
      </div>
    </header>
  )
}
