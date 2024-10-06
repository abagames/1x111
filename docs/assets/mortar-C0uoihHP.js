const h="MORTAR",x=`
[Hold] Adjust distance
[Release] Fire
`,g=[`
  ll
  ll
  ll
l ll l
llllll
ll  ll
`,`
llllll
 l  l
 l  l
llllll
  ll
  ll
`],v={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let o,d,c,l,e,i,t,n,p,r,y;function Y(){if(ticks||(o=times(5,()=>({pos:vec(rnd(49,60),rnd(-149,-140)),vy:.1})),d=0,c=0,l={pos:vec(30,95),vx:1,sightY:void 0},e={pos:vec(),width:void 0},i={pos:vec(),targetRadius:void 0,radius:void 0},t=0,n=0,p=1,r=3,y=times(99,()=>vec(rnd(99),rnd(-300,100)))),color("light_black"),y.forEach(s=>{box(s.x,s.y+t,3,1)}),i.radius!=null)color("red"),i.radius+=(i.targetRadius-i.radius)*.1,arc(i.pos.x,i.pos.y+t,i.radius,5),i.targetRadius-i.radius<1&&(i.radius=void 0);else if(l.sightY!=null){l.sightY-=sqrt(difficulty)*2*r;let s=0;l.sightY<0&&(t+=(90-l.sightY-t)*(.05*sqrt(difficulty)*r),s=clamp(-l.sightY*.3,0,30)),s+=2,color("black"),arc(l.pos.x,l.sightY+t,s,2),(input.isJustReleased||l.sightY<-200)&&(s===2?e.width==null&&(play("laser"),e.pos.set(l.pos),e.width=ceil((91-l.sightY)*.2)):(play("explosion"),i.targetRadius=s,i.radius=0,i.pos.set(l.pos.x,l.sightY)),l.sightY=void 0,r>1&&r--)}else t*=.8,l.pos.x+=l.vx*difficulty,(l.pos.x<3&&l.vx<0||l.pos.x>96&&l.vx>0)&&(l.vx*=-1),input.isJustPressed&&(play("select"),l.sightY=90,p=1);if(e.width!=null&&(e.pos.y-=sqrt(difficulty)*3,color("red"),box(e.pos.x,e.pos.y+t,e.width,6),e.pos.y<-3&&(e.width=void 0)),n>0&&(t*=.5,n>9&&end()),color("black"),char("a",l.pos.x,l.pos.y+t),o.length===0&&(d=0),d--,d<0){const s=rnd(.5,sqrt(difficulty)*2)*.1,a=rnd(20,80);times(rndi(5,9),()=>{o.push({pos:vec(a+rnds(9),-280+rnds(9)),vy:s*rnd(.9,1.1)})}),d=99*sqrt(o.length)/difficulty}color("red");let u=-200;remove(o,s=>{const a=char("b",s.pos.x,s.pos.y+t).isColliding.rect;if(s.pos.y>99)play("lucky"),text("X",s.pos.x,97),n++;else{let f=s.vy*sqrt(120-c)/4;if(l.sightY!=null&&(f*=.3),s.pos.y+=f,a.red)return play("powerUp"),addScore(p,s.pos.x,s.pos.y+t),p++,!0;s.pos.y>u&&(u=s.pos.y)}}),c=u}export{g as characters,x as description,v as options,h as title,Y as update};
