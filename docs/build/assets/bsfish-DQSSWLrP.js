const h="BS FISH",v=`
[Hold] Speed up
`,k=[`
  rrr 
rrbrrr
 rrr r
`,`
 ll
  ll
llllly

`,`

llllly
  ll
 ll
`],g={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:10};let o,p,c,i,r,n,l;function m(){ticks||(o={pos:vec(20,20),vx:1,ticks:0},p=[],c=0,i=3,r=0,n=0,l=1),input.isJustPressed&&play("select");const y=o.pos.x>30?(o.pos.x-30)*.1*sqrt(difficulty):0;if(o.vx+=((input.isPressed?3*sqrt(difficulty):.1)-o.vx)*.2,o.ticks+=o.vx,o.pos.x+=o.vx-y,color("black"),char(addWithCharCode("b",floor(o.ticks/10)%2),o.pos),c--,c<0){const e=vec(rnd(130,220),120),t=vec(-rnd(1,1.5)*.5*sqrt(difficulty),-2.5*sqrt(difficulty));let s="normal";i--,i<0&&(r===0?(s=rnd()<.5?"fake":"big",i=rnd(2,4),r+=s==="big"?1:2):r===1?(s="fake",i=rnd(2,4),r++):(s=rnd()<.5?"fake":"big",i=rnd(3,9),r++)),s==="big"&&(rnd()<.7?(t.y*=1.125,t.x*=.9):(t.y*=.97,t.x*=1.5)),p.push({pos:e,vel:t,type:s}),c=rnd(40,60)/difficulty}remove(p,e=>{const t=vec(e.pos);e.vel.y+=.03*difficulty,e.pos.add(e.vel),e.pos.x-=y,color("black");const s=e.type==="big"||e.type==="fake"?6:1,a=50+2*s;if(e.pos.y>a)color("blue");else{if(e.type==="fake"){const d=[2,1];return[[2,0],[3,0],[4,0],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[5,2]].forEach(x=>{const u=x[0],b=x[1];p.push({pos:vec(e.pos.x+u*6-15,e.pos.y+b*6-6),vel:vec(e.vel),type:u==d[0]&&b===d[1]?"eye":"normal"})}),!0}e.type==="big"&&(color("white"),line(e.pos.x,e.pos.y-3,e.pos.x-10,e.pos.y),line(e.pos.x,e.pos.y-5,e.pos.x+16,e.pos.y),line(e.pos.x,e.pos.y+5,e.pos.x-16,e.pos.y),line(e.pos.x,e.pos.y+5,e.pos.x+16,e.pos.y)),color(e.type==="eye"?"blue":"black")}if(char("a",e.pos,{scale:{x:s,y:s}}),e.type!=="big"&&e.pos.distanceTo(o.pos)<6)return addScore(l,e.pos),e.type==="normal"?(play("coin"),l++):(play("powerUp"),l+=10),!0;if(e.pos.x<-18||e.pos.y>120)return e.type!=="big"&&l>1&&l--,!0;(t.y-a)*(e.pos.y-a)<0&&play("hit")}),color("transparent"),char(addWithCharCode("b",floor(o.ticks/10)%2),o.pos).isColliding.rect.white&&(play("explosion"),end()),n=wrap(n-y,-10,210),color("blue"),rect(0,50,200,2),color("cyan"),times(5,e=>{rect(wrap(n+220/5*e,-10,210),50,9,2)}),color("black"),text(`x${l}`,3,9)}export{k as characters,v as description,g as options,h as title,m as update};
