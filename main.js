var canvas= new fabric.Canvas('mycanvas');

playerX= 10;
playerY= 10;


var player_object;
var block_object;

var block_object_width=30;
var block_object_height=30;

function player_update()
{
    fabric.Image.fromURL("hammer-removebg-preview.png", function(Img) {
     player_object=Img;

     player_object.scaleToWidth(100);
     player_object.scaleToHeight(150);
     player_object.set({
         top:playerY,
         left:playerX
     });
canvas.add(player_object);
    });
}


function new_image(getimg)
{
    fabric.Image.fromURL(getimg, function(Img) {
     block_object=Img;

     block_object.scaleToWidth(block_object_width);
    block_object.scaleToHeight(block_object_height);
     block_object.set({
         top:playerY,
         left:playerX
     });
canvas.add(block_object);
    });
}


window.addEventListener("keydown",mk);
function mk(e)
{
    keyPressed=e.keyCode;

    if(e.shiftKey==true && keyPressed=="80") 
    {
        block_object_width=block_object_width+10;
        block_object_height=block_object_height+10;
        document.getElementById("king").innerHTML=block_object_width;
        document.getElementById("cannon").innerHTML=block_object_height;
    }

    if(e.shiftKey && keyPressed=="77") 
    {
        block_object_width=block_object_width-10;
        block_object_height=block_object_height-10;
        document.getElementById("king").innerHTML=block_object_width;
        document.getElementById("cannon").innerHTML=block_object_height;
    }

if(keyPressed=='38')
{
up();
console.log("up");
}

if(keyPressed=='37')
{
left();
console.log("left");
}

if(keyPressed=='39')
{
right();
console.log("right");
}

if(keyPressed=='40')
{
down();
console.log("down");
}

if(keyPressed=='66')
{
new_image("base.png");
console.log("b");
}

if(keyPressed=='85')
{
new_image("engine.png");
console.log("u");
}

if(keyPressed=='89')
{
new_image("n.png");
console.log("y");
}


if(keyPressed=='82')
{
new_image("body.png");
console.log("r");
}

if(keyPressed=='74')
{
new_image("sp-removebg-preview.png");
console.log("j");
}

if(keyPressed=='105')
{
new_image("Side_Separator-removebg-preview.png");
console.log("i");
}
}

function up()
{
    playerY=playerY-block_object_height;
    canvas.remove(player_object);
    player_update();
}

function down()
{
    playerY=playerY+block_object_height;
    canvas.remove(player_object);
    player_update();
}

function left()
{
    playerX=playerX-block_object_width;
    canvas.remove(player_object);
    player_update();
}

function right()
{
    playerX=playerX+block_object_width;
    canvas.remove(player_object);
    player_update();
}