const m="ROLL HOLD",P=`
[Hold]
 Hold an angle
`,k=[`
 ll
lll
lllll
 bb
  cc
 bb
`,`
lll
rr
llrrlll
LLRRlll
rr
lll
`,`
lrl
llrrlll
LLRRlll
lrl
`,`
lrlLll
lrlLll
`],L={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingParticleFront:!0,isDrawingScoreFront:!0,audioSeed:50},a=vec(50,50),h=12;let r,n,d,t,u,i,s,x,v,p,f;function R(){ticks||(r=0,n=1,d=[],t=0,u=[],i={pos:vec(),vx:0},g(),s=0,x=[],v=[],p=0,f=0);const e=sqrt(difficulty);p--,p<=0&&(v.push({pos:vec(100,85),size:vec(rndi(10,20),-rndi(30,60))}),p=rndi(5,50)*10),remove(v,l=>(l.pos.x-=.1,color("light_black"),rect(l.pos,l.size),color("white"),rect(l.pos.x+1,l.pos.y,l.size.x-2,l.size.y+1),l.pos.x+l.size.x<0)),color("light_cyan"),rect(0,85,100,20),color("light_purple"),rect(0,70,100,9),rect(0,92,100,3),f+=e,input.isJustPressed&&(play("select"),n*=-1,t=0);const c=vec(h).rotate(r).add(a);color("light_cyan"),input.isPressed?(t-=e,t<0&&(play("laser"),d.push({pos:vec(c),angle:r}),t=9,particle(c,3,1,r,.5)),bar(c,4,1,r+(n>0?PI/2:-PI/2),-.5)):r=wrap(r+n*.07*e,-PI,PI),color("cyan"),remove(d,l=>(l.pos.addWithAngle(l.angle,e*2),bar(l.pos,3,2,l.angle),!l.pos.isInRect(-9,-9,120,120))),color("black"),char("a",a,{mirror:{x:r<-PI/2||r>PI/2?-1:1}}),color("blue"),bar(c,2,3,r),s-=e,s<0&&(u.push({pos:vec(i.pos),vx:i.vx,score:9,isFired:!1}),rnd()<.25?(g(),s=120/e):s=25/e),color("black"),remove(u,l=>{if(l.pos.x+=l.vx,!l.isFired&&(l.vx>0&&l.pos.x>90||l.vx<0&&l.pos.x<9)){play("click");const y=l.pos.angleTo(a);x.push({pos:vec(l.pos),vel:vec(e*.3).rotate(y)}),particle(l.pos,3,2,y,.2),l.isFired=!0}const o=char(addWithCharCode("b",[0,1,2,1][floor(f/20)%4]),l.pos,{mirror:{x:l.vx>0?1:-1}}).isColliding.rect;return o.cyan||o.blue?(play("powerUp",{seed:5}),addScore(o.blue?10:ceil(l.score),l.pos),particle(l.pos),!0):(l.score-=.033*e,l.pos.x<-5||l.pos.x>105)}),color("red"),remove(x,l=>{l.pos.add(l.vel);const o=box(l.pos,4).isColliding;if(o.rect.blue)return play("powerUp"),addScore(10,l.pos),particle(l.pos),!0;o.char.a&&(play("explosion"),end())})}function g(){const e=sqrt(difficulty)*(rndi(2)*2-1)*.4;i.pos.set(e>0?-3:103,rnd(9,90)),i.vx=e}export{k as characters,P as description,L as options,m as title,R as update};
