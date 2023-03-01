import { GameDetails } from "./gameDetails.module.js";
import { Ui } from "./ui.module.js";

let gamesUi = new Ui();
let gameData = new GameDetails();

export class Games{
    async getGames(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0bd116ddafmshcb91bdd603052eep1ccecbjsnd047b1309f0d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const gamesApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await gamesApi.json(); 
        gamesUi.displayGames(Array.from(response));
        this.exploreGame();
    }

    exploreGame(){
        let a = '';
        document.querySelectorAll('.game-card').forEach(
            function(item) {
                item.addEventListener('click', function() {
                    let gameId = item.getAttribute('gameId');
                    document.querySelector('#home').classList.add('d-none');
                    document.querySelector('#game-details').classList.remove('d-none');
                    gameData.getDetails(gameId);
                });
            }
        );
    }
}