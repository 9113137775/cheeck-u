glasses_x = 0;
glasses_y = 0;

function preload() {
glasses = loadImage("https://i.postimg.cc/v8xBJ8pM/iiconic.jpg");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.show();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized.');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        glasses_x = results[0].pose.nose.x - 25;
        glasses_y = results[0].pose.nose.y-5;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(glasses, glasses_x, glasses_y, 50, 50);
}

function take_snapshot() {
    save('glasses.png');
}