const u="UNCTRL",f=`
[Tap]  Fire
[Hold] Go up
`,y=[`
l ll ll
 lll
l  lll
l  lll
 lll
l ll ll
`,`
 ll ll
 lll
l  lll
l  lll
 lll
 ll ll
`,`
ll ll l
 lll
l  lll
l  lll
 lll
ll ll l
`],h={theme:"crt",viewSize:{x:150,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let o,s,t,e,c,i,a;const p=vec(10,50),n=vec(8,50);function v(){ticks||(o=[],t=[],s=0,e={pos:vec(),vel:vec(),state:"ready"},c=0,r(),a=times(20,()=>vec(rnd(150),rnd(100)))),color("light_purple"),a.forEach(l=>{box(l,5,2),l.x=wrap(l.x-.1*sqrt(difficulty),-3,153)}),color(e.state==="ready"?"light_blue":"blue"),e.state==="ready"?input.isJustPressed&&(play("select"),e.state="fired"):(input.isJustPressed&&play("hit"),input.isJustReleased&&play("laser"),e.vel.y+=input.isPressed?-.1:.1,e.pos.add(e.vel),particle(e.pos,1,1,e.vel.angle+PI,1),e.pos.isInRect(0,0,150,100)||r()),bar(e.pos,6,4,e.vel.angle,-.5),o.length===0&&(s=0),s--,s<0&&(o.push({pos:vec(153,rnds(20,40)+50),bulletAngle:rnds(PI*.3)+PI,fireTicks:rnd(60),animTicks:0}),s=200/sqrt(difficulty)),remove(o,l=>(l.animTicks+=sqrt(difficulty)*(l.pos.x<70?4:1),l.pos.x-=sqrt(difficulty)*(l.pos.x<70?.4:.1),color("red"),char(addWithCharCode("a",floor(l.animTicks/20)%3),l.pos,{mirror:{x:-1}}).isColliding.rect.blue?(play("powerUp"),particle(l.pos,19,3),addScore(i*10,l.pos),r(),!0):(l.fireTicks-=difficulty,l.pos.x>70&&(l.fireTicks<0?(t.push({pos:vec(l.pos.x-3,l.pos.y),vel:vec().addWithAngle(l.bulletAngle,.3*difficulty)}),l.fireTicks=60,l.bulletAngle=rnds(PI*.3)+PI):(color("light_red"),bar(l.pos.x-3,l.pos.y,4,2,l.bulletAngle,-.5))),l.pos.x<-3))),color("red"),remove(t,l=>(l.pos.add(l.vel),bar(l.pos,4,2,l.vel.angle,-.5).isColliding.rect.blue?(play("coin"),addScore(i,l.pos),particle(l.pos,9),i<64&&(i*=2),!0):!l.pos.isInRect(0,0,150,100))),color("blue"),c+=difficulty,char(addWithCharCode("a",floor(c/20)%3),p).isColliding.rect.red&&(play("explosion"),end());function r(){e.pos.set(n),e.vel.set(.5,.2),e.state="ready",i=1}}export{y as characters,f as description,h as options,u as title,v as update};
