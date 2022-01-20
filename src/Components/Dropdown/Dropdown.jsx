import './Dropdown.scss'

import DropdownIcon from '../../icons/DropdownIcon'

export default function Dropdown({ open, onClick }) {
  return (
    <button className={`dropdown ${open ? 'open' : ''}`} onClick={onClick}>
      <DropdownIcon />
    </button>
  )
}
