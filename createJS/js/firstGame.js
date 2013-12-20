/** first game js **/

window.onload = init();

var canvas;
var stage;
var bg;
var score;
var bmpList;
var bitmap;

function init() {
    canvas      = document.getElementById("stage");
    stage       = new createjs.Stage(canvas);
    score       = 0;

    bg          = new Image();
    bg.src      = "img/space.jpg";
    bg.onload   = setBG;

    var img     = new Image();
    img.src     = "img/ship.png";
    img.onload  = createShips;
}

function setBG(event) {
    var background      = new createjs.Bitmap(bg);
    stage.addChild(background);
    stage.update();
}

function createShips(event) {
    var image       = event.target;
    var container   = new createjs.Container();
    stage.addChild(container);
    var maxNumShips = 5;
    bmpList         = [];

    for(var i = 0; i < maxNumShips; i++) {
        bitmap          = new createjs.Bitmap(image);
        container.addChild(bitmap);
        bitmap.name         = "ship" + i;
        resetEnemy(bitmap);
        bitmap.regX         = bitmap.image.width/210;
        bitmap.regY         = bitmap.image.height/210;
        bitmap.mouseEnabled = true;
        bmpList.push(bitmap);
    }

    stage.update();
}

function resetEnemy(enemy) {
    enemy.x          = canvas.width - Math.random()*500;
    enemy.y          = canvas.height * Math.random()|0;
    enemy.speed      = ( Math.random()*4) + 3;
}
