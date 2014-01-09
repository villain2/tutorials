/** first game js **/

window.onload = init();

var canvas, stage, bg, score, bmpList, bitmpa, txt, play, gameTxt, clicked;

function init() {
    canvas      = document.getElementById("stage");
    stage       = new createjs.Stage(canvas);
    score       = 0;

    canvas.onmousedown      = onMouseDown;
    canvas.onmouseup        = onMouseUp;

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
    var maxNumShips = 25;
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

    txt         = new createjs.Text("Score: 0", "14px Tahoma", "#ffffff");
    txt.textBaseline = "top";
    txt.x       = 20;
    txt.y       = 20;
    stage.addChild(txt);

    play        = true;
    createjs.Ticker.addEventListener('tick', tick);
}

function resetEnemy(enemy) {
    enemy.x          = canvas.width - Math.random()*1000;
    enemy.y          = canvas.height * Math.random()|0;
    enemy.speed      = ( Math.random()*5) + 2;
}

function tick() {
    //check for clicking
    if(!clicked && stage.mouseX && stage.mouseY) {
        mouseTarget     = stage.getObjectUnderPoint(stage.mouseX, stage.mouseY);
    }

    //move ships
    if(play == true) {
        var l       = bmpList.length;
        for(var i = 0; i < l; i++) {
            var bmp     = bmpList[i];
            if(bmp.x < 3200) {
                bmp.x += bmp.speed;
            } else {
                gameOver();
                console.log('game over');
            }
        }
    }
    txt.text            = "Score: " + score;
    stage.update();
}

function gameOver() {
    gameTxt             = new createjs.Text("Game Over\n\n", "36px Arial", "#f3f4f5");
    gameTxt.text        += "Click to play again";
    gameTxt.textAlign   = "center";
    gameTxt.x           = canvas.width / 2;
    gameTxt.y           = canvas.height / 4;
    stage.addChild(gameTxt);
    play                = false;
    var l               = bmpList.length;
    for(var i=0; i < l; i++) {
        var bmp     = bmpList[i];
        resetEnemy(bmp);
    }
    stage.update();
    canvas.onclick      = handleClick;

}

function handleClick() {
    canvas.onclick      = null;
    stage.removeChild(gameTxt);
    score               = 0;

    play                = true;
}

function onMouseDown() {
    if(!e) {
        var e       = window.event;
    }
    clicked     = true;

}

function onMouseUp() {
    clicked     = false;
}



