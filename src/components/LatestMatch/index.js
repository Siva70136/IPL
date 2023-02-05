import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    firstInnings,
    secondInnings,

    competingTeamLogo,
    competingTeam,
    result,
    date,
    venue,
    manOfTheMatch,
  } = details

  return (
    <div className="out">
      <div className="latest-match-card">
        <div className="first">
          <div className="venue-details">
            <p className="team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="img"
            alt={`latest match ${competingTeam}`}
          />
        </div>

        <hr className="line" />
        <div className="match-info">
          <p className="first-innings">FIRST INNINGS</p>
          <p className="first-innings-value">{firstInnings}</p>
          <p className="second-innings">SECOND INNINGS</p>
          <p className="second-innings-value">{secondInnings}</p>
          <p className="best">MAN OF THE MATCH</p>
          <p className="best-value">{manOfTheMatch}</p>
          <p className="umpire">UMPIRE</p>
          <p className="umpire">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
