var cities = [];
var totalCities = 10;
var recordDistance;
var bestEver;


function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < totalCities; i++) {
    
    cities[i] = createVector(random(width), random(height));
  }
  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();


}

function draw() {
  background(0);
  fill(255);

  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 12, 12);
  }
   
  stroke(255);
  strokeWeight(0);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();
  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities,i , j);
  var d = calcDistance(cities)

  if( d < recordDistance){
    recordDistance = d;
    bestEver = cities.slice();
  }

  stroke(255, 120,140);
  strokeWeight(2);
  noFill();
  beginShape();
  console.log(recordDistance);
  for (var i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y)
  }
  endShape();

}

function swap(a, i , j){
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points){
  var sum = 0;
  for(var i = 0 ; i < points.length -1 ; i++){
    var d = dist(points[i].x,points[i].y , points[i+1].x , points[i+1].y);
    sum += d;
  }
  return sum;
}