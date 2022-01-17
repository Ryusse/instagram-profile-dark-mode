import ToggleIcon from '../../icons/ToggleIcon'

export default function Toggle({ onClick }) {
  return (
    <button className='toggle' onClick={onClick}>
      <ToggleIcon className={'toggle__icon'} />
    </button>
  )
}
