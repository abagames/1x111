const n="D PISTOLS",d=`
[Tap] Turn & Fire
[Hold] Cross Fire
`,y=[`
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
`],f={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let e,i,t,r,o,p,a,s;function m(){if(ticks||(e={pos:vec(50,20),my:1},i=0,t=[],r=[],o=0,p=50,a=1,s=0),input.isJustPressed&&(play("laser"),e.my*=-1,times(2,l=>{t.push({pos:vec(e.pos.x,e.pos.y+e.my),angle:l*PI})}),s=clamp(s-1,0,99)),input.isPressed?(i+=difficulty,i>30&&(play("select"),times(4,l=>{t.push({pos:vec(e.pos),angle:l*PI/2})}),i=0,s=clamp(s-5,1,99))):i=0,e.pos.y+=e.my*difficulty*(1-i/30),(e.pos.y<0&&e.my<0||e.pos.y>99&&e.my>0)&&(e.my*=-1),color("black"),char(addWithCharCode("a",floor(ticks/15)%2),e.pos,{mirror:{x:e.my}}),remove(t,l=>(l.pos.addWithAngle(l.angle,difficulty*2),bar(l.pos,1,6,l.angle),!l.pos.isInRect(-3,-3,106,106))),r.length===0&&(o=0),o--,o<0){rnd()<.3&&(p=rnd(9,90),a*=-1);const l=vec(a,0);l.x*=rnd(1,difficulty)*.3,r.push({pos:vec(l.x>0?-3:103,p),vel:l,ticks:0}),o=rnd(20,40)/difficulty}color("red"),remove(r,l=>{l.pos.add(l.vel),(l.pos.x>50&&l.vel.x>.1||l.pos.x<50&&l.vel.x<-.1)&&(l.pos.x=50,l.vel.y=e.pos.y<l.pos.y?-abs(l.vel.x):abs(l.vel.x),l.vel.x*=1e-4),l.ticks++;const c=char(addWithCharCode("c",floor(l.ticks/15)%2),l.pos,{mirror:{x:l.vel.x<0?-1:1}}).isColliding;if(c.rect.black)return play("hit"),s=clamp(s+1,0,99),addScore(s,l.pos),particle(l.pos),!0;(c.char.a||c.char.b)&&(play("explosion"),end())})}export{y as characters,d as description,f as options,n as title,m as update};
