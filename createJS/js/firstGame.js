/** first game js **/

window.onload = init();

function init() {
    canvas      = document.getElementById("stage");
    stage       = new Stage(stage);
    score       = 0;

    bg          = new Image();
    bg.src      = "img/space.jpg";
    bg.onload   = setBG;
}

function setBG(event) {
    var bg          = new Bitmap(bg);
    stage.addChild(bg);
    stage.update();
}
