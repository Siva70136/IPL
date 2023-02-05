// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {matchStatus, competingTeamLogo, competingTeam, result} = details
  const className = matchStatus === 'Lost' ? 'loss' : 'win'

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={className}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
