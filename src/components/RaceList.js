import React, {Component} from 'react';
import RaceInfo from './RaceInfo';

class RaceList extends Component {
    render() {
        const races = this.props.races.map((race) =>(
            <RaceInfo
                key={race.id}
                gamename={race.game.name}
                gameabbrev={race.game.abbrev}
                goal={race.goal}
                time={race.time}
                statetext={race.statetext}
                numentrants={race.numentrants}
            />
        ));

        return (
            <div>
                {races}
            </div>
        )
    }
}

export default RaceList;
