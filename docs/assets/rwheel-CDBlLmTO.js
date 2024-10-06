const v="R WHEEL",P=`
[Tap] 
 Multiple jumps
`,w=[`
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
 llll
  ll

 llll

llllll
`],k={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let h,t,u,e,d,y,p;const o=40,i=32;function I(){ticks||(h=times(i,()=>({height:0,isHit:!1})),t=0,u=[],e={y:0,vy:0},d=[],y=1,p=0);const s=sqrt(difficulty);if(input.isJustPressed&&(play("jump"),e.vy=-2*s,h.forEach(l=>{l.isHit=!1}),e.y===0&&(e.y+=e.vy,y=0,g())),e.y<0){const l=e.vy;e.vy+=(input.isPressed?1:3)*.03*difficulty,e.vy*=.98,e.y<-o*2+6&&e.vy<0&&(e.vy*=-.5),l*e.vy<=0&&(play("laser"),d.push({pos:vec(50,50+o+e.y),width:0,isSpike:!0})),e.y+=e.vy,e.y>0&&(e.y=e.vy=0)}color("black"),char(e.y>0?"a":addWithCharCode("a",floor(ticks/10)%2),50,50+o+e.y-3);const f=.03*s;color("yellow"),remove(u,l=>{const c=vec(50,50).addWithAngle(l.angle,l.radius);l.angle+=f;const n=char("c",c).isColliding.char;if(n.a||n.b)return play("coin"),d.push({pos:vec(50,50+o+e.y),width:0,isSpike:!1}),!0}),remove(d,l=>(l.isSpike?(l.width+=s,l.pos.y+=s*3,color("purple")):(l.width+=s*2,l.pos.y+=s*2,color("yellow")),box(l.pos,l.width,3),l.pos.y>103)),t+=f,color("black"),arc(50,50,o+3,3,t,t+PI*2);let r=t;p=0,h.forEach(l=>{color(l.height>0?"red":"transparent");const c=vec(50,50).addWithAngle(r,o*(1-l.height*.1)),n=vec(50,50).addWithAngle(r,o);.05+l.height*.1;let a=line(c,vec(n).addWithAngle(r-PI/2,50/i)).isColliding;a={...a,...line(c,vec(n).addWithAngle(r+PI/2,50/i)).isColliding},!l.isHit&&a.rect.purple&&(play("hit"),l.height++,l.isHit=!0),l.height>0&&(a.rect.yellow?(play("select"),y+=l.height,addScore(y,c),l.height=0):(a.char.a||a.char.b)&&(play("explosion"),end())),r+=PI*2/i,l.height>0&&p++}),p===0&&(h[wrap(floor((-t-PI/4)/(PI*2/i)),0,i)].height=1,h[wrap(floor((-t-PI/4*3)/(PI*2/i)),0,i)].height=1,g());function g(){times(ceil(p/9),()=>{u.push({angle:-PI/3*2+rnds(PI/4*3),radius:rnd(10,30)})})}}export{w as characters,P as description,k as options,v as title,I as update};
