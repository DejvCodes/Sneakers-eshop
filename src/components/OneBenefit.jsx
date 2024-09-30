import "./OneBenefit.css"
import PropTypes from "prop-types"

const OneBenefit = ({icon, title, text}) => {
  return (
    <>
      <div className="one-benefit">
        <span className="icon">{icon}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

// Validace props
OneBenefit.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default OneBenefit