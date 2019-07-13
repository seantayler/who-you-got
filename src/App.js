import React from 'react';
import { data } from './data'

class App extends React.Component {
  state = {
    team1: [],
    team2: [],
    score1: 0,
    score2: 0,
    winner: ''
  }

  handleTeamOneSelect = (e) => {
    this.setState({ team1: [...this.state.team1, e.target.value]})
  }

  handleTeamTwoSelect = (e) => {
    this.setState({ team2: [...this.state.team2, e.target.value]})
  }

  handleResults = () => {
    const { team1, team2, score1, score2, winner} = this.state;
    let team1Score = 0;
    let team2Score = 0;

    data.map((player, i) => {
      if(team1.includes(player.name)){
        team1Score += Math.round(player.appg)
      } else if(team2.includes(player.name)){
        team2Score += Math.round(player.appg)
      }
    })
    this.setState({ score1: team1Score, score2: team2Score, winner: team1Score > team2Score ? 'team1' : 'team2'})
  }

  handleRefresh = () => {
    this.setState({ team1: [], team2: [], score1: 0, score2: 0, winner: ''})
  }

  render(){
    // console.log("STATE", this.state)

    const teamOneOptions = data.map((player, i) => {
      return <option>{player.name}</option>
    })

    const teamTwoOptions = data.map((player, i) => {
      return <option>{player.name}</option>
    })

    return (
      <div className="App container">
        <div className="col-lg-4" style={{display: 'block', marginRight: '120px'}}>
          {this.state.winner === 'team1' ?
              <div className="winner">WINNER!</div>
              : null
          }
          {this.state.winner === 'team2' ?
              <div className="winner">LOSER</div>
              : null
          }
          <select onChange={this.handleTeamOneSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamOneOptions}
          </select>
          <select onChange={this.handleTeamOneSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamOneOptions}
          </select>
          <select onChange={this.handleTeamOneSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamOneOptions}
          </select>
          <select onChange={this.handleTeamOneSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamOneOptions}
          </select>
          <select onChange={this.handleTeamOneSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamOneOptions}
          </select>
          {this.state.winner ?
            <div className="score">{this.state.score1}</div> : null
          }
        </div>
        
        <div className="col-lg-4">
          <button onClick={this.handleResults} className="results-btn row">results</button>
          <button onClick={this.handleRefresh} className="results-btn row">refresh</button>
        </div>
        
        <div className="col-lg-4">
          {this.state.winner === 'team2' ?
              <div className="winner">WINNER!</div>
              : null
          }
          {this.state.winner === 'team1' ?
              <div className="winner">LOSER</div>
              : null
          }
          <select onChange={this.handleTeamTwoSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamTwoOptions}
          </select>
          <select onChange={this.handleTeamTwoSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamTwoOptions}
          </select>
          <select onChange={this.handleTeamTwoSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamTwoOptions}
          </select>
          <select onChange={this.handleTeamTwoSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamTwoOptions}
          </select>
          <select onChange={this.handleTeamTwoSelect} className="row">
            <option selected disabled>Select a Player</option>
            {teamTwoOptions}
          </select>
          {this.state.winner ?
            <div className="score">{this.state.score2}</div> : null
          }        
        </div>
      </div>
    );
  }
}

export default App;
