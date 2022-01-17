import { useState, useEffect, useRef } from 'react'

import './Header.scss'

import UserName from '../../Components/UserName/UserName'
import NewIcon from '../../icons/NewIcon'
import Toggle from '../../Components/Toggle/Toggle'
import Menu from '../../Components/Menu/Menu'

import useClickOutside from '../.././hooks/useClickOutside'
import Overlay from '../../Components/Overlay/Overlay'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [overlayOpen, setOverlayOpen] = useState(false)

  let domNode = useClickOutside(() => {
    setMenuOpen(false)
  })

  const menuHandleToggle = () => {
    function menuToggle(prevMenuOpen) {
      return !prevMenuOpen
    }
    setMenuOpen(menuToggle)
  }

  const overlayHandleToggle = () => {
    function overlayToggle(prevOverlayOpen) {
      return !prevOverlayOpen
    }
    setOverlayOpen(overlayToggle)
  }

  return (
    <header className='header'>
      <UserName />
      <NewIcon />
      <Toggle onClick={menuHandleToggle} />
      <Overlay open={menuOpen} />
      <Menu open={menuOpen} menuRef={domNode} />
    </header>
  )
}
