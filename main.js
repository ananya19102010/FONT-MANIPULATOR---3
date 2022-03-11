
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#95A1AB');
    document.getElementById("text_size").innerHTML="Font size of a text will be = " + difference +"px"
    fill('#F90093');
    textSize(difference);
    text('Ananya',50, 400);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
   if(results.length>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + " difference = " + difference);

   }
}
