const x="FLOORS 5",m=`
[Tap]  Jump / Double Jump
[Hold] Fly
`,v=[`



 l  l
l ll l
 l  l
`,`
 lll
l l ll
llllll
l ll l


`,`
 llll
llllll
llllll
llllll
llllll
 llll
`,`
 llll
l    l
l    l
l    l
l    l
 llll
`],b={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let s;const i=["red","green","blue","yellow","purple"];let l,r,t;function h(){ticks||(s=times(5,o=>({pos:vec([25,52,105,160,220][o],[30,50,70,60,40][o]),width:[10,35,30,30,50][o],index:o,paintFrom:0,paintTo:0})),l={pos:vec(10,10),vel:vec(1,0),floor:void 0,by:0,bvy:0,fallTicks:-99,jumpCount:0},r=times(5,()=>!1),t=1),s.forEach((o,e)=>{o.pos.x+o.width<0&&(o.pos.set(rnd(200,250),rnd(30,90)),o.width=rnd(20,60),o.paintFrom=o.paintTo=0),color(i[e]),o.pos.x-=l.vel.x,rect(o.pos,o.width,6),color("white"),rect(o.pos.x+1,o.pos.y+1,o.width-2,4),color(i[e]),rect(o.pos.x+o.paintFrom,o.pos.y+1,o.paintTo-o.paintFrom,4)}),l.vel.x+=difficulty*.02,l.floor==null&&(l.vel.y+=input.isPressed?.03:.18),l.pos.y+=l.vel.y,l.bvy-=l.by*.1,l.by+=l.bvy,l.by*=.9,l.fallTicks--,color("black");const u=char("a",l.pos.x,clamp(l.pos.y,0,999)).isColliding.rect,d=char("b",l.pos.x,l.pos.y+l.by).isColliding.rect;l.floor==null?(i.forEach((o,e)=>{(u[o]||d[o])&&(l.vel.y>=0?(play("select"),l.floor=s[e],l.pos.y=l.floor.pos.y-3,l.vel.y=0,l.vel.x=sqrt(difficulty),l.floor.paintFrom=clamp(l.pos.x-5-l.floor.pos.x,0,999),l.jumpCount=0,r[e]=!0):(play("hit"),l.pos.y=s[e].pos.y+9-l.by,l.vel.y*=-.7))}),l.floor==null&&(l.fallTicks>-9||l.jumpCount<2)&&input.isJustPressed&&(play("jump"),l.vel.y=-2,l.vel.x=sqrt(difficulty),l.bvy=-2,l.jumpCount++)):input.isJustPressed?(play("jump"),n(l.floor),l.floor.pos.x=-999,l.floor=void 0,l.vel.y=-2,l.vel.x=sqrt(difficulty),l.bvy=-2,l.jumpCount++):l.floor.pos.x+l.floor.width<l.pos.x-3?(n(l.floor),l.floor.pos.x=-999,l.floor=void 0,l.vel.x=sqrt(difficulty),l.fallTicks=0,l.jumpCount=0):l.floor.paintTo=clamp(l.pos.x+5-l.floor.pos.x,0,l.floor.width);let p=!0;r.forEach((o,e)=>{color(i[e]),char(o?"c":"d",e*7+3,96),p=o&&p}),p&&(play("coin"),t++,r=times(5,()=>!1)),t>1&&(color("black"),text(`x${t}`,45,96)),l.pos.y>99&&(play("explosion"),end());function n(o){play("powerUp");const e=o.paintTo-o.paintFrom,c=e>=o.width?3:1;let a=o.pos.y-(c>1?7:0);const f=clamp(floor(e)*t,0,999);for(let y=0;y<c;y++)addScore(f,o.pos.x+o.width+15,a),a+=7}}export{v as characters,m as description,b as options,x as title,h as update};
