var stage;

window.onload = function() {
    init();
}

function init() {
    stage = new createjs.Stage("gameCanvas");

    var ball = new createjs.Shape();
    ball.graphics.beginFill('#000000').drawCircle(0, 0, 50);
    ball.x = 50;
    ball.y = 100;

    stage.addChild(ball);
    stage.update();
}
