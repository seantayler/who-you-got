import React from 'react';
import data from './data'

class App extends React.Component {
  state = {

  }

  render(){

    const playersList = data.map((player, i) => {
      return <option>{player.name}</option>
    })

    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;
