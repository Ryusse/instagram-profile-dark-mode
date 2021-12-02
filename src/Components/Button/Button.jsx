import './Button.scss'

export default function Button(props) {
  return <button className={`button text-semibold ${props.className}`}>{props.content}</button>
}
