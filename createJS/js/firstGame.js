/** first game js **/

window.onload = init();

var canvas;
var stage;
var bg;
var score;
var bmpList;
var bitmap;

function init() {
    canvas      = document.getElementById("canvas");
    console.log(canvas);
    stage       = new Stage(canvas);
    score       = 0;

    bg          = new Image();
    bg.src      = "img/space.jpg";
    bg.onload   = setBG;

    var img     = new Image();
    img.src     = "img/ship.png";
    img.onload  = createShips;
}

function setBG(event) {
    var bg          = new Bitmap(bg);
    stage.addChild(bg);
    stage.update();
}

function createShips(event) {
    var image       = event.target;
    var container   = new Container();
    stage.addChild(container);
    var l           = 5;
    bmpList         = [];

    for(var i = 0; i < l; i++) {
        bitmap          = new Bitmap(image);
        container.addChild(bitmap);
        bitmap.name             = "ship" + i;
        resetEnemy(bitmap);
        bitmap.regX         = bitmap.image.width/210;
        bitmap.regY         = bitmap.image.height/210;
        bitmap.mouseEnabled = true;
        bmpList.push(bitmap);
    }

    stage.update();
}

function resetEnemy(enemy) {
    ship.x          = canvas.width - Math.random()*500;
    ship.y          = canvas.height - Math.random()|0;
    ship.speed      = ( Math.random()*4) + 3;
}
