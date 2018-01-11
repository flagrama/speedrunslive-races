import * as React from 'react';

interface RaceInfoProps {
    key: number;
    gamename: string;
    gameabbrev: string;
    goal: string;
    time: number;
    statetext: string;
    numentrants: number;
}

class RaceInfo extends React.Component<RaceInfoProps, {}> {
    render() {
        return (
            <div>
                <a className="racebar">
                    <div
                        className="race_img"
                        style={{
                            backgroundImage: 'url(http://cdn.speedrunslive.com/images/games/'
                            + this.props.gameabbrev
                            + '.jpg)'
                        }}
                    />
                    <div className="left">
                        <strong>{this.props.gamename}</strong>
                        <br />
                        {this.props.goal}
                    </div>
                    <div className="right">
                        <strong>{this.props.numentrants} entrant(s)</strong>
                        <br />
                        {this.props.statetext}

                    </div>
                </a>
            </div>
        );
    }
}

export default RaceInfo;
