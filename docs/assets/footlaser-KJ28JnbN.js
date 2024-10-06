const d="FOOT LASER",f=`
[Tap] Jump / Double jump
      Descent
`,x=[`
llllll
ll l l
ll l l
llllll
 l  l
 l  l
  `,`
llllll
ll l l
ll l l
llllll
ll  ll
  `,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`,`
  lll
ll l l
 llll
 l  l
ll  ll
`,`
ll
 ll
 ll l
llllll


`,`

    l
llllll
 ll
 ll
ll
`],h={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:4},o=90,y=2;let l,n,e,p,u,r,a;function m(){ticks||(l={pos:vec(20,50),vy:0,jumpCount:9,isOnFloor:!1,multiplier:1,shots:[],nextShotTicks:0},n=[],e=0,p=rnd(300,400),u=rnd(200,300),r=0,a=0);const t=sqrt(difficulty);if(a+=t,color("light_black"),rect(r,o,210,9),rect(r+212,o,210,9),r-=t,r<-209&&(r+=212),l.isOnFloor||(l.vy+=(input.isPressed?.1:.3)*t,l.pos.y+=l.vy,l.pos.y>o&&(play("hit"),l.pos.y=o,l.isOnFloor=!0,l.jumpCount=0,l.multiplier=1),l.nextShotTicks--,l.nextShotTicks<0&&(l.shots.push(vec(l.pos.x+2,l.pos.y+9)),l.nextShotTicks+=rnd(4,9))),input.isJustPressed&&(l.jumpCount===y?(play("laser"),l.vy+=9*sqrt(t)):l.jumpCount<y&&(play("jump"),l.vy=-3*sqrt(t),l.isOnFloor=!1),l.jumpCount++),color("black"),char(addWithCharCode("a",floor(a/15)%2),l.pos.x+3,l.pos.y-3),l.isOnFloor||(color("light_blue"),rect(l.pos.x+2,l.pos.y,2,o-l.pos.y)),color("purple"),remove(l.shots,i=>{if(i.y>o)return particle(l.pos.x+3,o,3,3,-PI/2,PI/7),!0;rect(i,2,-9),i.y+=6}),e--,p--,u--,e<0){const i=-rnd(1,2)*t;n.push({pos:vec(200,o),vx:i,isFlying:!1}),e=rnd(30,60)/difficulty}if(p<0){const i=-rnd(1,2)*t,s=rndi(3,6);times(s,c=>{n.push({pos:vec(200,o-c*6),vx:i,isFlying:!1})}),p=rnd(100,600)/difficulty,e+=9/difficulty}if(u<0){const i=-rnd(1,2)*t,s=rndi(1,5),c=vec(206,rnd(50,80));times(s,()=>{n.push({pos:vec(c),vx:i,isFlying:!0}),c.x+=7}),u=rnd(100,400)/difficulty,e+=9/difficulty}color("red"),remove(n,i=>{i.pos.x+=i.vx;const s=char(addWithCharCode(i.isFlying?"e":"c",floor(a/20)%2),i.pos.x+3,i.pos.y-3,{mirror:{x:-1}}).isColliding;return s.rect.light_blue?(play("coin"),addScore(l.multiplier,i.pos.x+l.multiplier*2,i.pos.y),particle(i.pos.x+2,i.pos.y,3,2,-PI/2,PI),l.multiplier++,!0):((s.char.a||s.char.b)&&(play("explosion"),rewind()),i.pos.x<-6)})}export{x as characters,f as description,h as options,d as title,m as update};
