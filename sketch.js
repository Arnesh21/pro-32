const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour = 0;

function preload() {
    getBackgroundImg(); 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
        Engine.update(engine);
        //strokeWeight(4);
    }   
    Engine.update(engine);

    // write code to display time in correct format here
    textSize(35);
    fill("white");
    console.log("hi");
if(hour>=12){ 
        text("Time : "+ hour%12 + " PM", 50,100); 
}else if(hour==0){ 
    text("Time : 12 AM",100,100); 
}else{ 
    text("Time : "+ hour%12 + " AM", 50,100); 
}
    
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    var responseJson = await response.json();

    var dateTime = responseJson.datetime;

    console.log(responseJson);
    console.log(dateTime);


    //change the data in JSON format
    

    // write code slice the datetime
    hour = dateTime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour >= 05 && hour <= 08){
        bg = "sunrise1.png";
    }
    else if(hour >= 08 && hour <= 9){
            bg = "sunrise2.png";
        }
    else if(hour >= 9 && hour <= 11){
        bg = "sunset3.png";
    }
    else if(hour >= 11 && hour <= 12){
        bg = "sunrise4.png";
    }
    else if(hour >= 12 && hour <= 15){
        bg = "sunrise5.png";
    }
    else if(hour >= 15 && hour <= 17){
        bg = "sunrise6.png";
    }
    else if(hour >= 17 && hour <= 19){
        bg = "sunset7.png";
    }
    else if(hour >= 19 && hour <= 20){
        bg = "sunset10.png";
    }
    else if(hour >= 20 && hour <= 22){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }
    

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
