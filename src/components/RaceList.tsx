import * as React from 'react';
import RaceInfo from './RaceInfo';
import RaceListing from '../types/RaceListing';

interface RaceListProps {
    races: Array<RaceListing>;
}

class RaceList extends React.Component<RaceListProps, {}> {
    render() {
        const races: Array<JSX.Element> = this.props.races.map((race: any) =>(
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
