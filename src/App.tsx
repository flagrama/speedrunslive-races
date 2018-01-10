import * as React from 'react';
import RaceList from './components/RaceList';
import RaceListing from './types/RaceListing';
import './App.css';

let refreshRacesInterval: number;

interface AppState {
    races: Array<RaceListing>;
}

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            races: [{
            key: 0,
            game: {
                name: "",
                abbrev: ""
            },
            goal: "",
            time: 0,
            statetext: "",
            numentrants: 0
            }]
        };

        this.getRaces();
    }

    componentDidMount() {
        refreshRacesInterval = window.setInterval(() => this.getRaces(), 300);
    }

    componentWillUnmount() {
        clearInterval(refreshRacesInterval);
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
