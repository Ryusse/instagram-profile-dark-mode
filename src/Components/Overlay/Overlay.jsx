import './Overlay.scss'

export default function Overlay({ open }) {
  return <div className={`overlay ${open ? 'open' : ''}`}></div>
}
