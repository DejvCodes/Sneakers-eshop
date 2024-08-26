import "./OneBenefit.css"

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

export default OneBenefit