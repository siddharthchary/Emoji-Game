import './index.css'

const WinOrLoseCard = props => {
  const {winloseItemList, changeGameDecision} = props
  const {winImg, loseImg, wonDecision, currScore} = winloseItemList
  const imgUrl = wonDecision ? winImg : loseImg
  const displayText = wonDecision ? 'You Won' : 'You Lose'
  const playAgain = () => {
    changeGameDecision()
  }
  return (
    <div className="card1">
      <div className="scoreCard">
        <h1 className="game-result">{displayText}</h1>
        {wonDecision ? (
          <p className="score-tag">Best Score</p>
        ) : (
          <p className="score-tag">Score</p>
        )}
        <p className="result-score">{currScore}/12</p>
        <button type="button" onClick={playAgain} className="play-btn">
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="decision" alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
