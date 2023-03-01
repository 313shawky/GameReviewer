import { Games } from "./games.module.js"

let games = new Games();

games.getGames('mmorpg');

document.querySelectorAll('.nav-link').forEach(
    function(navLink){ 
            navLink.addEventListener('click', function(){
            document.querySelectorAll('.nav-link').forEach(
                function(navItem){
                    navItem.parentElement.classList.remove('active-link');
                }
            );
            games.getGames(navLink.getAttribute('category'));
            navLink.parentElement.classList.add('active-link');
        });
    }
)