$(function() {

    function bitmapHeartPrint(x, y) {
        var bitmap = bitmapanimation.clone();
        bitmap.x = x;
        bitmap.y = y;
        bitmap.rotation = Math.random() * 360;
        bitmap.alpha = 0;
        bitmap.scaleX = bitmap.scaleY = Math.random() + 0.4;
        bitmap.compositeOperation = "lighter";
        bitmap.gotoAndPlay(Math.random() * 13 | 0);
        fourthContainer.addChild(bitmap);
    }
    
    function setFPS30() {
        createjs.Ticker.setFPS(30);
    }
    
    function setFPS80() {
        createjs.Ticker.setFPS(80);
    }
    
    function setFPS500() {
        createjs.Ticker.setFPS(500);
    }

    function stageUpdate() {
        stage.update();
    }
	
	var canvas = document.getElementById("myCanvas");
	
	var stage = new createjs.Stage(canvas);
	var shape = new createjs.Shape((new createjs.Graphics).beginFill("#000").drawRect(0, 0, canvas.width + 1, canvas.height));
	shape.alpha = 0.25;
    stage.addChild(shape);
    stage.autoClear = false;
    
    var container = new createjs.Container;
    
    //-------------------------------------------------------------------------
    var firstText = new createjs.Text("亲爱的慧婷", "36px 微软雅黑", "#fff");
    firstText.x = 50;
    firstText.y = 0;
    firstText.alpha = 0;
    container.addChild(firstText);
    
    createjs.Tween.get(firstText)
    	.to({alpha : 1, x : 100, color:"#db7093"}, 2000);
    	
    //-------------------------------------------------------------------------
    var secondText = new createjs.Text("2012年的10月，我们有缘在法国重逢", "30px 微软雅黑", "#adff2f");
    secondText.x = 140;
    secondText.y = 60;
    secondText.alpha = 0;
    container.addChild(secondText);
    
    createjs.Tween.get(secondText)
    	.wait(3000)
    	.to({alpha : 1, }, 2000);
    	
    //-------------------------------------------------------------------------
    var thirdText = new createjs.Text("当你决定要来里尔","30px 微软雅黑", "#d2691e");
    thirdText.x = 1100;
    thirdText.y = 85;
    thirdText.alpha = 0;
    container.addChild(thirdText);
    
    createjs.Tween.get(thirdText)
    	.wait(5000)
 		.to({x:700, alpha:1}, 1000, createjs.Ease.bounceIn);
    	
    //-------------------------------------------------------------------------
    var fourthText = new createjs.Text("我既高兴又紧张","150px 微软雅黑", "#fff");
    fourthText.x = 200;
    fourthText.y = 110;
    fourthText.alpha = 0;
    container.addChild(fourthText);
    
    createjs.Tween.get(fourthText)
    	.wait(8000)
    	.to({x:179, scaleX: 0.2, scaleY: 0.2, color:"#87ceeb", alpha : 1}, 300, createjs.Ease.elasticInOut)
    	.call(setFPS80);
    
    //-------------------------------------------------------------------------
    var fifthText = new createjs.Text("能够有机会","30px 微软雅黑", "#800080");
    fifthText.x = 600;
    fifthText.y = 160;
    fifthText.alpha = 0;
    container.addChild(fifthText);
    
    createjs.Tween.get(fifthText)
    	.wait(9500)
    	.to({alpha : 1}, 1000);
    
    //-------------------------------------------------------------------------
    var sixthText = new createjs.Text("与早已让我心动的","30px 微软雅黑", "#f0e68c");
    sixthText.x = 115;
    sixthText.y = 180;
    sixthText.alpha = 0;
    container.addChild(sixthText);
    
    createjs.Tween.get(sixthText)
    	.wait(11000)
    	.to({alpha : 1}, 1000);
    
    //-------------------------------------------------------------------------
    var seventhText = new createjs.Text("你","50px 楷体", "#db7093");
    seventhText.x = 355;
    seventhText.y = 173;
    seventhText.alpha = 0;
    container.addChild(seventhText);
    
    createjs.Tween.get(seventhText)
    	.wait(12000)
    	.to({alpha : 1}, 1000);
    //-------------------------------------------------------------------------
    var eighthText = new createjs.Text("踏上旅程","50px 楷体", "#db7093");
    eighthText.x = 
    eighthText.y = 
    eighthText.alpha = 0;
    container.addChild(eighthText);
    
    createjs.Tween.get(eighthText)
    	.wait(13500)
    	.to
    
    //-------------------------------------------------------------------------
    stage.addChild(container);
    
	createjs.Ticker.addListener(stageUpdate);
});


//Save the native API
var native_random = Math.random;

//Overwrite the native API
Math.random = function(randomMin, randomMax, precision){
    if (arguments.length === 0)
        return native_random();
    if (arguments.length === 1){
    	randomMax = randomMin;
    	randomMin = 0;
    }
    var randomOutput = randomMin + native_random()*(randomMax-randomMin);
    return precision === void 0 ? Math.round(randomOutput) : randomOutput.toFixed(precision)
}

var getSeparateDuration = function(){
	var separation = new Date();
	separation.setFullYear(2012, 10, 14);
	separation.setHours(19);
	separation.setMinutes(30);
	separation.setSeconds(0);
	separation.setMilliseconds(0);
	
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(separation)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return [days, hours, minutes, seconds];
}