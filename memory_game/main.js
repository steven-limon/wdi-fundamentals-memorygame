function createBoard(){
    let board = document.querySelector('#game-board');
    for (let i = 0; i < 4; i++){
	let cardElement = document.createElement('img');
