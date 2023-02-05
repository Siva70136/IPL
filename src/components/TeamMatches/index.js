// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: [], isLoader: true, className: ''}

  componentDidMount() {
    this.getLatestNews()
  }

  getLatestNews = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const name = id.toLowerCase()

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedList = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(updatedList)

    this.setState({
      teamDetails: updatedList,
      isLoader: false,
      className: name,
    })
  }

  getTeamCard = () => {
    const {teamDetails, className} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamDetails

    const updatedItem = recentMatches.map(each => ({
      matchStatus: each.match_status,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      competingTeam: each.competing_team,
    }))

    const updatedNews = {
      umpires: latestMatchDetails.umpires,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      result: latestMatchDetails.result,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
    }

    return (
      <div className={`team-match ${className}`}>
        <div>
          <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        </div>
        <ul className="latest-news">
          <LatestMatch details={updatedNews} key={updatedNews.id} />
        </ul>
        <ul className="match-card">
          {updatedItem.map(each => (
            <MatchCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div className="latestMatch-container">
        {isLoader ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamCard()
        )}
      </div>
    )
  }
}

export default TeamMatches
