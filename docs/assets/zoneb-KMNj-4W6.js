const R="ZONE B",m=`
[Tap]  Turn
[Hold] Shot
`,C=[`
l
ll
ll
l
`,`
llll
`,`
lll
`,`
lll
`],w={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let f,v,p,e,d,u,r,n,i,o,t,g;const h=[[1,0],[0,1],[-1,0],[0,-1]],x=30;function b(){if(ticks||(d=floor((difficulty-1)*2),u=!0,r=0),u&&(t=99,o={pos:vec(50,50),radius:120},i={pos:vec(50,50),radius:60},n={pos:vec(),radius:0},f=times(9+d*7,()=>({pos:vec(rnd(99),rnd(99)),angle:rndi(4),speed:0,shotTicks:rnd(50,150),burstTicks:0,burstCount:0,turnTicks:0,isReflecting:!1})),v=times(19,()=>({pos:vec(rnd(9,89),rnd(9,89)),width:rnd(5,15),angle:rndi(2)})),p=[],e={pos:vec(50,80),angle:3,speed:0,isReflecting:!1,shotTicks:0},d++,u=!1,g=1),t--,t===9){n.radius=i.radius-10,n.pos.set(i.pos);for(let s=0;s<99&&(n.pos.set(rnd(10,90),rnd(10,90)),!(n.pos.distanceTo(i.pos)<i.radius-n.radius));s++);}t<0&&(t=600),t<9&&(i.pos.add((n.pos.x-i.pos.x)/(t+1),(n.pos.y-i.pos.y)/(t+1)),i.radius+=(n.radius-i.radius)/(t+1)),i.radius<60&&(color("light_black"),arc(i.pos,i.radius,2),t>9&&(o.pos.add((i.pos.x-o.pos.x)/t,(i.pos.y-o.pos.y)/t),o.radius+=(i.radius-o.radius)/t),color("blue"),arc(o.pos,o.radius,3)),color("yellow"),remove(v,s=>{let l;return s.angle===0?l=box(s.pos,s.width,2):l=box(s.pos,2,s.width),l.isColliding.rect.blue}),remove(p,s=>{const l=h[s.angle];s.pos.add(l[0],l[1]);const c=s.side==="player"||s.pos.distanceTo(e.pos)<x;return color(c?s.side==="enemy"?"purple":"cyan":"transparent"),char(s.side==="enemy"?"c":"d",s.pos,{rotation:s.angle}).isColliding.rect.yellow||!s.pos.isInRect(0,0,99,99)?!0:(s.range--,s.range<0)}),remove(f,s=>{const l=h[s.angle];s.pos.add(l[0]*s.speed,l[1]*s.speed);const c=s.pos.distanceTo(e.pos)<x;c&&(color("black"),char("b",s.pos.x+l[0]*2,s.pos.y+l[1]*2,{rotation:s.angle})),color(c?"red":"transparent");const k=char("a",s.pos,{rotation:s.angle}).isColliding;if(k.char.d)return play("explosion"),addScore(g,s.pos),g++,!0;k.rect.yellow||!s.pos.isInRect(0,0,99,99)?s.isReflecting||(s.angle+=2,s.isReflecting=!0):s.isReflecting=!1,s.shotTicks>7&&s.turnTicks--,s.turnTicks<0&&(s.angle++,s.turnTicks=rnd(200,300)),s.angle=wrap(s.angle,0,4),s.shotTicks--,s.shotTicks<0&&(s.burstCount--,s.burstCount<0?(s.shotTicks=rnd(100,200),s.burstCount=rndi(3,7)):(p.push({pos:vec(s.pos.x+l[0]*5,s.pos.y+l[1]*5),angle:s.angle,range:20,side:"enemy"}),s.shotTicks+=7)),s.speed+=((s.shotTicks<7?0:.2)-s.speed)*.1,T(s),s.pos.clamp(0,99,0,99)});const a=h[e.angle];e.speed+=((input.isPressed?0:.2)-e.speed)*.1,input.isJustReleased&&e.speed>.04&&(play("laser"),e.angle=wrap(e.angle+1,0,4)),e.shotTicks--,input.isPressed&&e.speed<.04&&e.shotTicks<0&&(play("hit"),p.push({pos:vec(e.pos.x+a[0]*5,e.pos.y+a[1]*5),angle:e.angle,range:20,side:"player"}),e.shotTicks=7),e.pos.add(a[0]*e.speed,a[1]*e.speed),T(e),color("black"),char("b",e.pos.x+a[0]*2,e.pos.y+a[1]*2,{rotation:e.angle}),color("blue");const y=char("a",e.pos,{rotation:e.angle}).isColliding;(y.char.c||o.radius<1||e.pos.distanceTo(o.pos)>o.radius*1.05)&&(play("explosion"),end()),e.pos.clamp(0,99,0,99),y.rect.yellow||!e.pos.isInRect(0,0,99,99)?e.isReflecting||(e.angle+=2,e.isReflecting=!0):e.isReflecting=!1,e.angle=wrap(e.angle,0,4),r<=-60&&f.length===0&&(play("powerUp"),r=60),r>0?(color("black"),text("WINNER!",30,50),r--,r===0&&(u=!0)):r>-60&&(color("black"),text(`LEVEL ${d}`,30,50),r--);function T(s){if(s.pos.distanceTo(o.pos)<o.radius)return;const l=s.pos.angleTo(o.pos);l<-PI/4*3||l>PI/4*3?s.angle=2:l>PI/4?s.angle=1:l<-PI/4?s.angle=3:s.angle=0}}export{C as characters,m as description,w as options,R as title,b as update};
