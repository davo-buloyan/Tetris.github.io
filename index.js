import Game from './src/game.js';
import View from './src/view.js';

const element = document.querySelector('#root')

const game = new Game();
const view = new View(root, 32 0, 640, 20, 10);



window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 37 : //left
        game.movePieceLeft();
        view.render(game.getState());
        break;
        case 38 : //up
        game.movePieceRight();
        view.render(game.getState());
        break;
        case 39 : //right
        game.movePieceLeft();
        view.render(game.getState());
        break;
        case 40 : //down
        game.movePieceDown();
        view.render(game.getState());
        break;
    }
})

view.renderPlayfiled(game.getState)
