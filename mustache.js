mustache_x = 0;
mustache_y = 0;

function preload() {
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

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
        mustache_x = results[0].pose.nose.x - 25;
        mustache_y = results[0].pose.nose.y-5;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustache_x, mustache_y, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}