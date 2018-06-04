import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCircle: '1',
    }
  }

  handleSelectedCircle = (circle) => {
    this.setState({selectedCircle: circle})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
              selectedCircle={this.state.selectedCircle}
              handleSelectedCircle={this.handleSelectedCircle}
          />
          <Circles selectedCircle={this.state.selectedCircle}/>
        </main>
      </div>
    );
  }
}

export default App;