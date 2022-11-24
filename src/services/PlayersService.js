import axios from "axios";

export default class PlayersService {
    getPlayers() {
		return axios({
            method: 'get',
            url: 'http://localhost:8081/players',
        })
        .then(response => {
			return response.data;
		})
        .catch(err => {
			console.error(err);
		});
	}

	getplayerById(id){
		return axios({
            method: 'get',
            url: 'http://localhost:8081/players',
        })
        .then(response => {
			const r = response.data.filter(p => p.id == id);
			let p = r[0];
			return p;
		})
        .catch(err => {
			console.error(err);
		});
	}

	searchPlayers(text) {
		return axios({
            method: 'get',
            url: 'http://localhost:8081/players',
        })
        .then(response => {
			const pattern = new RegExp(".*" + text + ".*", "i");
			const r = response.data.filter(p => pattern.test(p.nom));
			return r;
		})
        .catch(err => {
			console.error(err);
		});
	}
}