import './ResumeButton.css'

export function ResumeButton(props) {
  return (
    <button type="button" className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow" />
      </span>
      <span className="button-text">{props.text}</span>
    </button>
  )
}
