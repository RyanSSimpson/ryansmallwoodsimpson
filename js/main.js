/*TweenMax.to(".left", 1, {x: 100, delay: 1});
TweenMax.from(".left", 1, {opacity: 0, delay: 1});

TweenMax.to(".right", 1, {x: -100, delay: 1});
TweenMax.from(".right", 1, {opacity: 0, delay: 1});

TweenMax.set(document.getElementById("hero"), {opacity: 0});
TweenMax.to(".main-content", 2, {opacity: 1});*/


var tl = new TimelineMax();
tl.set(document.getElementById("hero"), {opacity: 0});
tl.to("#hero", 1, {opacity: 1});

/*tl.from(".left>.hero-title, .left>.hero-paragraph", 1, {opacity: 0});
tl.to(".left>.hero-paragraph", 1, {x: 100},"-=1");*/

tl.from(".hero-name", 1, {opacity: 0});
tl.to(".hero-name", 1, {y: 50},"-=1");


/* SKILL SET MOVING SECTION */
var speed = 1;
var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

var screenWidth=0;

if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {
    screenWidth = window.outerWidth; 
    //I'll use window.innerWidth in production
} else {
    screenWidth = document.body.getBoundingClientRect().width;
}

if(screenWidth > 600) {
    canvas.setAttribute('width', (screenWidth/2 - 15).toString());
    ctx.font = "2rem Sniglet";
}
else {
    //canvas.setAttribute('width', (screenWidth).toString());
    canvas.width =screenWidth;
    ctx.font = "16px Sniglet";
    speed = 0.5;
}
ctx.fillStyle = "#dadada";

var skills = ["C#","C++","gitHub","SVN","Java","HTML5","CSS3","Bootstrap","JavaScript",
                "Delphi","Unity","BitBucket","SQL","PostgreSQL","MongoDB","TypeScript","NodeJS",
                "Angular","Jira","Jenkins","JSON","XML","AWS","AGILE","SCRUM"];


var x = [];
var y = [];
var dx = [];
var dy = [];

for(var i=0;i<skills.length;i++) {
    var angle = Math.random()*Math.PI*2;
    x.push(60+Math.random()*(canvas.width-60));
    dx.push(Math.cos(angle));
    y.push(60+Math.random()*(canvas.height-60));
    dy.push(Math.sin(angle));
}

function drawBall(text,xpos,ypos) {
    ctx.fillText(text,xpos,ypos);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0;i<skills.length;i++) {
        drawBall(skills[i], x[i], y[i]);
        var width = ctx.measureText(skills[i]).width;
        if(x[i] + dx[i] > canvas.width-width) {
            dx[i] = -Math.abs(dx[i]);
        }
        else if(x[i] + dx[i] < width) {
            dx[i] = Math.abs(dx[i]);
        }
        /*if(x[i] + dx[i] > canvas.width-width || x[i] + dx[i] < width) {
            dx[i] = -dx[i];
        }*/
        if(y[i] + dy[i] > canvas.height-10) {
            dy[i] = -Math.abs(dy[i]);
        }
        else if(y[i] + dy[i] < 23) {
            dy[i] = Math.abs(dy[i]);
        }
        /*if(y[i] + dy[i] > canvas.height-width || y[i] + dy[i] < width) {
            dy[i] = -dy[i];
        }*/
        
        x[i] += dx[i] * speed;
        y[i] += dy[i] * speed;
    }
    
    
}

setInterval(draw, 10);