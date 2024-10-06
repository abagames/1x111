const I="EAROCK",b=`
[Hold] Thrust
[Tap]  Turn
`,v=[`
  ll
  ll
llllll
 llll
ll  ll
l    l
`],T={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let l,o,t,s,d,u,p,h;function x(){ticks||(l=vec(50,20),o=vec(.1,0),t=0,s=[],d=0,u=!0,p=1,h=times(36,()=>({pos:vec(rnd(99),rnd(99))})));const r=vec(50,50),i=15,c=sqrt(difficulty);if(color("light_black"),h.forEach(e=>{box(e.pos,1,1)}),color("blue"),arc(r,i-5,10),color("green"),arc(r.x+5,r.y-3,i*.2,i*.5),arc(r.x-7,r.y+4,i*.3,i*.5),color("red"),input.isJustPressed&&(play("hit"),o.mul(.5),o.addWithAngle(t,c*.1),particle(l,9,2,t+PI,.2)),input.isPressed?(o.addWithAngle(t,c*.01),particle(l,1,1,t+PI,.2)):t=g(t,r,.01),input.isJustReleased&&(t=g(t,r,.2),particle(l,5,1,r.angleTo(l),.2)),o.mul(.98),l.add(o.x*c,o.y*c),l.x<0&&n(0),l.x>99&&n(PI),l.y<0&&n(PI/2),l.y>99&&n(-PI/2),l.distanceTo(r)<i*1.1&&(play("select"),n(r.angleTo(l))),color("red"),bar(l,3,3,t-.2,1.4),bar(l,3,3,t+.2,1.4),color("black"),bar(l,5,3,t),d--,d<0){const e={pos:vec(r).addWithAngle(u?rnd(PI):rnd(PI*2),u?50:70),vel:vec()};u=!1,e.vel.addWithAngle(e.pos.angleTo(r)+rnds(1),.1+rnd(difficulty-1)*.1),s.push(e),d+=300/difficulty}color("yellow"),s=s.filter(e=>(e.pos.add(e.vel),e.vel.mul(1-.01/c),e.vel.addWithAngle(e.pos.angleTo(r),2e-4*c),char("a",e.pos).isColliding.rect.black?(play("coin"),addScore(p,e.pos),p++,!1):(e.pos.isInRect(-3,-3,103,103)||e.pos.add(e.vel.x*9,e.vel.y*9),e.pos.isInRect(-50,-50,150,150)?(e.pos.distanceTo(r)<i&&(play("explosion"),color("red"),text("X",e.pos),color("yellow"),end()),!0):!1))),s.length===0&&(d=0),color("black"),text(`+${p}`,3,95);function g(e,f,a){let y=l.angleTo(f),P=wrap(e-y,-PI,PI);return abs(P)<a?y:P>0?e-a:e+a}function n(e){const f=wrap(t+PI-e,-PI,PI);abs(f)<PI/2&&(t=t+PI-f*2);const a=o.length;o.set(0,0).addWithAngle(t,a/2),p=1}}export{v as characters,b as description,T as options,I as title,x as update};
