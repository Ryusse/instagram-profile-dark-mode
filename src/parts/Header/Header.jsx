import './Header.scss'

import UserName from '../../Components/UserName/UserName'
import NewIcon from '../../icons/NewIcon'
import Toggle from '../../Components/Toggle/Toggle'

export default function Header() {
  return (
    <header className='header'>
      <UserName />
      <NewIcon />
      <Toggle />
    </header>
  )
}
