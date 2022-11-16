export default class TournamentsService {
    static _tournaments = null;

    _getAllTournaments() {
        if(TournamentsService._tournaments == null) {
			return fetch('data/tournaments.json').then(res => res.json()).then(d => {
				TournamentsService._tournaments = d;
				return [...TournamentsService._tournaments];
			});
		} else {
			return new Promise((resolve) => {
				resolve([...TournamentsService._tournaments]);
			});
		}
    }

    getTournaments() {
		return this._getAllTournaments();
	}

	getTournamentsFilter(ligue) {
		return this._getAllTournaments().then(d => {
			const r = d.filter((t) => {
				return t.ligue === ligue;
			});
			console.log(r)
			return r;
		});
	}
}