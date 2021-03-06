export default function GridIcon({ className, active }) {
  return (
    <svg
      className={`${className}`}
      width='22'
      height='23'
      viewBox='0 0 22 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={`${active}`}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0.076416H22V22.0222H0V0.076416ZM13.6889 20.5592V15.1946H8.31111V20.5592H13.6889ZM15.1556 13.7316H20.5333V8.36705H15.1556V13.7316ZM13.6889 13.7316V8.36705H8.31111V13.7316H13.6889ZM15.1556 20.5592H20.5333V15.1946H15.1556V20.5592ZM20.5333 1.53947V6.904H15.1556V1.53947H20.5333ZM13.6889 1.53947V6.904H8.31111V1.53947H13.6889ZM6.84444 8.36705V13.7316H1.46667V8.36705H6.84444ZM6.84444 15.1946V20.5592H1.46667V15.1946H6.84444ZM6.84444 6.904H1.46667V1.53947H6.84444V6.904Z'
        fill='#9a9a9a'
      />
    </svg>
  )
}
