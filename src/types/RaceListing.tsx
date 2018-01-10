interface RaceListing {
    key: number;
    game: Game;
    goal: string;
    time: number;
    statetext: string;
    numentrants: number;

}

interface Game {
    name: string;
    abbrev: string;
}

export default RaceListing;
