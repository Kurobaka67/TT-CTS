export default class PlayersService {
    static _players = null;

    _getAllPlayers() {
        if(PlayersService._players == null) {
			return fetch('data/players.json').then(res => res.json()).then(d => {
				PlayersService._players = d;
				return [...PlayersService._players];
			});
		} else {
			return new Promise((resolve) => {
				resolve([...PlayersService._players]);
			});
		}
    }

    getPlayers() {
		return this._getAllPlayers();
	}

}