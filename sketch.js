function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  randomSeed(10);
  for (let counter = 0; counter < 1052; counter += 1) {

    let x1 = random(0, windowWidth);
    let y1 = random(0, windowHeight);
    let x0 = random(0, windowWidth);
    let y0 = random(0, windowHeight);
    
    stroke('black');
    strokeWeight(4);
    line(x1, y1, x0, y0);

    stroke('pink');
    fill('pink');
    strokeWeight(1);
    ellipse(x1, y1, 10);
    ellipse(x0, y0, 10);

    
  }
}
