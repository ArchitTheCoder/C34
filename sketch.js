const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(2000, 900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000, 890, 2000, 20)



  //Building 1
  box1 = new Box(1440, 860, 50, 50)
  box2 = new Box(1490, 860, 50, 50)
  box3 = new Box(1540, 860, 50, 50)
  box4 = new Box(1590, 860, 50, 50)

  box5 = new Box(1470, 810, 50, 50)
  box6 = new Box(1520, 810, 50, 50)
  box7 = new Box(1570, 810, 50, 50)

  box8 = new Box(1490, 760, 50, 50)
  box9 = new Box(1540, 760, 50, 50)

  box10 = new Box(1520, 710, 50, 50)

  //Building 2
  box11 = new Box(1240, 860, 50, 50)
  box12 = new Box(1290, 860, 50, 50)

  box13 = new Box(1240, 810, 50, 50)
  box14 = new Box(1290, 810, 50, 50)

  box15 = new Box(1240, 760, 50, 50)
  box16 = new Box(1290, 760, 50, 50)

  box17 = new Box(1240, 710, 50, 50)
  box18 = new Box(1290, 710, 50, 50)

  //Building 3
  box19 = new Box(1760,860,50,50)
  box20 = new Box(1760,810,50,50)
  box21 = new Box(1760,760,50,50)
  box22 = new Box(1760,710,50,50)
  box23 = new Box(1760,660,50,50)
  box24 = new Box(1760,610,50,50)
  box25 = new Box(1760,560,50,50)
  box26 = new Box(1760,510,50,50)
  box27 = new Box(1760,460,50,50)
  box28 = new Box(1760,410,50,50)

  //Building 4
  box29 = new Box(1060,860,50,50)
  box30 = new Box(1060,810,50,50)
  box31 = new Box(1060,760,50,50)
  box32 = new Box(1060,710,50,50)
  box33 = new Box(1060,660,50,50)
  box34 = new Box(1060,610,50,50)
  box35 = new Box(1060,560,50,50)

  box36 = new Box(1010,860,50,50)
  box37 = new Box(1010,810,50,50)
  box38 = new Box(1010,760,50,50)
  box39 = new Box(1010,710,50,50)

  box40 = new Box(960,860,50,50)
  box41 = new Box(960,810,50,50)

  //Wrecking Ball
  wball = new Ball(400,560,50,50)

  slingshot = new SlingShot(wball.body, { x: 400, y: 450 });

}

function draw() {
  background(0);
  Engine.update(engine);


  ground.display();
  //B1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box9.display();
  box8.display();
  box10.display();

  //B2
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  //B3
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  //B4
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();

  //Wball
  wball.display();
  slingshot.display();


}

function mouseDragged() {
    
    Matter.Body.setPosition(wball.body, { x: mouseX, y: mouseY });
    
}