import './index.css'

const NavBar = props => {
  const {navbarDetails} = props
  const {imgUrl, imgAlt, recScore, recTopScore, shouldShowWinOrLose} =
    navbarDetails
  return (
    <div className="nav-cont">
      <div className="logo-cont">
        <img src={imgUrl} alt={imgAlt} className="img" />
        <h1 className="logo-header">Emoji Game</h1>
      </div>
      <div className="score-card">
        {shouldShowWinOrLose ? null : (
          <>
            <p className="score-detail">Score: {recScore}</p>
            <p className="score-detail2">Top Score: {recTopScore}</p>
          </>
        )}
      </div>
    </div>
  )
}
export default NavBar
