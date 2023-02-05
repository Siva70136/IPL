// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data1 = await response.json()
    const data = data1.teams

    const updatedData = data.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamCardList">
            {teamList.map(each => (
              <TeamCard card={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
