export class Ui{
    displayGames(arr){
            let content = ``;
            for(let i = 0; i < arr.length; i++){
                content += `<div gameId=${arr[i].id} class="game-card col-xl-3 col-lg-4 col-md-6 text-white text-center p-3 mt-4">
                                <div class="card bg-transparent">
                                    <img src="${arr[i].thumbnail}" class="card-img-top p-3" alt="...">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center py-2">
                                            <h6 class="m-0">${arr[i].title}</h6>
                                            <span class="border-0 bg-primary fw-bold rounded p-1">Free</span>
                                        </div>
                                        <p class="card-text py-2 fw-bold text-secondary">${arr[i].short_description}</p>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between">
                                        <span class="badge">${arr[i].genre}</span>
                                        <span class="badge">${arr[i].platform}</span>
                                    </div>
                                </div>
                            </div>`
            };
            document.querySelector('#items').innerHTML = content;
        }
        
        displayDetails(gameDetails){
            let content = ``;
            content = `<div class="col-md-4 g-md-2">
                            <img class="w-100" src="${gameDetails.thumbnail}" alt="">
                        </div>
                        <div class="col-md-8 fw-bolder">
                            <h2 class="py-2">Title: ${gameDetails.title}</h2>
                            <div class="py-2 fs-5">
                                <div class="py-1">
                                    <span>Category: </span>
                                    <span class="badge bg-info text-black">${gameDetails.genre}</span>
                                </div>
                                <div class="py-1">
                                    <span>Platform: </span>
                                    <span class="badge bg-info text-black">${gameDetails.platform}</span>
                                </div>
                                <div class="py-1">
                                    <span>Status: </span>
                                    <span class="badge bg-info text-black">${gameDetails.status}</span>
                                </div>
                            </div>
                            <p class="py-2">${gameDetails.description}</p>
                            <a href="${gameDetails.game_url}" target="_blank" class="btn btn-outline-warning text-capitalize fw-bold text-white">show game</a>
                        </div>`;
            document.querySelector('#item').innerHTML = content;
        }
    }