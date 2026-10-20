
//游戏开始页面变量

var c1,c2;  //画布及井盖颜色
var addspeed=0.2;  //小球加速度
var speed=0;  //小球速度
var x=620,y=0;  //小球初始位置
var ball,roll;  //小球角色及滚动
var jx=580;  //井盖初始位置
var sound;  //背景音乐
var bgm;

//迷宫矩阵
var maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ,1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],//5
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],//10
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],//15
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],//20 
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],//25
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],//30
];
var base = 40;  //小迷宫单位长度

//光源
var max_distance;
var lamps=[];
var lamp1_vec;
var lamp1;
var lamp2_vec;
var lamp2;
var lamp3_vec;
var lamp3;

//游戏小球位置向量
var pos;  
var ballInMaze;

//恐龙怪兽
var dinosaur_vec;
var dinosaur;
var count=0; //减缓恐龙移速

//怪兽
var typhoon_vec;
var typhoon;
var a=-1;
var cou;
var jud=1;

//介绍
var intro;

//游戏结束
var flag = true;

//计时和控制变量
var time=0;
var addtime=true;
var together=false;

//生命值
var hearts=[];//储存图片的数组
var heart1,heart2,heart3,heart4,heart5,heart6,haert7,heart8,heart9,heart10,heart11,heart12;
var hp=12;//初始生命值
var bulletPos = 0;//子弹位置递增值
function preload(){
  //加载图片
  heart1=loadImage('heart.png');
  heart2=loadImage('heart.png');
  heart3=loadImage('heart.png');
  heart4=loadImage('heart.png');
  heart5=loadImage('heart.png');
  heart6=loadImage('heart.png');
  heart7=loadImage('heart.png');
  heart8=loadImage('heart.png');
  heart9=loadImage('heart.png');
  heart10=loadImage('heart.png');
  heart11=loadImage('heart.png');
  heart12=loadImage('heart.png');

  //加载音乐
  sound = loadSound("music.mp3");
  bgm = loadSound('bgm.wav');
  //加载怪兽图片
  dinosaur=loadImage('dinosaur01.png');
  typhoon=loadImage('0000.png');
  dinosaur_ani=loadAnimation('dinosaur01.png','dinosaur02.png');
  intro = loadImage("intro.png");
}
function setup() {
  createCanvas(1240, 1240);
  image(intro, 0, 0);
  c1=color(255);
  c2=color(89,89,89);
  ball = createSprite(x,y);
  roll=ball.addAnimation("rolling","ball4.png");
  noStroke;

  //小球向量
  pos = createVector(0, 0);

  //传送门
  door1=createSprite(700,1180);
  eat1 = door1.addAnimation("eat1","eatball/01.png","eatball/02.png",
  "eatball/03.png","eatball/04.png");
  door1.scale=1.8;
  door2=createSprite(1180,660);
  eat2 = door2.addAnimation("eat2","eatball/05.png","eatball/06.png",
  "eatball/07.png","eatball/08.png");
  door2.scale=1.8;

  //失败界面
  endmonster=createSprite(width/2,height/2+200);
  endmonster1=endmonster.addAnimation("endmonster1","end/01.png","end/02.png",
  "end/03.png","end/04.png","end/05.png","end/06.png","end/07.png","end/08.png",
  "end/09.png","end/10.png","end/11.png","end/12.png","end/13.png","end/14.png");
  endmonster.scale=4;

  //恐龙怪兽向量，设置恐龙初始坐标
  dinosaur_vec=createVector(27,21);
  typhoon_vec=createVector(4,19);

  //设置光源初始坐标
  lamp1_vec=createVector(5,17);
  lamp2_vec=createVector(7,29);
  lamp3_vec=createVector(21,6);
  lamps[0]=lamp1_vec;
  lamps[1]=lamp2_vec;
  lamps[2]=lamp3_vec;

  lamp1=createSprite(5*base+base/2,17*base+base/2);
  sparkle1=lamp1.addAnimation('sparkle1','lamp/lamp01.png','lamp/lamp02.png','lamp/lamp03.png','lamp/lamp04.png','lamp/lamp05.png');
  lamp2=createSprite(7*base+base/2,29*base+base/2);
  sparkle2=lamp2.addAnimation('sparkle2','lamp/lamp01.png','lamp/lamp02.png','lamp/lamp03.png','lamp/lamp04.png','lamp/lamp05.png');
  lamp3=createSprite(21*base+base/2,6*base+base/2);
  sparkle3=lamp3.addAnimation('sparkle3','lamp/lamp01.png','lamp/lamp02.png','lamp/lamp03.png','lamp/lamp04.png','lamp/lamp05.png');
  //为数组赋值
  hearts[0]=heart1;
  hearts[1]=heart2;
  hearts[2]=heart3;
  hearts[3]=heart4;
  hearts[4]=heart5;
  hearts[5]=heart6;
  hearts[6]=heart7;
  hearts[7]=heart8;
  hearts[8]=heart9;
  hearts[9]=heart10;
  hearts[10]=heart11;
  hearts[11]=heart12;
}
function draw() {
  count+=1; 
  background(89,89,89,80);
  fill(4,0,0);
  ellipse(620,1100,430,100);
  fill(201,201,201);
  ellipse(jx,1100,430,136);

  push();
  imageMode(CENTER);
  image(intro,width/2,height/2);
  pop();

  //设置重力下降
  
  if(mouseIsPressed==true){
    speed +=addspeed;
    jx-=4;
  }
  
  ball.setSpeed(speed,90);
  drawSprite(ball);
  
  if(ball.position.y>1100){
    //计时开始
    if(addtime==true){
      time+=1;
    }

    //加背景音乐
    playBGM();

    //绘制迷宫
    drawWalls();

    //控制小球
    controlBall();

    //传送门
    setdoor();

    //怪兽
    monster();

    //恐龙怪兽
    monster_dinosaur();

    //子弹
    bullet(width/2, height/2);

    //光源算法
    light();

    //判断死亡算法
    monster_dinosaur_death();
    monster_death();
    bullet_death();

    //生命
    Heart();

    //判断成功
    success();
  }
}
//鼠标控制音乐播放
function mousePressed(){
  if(sound.isPlaying()){
    sound.pause;
  }else{
    sound.play();
  }
}
//绘制迷宫
function drawWalls(){
  background(200);
  push();
  stroke(150);
  fill(100);
  for(let i=0;i<31;i++){    //31*40 31*40
    for(let j=0;j<31;j++){
      if(maze[i][j]){
        rect( j*base, i*base, base, base);
      }
    }
  }
  pop();
}
//光源设置
function light(){

  drawSprite(lamp1);
  drawSprite(lamp2);
  drawSprite(lamp3);
  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let r = dist(pos.x*base+base/2, pos.y*base+base/2, i, j);
      max_distance=640;
      //判断是否与光源重叠
      for(var a=0;a<lamps.length;a++){
        if(dist(pos.x,pos.y,lamps[a].x,lamps[a].y)==0){
          max_distance=4000;
          //给光加闪烁效果
          if(count%4==0){
            max_distance=max_distance*0.95;
          }
        }
      }
      r = (r / max_distance) * 100;
      fill(0);
      ellipse(i, j, r, r);
    }
  }
}
//小球控制
function controlBall(){
  if(together==false){
    frameRate(10);
    fill(0);
    ballInMaze = ellipse(pos.x*base+base/2, pos.y*base+base/2, base, base);
    if(keyIsPressed){
      if(key=='w'||key=='W'){//上
        if(pos.y-1>=0 && pos.y-1<=30 && maze[pos.y-1][pos.x]==0){
          pos.add(0, -1);
        } 
      }else if(key=='s'||key=='S'){//下
        if(pos.y+1>=0 && pos.y+1<=30 && maze[pos.y+1][pos.x]==0){
          pos.add(0, 1);
        }
      }else if(key=='a'||key=='A'){//左
        if(pos.x-1>=0 && pos.x-1<=30 && maze[pos.y][pos.x-1]==0){
          pos.add(-1, 0);
        }
      }else if(key=='d'||key=='D'){//右
        if(pos.x+1>=0 && pos.x+1<=30 && maze[pos.y][pos.x+1]==0){
          pos.add(1, 0);
        }
      }
    }
  }
}
//恐龙追逐
function monster_dinosaur(){
  //绘制恐龙
  image(dinosaur,dinosaur_vec.x*base,dinosaur_vec.y*base);
  if(dist(pos.x,pos.y,dinosaur_vec.x,dinosaur_vec.y)<7 && dist(pos.x,pos.y,dinosaur_vec.x,dinosaur_vec.y)!=0){ //决定恐龙视力
    var ifleft_distance=dist(pos.x,pos.y,dinosaur_vec.x-1,dinosaur_vec.y);
    var ifright_distance=dist(pos.x,pos.y,dinosaur_vec.x+1,dinosaur_vec.y);
    var ifup_distance=dist(pos.x,pos.y,dinosaur_vec.x,dinosaur_vec.y-1);
    var ifdown_distance=dist(pos.x,pos.y,dinosaur_vec.x,dinosaur_vec.y+1);
    var judge=[ifleft_distance,ifright_distance,ifup_distance,ifdown_distance];
    judge.sort();
    var flag=true;
    for(var i=0;i<4;i++){
      if(flag && count%4==0){ //决定恐龙移速
        if(judge[i]==ifleft_distance){
          if(dinosaur_vec.x-1>=0 && dinosaur_vec.x-1<=30 && maze[dinosaur_vec.y][dinosaur_vec.x-1]==0){
            dinosaur_vec.add(-1,0);
            flag=false;
          }
        }else if(judge[i]==ifright_distance){
          if(dinosaur_vec.x+1>=0 && dinosaur_vec.x+1<=30 && maze[dinosaur_vec.y][dinosaur_vec.x+1]==0){
            dinosaur_vec.add(1,0);
            flag=false;
          }
        }else if(judge[i]==ifup_distance){
          if(dinosaur_vec.y-1>=0 && dinosaur_vec.y-1<=30 && maze[dinosaur_vec.y-1][dinosaur_vec.x]==0){
            dinosaur_vec.add(0,-1);
            flag=false;
          }
        }else if(judge[i]==ifdown_distance){
          if(dinosaur_vec.y+1>=0 && dinosaur_vec.y+1<=30 && maze[dinosaur_vec.y+1][dinosaur_vec.x]==0){
            dinosaur_vec.add(0,1);
            flag=false;
          }
        }
      }
    }
  }
}
//巡逻怪兽
function monster(){
  image(typhoon,typhoon_vec.x*base,typhoon_vec.y*base);
  cou++;
  if(jud==1&&count%2==0){
    typhoon_vec.add(a,0);
    if(maze[typhoon_vec.y][typhoon_vec.x]==1||maze[typhoon_vec.y][typhoon_vec.x]==1){
      a=a*(-1);
      typhoon_vec.add(a,0);
      jud=1;
    }
  } 
}
//怪兽及恐龙游戏结束判断
function monster_death(){
  if(dist(pos.x,pos.y,typhoon_vec.x,typhoon_vec.y)==0){
    jud=0;
    lose();
  }
}
function monster_dinosaur_death(){
  if(dist(pos.x,pos.y,dinosaur_vec.x,dinosaur_vec.y)==0){
    lose();
  }
}
//传送门
function setdoor(){
  //frameDelay=0.5;
  drawSprite(door1);
  drawSprite(door2);
  if(pos.x==17 & pos.y==29){
    pos.add(+12,-12);
  }
  if(pos.x==29 & pos.y==16){
    pos.add(-13,+13);
  }
 
}
//背景音乐
function playBGM(){
  if(!bgm.isPlaying()){
    bgm.play();
  }
}
var dc = 1;//颜色递增值
//游戏成功
function success(){
  if(pos.x>25 && pos.y>25){
    createCanvas(1240,1240);
    
  addtime=false;
  together=true;

    push();
    background(89,89,89);
    textSize(80);
    fill(255);
    stroke(255);
    textFont("Arial Rounded MT Bold");
    text("YOU SUCCEED!",350,620);
    textSize(40);
    text("Your time is : "+time/10+" s",420,1000);
    pop();
    
    push();
    frameRate(60);
    fill(dc);
    ellipse(width/2,height/2+200,100,100);
    dc++;
    pop();
  }  
}
//游戏失败
function lose(){
  createCanvas(1240,1240);
  addtime=false;
  together=true;
  
  push();
  hp=0;
  background(89,89,89);
  textSize(80);
  fill(255);
  stroke(255);
  textFont("Arial Rounded MT Bold");
  text("GAME OVER",400,620);
  textSize(40);
  text("Your time is : "+time/10+" s",420,1000);
  textSize(40);
  text("Press F5 and One more time",350,1100);
  pop();

  drawSprite(endmonster);
}
//子弹关卡
function bullet(x, y){
  push();
  fill(255, 0, 0);
  translate(x, y);
  if(hp>0){
    for(let i=0;i<12;i++){
      rotate(radians(30*i));
      ellipse(bulletPos, 0, 20, 20);
      rotate(radians(-30*i));
      if(dist(pos.x*base+base/2, pos.y*base+base/2, (bulletPos+10)*cos(radians(30*i))+width/2, (bulletPos+10)*sin(radians(30*i))+height/2)<30){
        hp--;
      }
    }  
    bulletPos += 45;
    }
    if(bulletPos>width/2){
      bulletPos=0;
    };
    
    pop();
}
//生命值耗尽
function bullet_death(){
  if(hp<=0){
    lose();
  }
}
//生命值统计及显示
function Heart(){
  for(var i=0;i<hp;i++){
    image(hearts[i],1200-42*i,20);
  }
}