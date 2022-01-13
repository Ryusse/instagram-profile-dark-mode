import ToggleIcon from '../../icons/ToggleIcon'

export default function Toggle({ onclick }) {
  return (
    <button className='toggle'>
      <ToggleIcon className={'toggle__icon'} />
    </button>
  )
}
