differnce=0;
leftWristX=0;
rightWristX=0;

function preload(){}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,600);
    video.position(100,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("red");
    textSize(difference);
    fill("yellow");
    text("Chandan P Gowda",50,350);
    document.getElementById("fontSize").innerHTML="size of the text will be:"+difference+"px";
}

function modelLoaded(){
    console.log('Posenet is Loaded!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
