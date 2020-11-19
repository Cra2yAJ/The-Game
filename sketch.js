const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var map;

var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;

function preload(){
map = loadImage("map.jpg");
}

function setup() {
  createCanvas(displayWidth*2,displayHeight*2);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  engine = Engine.create();
  world = engine.world;
  
  a = new Wall(displayWidth/2-590,displayHeight/2+100,40,400);
  b = new Wall(displayWidth/2-225,displayHeight/2+150,40,310);
  c = new Wall(displayWidth/2-225,displayHeight/2-70,40,50);
  d = new Wall(displayWidth/2-45,displayHeight/2-30,30,55);
  e = new Wall(displayWidth/2+225,displayHeight/2-70,30,50);
  f = new Wall(displayWidth/2,displayHeight/2+140,40,170);
  g = new Wall(displayWidth/2+320,displayHeight/2,30,180);
  h = new Wall(displayWidth/2+225,displayHeight/2+45,30,90);
  i = new Wall(displayWidth/2,displayHeight/2+400,40,110);
  j = new Wall(displayWidth/2,displayHeight/2+640,40,150);
  k = new Wall(displayWidth/2-225,displayHeight/2+450,40,50);
  l = new Wall(displayWidth/2-540,displayHeight/2-5,70,200);
  m = new Wall(displayWidth/2-520,displayHeight/2+220,100,170);
  n = new Wall(displayWidth/2-280,displayHeight/2+220,100,170);
  o = new Wall(displayWidth/2-400,displayHeight/2-90,400,20);
  p = new Wall(displayWidth/2-400,displayHeight/2+315,400,20);
  q = new Wall(displayWidth/02-455,displayHeight/2+85,100,15);
  r = new Wall(displayWidth/2-280,displayHeight/2+85,80,15);
  s = new Wall(displayWidth/2-95,displayHeight/2-65,220,20);
  t = new Wall(displayWidth/2-105,displayHeight/2+60,200,30);
  u = new Wall(displayWidth/2+100,displayHeight/2-85,230,20);
  v = new Wall(displayWidth/2+105,displayHeight/2+85,210,20);
  w = new Wall(displayWidth/2+110,displayHeight/2+280,250,150);
}

function draw() {
  background(map);  
 
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
a.display();
b.display();
c.display();
d.display();
e.display();
f.display();
g.display();
h.display();
i.display();
j.display();
k.display();
l.display();
m.display();
n.display();
o.display();
p.display();
q.display();
r.display();
s.display();
t.display();
u.display();
v.display();
w.display();

  drawSprites();
}