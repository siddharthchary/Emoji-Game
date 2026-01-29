import './index.css'

const EmojiCard = props => {
  const {emojiItem, scoreTrackerFnc} = props
  const {id, emojiName, emojiUrl} = emojiItem
  const onclickEmoji = () => {
    scoreTrackerFnc(id)
  }
  return (
    <li className="emoji-card-cont">
      <button type="button" className="btn-1" onClick={onclickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-pic" />
      </button>
    </li>
  )
}
export default EmojiCard
