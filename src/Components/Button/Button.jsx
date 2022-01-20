import './Button.scss'

export default function Button({ className, content }) {
  return <button className={`button  ${className}`}>{content}</button>
}
