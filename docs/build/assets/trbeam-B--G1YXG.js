const p="TR BEAM",n=`
[Hold]
 Tractor beam
`,f=[`
y cc y
 cccc
llllll
lllll
 l l
`,`
y cc y
 cccc
llllll
 lllll
  l l
`],u={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let l,o,r,c,a;function y(){ticks||(l={pos:vec(0,9),angle:-PI*.3,trLength:0},o=[],r=0,c=3,a=1),l.angle+=sqrt(difficulty)*.03,l.pos.x=sin(l.angle)*40+50,input.isJustPressed&&(play("select"),a=1),input.isPressed?(play("laser"),l.trLength=clamp(l.trLength+difficulty*2,0,82)):l.trLength*=1-clamp(sqrt(difficulty),1,3)*.2;let s=ticks%10/10*(PI/4);if(l.trLength>1&&(color("blue"),times(4,()=>{line(4*cos(s)+l.pos.x,l.pos.y+5,9*cos(s)+l.pos.x,l.pos.y+5+l.trLength,2),s+=PI/4})),color("black"),char(addWithCharCode("a",floor(ticks/30)%2),l.pos),r--,r<0){c--;let e=!1;c<0&&(e=!0,c=rndi(9,12));const i=rnd(6,12);o.push({pos:vec(rnd(10,90),105+i),vel:vec(),radius:i,isRed:e,isBeamed:!1}),r=rnd(20,25)/sqrt(difficulty)}remove(o,e=>{e.pos.y>99?(e.vel.y-=sqrt(difficulty),e.vel.mul(.5)):e.pos.x<0||e.pos.x>99?e.vel.mul(.1):(e.vel.mul(.9),e.isRed&&(e.vel.y*=.9)),e.vel.y+=sqrt(difficulty)*.1,e.pos.add(e.vel),o.forEach(t=>{if(t===e)return;const d=t.pos.distanceTo(e.pos)-t.radius-e.radius;d<0&&e.vel.addWithAngle(t.pos.angleTo(e.pos),-d/sqrt(e.radius))}),color(e.isRed?"red":"black");const i=arc(e.pos,e.radius).isColliding;return i.char.a||i.char.b?(e.isRed?(play("explosion"),end()):(play("coin"),addScore(a,e.pos),a++),!0):(i.rect.blue?(e.vel.addWithAngle(e.pos.angleTo(l.pos),sqrt(difficulty)/sqrt(e.radius)),e.vel.x+=(l.pos.x-e.pos.x)*clamp(sqrt(difficulty),1,5)*.01,e.isBeamed=!0,e.isRed&&play("hit")):e.isBeamed&&(e.vel.y*=.1,e.vel.x*=5,e.isBeamed=!1),e.isRed&&!e.isBeamed&&(e.pos.x<e.radius||e.pos.x>99-e.radius)?(play("powerUp"),e.isRed=!1):!e.isBeamed&&e.pos.isInRect(10,12+e.radius,80,5)&&e.vel.y>0&&(e.isRed=!0),e.pos.x<-20||e.pos.x>120)}),l.trLength>1&&(color("cyan"),times(4,()=>{line(4*cos(s)+l.pos.x,l.pos.y+5,9*cos(s)+l.pos.x,l.pos.y+5+l.trLength),s+=PI/4}))}export{f as characters,n as description,u as options,p as title,y as update};
