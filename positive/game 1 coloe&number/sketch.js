var img;
var con;
var can;
var change;
var x ;//for timer
var ins;
var a;
var b;
var but;
var check;
var mark;

function setup() {
  mark = 0;
  img = selectAll('img');
  but = createButton("按钮");
  ins = createP("如果看到 <b>A 跟 3</b> ， 或者<b> E 跟 3</b> ， 请按下按钮");
  con = select('.content');
  can = createCanvas(800,500);
  con.child(can);
  con.child(but);
  con.child(ins);
  con.center('horizontal');
  can.center();
  x = 0;
  alert("如果看到 A 跟 3 ， 或者 E 跟 3 ， 请按下按钮")

}

function draw() {

	
  background("rgb(50,205,50)");
  img[0].position(windowWidth-60,5);
  but.position(50, 600);
  but.style("width","100px");
  but.style("height","30px");
  ins.position(200, 590);
  setBoard();
  timer();
  strokeWeight(5);
  stroke(255);
  line(400,30,400,470)
  if (change){
    if (check == false){
      if (a=='A' && b == 3 ){
		alert("没按到！");
		mark = 0;
	  }else if (a=='E' && b == 3 ){
		alert("没按到！");
		mark = 0;
      }else {
        var p = 0;
	  }
  }else{
	  check = false;
  }

     a = alphabet();
     b = number();
  }
  noStroke();
  fill(255);
  textSize(32);
  text('alphabet',160 ,80 );
  
  noStroke();
  fill(255);
  textSize(32);
  text('number',540 ,80 );

  noStroke();
  fill(255);
  textSize(140);
  text(a,180 ,300 );
  
  noStroke();
  fill(255);
  textSize(140);
  text(b,560 ,300 );
  
  noStroke();
  fill(255);
  textSize(16);
  text("分数 : " + mark,690 ,460 );
  

  but.mousePressed(calculator);

}

function setBoard(){
  noStroke();
  fill("rgb(222,184,135)");
  rect(0,0,30,500);
  push();
  push();
  push();
  pop();
  rect(0,0,800,30);
  pop();
  rect(0,470,800,30);
  pop();
  rect(770,0,30,500);
  
  stroke(0);
  strokeWeight(1);
  line(0,0,30,30);
  push();
  push();
  push();
  pop();
  line(0,500,30,470);
  pop();
  line(800,0,770,30);
  pop();
  line(800,500,770,470);
  
}

function timer(){
	var time = millis();


	if (time - x > 800){
		change = true;
		x = time;
	}else{
		change = false;
	}
}

function alphabet(){
	var y = ceil(random(0,5));
	if (y == 0 || y == 1){

		return 'A';
		
	}else if (y == 2){

		return 'B';
		
	}else if (y == 3){

		return 'C';
		
	}else if (y == 4){

		return 'D';
		
	}else{

		return 'E';
		
	}
}

function number(){
	var y = ceil(random(0,5));
	if (y == 0 || y == 1){

		return 1;
	}else if (y == 2){

		return 2;
	}else if (y == 3){

		return 3;
		
	}else if (y == 4){

		return 4;
	}else{

		return 5;
	}
}

function calculator(){

    if (a=='A' && b == 3 ){
		mark = mark + 1;
		check = true;
	}else if (a=='E' && b == 3 ){
		mark = mark + 1;
		check = true;
	}else {
		alert("按错了！");
		mark = 0;
	}
}
