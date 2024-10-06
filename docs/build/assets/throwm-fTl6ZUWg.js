const y="THROW M",f=`
[Hold] Set angle
[Release] Shoot
`,a=[`
llllll
ll l l
ll l l
llllll
 l  l
 l  l
  `,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`,`
 lll
ll ll
l lll
lllll
 lll
  ll
`,`
r  r
llllrr
r  r
`,`
 yyyy
 y yy
l yyyl
lyyyyl
 yyyy
 yyyy
`],p={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let s,o,c,i,t,r;function d(){if(ticks||(s=[],o=0,c=[],i={pos:vec(90,50),vy:-1,fireAngle:void 0},t=[],r=1),color("light_black"),rect(85,0,15,10),rect(85,92,15,8),color("black"),remove(t,l=>(l.pos.add(l.vel),l.vel.y+=difficulty*.07,char("e",l.pos),l.pos.y>103)),o--,o<0){const l=rnd(200,300)/sqrt(difficulty);s.push({pos:vec(rnd(3,50),-5),vy:rnd(.1,.4)*difficulty,fireInterval:l,fireTicks:rnd(l),color:["red","cyan","yellow","green"][rndi(4)],isFalling:!1}),o=rnd(50,60)/difficulty/sqrt(difficulty)}remove(s,l=>{l.pos.y+=l.vy;let e=!1;return l.isFalling?l.vy+=.1:(l.fireTicks--,l.fireTicks<0&&(c.push(vec(l.pos)),l.fireTicks=l.fireInterval),color(l.color),char("c",l.pos.x,l.pos.y-6).isColliding.char.e&&(e=!0)),color("black"),char("b",l.pos,{mirror:{y:l.isFalling?-1:1}}).isColliding.char.e&&!l.isFalling&&(e=!0),e&&(play("powerUp"),particle(l.pos.x,l.pos.y-6),l.isFalling=!0,addScore(r,l.pos),r*=2),l.pos.y>105});const n=difficulty*.5;color("black"),remove(c,l=>{l.x+=n;const e=char("d",l).isColliding;return e.char.e?(play("hit"),particle(l),addScore(r,l),r++,!0):l.x>103||e.rect.light_black}),i.pos.y+=i.vy*difficulty*.5,(i.pos.y<19&&i.vy<0||i.pos.y>90&&i.vy>0)&&(i.vy*=-1),color("blue"),char("c",i.pos.x,i.pos.y-6,{mirror:{x:-1}}).isColliding.char.d&&(play("explosion"),end()),color("black"),char("b",i.pos.x,i.pos.y,{mirror:{x:-1}}),i.fireAngle==null&&input.isJustPressed&&(i.fireAngle=PI/4*3),i.fireAngle!=null&&(i.fireAngle+=.1*difficulty,color("black"),line(i.pos,vec(i.pos).addWithAngle(i.fireAngle,5),2),(input.isJustReleased||i.fireAngle>PI/8*11)&&(play("laser"),t.push({pos:vec(i.pos),vel:vec().addWithAngle(i.fireAngle,sqrt(difficulty)*3)}),i.fireAngle=void 0,r=1))}export{a as characters,f as description,p as options,y as title,d as update};
