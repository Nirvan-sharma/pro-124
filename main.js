function draw(){
    background('#ffe600');
}

function setup(){
    canvas=createCanvas(550,450);
    canvas.position(760,100);
    video=createCapture(VIDEO);
    video.size(550,450);
    video.position(150,100)

    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
    }
}

function modelLoaded(){
    console.log("posenet is initialized");
}