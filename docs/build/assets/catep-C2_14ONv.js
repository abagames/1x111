const v="CATE P",y=`
[Tap]
 Turn & Shot
`,m=[`
 llll
llllll
lllrrr
lllrrr
llllll
 llll
`,`
 llll
llllll
lll
lll
llllll
 llll
`,`
l ll
    l
lllll
    l
l ll
`],x={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let o,e,i,p,t,s;const c=[vec(1,0),vec(.7,.7),vec(0,1),vec(-.7,.7),vec(-1,0),vec(-.7,-.7),vec(0,-1),vec(.7,-.7)];function b(){if(ticks||(o=[],p=0,i=void 0,t={pos:vec(50,50),angle:0},s=void 0),color("light_blue"),rect(0,0,99,6),rect(0,93,99,6),rect(0,6,6,87),rect(93,6,6,87),(ticks&&input.isJustPressed||!t.pos.isInRect(9,9,82,82))&&(s==null&&input.isJustPressed&&(play("powerUp"),s={pos:vec(t.pos),angle:t.angle,multiplier:1}),t.pos.clamp(9,90,9,90),t.angle=wrap(t.angle+2,0,8)),t.pos.add(vec(c[t.angle]).mul(difficulty*.2)),color("black"),char(s==null?"a":"b",t.pos,{rotation:t.angle/2}),s!=null&&(s.pos.isInRect(9,9,82,82)?(s.pos.add(vec(c[s.angle]).mul(difficulty*1.5)),char("c",s.pos,{rotation:s.angle/2})):s=void 0),p<=0&&(e={pos:vec(rnd(9,90),rnd()<.5?-3:103),angle:0,speed:rnd(1,difficulty)*.2,ticks:rnd(999),count:rndi(5,9)},rnd()<.5&&e.pos.swapXy(),e.angle=e.pos.x>99?4:e.pos.y>99?6:e.pos.x<0?0:2,p=rnd(60,90)/difficulty),e.ticks+=e.speed,e.count<=0&&p--,i!=null&&i.pos.isInRect(3,3,94,94)&&(i=void 0),e.count>0&&i==null){play("laser");const l={pos:vec(e.pos),angle:e.angle,speed:e.speed,ticks:e.ticks,isAppearing:!0};o.push(l),i=l,e.count--}o=o.filter(l=>{const d=c[l.angle];if(l.pos.add(d.x*l.speed,d.y*l.speed),l.isAppearing)l.isAppearing=!l.pos.isInRect(9,9,81,81);else{let n=0;(l.pos.x<9||l.pos.x>90)&&n++,(l.pos.y<9||l.pos.y>90)&&n++,n===1?(l.angle=wrap(l.angle+3,0,8),l.pos.clamp(9,90,9,90)):n===2&&(l.angle=wrap(l.angle+4,0,8),l.pos.clamp(9,90,9,90))}l.ticks+=l.speed;let a=wrap(l.ticks,0,8);const g=a<4?5*a/5-2:5*(8-a)/5-2,u=vec(3,0).rotate(l.angle*PI/4+PI/2),f=vec(g,0).rotate(l.angle*PI/4);color("red"),box(vec(l.pos).add(u).add(f),2,2),box(vec(l.pos).sub(u).sub(f),2,2),color("green");const r=box(l.pos,5,5).isColliding.char;return r.c?(play("coin"),addScore(s.multiplier,l.pos),particle(l.pos,9,sqrt(s.multiplier)),s.multiplier++,l===i&&(i=void 0),!1):((r.a||r.b)&&(play("explosion"),end()),!0)})}export{m as characters,y as description,x as options,v as title,b as update};
