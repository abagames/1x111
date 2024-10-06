const d="REFLECTOR",f=`
[Tap]  Turn
[Hold] Enforce reflector
`,u=[`
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
`,`
 rrr
rrrrr
rrrrrr
lwlwll
 lwll
`,`
 rrr
rrrrr
rrrrrr
llwlwl
 llwl
`],g={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let l,n,c,p,t,a;function v(){if(ticks||(l={pos:vec(40,9),vx:1,angle:0,power:0},n=times(9,()=>{const e=rnd()<.5?-1:1,r=rnd(60,300)/difficulty,s=rnd(1,5);return{pos:vec(rnd(99),87),vx:e,angle:-PI/2,angleVel:s*.002,speed:.1/sqrt(s)*sqrt(difficulty),fireTicks:r,fireInterval:r,fireSpeed:rnd(1,1.5)*sqrt(difficulty)}}),c=0,p=[],t=[],a=1),color("light_black"),rect(0,90,100,10),(input.isJustPressed||l.pos.x<3&&l.vx<0||l.pos.x>97&&l.vx>0)&&(play("select"),l.vx*=-1),input.isPressed?l.power+=(1-l.power)*.05:l.power*=.9,l.pos.x+=l.vx*sqrt(difficulty)*(input.isPressed?.5:1)*.5,input.isPressed||(l.angle=clamp(l.angle-l.vx*sqrt(difficulty)*.07,-PI/4,PI/4)),color("black"),char(addWithCharCode("a",floor(ticks/15)%2),l.pos),color("blue"),bar(vec(l.pos).addWithAngle(l.angle+PI/2,6),9-l.power*9,3+l.power*3,l.angle),n.length===0&&(c=0),c--,c<0){const e=rnd()<.5?-1:1,r=rnd(200,300)/difficulty,s=rnd(1,5);n.push({pos:vec(e>0?-3:103,87),vx:e,angle:-PI/2,angleVel:s*.002,speed:.1/sqrt(s)*sqrt(difficulty),fireTicks:r,fireInterval:r,fireSpeed:rnd(1,1.5)*sqrt(difficulty)}),c=rnd(60,80)/sqrt(difficulty)}color("light_red"),t.length===0&&(a=1),remove(t,e=>{e.ticks--;const r=e.radius*sin(e.ticks/e.duration*PI);return arc(e.pos,r),e.ticks<0}),color("black"),remove(n,e=>{e.pos.x+=e.vx*e.speed;const r=e.pos.angleTo(l.pos);return abs(r)<e.angleVel?e.angle=r:r<e.angle?e.angle-=e.angleVel:e.angle+=e.angleVel,bar(e.pos,3,2,e.angle,-.5),char(addWithCharCode("c",floor(ticks/25)%2),e.pos,{mirror:{x:e.vx<0?-1:1}}).isColliding.rect.light_red?(play("powerUp"),addScore(a,e.pos),a++,particle(e.pos),!0):(e.fireTicks--,e.fireTicks<0&&(play("laser"),p.push({pos:vec(e.pos),vel:vec(e.fireSpeed,0).rotate(e.angle)}),e.fireTicks=e.fireInterval),e.pos.x<-3||e.pos.x>103)}),remove(p,e=>{e.pos.add(e.vel),color(e.vel.y<0?"red":"purple");const r=bar(e.pos,4,3,e.vel.angle).isColliding;if(e.vel.y<0)if(r.rect.blue){play("coin"),particle(e.pos,9,1+l.power*2,l.angle+PI/2,PI/8);const s=e.vel.angle-l.angle,i=e.vel.angle,o=e.vel.length*(1+l.power*4);e.vel.set().addWithAngle(i-s*2,o),e.pos.addWithAngle(i-s*2,o*2),e.pos.y<20&&(e.pos.y=20)}else(r.char.a||r.char.b)&&(play("lucky"),end());if(e.vel.y>0&&(r.char.c||r.char.d||r.rect.light_black)){play("explosion");const s=e.vel.length/sqrt(difficulty),i=s*s,o=sqrt(i)*9;return t.push({pos:e.pos,radius:i,ticks:o,duration:o}),!0}return!e.pos.isInRect(-3,-3,106,106)}),color("light_black"),rect(0,90,100,10)}export{u as characters,f as description,g as options,d as title,v as update};
