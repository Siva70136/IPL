// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {card} = props
  const {name, teamImageUrl, id} = card

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
