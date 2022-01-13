import './Dropdown.scss'

export default function Dropdown({ open }) {
  return (
    <button className={`dropdown ${open ? 'open' : ''}`}>
      <svg
        className='dropdown__icon'
        width='12'
        height='6'
        viewBox='0 0 12 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1L6 5L11 1'
          stroke='#252525'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}
