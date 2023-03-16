nosex=0;
nosey=0;

function preload(){
  nose=loadImage("https://i.postimg.cc/hjRWkyzZ/beard-and-moustache-11530981057qaowdhmdcc-removebg-preview.png");

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,ddd);
    posenet.on('pose', gotposeseeeeeeeeeeeeeeeeeeeeeeeeeee);
    
}
function ddd(){
    console.log(
        "e"
    );
}
function draw(){

    image(video,0,0,300,300);
    image(nose,nosex,nosey,110,110);

}

function button(){
    save('mustach.png');
    
}
function gotposeseeeeeeeeeeeeeeeeeeeeeeeeeee(result){
    if(result.length > 0) {
        console.log(result);
    console.log("nosex="+result[0].pose.nose.x);
    nosex=result[0].pose.nose.x-60;
    nosey=result[0].pose.nose.y-10;
    console.log("nosey="+result[0].pose.nose.y);
    //yayyyyaliennoises






    
    }
}