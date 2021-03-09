const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bruce, BruceWalk;
var Bolt, BoltImg1, BoltImg2, BoltImg3, BoltImg4;
var UmbrellaCollider;

var Drops = [];
var DropsX, DropsY;
var DropAmount = 0;

function preload(){

    BruceWalk = loadAnimation(
        "images/Walking Frame/walking_1.png",
        "images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png",
        "images/Walking Frame/walking_4.png",
        "images/Walking Frame/walking_5.png",
        "images/Walking Frame/walking_6.png",
        "images/Walking Frame/walking_7.png",
        "images/Walking Frame/walking_8.png"
    );

    BoltImg1 = loadImage("images/thunderbolt/1.png");
    BoltImg2 = loadImage("images/thunderbolt/2.png");
    BoltImg3 = loadImage("images/thunderbolt/3.png");
    BoltImg4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400,800);

    engine = Engine.create();
    world = engine.world;
   
    Bruce = createSprite(200,625);
    Bruce.addAnimation("Bruce", BruceWalk);
    Bruce.scale = 0.5;

    UmbrellaCollider = new Umbrella(215,565,380);
}

function draw(){
    Engine.update(engine);

    background(0,0,0);

    UmbrellaCollider.display();

    DropsX = Math.round(random(1,400));
    DropsY = Math.round(random(1,400));

    if (DropAmount < 40) {

        Drops.push(new Drop(DropsX, DropsY,10));
        DropAmount++;
    }

    for (var y = 0; y < Drops.length; y++) {
        Drops[y].display();
    }

    spawnBolts();
    drawSprites();
}   

function spawnBolts() {

    if (frameCount % 80 === 0) {

        Bolt = createSprite(200,150);
        
        var rand = Math.round(random(1,4));

        switch(rand) {
            case 1: Bolt.addImage(BoltImg1);
                    break;
            case 2: Bolt.addImage(BoltImg2);
                    break;
            case 3: Bolt.addImage(BoltImg3);
                    break;
            case 4: Bolt.addImage(BoltImg4);
                    break;
            default: break; 
        }

        Bolt.scale = 0.5;
        Bolt.lifetime = 20;
    }
}

