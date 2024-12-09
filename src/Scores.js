
export const Scores = (score) => {
    return (
        <div className="scores">
        <div className="player-score">Player: {score.player}</div>
        <div></div>
        <div className="robot-score">Robot: {score.robot}</div>
      </div>
    )
}