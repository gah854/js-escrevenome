function setup() {
    createCanvas(600, 600);
    background("white")
  }
  
  function draw() {
    
    stroke("orange")
    fill("yellow")
   
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  