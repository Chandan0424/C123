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
function modelLoaded(){
    console.log('Posenet is Loaded!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){}