const p="BALL TOUR",a=`
[Hold]
 Move forward
`,d=[`
llllll
l l ll
l l ll
llllll
 l  l
 l  l
  `,`
llllll
l l ll
l l ll
llllll
ll  ll
  `,`
 lll
ll ll
l lll
lllll
 lll
 ll
`],y={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let l,s,i,c,o,t;function f(){ticks||(l={pos:vec(90,50),yAngle:0,vx:0,ticks:0},s=[],i=0,c=[],o=9,t=1),color("blue"),rect(0,90,99,9),i-=l.vx,i<0&&(s.push({pos:vec(-3,rnd(10,80)),vy:rnd()<.2?rnds(1,difficulty)*.3:0}),i+=rnd(9,49)),color("black"),remove(s,e=>(e.pos.x+=l.vx,e.pos.y+=e.vy,(e.pos.y<10||e.pos.y>80)&&(e.vy*=-1),text("*",e.pos).isColliding.char.d?!0:e.pos.x>103));const n=l.pos.y;if(l.yAngle+=difficulty*.05,l.pos.y=sin(l.yAngle)*30+50,l.ticks+=clamp((n-l.pos.y)*9+1,0,9),input.isJustPressed&&play("hit"),l.vx=(input.isPressed?1:.1)*difficulty,char(addWithCharCode("a",floor(l.ticks/50)%2),l.pos),color("red"),char("c",l.pos.x,l.pos.y-6).isColliding.text["*"]&&(play("explosion"),end()),o-=l.vx,o<0){const e=vec(-3,rnd(20,70));color("transparent"),char("c",e).isColliding.text["*"]?o+=9:(c.push(e),o+=rnd(25,64))}color("green"),remove(c,e=>{e.x+=l.vx;const r=char("c",e).isColliding.char;return r.a||r.b||r.c?(addScore(floor(t),l.pos),t+=10,play("select"),!0):e.x>103}),t=clamp(t-.02*difficulty,1,999),color("black"),text(`x${floor(t)}`,3,9)}export{d as characters,a as description,y as options,p as title,f as update};
