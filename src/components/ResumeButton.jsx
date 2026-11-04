import './ResumeButton.css'
import PropTypes from 'prop-types'

export function ResumeButton({text}) {
  return (
    <button type="button" className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow" />
      </span>
      <span className="button-text">{text}</span>
    </button>
  )
}

ResumeButton.propTypes = {
  text: PropTypes.string.isRequired,
}
