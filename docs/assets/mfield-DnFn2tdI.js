const y="M FIELD",k=`
[Tap] Jump / Double jump
[Hold] Speed up
`,v=[`
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
 l  l
ll  ll
`,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`],h={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let u,s,d,x,r,o,i,c,e;function C(){ticks||(u=[],s=0,d=3,x=[],r=[],o=0,i={pos:vec(80,87),vel:vec(),jumpCount:0},c=0,e=1);const t=i.pos.x>99?(i.pos.x-99)*.1*sqrt(difficulty):0;color("light_black"),rect(0,90,200,10),c=wrap(c-t,0,200),color("white"),rect(c,90,2,10),color("red"),remove(x,l=>(l.x-=t,l.ticks+=sqrt(difficulty),box(l.x,86,sin(l.ticks*.1)*50,8),l.ticks>PI/.1)),o-=t,o<0&&(rnd()<.7?r.push({x:203,vx:-rnd(1,2)*sqrt(difficulty)*.4}):r.push({x:-3,vx:rnd(1.5,2)*sqrt(difficulty)*.4}),o+=rnd(20,30)),color("purple"),remove(r,l=>(l.x+=l.vx-t,i.jumpCount===0&&(l.x<i.pos.x-20&&l.vx<0||l.x>i.pos.x+20&&l.vx>0)&&(l.vx*=-1),char(addWithCharCode("c",floor(ticks/20)%2),l.x,87,{mirror:{x:l.vx>0?1:-1}}).isColliding.rect.red?(play("powerUp"),addScore(e,l.x,87),particle(l.x,87),e<64&&(e*=2),!0):l.x<-9)),i.vel.x+=((input.isPressed?1:.3)*sqrt(difficulty)-i.vel.x)*.1,i.jumpCount>0&&(i.vel.y+=(input.isPressed?.05:.1)*difficulty,i.pos.y>87&&(i.pos.y=87,i.vel.y=0,i.jumpCount=0)),i.jumpCount<2&&input.isJustPressed&&(play("jump"),i.vel.y=-2*sqrt(difficulty),i.pos.y-=6,i.jumpCount++),i.pos.add(i.vel),i.pos.x-=t,color("black");const n=char(i.jumpCount>0||ticks%30>15?"a":"b",i.pos).isColliding;n.rect.red&&(play("lucky"),end()),(n.char.c||n.char.d)&&(i.vel.y>0?(play("jump"),i.vel.y*=-.8,i.pos.y=80):(play("explosion"),end())),s-=t,s<0&&(u.push({x:203,ticks:0,isBlinking:!1}),s=d>0||rnd()<.6?rnd(9,20):rnd(50,80),d--),remove(u,l=>{l.x-=t;let a=l.ticks>0?89:91;if(color("purple"),l.ticks>0){if(l.ticks+=sqrt(difficulty),l.ticks>59)return f(l.x),!0;l.ticks%30>15?(l.isBlinking||play("laser"),l.isBlinking=!0):(color("transparent"),l.isBlinking=!1)}const p=box(l.x,a,6,3).isColliding;return p.rect.red?(f(l.x),!0):(l.ticks===0&&(p.char.a||p.char.b)&&(play("hit"),e=1,l.ticks=1),l.x<-3)});function f(l){play("explosion"),x.push({x:l,ticks:0}),color("red"),particle(l,89,9,2,-PI/2,PI/2)}}export{v as characters,k as description,h as options,y as title,C as update};
