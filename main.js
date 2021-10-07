function preload(){


}


function setup(){

    video = createCapture(VIDEO)
    video.size(300,300)
    cnavas = createCanvas(400,400)
    canvas.position(450,375)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose" ,gotPose)
}

function draw(){

    
}

function modelLoaded(){

    console.log("Model Has Been Sucessfuly Loaded")
}

function gotPose(result){

    if(result.length>0){

        console.log(result)
    }

}

