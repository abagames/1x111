const v="ACCEL B",y=`
[Tap]  Fire
[Hold] Accel
`,x=[`
ll
 lllll
`,`
   lll
 lllll
llllll
   ll
`],g={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:40};let e,i,r,p,a,n,f,o;function T(){ticks||(e={pos:vec(20,45),vx:0},i=[],r=[],p=0,a=[],n=[],f=times(7,s=>({pos:vec(-99-s*40,0),size:vec()})),o=1);const l=(e.pos.x-20)*.1;color("yellow"),rect(0,90,200,10),color("green"),f.forEach(s=>{box(s.pos,s.size),s.pos.x-=l,s.pos.x<-99&&(s.pos.x+=300+rnd(99),s.pos.y=rnd(90,99),s.size.set(rnd(30,50),rnd(5,9)))}),remove(n,s=>(s.pos.add(s.vel),s.pos.x-=l,s.vel.mul(.95),color(s.isEnemy&&s.ticks<20?"light_red":"light_black"),box(s.pos,3+cos(s.ticks*.03)*5),s.ticks+=sqrt(difficulty),s.ticks>60)),e.vx+=((input.isPressed?2:.2)*sqrt(difficulty)-e.vx)*.2,e.pos.x+=e.vx-l,color("blue"),char("a",e.pos),color("purple"),rect(e.pos.x-3,e.pos.y,-e.vx*3,1),i.length===0&&(color("cyan"),box(e.pos.x,e.pos.y+3,5,2),input.isJustPressed&&(play("select"),o=1,r.forEach(s=>{i.push({pos:vec(e.pos.x,e.pos.y+3),vel:vec(sqrt(difficulty)*2),target:s.pos,ticks:0,exTicks:0,smokeTicks:0})}),a.forEach(s=>{i.push({pos:vec(e.pos.x,e.pos.y+3),vel:vec(sqrt(difficulty)*2),target:s.pos,ticks:0,exTicks:0,smokeTicks:0})})));let u=i.length;remove(i,s=>{if(s.pos.add(s.vel),s.pos.x+=sqrt(difficulty)-l,s.exTicks>0)return s.pos.y>90&&s.vel.set(),s.exTicks+=sqrt(difficulty),s.vel.mul(.9),color("red"),box(s.pos,3+cos(s.exTicks*.05)*9),s.exTicks>30;const t=s.pos.distanceTo(s.target);if(t<9||s.pos.y>95||s.ticks>120){play("powerUp"),s.exTicks=1;const c=s.vel.length;s.vel.set().addWithAngle(s.pos.angleTo(s.target),c)}const d=sqrt(difficulty)/sqrt(t+9)*(s.ticks<9?.1:s.ticks<20?3:1);s.vel.addWithAngle(s.pos.angleTo(s.target),d),s.vel.mul(s.ticks<20?.7:.95),s.ticks+=sqrt(difficulty),color("cyan"),bar(s.pos,3,2,s.vel.angle),s.smokeTicks+=sqrt(difficulty),s.smokeTicks>5&&(n.push({pos:vec(s.pos),vel:vec(s.vel).mul(.5),ticks:0,isEnemy:!1}),s.smokeTicks-=5)}),u>0&&i.length===0&&play("coin"),p-=l,p<0&&(r.push({pos:vec(203,rnd()<.5?rnd(5,35):rnd(55,85)),vx:rnd(sqrt(difficulty))*.5,ma:PI+rnds(.2,PI/5),fireTicks:ceil(rnd(10,30)/sqrt(difficulty))}),p+=rnd(40,60)/difficulty),remove(r,s=>(s.pos.x-=s.vx+l,s.fireTicks--,s.fireTicks===0&&(play("laser"),a.push({pos:vec(s.pos.x,s.pos.y+3),angle:s.ma,va:0,speed:sqrt(difficulty),smokeTicks:0})),color("purple"),char("b",s.pos).isColliding.rect.red?(play("explosion"),particle(s.pos,15,2),addScore(o,s.pos),o<64&&(o*=2),!0):(s.fireTicks>0&&(color("black"),bar(s.pos.x,s.pos.y+3,3,3,s.ma)),s.pos.x<-3)));const k=sqrt(difficulty)*5e-4;remove(a,s=>{s.pos.addWithAngle(s.angle,s.speed),s.pos.x-=l;const t=s.pos.angleTo(e.pos),d=wrap(t-s.angle,-PI,PI);s.va+=(d>0?1:-1)*k,s.angle=clamp(wrap(s.angle+s.va,0,PI*2),PI/4*3,PI/4*5),color("black");const c=bar(s.pos,3,3,s.angle).isColliding;return s.smokeTicks+=sqrt(difficulty),s.smokeTicks>9&&(n.push({pos:vec(s.pos),vel:vec().addWithAngle(s.angle,s.speed*.3),ticks:0,isEnemy:!0}),s.smokeTicks-=9),color("red"),c.rect.red?(play("hit"),particle(s.pos,9,2),addScore(o,s.pos),o<64&&(o*=2),!0):(c.char.a&&(play("explosion"),end()),s.pos.y>90?(particle(s.pos),!0):s.pos.x<-3)})}export{x as characters,y as description,g as options,v as title,T as update};