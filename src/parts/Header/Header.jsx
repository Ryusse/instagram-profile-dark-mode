import { useState } from 'react'

import './Header.scss'

import UserName from '../../Components/UserName/UserName'
import NewIcon from '../../icons/NewIcon'
import Toggle from '../../Components/Toggle/Toggle'
import Menu from '../../Components/Menu/Menu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    function menuToggle(prevMenuOpen) {
      return !prevMenuOpen
    }
    setMenuOpen(menuToggle)
  }

  return (
    <header className='header'>
      <UserName />
      <NewIcon />
      <Toggle onclick={handleToggle} />

      {<Menu open={menuOpen} />}
    </header>
  )
}
