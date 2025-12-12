import './card.css'

export const Card = ({ children }) => {
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
