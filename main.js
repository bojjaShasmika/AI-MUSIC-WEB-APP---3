Aa_Raaha_Ho_Mein_Zindagi="";
Mahiye_Jinna_Sohna="";

left_wrsit_X = 0;
left_wrist_Y = 0;

right_wrist_X = 0;
right_wrist_X = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
    Aa_Raaha_Ho_Mein_Zindagi = loadSound("Aa_Raaha_Ho_Mein_Zindagi.mp3");
    Mahiye_Jinna_Sohna = loadSound("Mahiye_Jinna_Sohna.mp3");
}

function draw(){
    image(video,0,0,600,530);
}


function modelLoaded(){
    console.log("PoseNet is Initialised!");
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);

       left_wrist_X = results[0].pose.leftWrist.x;
       left_wrist_Y = results[0].pose.leftWrist.y;

       console.log("Left Wrist X = " + left_wrist_X , "Left Wrist Y = " + left_wrist_Y);

       right_wrist_X = results[0].pose.rightWrist.x;
       right_wrist_Y = results[0].pose.rightWrist.y;

       console.log("Right Wrist X = " + right_wrist_X , "Right Wrist Y = " + right_wrist_Y);
   
    }
}