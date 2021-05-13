let permissionGranted = false;
var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(value);


if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
  
  DeviceMotionEvent.requestPermission()
  .catch(() => {
    button = createButton("click to start reading");
     button.style("font-size","40px");
     button.center();
     button.mousePressed(requestAccess);
    throw error;
  })
  .then(() => {
  permissionGranted = true;
  })
 } else {
   background(255, 0, 0);
   textSize(68);
   text ("this is only mobile experience", 100, 100);
   fill(0, 102, 153);
}
}

function requestAccess(){
  DeviceMotionEvent.requestPermission()
  .then(response => {
    if (response == 'granted') {
      permissionGranted = true;
    } else {
    permissionGranted = false;
    }
  })
  .catch(console.error);
  
    this.remove();
}

function draw() {
  if (!permissionGranted) return;
  background(value);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(30);
  
  //what is value?
 // text(value, width/2, height/2);

  //value goes down
  value = constrain(value - 2, 0, 255)

  //do something with val
  if (value > 5) {
    text("PUT ME DOWN!", width / 2, height / 2);
  } else {
    text("I'm so relaxed...", width / 2, height / 2);
  }
}

function deviceMoved() {
  //values goes up 
  value = constrain(value + 5, 0, 255)

}