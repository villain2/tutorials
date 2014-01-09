'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
controller('Level1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    setupField();
    drawField();
    
    function setupField() {
        $rootScope.gameField           = new Array();
        for(var i=0; i < 5; i++) {
            $rootScope.gameField[i]        = new Array();
            for(var j=0; j < 9; j++) {
                $rootScope.gameField[i][j]=0;
            }
        }
        console.log($rootScope.gameField);
    }
    
    function drawField() {
        var fieldSprite         = new createjs.Shape();
        var randomGreen;
        var stage               = $rootScope.stage;
        stage                   = new createjs.Stage("gameGrid");
        stage.addChild(fieldSprite);
        
        fieldSprite.graphics.setStrokeStyle(1).beginStroke('#ffffff');
        
        for(var i = 0; i < 5; i++) {
            for (var j = 0; j < 9; j++) {
                randomGreen = (125+Math.floor(Math.random()*50))*256;
                fieldSprite.graphics.beginFill('#' + randomGreen + '0').drawRect(25+65*j, 80+75*i, 65, 75);
            }
        }
        
        stage.update();
        
    }
   /* var gameField;
    var stage    = new createjs.Stage("gameGrid");
    
  	setupField();
  	drawField();

    function setupField() {
        gameField 		= new Array();
        for(var i=0; i < 5; i++) {
            gameField[i]		= new Array();
            for(var j=0; j < 9; j++) {
                gameField[i][j];
            }
        }
        console.log(gameField);
    }
    
    function drawField() {
        console.log(stage);
        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        stage.update();
    }*/
    
}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);