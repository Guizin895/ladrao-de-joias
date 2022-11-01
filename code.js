var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var diamante = createSprite(390,10,20,20);

var ladrao = createSprite(192,315,20,20)

var laser1 = createSprite(100,0,200,5);
laser1.velocityY=-2
var laser2 = createSprite(300,400,200,5);
laser2.velocityY=2;



createEdgeSprites()


function draw(){
  background("white");

  if (keyIsDown(RIGHT_ARROW)){
   ladrao.velocityX=2;
   ladrao.velocityY=0;
  }
  if (keyIsDown(LEFT_ARROW)){
    ladrao.velocityX=-2;
    ladrao.velocityY=0;
  }
  if (keyIsDown(UP_ARROW)){
    ladrao.velocityX=0;
    ladrao.velocityY=-2;
  }
  if (keyIsDown(DOWN_ARROW)){
    ladrao.velocityX=0;
    ladrao.velocityY=2;
  }
  if (laser1.isTouching(ladrao) || laser2.isTouching(ladrao)){
    stroke (0)
    fill(0)
    textSize(24);
    text("ladrao capturado",120,200);
    laser1.setvelocity(0,0);
    laser2.setvelocity(0,0);
    ladrao.setvelocity(0,0);
  }
  if (diamante.isTouching(ladrao)){
    stroke (0)
    fill (0)
    textSize(15)
    text("diamante pêgo", 200,150)
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    ladrao.setVelocity(0,0)
  }
  
  
  ladrao.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  
  drawSprites()
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
