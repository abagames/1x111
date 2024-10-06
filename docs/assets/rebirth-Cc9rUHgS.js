const x="REBIRTH",y=`
[Tap] Jump / Land
`,v=[`
 ll
lll l
lll ll
lll ll
llllll
 l  l
`,`
   ll
  l
 lll
 l
l l
   l
`,`
  ll
l l
 llll
  l  
 l ll
l
`,`
  ll
l l l
 lll
  l
 l ll
l  
`,`
  ll
  l 
 lll
l l l
 l ll
ll  l
`,`
  ll
 l 
ll
l l 
 l l
  l l
`,`
 llll
ll  ll
l ll l
 llll
  ll
`],w={theme:"dark",viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,seed:2e3};let d,s,n,p,c,r,a,l,i;function h(){if(ticks||(d=[],s=0,n=0,p=[],c=60,r=1,a=1,l={pos:vec(110,57),ox:10,vel:vec(),world:1,state:"run"},i=1),color("black"),rect(100,60,100,40),color("light_black"),rect(0,0,100,60),s--,s<0){const e=n%2===0?1:-1;d.push({x:e>0?203:-3,vx:rnd(1,sqrt(difficulty))*(e>0?-1:1),world:e}),n++,s=rnd(50,60)/sqrt(difficulty)}remove(d,e=>(e.x+=e.vx,color(e.world>0?"black":"white"),char("a",e.x,57,{mirror:{x:e.world>0?-1:1}}),e.world>0?e.x<103:e.x>97)),l.pos.add(l.vel),l.vel.mul(.99),l.vel.x*=.8;let t;l.state==="run"?(l.pos.x+=(100+l.world*l.ox-l.pos.x)*.05,l.ox=clamp(l.ox+sqrt(difficulty)*.3,10,80),input.isJustPressed&&(play("jump"),l.state="jump",l.vel.y=-2*sqrt(difficulty)),t=addWithCharCode("b",floor(ticks/10)%2)):l.state==="jump"?(l.vel.y+=(input.isPressed?.07:.14)*difficulty,l.pos.y>57&&(l.pos.y=57,l.vel.y=0,l.state="run"),input.isJustPressed&&(play("laser"),l.state="land",l.vel.y=4*sqrt(difficulty)),t="d"):l.state==="land"&&(l.pos.y>57&&(l.pos.y=57,l.vel.y=0,l.state="run"),t="e"),abs(l.vel.x)>1&&(t="f");const f=l.pos.x<100?-1:1;color(f>0?"black":"white"),char(t,l.pos,{mirror:{x:f}}).isColliding.char.a&&abs(l.vel.x)<2&&(play("hit"),l.vel.x=(l.world>0?-1:1)*l.ox*.2*sqrt(difficulty),l.world=l.world>0?-1:1,l.ox=10,i>1&&i--),c--,c<0&&(a--,a<0&&(r=r>0?-1:1,a=rndi(4)),p.push({pos:vec(r>0?203:-3,rnd()<.5?57:rnd(40,50)),vx:rnd(1,sqrt(difficulty))*(r>0?-1:1)/3,world:r}),c=rnd(120,150)/sqrt(difficulty)),remove(p,e=>{e.pos.x+=e.vx,color("yellow");const o=char("g",e.pos,{mirror:{x:e.world>0?-1:1}}).isColliding.char;if(o.b||o.c||o.d||o.e||o.f)return play("coin"),addScore(i,e.pos),i++,!0;(e.world>0?e.pos.x<103:e.pos.x>97)&&(play("explosion"),color("red"),text("X",100,e.pos.y),end())})}export{v as characters,y as description,w as options,x as title,h as update};
