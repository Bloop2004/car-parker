
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_height = 100;
car_width = 100;
car_x = 10;
car_y = 10;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	add_imgBackground = new Image();
	add_imgBackground.onload = uploadBackground;
	add_imgBackground.src = background_image;
	add_imgCar = new Image();
	add_imgCar.onload = uploadgreencar;
	add_imgCar.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(add_imgBackground,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(add_imgCar,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
		}
	
		if(keyPressed == '40')
		{
			down();
		}
		
		if(keyPressed == '37')
		{
			left();
		}
	
		if(keyPressed == '39')
		{
			right();
		}
		
		
}

function up()
{
	if(car_y >=25){
		car_y = car_y - 10;
	    uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(car_y <=475){
		car_y = car_y + 10;
	    uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_x >=25){
		car_x = car_x - 10;
	    uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_x <=775){
		car_x = car_x + 10;
	    uploadBackground();
		uploadgreencar();
	}
}
