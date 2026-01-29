import {Component} from 'react'
score: prev.score + 1,
}
})
}


changeGameDecision = () => {
const {topScore, score} = this.state


if (score > topScore) {
this.setState({topScore: score})
}


this.setState({
gameDecision: false,
scoreTrackerList: [],
score: 0,
})
}


render() {
const {score, topScore, gameDecision} = this.state


const newEmojiList = this.shuffledEmojisList()
const iswon = score === newEmojiList.length
const shouldShowWinOrLose = gameDecision || iswon


const navbarItems = {
imgUrl: 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png',
imgAlt: 'emoji logo',
recScore: score,
recTopScore: topScore,
shouldShowWinOrLose,
}


const winloseItemList = {
winImg: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
loseImg: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
wonDecision: iswon,
currScore: score,
}


return (
<div className="bg-cont">
<NavBar navbarDetails={navbarItems} />
<ul className="emojis-cont">
{shouldShowWinOrLose ? (
<WinOrLoseCard
winloseItemList={winloseItemList}
changeGameDecision={this.changeGameDecision}
/>
) : (
newEmojiList.map(each => (
<EmojiCard
emojiItem={each}
key={each.id}
scoreTrackerFnc={this.scoreTrackerFnc}
/>
))
)}
</ul>
</div>
)
}
}


export default EmojiGame
