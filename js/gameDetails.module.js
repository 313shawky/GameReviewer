import { Ui } from "./ui.module.js";

let detailsUi = new Ui();

export class GameDetails{
    async getDetails(gameId){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0bd116ddafmshcb91bdd603052eep1ccecbjsnd047b1309f0d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const gameDetailsApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const response = await gameDetailsApi.json();
        detailsUi.displayDetails(response);
        this.exitFromDetails();
    }

    exitFromDetails(){
        document.querySelector('i').addEventListener('click', function(){
            document.querySelector('#home').classList.remove('d-none');
            document.querySelector('#game-details').classList.add('d-none');
        });
    }
}