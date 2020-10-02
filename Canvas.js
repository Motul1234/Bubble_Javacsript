console.log("Hello world!");
var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');
//c.fillStyle = 'rgba(255,0,0,0.5)'
//c.fillRect(0,0,100,100);
//c.fillRect(0,200,100,100);
//c.fillRect(0,400,100,100);
//c.fillRect(0,600,100,100);
//c.fillStyle = 'rgba(0,0,255,0.5)'
//c.fillRect(100,100,100,100);
//c.fillRect(100,300,100,100);
//c.fillRect(100,500,100,100);
//c.fillStyle = 'rgba(0,255,0,0.5)'
//c.fillRect(200,200,100,100);
//c.fillRect(200,0,100,100);
//c.fillRect(200,400,100,100);
//c.fillRect(200,600,100,100);
//c.fillRect(300,300,100,100);
//c.fillRect(300,100,100,100);
//c.fillRect(300,500,100,100);
//c.fillRect(400,400,100,100);
//c.fillRect(400,200,100,100);
//c.fillRect(400,0,100,100);
//c.fillRect(400,600,100,100);
//c.fillRect(500,100,100,100);
//c.fillRect(500,300,100,100);
//c.fillRect(500,500,100,100);
//c.fillRect(600,0,100,100);
//c.fillRect(600,200,100,100);
//c.fillRect(600,400,100,100);
//c.fillRect(600,600,100,100);
//console.log(canvas);


//c.beginPath();
//c.moveTo(100,300);
//c.lineTo(300,100);
//c.strokeStyle = "rgba(25,50,100,1)";
//c.stroke();

//c.beginPath();
//c.arc(300,300,50,0,Math.PI*2,false);
//c.stroke();

//for(var i = 0; i<100;i++){
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    var u = Math.random() * 10; 
//    var v = Math.random() *100;
//    var w = Math.random() * 10 ;
//    c.beginPath();
//    c.arc(x,y,v,u,Math.PI*w,false);
//    c.strokeStyle = "rgba(255,60,50,1)";
//    c.stroke();
//    
//}
//
//c.beginPath();
//var b = Math.random() * window.innerWidth;
//var a = Math.random() * window.innerHeight;
//
//c.moveTo(a,b);
//for(var i =0; i<1;i++){
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//c.lineTo(y,x);
//c.strokeStyle = "rgba(90,205,25,1)";
//c.stroke();
//}
//
//for(var i =0; i<100;i++){
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    var a = Math.random() * 100;
//    var b = Math.random() * 100;
//c.fillStyle = 'rgba(25,0,205,0.5)'
//c.fillRect(x,y,a,b);
//}

//c.beginPath();
//c.arc(200,200,30,0,Math.PI*2,false);
//c.strokeStyle = "rgba(255,60,50,1)";
//c.stroke();


//var dx = (Math.random()-0.5*8);
//var dy = (Math.random()-0.5*8);
//var x = Math.random()*innerWidth;
//var y = Math.random()*innerHeight;
//var radius = 40;

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40; 
//var minRadius = 2;
var color = [
    "#ffaa33",
    "#ar44js",
    "#54sa54",
    "#789524",
    "#nsh372",
    "#800901",
    "#65sn85",
    "red",
    "blue",
    "green"
];

window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y= event.y;
    console.log(mouse);
})

window.addEventListener('resize',function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init()
})

function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color = color[Math.floor ( Math.random() * color.length ) ];
    this.minRadius = radius;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle = "rgba(255,60,50,1)";
        c.stroke();
        c.fillStyle = this.color
        c.fill();
    }
    this.update =function(){
        if (this.x+this.radius > innerWidth || this.x - this.radius < 0){
            this.dx= -this.dx;
        } 
        if (this.y + this.radius >innerHeight || this.y-this.radius < 0){
            this.dy= -this.dy;
        } 
    
        this.x += this.dx;
        this.y += this.dy;
        
        
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if (this.radius < maxRadius){
                this.radius +=1;
            }
            
        } else if (this.radius > this.minRadius){
            if(this.radius-1 > 0){
                this.radius -= 1;
            }            
        } 
        
        this.draw();
    }
}



var circleArray=[];

function init(){
    circleArray=[]
    for (var i=0 ;i<400;i++){

        var dx = (Math.random()-1);
        var dy = (Math.random()-1);
        var x = Math.random()*(innerWidth - radius * 2) + radius;
        var y = Math.random()*(innerHeight- radius * 2) + radius;
        var radius = Math.random() * 10;
        console.log(radius);
        circleArray.push(new Circle(x,y,dx,dy,radius));  
    }
}


console.log(circleArray);




function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerWidth);
    
    for (var i=0 ;i < circleArray.length;i++){
        circleArray[i].update();
        
    }
        
}

init()
animate()