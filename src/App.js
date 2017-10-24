import React, { Component } from 'react';
import RaceList from './components/RaceList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            races: [],
        }

        this.getRaces();
    }

    componentDidMount() {
        this.refreshRacesInterval = setInterval(() => this.getRaces(), 300);
    }

    componentWillUnmount() {
        clearInterval(this.refreshRacesInterval);
    }

    getRaces() {
        return fetch('http://api.speedrunslive.com:81/races', {
            headers: {
                Accept: 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {this.setState({races: responseJson.races})})
        .catch((error) => {
            console.error(error);
        });
    }

  render() {
      return (
        <div className="App">
            <RaceList
                races={this.state.races}
            />
        </div>
      );
  }
}

export default App;
