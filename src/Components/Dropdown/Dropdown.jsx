import './Dropdown.scss'

import DropdownIcon from '../../icons/DropdownIcon'

export default function Dropdown({ open }) {
  return (
    <button className={`dropdown ${open ? 'open' : ''}`}>
      <DropdownIcon />
    </button>
  )
}
