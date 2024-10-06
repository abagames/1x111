const h="ROLL S",x=`
[Tap] Change angle
[Hold] Fire
`,T=[`
ll
ll
ll
ll
ll
ll
`,`
  ll
   ll
    ll
    ll
   ll 
  ll
`,`
  lll
   ll
  lll
 ll ll
ll  ll 
ll  ll
`,`




llllll
llllll
`,`



ll
llllll
llllll
`,`
ll
ll
ll
ll
ll
ll
`],b={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingParticleFront:!0,isDrawingScoreFront:!0,audioSeed:6};let e,a,n,s,p,c,t;const v=20;function m(){ticks||(e={pos:vec(v,50),angle:0,va:1,ticks:0,fireTicks:0},a=[],n=[],s=0,p=[],c=0,t=1);let i=0;const f=floor(e.angle)*PI/4,o=vec(e.pos.x,e.pos.y-9);let d=!1;input.isJustReleased&&(play("select"),e.angle+=e.va,(e.angle<-1||e.angle>1)&&(e.va*=-1,e.angle+=e.va*2),e.fireTicks=9/sqrt(difficulty)),input.isPressed?((e.angle===0||e.angle===4)&&(o.set(e.pos.x+(e.angle===0?6:-6),e.pos.y-3),d=!0),e.angle=floor(e.angle),e.fireTicks--,e.fireTicks<0&&(play("hit"),times(5,l=>{a.push({pos:vec(o),vel:vec(3*sqrt(difficulty)).rotate(f+l*.12-.24)})}),e.fireTicks=9/sqrt(difficulty))):(i=sqrt(difficulty)*.5,e.ticks+=sqrt(difficulty)),c+=i,c>t*100&&(play("coin"),t++),color("green"),rect(0,20,100,5),rect(0,50,100,5),rect(0,80,100,5),rect(0,80,100,5),color("light_black"),rect(0,25,100,25),rect(0,55,100,25),color("light_blue"),rect(0,85,100,15),color("light_green"),rect(wrap(-c+v,0,100),25,2,25),rect(wrap(-c+67,-10,110),55,2,25),color("black"),d?(char("d",o),color("blue"),char("e",e.pos.x,e.pos.y-3)):(char("a",o),color("blue"),char(addWithCharCode("b",floor(e.ticks/15)%2),e.pos.x,e.pos.y-3)),color("black"),bar(o,6,3,f,0),color("blue"),remove(a,l=>(l.pos.add(l.vel),l.pos.x-=i,bar(l.pos,3,3,l.vel.angle),!l.pos.isInRect(-3,-3,106,106)));const u=ceil(300/sqrt(difficulty)),g=ceil(36/sqrt(difficulty));s--,s<0&&(n.push({pos:vec(105,rndi(3)*30+20),vel:vec(rnd(1,difficulty)*-.2),angle:0,ticks:0,fireTicks:rndi(u)}),s=rnd(50,60)/difficulty),remove(n,l=>{const r=vec(l.pos.x,l.pos.y-9);l.fireTicks--,l.fireTicks<0?(-l.fireTicks%g===0&&(play("jump"),p.push({pos:r,vel:vec(sqrt(difficulty)).rotate(l.angle)})),-l.fireTicks>=g*3&&(l.fireTicks=u)):(l.angle=floor((l.pos.angleTo(e.pos)+PI/8)/(PI/4))*(PI/4),l.pos.add(l.vel),l.ticks-=l.vel.x*5),l.pos.x-=i,color("red");const y=char("f",r,{mirror:{x:-1}}).isColliding,k=char(addWithCharCode("b",floor(l.ticks/15)%2),l.pos.x,l.pos.y-3,{mirror:{x:-1}}).isColliding;return color(l.fireTicks<0?"red":"black"),bar(r,6,3,l.angle,0),y.rect.blue||k.rect.blue?(play("powerUp"),color("red"),addScore(t),particle(l.pos),!0):(y.char.a&&(play("explosion"),end()),!l.pos.isInRect(-5,-5,110,110))}),color("red"),remove(p,l=>{l.pos.add(l.vel),l.pos.x-=i;const r=bar(l.pos,3,3,l.vel.angle).isColliding.char;return(r.a||r.d)&&(play("explosion"),end()),!l.pos.isInRect(-5,-5,110,110)}),color("black"),text(`x${t}`,3,9)}export{T as characters,x as description,b as options,h as title,m as update};
