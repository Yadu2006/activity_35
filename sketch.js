var GameState = 0;
var database, playerCount;
var form, player, game;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");
}