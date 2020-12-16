var car,wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random;

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80.80,80);


}

function draw() {
  background(255,255,255);  


  if(wall.x - car.x < (car.width + wall.width)/2);
  {
      car.velocityX = 0;
      var deformation = 0.5*weight*speed*speed/22500;
      if(deformation>180)
      {
         car.shapeColor = (255,0,0); 
      }
      if(deformation<100)
      {
         car.shapeColor = (0,255,0);
      }
      if(deformation<100 && deformation>180)
      {
        car.shapeColor = (230,230,0);
      }
  }

  drawSprites();
}