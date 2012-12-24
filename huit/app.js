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
    
    var firstContainer = new createjs.Container;
    
    var firstText = new createjs.Text("These words I have waited for", "36px Josefin Slab", "#fff");
    firstText.x = 100;
    firstText.y = 80;
    firstContainer.addChild(firstText);
    
    var secondText = new createjs.Text("1", "bold 35px Josefin Slab", "#fff");
    secondText.x = 581;
    secondText.y = 80;
    firstContainer.addChild(secondText);
    
    var thirdText = new createjs.Text("3", "bold 35px Josefin Slab", "#fff");
    thirdText.x = 579;
    thirdText.y = 60;
    thirdText.alpha = 0;
    firstContainer.addChild(thirdText);
    
    var fourthText = new createjs.Text("6", "bold 200px Josefin Slab", "#fff");
    fourthText.x = 530;
    fourthText.y = 10;
    fourthText.alpha = 0;
    firstContainer.addChild(fourthText);
    
    var fifthText = new createjs.Text(" years.", "35px Josefin Slab", "#fff");
    fifthText.x = 600;
    fifthText.y = 80;
    firstContainer.addChild(fifthText);
    stage.addChild(firstContainer);
    
    //Number's animation 1,2
    createjs.Tween.get(secondText)
    	.wait(2000)
    	.to({alpha: 0}, 500)
    	.to({text: 2})
    	.wait(600)
    	.to({alpha: 1}, 500)
    	.wait(500)
    	.call(setFPS500)
    	.to({y: 598,x: 579 + Math.random(-5, 5),rotation: Math.random(70, 100)}, 3000, createjs.Ease.bounceOut)
    	.call(setFPS30)
    	.to({alpha: 0}, 5000);
    	
    //Number's animation 3,4,5
    createjs.Tween.get(thirdText)
    	.wait(6000)
    	.to({y: 80,alpha: 1}, 1000)
    	.wait(800)
    	.to({y: 180,alpha: 0}, 1000)
    	.to({text: 4,x: 560,y: 80})
    	.wait(500)
    	.to({x: 579,alpha: 1}, 1000)
    	.wait(800)
    	.to({x: 610,alpha: 0}, 1000)
    	.to({text: 5,x: 590,y: 90,scaleX: 0,scaleY: 0})
    	.wait(500)
    	.to({x: 579,y: 80,scaleX: 1,scaleY: 1,alpha: 1}, 500)
    	.wait(1300)
    	.to({alpha: 0});
    	
    //Number's animation 6
    createjs.Tween.get(fourthText)
    	.wait(14000)
    	.to({alpha: 0.6}, 100, createjs.Ease.quintIn)
    	.to({x: 579,y: 80,scaleX: 0.18,scaleY: 0.18,color: "#fa67be",alpha: 1}, 300, createjs.Ease.circInOut)
    	.call(setFPS80);
    
    var secondContainer = new createjs.Container;
    
    var sixthText = new createjs.Text("Thanks for being with me", "35px Josefin Slab", "#fff");
    sixthText.x = 420;
    sixthText.y = 130;
    sixthText.alpha = 0;
    secondContainer.addChild(sixthText);
    
    var seventhText = new createjs.Text("your tolerance", "35px Josefin Slab", "#fff");
    seventhText.x = 598;
    seventhText.y = 200;
    seventhText.alpha = 0;
    secondContainer.addChild(seventhText);
    
    var eighthText = new createjs.Text("and", "35px Josefin Slab", "#fff");
    eighthText.x = 770;
    eighthText.y = 290;
    eighthText.alpha = 0;
    secondContainer.addChild(eighthText);
    
    var ninthText = new createjs.Text("your precious love", "35px Josefin Slab", "#fff");
    ninthText.x = 520;
    ninthText.y = 360;
    ninthText.alpha = 0;
    secondContainer.addChild(ninthText);
    
    var tenthText = new createjs.Text("over these 6 years.", "35px Josefin Slab", "#fff");
    tenthText.x = 741;
    tenthText.y = 430;
    tenthText.alpha = 0;
    secondContainer.addChild(tenthText);
    stage.addChild(secondContainer);
    
    createjs.Tween.get(sixthText)
    	.wait(16000)
    	.to({y: 150,alpha: 1}, 1000);
    	
    createjs.Tween.get(seventhText)
    	.wait(18500)
    	.to({x: 598,y: 220,alpha: 1}, 1000, createjs.Ease.circOut);
    	
    createjs.Tween.get(eighthText)
    	.wait(21000)
    	.to({x: 750,alpha: 1}, 1000, createjs.Ease.circOut);
    	
    createjs.Tween.get(ninthText)
    	.wait(23500)
    	.to({x: 540,alpha: 1}, 1000);
    	
    createjs.Tween.get(tenthText)
    	.wait(26000)
    	.to({alpha: 1}, 2000)
    	.call(setFPS30);
    
    //Fade-out the containers
    var textFadeoutTime = 31000;
    createjs.Tween.get(firstContainer)
    	.wait(textFadeoutTime)
    	.to({alpha: 0.08}, 11500);
    	
    createjs.Tween.get(secondContainer)
    	.wait(textFadeoutTime)
    	.to({alpha: 0.08}, 11500);
 
 	//Letter's animation "L"
 	var thirdContainer = new createjs.Container;
 	var colorsArrayL = ["#42a8cb", "#ee823d", "#cb9bce", "#a8a9a8", "#3b8d3a", "#1e4484", "#c0000b"];
 	var circleRadiusL = [9, 10, 11, 12, 13];
    var axisX, axisY;
    var offsetY_down = 0, offsetY_right = 0;  	
    for (var numCircle = 0; numCircle < 19; numCircle++) {
        var innerShape = new createjs.Shape;
        var graphics = innerShape.graphics;
 
        graphics.beginFill(colorsArrayL[Math.random(0, 6)]);
        if(numCircle < 11){
        	axisX = 180 + Math.random(-5, 5);
        	axisY = 220 + offsetY_down * 12 + Math.random(-3, 3);
        	innerShape.x = axisX;
        	innerShape.y = axisY;
        	offsetY_down++;
        }else{
        	axisX = 180 + offsetY_right * 12 + Math.random(-3, 3);
        	axisY = 350 + Math.random(-4, 4);
        	innerShape.x = axisX;
        	innerShape.y = axisY;
        	offsetY_right++;
        }
        
        graphics.drawCircle(axisX, axisY, circleRadiusL[Math.random(0, 4)]);
        graphics.endFill();
        innerShape.alpha = Math.random(0, 0.7, 2);
        innerShape.scaleX = innerShape.scaleY = 0;
        thirdContainer.addChild(innerShape);
    }
    stage.addChild(thirdContainer);
    
    var numChldThirdContainer = thirdContainer.getNumChildren();
    var animationEndtimeL = textFadeoutTime + 180 * numChldThirdContainer;
    for (var i = 0; i < numChldThirdContainer; i++){
        createjs.Tween.get(thirdContainer.getChildAt(i))
        	.wait(textFadeoutTime + 180 * i)
        	.to({scaleX: 1,scaleY: 1,x: 0,y: 0}, 180, createjs.Ease.elasticOut);
    }
        	
    //Letter's animation "O"
    var bitmapanimation, heartAxisX, heartAxisY, step = Math.PI * 2 / 50;
    var angle = Math.PI;
    var fourthContainer = new createjs.Container;
    var img = new Image;
    img.src = "huit/sparkle_21x23.png";
    var spritesheet = {images: [img],frames: {width: 21,height: 23,regX: 10,regY: 11}};
    bitmapanimation = new createjs.BitmapAnimation(new createjs.SpriteSheet(spritesheet));
    for (var numElmt = 0; numElmt < 50; numElmt++){
        angle += step;
        heartAxisX = 435 + 5 * 16 * Math.pow(Math.sin(angle), 3);
        heartAxisY = 260 - 5 * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
        bitmapHeartPrint(heartAxisX, heartAxisY);
    }
    stage.addChild(fourthContainer);
    
    var numChldFourthContainer = fourthContainer.getNumChildren();
    var animationEndtimeO = animationEndtimeL + 80 * numChldFourthContainer;
    for (var i = 0; i < numChldFourthContainer; i++){
        createjs.Tween.get(fourthContainer.getChildAt(i))
        	.wait(animationEndtimeL + 80 * i)
        	.to({alpha: Math.random() * 0.5 + 0.2}, 80, createjs.Ease.elasticOut);
    }
        	
    //Letter's animation "V"
    var rectLength, coorX, coorY, fifthContainer = new createjs.Container;
    var colorsArrayV = ["#42a8cb", "#ee823d", "#cb9bce", "#a8a9a8", "#3b8d3a", "#1e4484", "#c0000b"];
    var rectLengthArray = [12, 13, 14, 15, 16];
    var offsetDown = 0, offsetUp = 0;
    for (var numElmt = 0; numElmt < 22; numElmt++) {
        var innerShape = new createjs.Shape;
        var graphics = innerShape.graphics;
        graphics.setStrokeStyle(Math.random(1, 3), "round")
        	.beginStroke(colorsArrayV[Math.random(0, 6)]);
        	
        if(numElmt < 11){
        	coorX = 605 + offsetDown * 6 + Math.random(-5, 5);
        	coorY = 220 + offsetDown * 12 + Math.random(-3, 3);
        	innerShape.x = coorX;
        	innerShape.y = coorY;
        	offsetDown++;
        }else{
        	coorX = 735 - offsetUp * 6 + Math.random(-5, 5);
        	coorY = 220 + offsetUp * 12 + Math.random(-3, 3);
        	innerShape.x = coorX;
        	innerShape.y = coorY;
        	offsetUp++;
        }
        
        if(Math.random() > 0.5){
        	graphics.drawCircle(coorX, coorY, circleRadiusL[Math.random(0, 4)]);
        	innerShape.alpha = Math.random(0, 0.8, 2);
        }else{
        	rectLength = rectLengthArray[Math.random(0, 4)];
        	graphics.drawRect(coorX, coorY, rectLength, rectLength);
        	innerShape.alpha = Math.random(0, 0.7, 2);
        }
        graphics.endFill();
        innerShape.scaleX = innerShape.scaleY = 0;
        fifthContainer.addChild(innerShape);
    }
    stage.addChild(fifthContainer);
    
    var numChldFifthContainer = fifthContainer.getNumChildren();
    var animationEndtimeV = animationEndtimeO + 3000;
    for (var i = 0; i < numChldFifthContainer; i++){
        createjs.Tween.get(fifthContainer.getChildAt(i))
        	.wait(animationEndtimeO)
        	.to({scaleX: 1,scaleY: 1,x: 0,y: 0}, 3000, createjs.Ease.circOut);
    }
    
    //Letter's animation "E"
    var sixthContainer = new createjs.Container;
    var colorsArrayE = ["#42a8cb", "#ee823d", "#cb9bce", "#a8a9a8", "#3b8d3a", "#1e4484", "#c0000b"];
    var thicknessArray = [4, 5, 7, 9];
    for (var numTwig = 0; numTwig < 16; numTwig++) {
        var innerShape = new createjs.Shape;
        var graphics = innerShape.graphics;
        graphics.setStrokeStyle(thicknessArray[Math.random(0, 3)], "round")
        	.beginStroke(colorsArrayE[Math.random(0, 6)]);
        	
        if(numTwig < 4){
        	graphics.moveTo(840 + Math.random(-8, 8), 220 + Math.random(-8, 8));
        	graphics.lineTo(840 + Math.random(-8, 8), 355 + Math.random(-8, 8));
        }else if(8 > numTwig && numTwig > 3){     
        	graphics.moveTo(840 + Math.random(-8, 8), 220 + Math.random(-8, 8));
        	graphics.lineTo(930 + Math.random(-8, 8), 220 + Math.random(-8, 8));
        }else if(12 > numTwig && numTwig > 7){
        	graphics.moveTo(840 + Math.random(-8, 8), 287.5 + Math.random(-8, 8));
        	graphics.lineTo(930 + Math.random(-8, 8), 287.5 + Math.random(-8, 8));
        }else if(16 > numTwig && numTwig > 11){
        	graphics.moveTo(840 + Math.random(-8, 8), 355 + Math.random(-8, 8));
        	graphics.lineTo(930 + Math.random(-8, 8), 355 + Math.random(-8, 8));
        }else;
        
        innerShape.alpha = 0;
        sixthContainer.addChild(innerShape);
    }
    stage.addChild(sixthContainer);
    
    var numChldSixthContainer = sixthContainer.getNumChildren();
    for (var i = 0; i < numChldSixthContainer; i++){
        createjs.Tween.get(sixthContainer.getChildAt(i))
        	.wait(animationEndtimeV + Math.random(400, 1600))
        	.to({alpha: Math.random(0, 0.6, 2)}, 500, createjs.Ease.bounceOut);
    }
        	
    //The last sentence
    var seventhContainer = new createjs.Container;
    var lastText = new createjs.Text("For the most beautiful you in Dec 24th, 2012.", "35px Josefin Slab", "#fff");
    lastText.x = 210;
    lastText.y = 510;
    lastText.alpha = 0;
    seventhContainer.addChild(lastText);
    stage.addChild(seventhContainer);
    
    var animationEndtimeE = animationEndtimeV + 1600 + 1000; //多延迟一秒
    createjs.Tween.get(lastText)
    	.wait(animationEndtimeE)
    	.to({alpha: 1}, 3000);
    	
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
