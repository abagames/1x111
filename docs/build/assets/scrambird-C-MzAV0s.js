const y="SCRAMBIRD",v=`
[Tap]
 Fly & Shoot
`,b=[`
 rr
 rr
yrry
yrry
y  y
y  y
`,`
 bbbb
bbbbbb
 bbbb
 r  r
r    r
`,`
pp 
 l ll
 rlrrl
 rllll
   lr


`,`

 l ll
 rlrrl
 rllll
 l lr
pp
`,`
l l
`],x={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let f,c,t,d,h,a,r,n,p,i,o;function g(){ticks||(f=times(11,l=>({x:l*10,height:10})),c=10,t=0,d=[],h=[],a=10,r={pos:vec(10,50),vy:0},n=[],p=[],i=50,o=1);const u=difficulty*.3,s=["purple","blue","green","red"][floor(ticks/420)%4];color(s),f.forEach(l=>{l.x-=u,l.x<-10&&(l.x+=110,c+=t,c<10&&t<0||c>50&&t>0?(t*=-1,c+=t):rnd()<.2?t=0:rnd()<.3&&(t=rnd()<.5?-10:10),l.height=c,a--,a<0?(h.push(vec(l.x+5,90-l.height-3)),a=rnd(1,16)):rnd()<.5&&d.push({pos:vec(l.x+5,90-l.height-3),launchTicks:rnd()<.5/sqrt(difficulty)?9999:rnd(200,300)/difficulty})),rect(l.x,90-l.height,9,l.height),rect(l.x,0,9,5)}),color("black"),input.isJustPressed&&(play(i>0?"laser":"hit"),r.vy-=difficulty*(i>0?.5:.1),n.push(vec(r.pos)),p.push({pos:vec(r.pos),vel:vec(2*sqrt(difficulty),0)})),r.vy+=.015*difficulty,r.vy*=.98,r.pos.y+=r.vy,char(addWithCharCode("c",r.vy<0?0:1),r.pos).isColliding.rect[s]&&(play("explosion"),end()),color("red"),particle(r.pos.x-2,r.pos.y,.5,.5,PI,PI/5),remove(n,l=>(l.x+=2*sqrt(difficulty),char("e",l).isColliding.rect[s]?!0:l.x>103)),color("cyan"),remove(p,l=>{if(l.vel.y+=.1*difficulty,l.vel.mul(.9),l.pos.add(l.vel),bar(l.pos,2,2,l.vel.angle).isColliding.rect[s])return!0}),remove(d,l=>{l.pos.x-=u,l.launchTicks--,l.launchTicks<0&&(l.pos.y-=difficulty*.5),color("black");const e=char("a",l.pos).isColliding;if(e.char.e||e.rect.cyan)return play("hit"),color("red"),particle(l.pos),addScore(o,l.pos),o++,!0;if((e.char.c||e.char.d)&&(play("explosion"),end()),l.pos.x<-3||l.pos.y<-3)return o>1&&o--,!0}),color("black"),remove(h,l=>{l.x-=u;const e=char("b",l).isColliding;return e.char.e||e.rect.cyan?(play("powerUp"),color("blue"),particle(l),i=clamp(i+10,0,50),!0):((e.char.c||e.char.d)&&(play("explosion"),end()),l.x<-3)}),color("transparent"),remove(n,l=>{const e=char("e",l).isColliding.char;return e.a||e.b}),remove(p,l=>{const e=bar(l.pos,2,2,l.vel.angle).isColliding.char;return e.a||e.b}),i=clamp(i-difficulty*.025,0,50),color("yellow"),text("FUEL",10,93),rect(40,90,i,6),color("blue"),rect(40+i,90,50-i,6)}export{b as characters,v as description,x as options,y as title,g as update};
