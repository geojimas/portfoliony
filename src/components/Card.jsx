import './card.css'
import PropTypes from 'prop-types'

export function Card({ children }) {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
