const wf="ACCEL B",_f=`
[Tap]  Fire
[Hold] Accel
`,Tf=[`
ll
 lllll
`,`
   lll
 lllll
llllll
   ll
`],Cf={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:40};let Te,Mt,cn,an,pn,dn,$u,pt;function If(){ticks||(Te={pos:vec(20,45),vx:0},Mt=[],cn=[],an=0,pn=[],dn=[],$u=times(7,i=>({pos:vec(-99-i*40,0),size:vec()})),pt=1);const l=(Te.pos.x-20)*.1;color("yellow"),rect(0,90,200,10),color("green"),$u.forEach(i=>{box(i.pos,i.size),i.pos.x-=l,i.pos.x<-99&&(i.pos.x+=300+rnd(99),i.pos.y=rnd(90,99),i.size.set(rnd(30,50),rnd(5,9)))}),remove(dn,i=>(i.pos.add(i.vel),i.pos.x-=l,i.vel.mul(.95),color(i.isEnemy&&i.ticks<20?"light_red":"light_black"),box(i.pos,3+cos(i.ticks*.03)*5),i.ticks+=sqrt(difficulty),i.ticks>60)),Te.vx+=((input.isPressed?2:.2)*sqrt(difficulty)-Te.vx)*.2,Te.pos.x+=Te.vx-l,color("blue"),char("a",Te.pos),color("purple"),rect(Te.pos.x-3,Te.pos.y,-Te.vx*3,1),Mt.length===0&&(color("cyan"),box(Te.pos.x,Te.pos.y+3,5,2),input.isJustPressed&&(play("select"),pt=1,cn.forEach(i=>{Mt.push({pos:vec(Te.pos.x,Te.pos.y+3),vel:vec(sqrt(difficulty)*2),target:i.pos,ticks:0,exTicks:0,smokeTicks:0})}),pn.forEach(i=>{Mt.push({pos:vec(Te.pos.x,Te.pos.y+3),vel:vec(sqrt(difficulty)*2),target:i.pos,ticks:0,exTicks:0,smokeTicks:0})})));let e=Mt.length;remove(Mt,i=>{if(i.pos.add(i.vel),i.pos.x+=sqrt(difficulty)-l,i.exTicks>0)return i.pos.y>90&&i.vel.set(),i.exTicks+=sqrt(difficulty),i.vel.mul(.9),color("red"),box(i.pos,3+cos(i.exTicks*.05)*9),i.exTicks>30;const s=i.pos.distanceTo(i.target);if(s<9||i.pos.y>95||i.ticks>120){play("powerUp"),i.exTicks=1;const r=i.vel.length;i.vel.set().addWithAngle(i.pos.angleTo(i.target),r)}const o=sqrt(difficulty)/sqrt(s+9)*(i.ticks<9?.1:i.ticks<20?3:1);i.vel.addWithAngle(i.pos.angleTo(i.target),o),i.vel.mul(i.ticks<20?.7:.95),i.ticks+=sqrt(difficulty),color("cyan"),bar(i.pos,3,2,i.vel.angle),i.smokeTicks+=sqrt(difficulty),i.smokeTicks>5&&(dn.push({pos:vec(i.pos),vel:vec(i.vel).mul(.5),ticks:0,isEnemy:!1}),i.smokeTicks-=5)}),e>0&&Mt.length===0&&play("coin"),an-=l,an<0&&(cn.push({pos:vec(203,rnd()<.5?rnd(5,35):rnd(55,85)),vx:rnd(sqrt(difficulty))*.5,ma:PI+rnds(.2,PI/5),fireTicks:ceil(rnd(10,30)/sqrt(difficulty))}),an+=rnd(40,60)/difficulty),remove(cn,i=>(i.pos.x-=i.vx+l,i.fireTicks--,i.fireTicks===0&&(play("laser"),pn.push({pos:vec(i.pos.x,i.pos.y+3),angle:i.ma,va:0,speed:sqrt(difficulty),smokeTicks:0})),color("purple"),char("b",i.pos).isColliding.rect.red?(play("explosion"),particle(i.pos,15,2),addScore(pt,i.pos),pt<64&&(pt*=2),!0):(i.fireTicks>0&&(color("black"),bar(i.pos.x,i.pos.y+3,3,3,i.ma)),i.pos.x<-3)));const t=sqrt(difficulty)*5e-4;remove(pn,i=>{i.pos.addWithAngle(i.angle,i.speed),i.pos.x-=l;const s=i.pos.angleTo(Te.pos),o=wrap(s-i.angle,-PI,PI);i.va+=(o>0?1:-1)*t,i.angle=clamp(wrap(i.angle+i.va,0,PI*2),PI/4*3,PI/4*5),color("black");const r=bar(i.pos,3,3,i.angle).isColliding;return i.smokeTicks+=sqrt(difficulty),i.smokeTicks>9&&(dn.push({pos:vec(i.pos),vel:vec().addWithAngle(i.angle,i.speed*.3),ticks:0,isEnemy:!0}),i.smokeTicks-=9),color("red"),r.rect.red?(play("hit"),particle(i.pos,9,2),addScore(pt,i.pos),pt<64&&(pt*=2),!0):(r.char.a&&(play("explosion"),end()),i.pos.y>90?(particle(i.pos),!0):i.pos.x<-3)})}const lk=Object.freeze(Object.defineProperty({__proto__:null,characters:Tf,description:_f,options:Cf,title:wf,update:If},Symbol.toStringTag,{value:"Module"})),Rf="AERIAL BAR",Ef=`
[Tap]  Jump
[Hold] Fly
`,Af=[],Of={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Bs,un,B,Ii,dt,Js;function zf(){ticks||(Bs=[{x:50,length:50,angle:PI/2,angleVel:.03,isHeld:!0}],un=0,B={pos:vec(),length:10,angle:0,angleVel:0,center:.2,bar:Bs[0],vel:vec()},Ii=0,dt=Js=10),dt+=(Js-dt)*.1,color("light_cyan"),rect(0,0,100,dt),color("light_blue"),rect(0,90,100,10);let l=difficulty*.02;if(B.pos.x>50&&(l+=(B.pos.x-50)*.1),B.pos.x-=l,B.bar!=null){const e=B.bar;B.pos.set(e.x,dt).addWithAngle(e.angle,e.length),B.angleVel+=e.angleVel*e.length*.003,e.x<0&&(color("red"),text("X",3,dt),play("explosion"),end()),input.isJustPressed&&(play("select"),B.vel.set().addWithAngle(e.angle+PI/2,(e.angleVel*e.length+B.angleVel*3)*sqrt(difficulty)).add(0,-sqrt(difficulty)*.5),B.bar=void 0,Ii=1)}else Ii+=difficulty,B.pos.add(B.vel),B.vel.y+=(input.isPressed?.01:.1)*sqrt(difficulty),B.vel.mul(input.isPressed?.99:.95),B.pos.y>89&&(play("hit"),B.vel.y*=-1.5,B.pos.y=88,Js+=10,Ii=-9999,Bs.forEach(e=>{e.isHeld=!1})),B.pos.x<0&&(color("red"),text("X",3,B.pos.y),play("explosion"),end());if(B.angleVel*=.99,B.angle+=B.angleVel,color("cyan"),bar(B.pos,B.length,4,B.angle,B.center).isColliding.rect.light_cyan&&B.vel.y<0&&(B.vel.y*=-.5),un-=l,un<0){const e=rnd(20,50);Bs.push({x:110,length:e,angle:PI/2-rnd(PI/4),angleVel:rnds(.02,.04),isHeld:!1}),un=e+rnd(20)}remove(Bs,e=>{e.x-=l,e.angleVel+=cos(e.angle)*e.length*5e-5*sqrt(difficulty),e.angle+=e.angleVel,color("black");const t=vec(e.x,dt).addWithAngle(e.angle,e.length);line(e.x,dt,t),color(e.isHeld?"black":"blue");const i=box(t,5).isColliding.rect;return i.light_blue&&(play("explosion"),color("red"),text("X",t),end()),!e.isHeld&&B.bar==null&&i.cyan&&(play("powerUp"),Ii>0&&addScore(ceil(Ii),t),B.bar=e,e.isHeld=!0,Js=clamp(Js-5,10,99)),e.x<-30})}const tk=Object.freeze(Object.defineProperty({__proto__:null,characters:Af,description:Ef,options:Of,title:Rf,update:zf},Symbol.toStringTag,{value:"Module"})),jf="ARCFIRE",qf=`
[Hold] Set arc
[Release] Fire
`,Wf=[`
  ll
  l  l
 llll
l l  
  lll
 l 
`,`
  ll
l l
 llll
  l  l
llll
    l
`,"",`
 llll
  l  
 lllll
l l  
  lll
 l 
`,`
 llll
  l
lllll
  l  l
llll
    l
`],Bf={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let He,Hs,Ms,Ds,Dt,Lt,Ls,Ft,fn,yn,hn,rd;function Jf(){ticks||(He=vec(50,50),Ds=0,Ls=[],Ft=!1,Hs=0,Ms=0,fn=[],yn=rnd(PI*2),hn=0),Ms>1&&(He.add(vec(Ms*.2).rotate(Hs)),Ms*=.2,He.isInRect(10,10,90,90)||(Hs+=PI),He.clamp(10,90,10,90)),Ds+=.07*difficulty,color("light_blue"),arc(50,50,7,4),color("light_black"),line(He,vec(9).rotate(Ds).add(He),2),color("black"),char(addWithCharCode("a",floor(ticks/30)%2),He,{mirror:{x:cos(Hs)<0?-1:1}});let l=0;if(Ft&&(Lt=Ds,l=300/sqrt((Lt-Dt)*30),color("green"),line(He,vec(l).rotate(Dt).add(He)),line(He,vec(l).rotate(Lt).add(He)),arc(He,l,3,Dt,Lt)),Ft&&Lt-Dt>PI&&(Ft=!1),Ft&&input.isJustReleased&&(Ft=!1,Ls.length===0&&(play("select"),Ls.push({pos:He,d:0,range:l,arcFrom:Dt,arcTo:Lt})),Hs=(Lt+Dt)/2,Ms=l/2),input.isJustPressed&&(play("laser"),Dt=Ds,Ft=!0,rd=1),color("cyan"),Ls=Ls.filter(e=>(e.d+=2,arc(He,e.d,5,e.arcFrom,e.arcTo),e.d<e.range)),hn-=difficulty,hn<0){const e=vec(70).rotate(yn).add(50,50),t=vec(rnd(10)).rotate(rnd(PI*2)).add(50,50).sub(e).div(500/rnd(1,difficulty));fn.push({p:e,v:t}),hn+=rnd(40,60),rnd()<.1?yn=rnd(PI*2):yn+=rnds(.05)}color("red"),fn=fn.filter(e=>{e.p.add(e.v);const t=char(addWithCharCode("d",floor(ticks/30)%2),e.p,{mirror:{x:cos(e.v.angle)<0?-1:1}}).isColliding;return t.rect.cyan?(play("powerUp"),particle(e.p),addScore(rd,e.p),rd++,!1):((t.char.a||t.char.b||t.rect.light_blue)&&(t.rect.light_blue?text("X",vec(e.p).sub(50,50).div(2).add(50,50)):text("X",He),play("explosion"),end()),!0)})}const ik=Object.freeze(Object.defineProperty({__proto__:null,characters:Wf,description:qf,options:Bf,title:jf,update:Jf},Symbol.toStringTag,{value:"Module"})),Hf="BALL TOUR",Mf=`
[Hold]
 Move forward
`,Df=[`
llllll
l l ll
l l ll
llllll
 l  l
 l  l
  `,`
llllll
l l ll
l l ll
llllll
ll  ll
  `,`
 lll
ll ll
l lll
lllll
 lll
 ll
`],Lf={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let Ce,nd,gn,cd,Fs,Ri;function Ff(){ticks||(Ce={pos:vec(90,50),yAngle:0,vx:0,ticks:0},nd=[],gn=0,cd=[],Fs=9,Ri=1),color("blue"),rect(0,90,99,9),gn-=Ce.vx,gn<0&&(nd.push({pos:vec(-3,rnd(10,80)),vy:rnd()<.2?rnds(1,difficulty)*.3:0}),gn+=rnd(9,49)),color("black"),remove(nd,e=>(e.pos.x+=Ce.vx,e.pos.y+=e.vy,(e.pos.y<10||e.pos.y>80)&&(e.vy*=-1),text("*",e.pos).isColliding.char.d?!0:e.pos.x>103));const l=Ce.pos.y;if(Ce.yAngle+=difficulty*.05,Ce.pos.y=sin(Ce.yAngle)*30+50,Ce.ticks+=clamp((l-Ce.pos.y)*9+1,0,9),input.isJustPressed&&play("hit"),Ce.vx=(input.isPressed?1:.1)*difficulty,char(addWithCharCode("a",floor(Ce.ticks/50)%2),Ce.pos),color("red"),char("c",Ce.pos.x,Ce.pos.y-6).isColliding.text["*"]&&(play("explosion"),end()),Fs-=Ce.vx,Fs<0){const e=vec(-3,rnd(20,70));color("transparent"),char("c",e).isColliding.text["*"]?Fs+=9:(cd.push(e),Fs+=rnd(25,64))}color("green"),remove(cd,e=>{e.x+=Ce.vx;const t=char("c",e).isColliding.char;return t.a||t.b||t.c?(addScore(floor(Ri),Ce.pos),Ri+=10,play("select"),!0):e.x>103}),Ri=clamp(Ri-.02*difficulty,1,999),color("black"),text(`x${floor(Ri)}`,3,9)}const sk=Object.freeze(Object.defineProperty({__proto__:null,characters:Df,description:Mf,options:Lf,title:Hf,update:Ff},Symbol.toStringTag,{value:"Module"})),Yf="BAMBOO",Uf=`
[Tap]  Turn
[Hold] Slip behind
`,Nf=[`
  ll
  l  l
lpppp
  prrr
 r
r
`,`
   ll
   l  
lpppp
 rp  l
r  r
    r
`],Xf={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ad,xn,vn,Ei,Yt,pd,mn;function Vf(){ticks||(ad=[],xn=0,vn=190,Ei=1,Yt=0,pd=0,mn=5),color("black"),input.isJustPressed&&(play("select"),Ei*=-1),vn=wrap(vn+Ei*difficulty*(1+Yt),-3,203),Yt*=.9,pd+=difficulty,char(input.isPressed?"b":addWithCharCode("a",floor(pd/20)%2),vn,87,{mirror:{x:Ei}}),xn--,xn<0&&(mn--,ad.push({x:rnd(5,195),height:0,speed:mn<0?2:1}),xn=rnd(70,100)/difficulty,mn=rndi(4,7)),remove(ad,l=>{l.height+=l.speed*difficulty*.14;let e=l.height/4,t=90-e/2;e<1&&(t+=(1-e)*3,e=1);let i={};if(times(4,s=>{color(l.height<5?"light_yellow":l.height>50?"green":l.height>25?s%2===0?"green":"light_green":l.height>23||s%2===0?"yellow":"light_yellow"),i={...i,...box(l.x,t,(4-s)*2,ceil(e)).isColliding.char},t-=e}),(i.a||i.b)&&!input.isPressed&&!(l.height<5)){if(l.height<=25){let s=ceil((l.height-5)/3);return s===7?(s=10,play("powerUp")):play("coin"),addScore(s*s,l.x,90-l.height),!0}else if(play("hit"),l.speed*=.6,l.height*=.7,Yt++,Yt>5&&(Yt=5),Ei*=-1,particle(l.x,87,9,difficulty*(1+Yt)*.5,Ei>0?0:PI,.4),l.height<=25)return play("explosion"),!0}l.height>50&&(l.speed*=.997),l.height>=89&&(color("red"),text("X",l.x,3),play("lucky"),end())}),color("purple"),rect(0,90,200,10)}const ok=Object.freeze(Object.defineProperty({__proto__:null,characters:Nf,description:Uf,options:Xf,title:Yf,update:Vf},Symbol.toStringTag,{value:"Module"})),Gf="BASERUNNER DASH",Kf=`
[Hold] Run forward
[Release] Run back
`,Qf=[],Zf={viewSize:{x:100,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:60};let U,xe,Ut;const ey=3,ly=4,ty=2;function iy(){ticks||(Ut={positions:[vec(50,90),vec(90,50),vec(50,10),vec(10,50)]},U={pos:vec(Ut.positions[1]),targetBase:2,currentBase:1,speed:.6,isOnBase:!0},xe={pos:vec(Ut.positions[0]),targetBase:2,currentBase:0,speed:.3,isThrown:!0});const l=Ut.positions[U.currentBase],e=Ut.positions[U.targetBase],t=U.speed*difficulty;(input.isJustPressed||input.isJustReleased)&&play("click"),input.isPressed?(U.pos.add(vec(e).sub(U.pos).normalize().mul(t)),U.isOnBase=!1,U.pos.distanceTo(e)<t&&(play("coin"),addScore(1),U.pos.set(e),U.currentBase=U.targetBase,U.targetBase=(U.targetBase+1)%4,U.isOnBase=!0)):U.pos.distanceTo(l)<t?(U.pos.set(l),U.isOnBase||play("hit"),U.isOnBase=!0):U.pos.add(vec(l).sub(U.pos).normalize().mul(t));const i=Ut.positions[xe.targetBase],s=xe.speed*(xe.isThrown?3:1)*difficulty;xe.pos.add(vec(i).sub(xe.pos).normalize().mul(s)),xe.pos.distanceTo(i)<s?(xe.isThrown=!1,xe.pos.set(i),xe.currentBase=xe.targetBase,xe.targetBase=xe.targetBase===U.currentBase?U.targetBase:U.currentBase):!xe.isThrown&&rnd()<.05*difficulty&&(play("powerUp"),xe.isThrown=!0,xe.currentBase!==U.currentBase&&xe.currentBase!==U.targetBase&&(xe.targetBase=U.targetBase)),color("light_black"),Ut.positions.forEach(o=>{box(o,ey*2)}),color(U.isOnBase?"light_blue":"blue"),box(U.pos,ly*2),color(xe.isThrown?"light_red":"red"),box(xe.pos,ty*2).isColliding.rect.blue&&!xe.isThrown&&(play("explosion"),end())}const rk=Object.freeze(Object.defineProperty({__proto__:null,characters:Qf,description:Kf,options:Zf,title:Gf,update:iy},Symbol.toStringTag,{value:"Module"})),sy="BLADE DANCER",oy=`
[Tap] Jump & Slash
`,ry=[],ny={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let D,bn,Nt;const Ai=80,Su=30,cy=30,wu=1,ay=.3,py=30;let dd,ud,kn;function dy(){if(ticks||(D={pos:vec(35,Ai),isJumping:!1,jumpTicks:0,swordAngle:PI/2,swordLength:10},bn=[],Nt={segments:[{x:0,width:200}]},dd=.03,ud=.3,kn=1),input.isJustPressed&&!D.isJumping&&(D.isJumping=!0,D.jumpTicks=Su,play("powerUp"),kn=1),D.isJumping){D.jumpTicks-=input.isPressed?.5:1;const t=D.jumpTicks/Su;D.pos.y=Ai-Math.sin(t*Math.PI)*cy,D.swordAngle-=ay,D.swordLength=8+(1-t)*(py-8),D.jumpTicks<=0&&(play("click"),D.isJumping=!1,D.pos.y=Ai,D.swordAngle=PI/2,D.swordLength=10)}color("blue"),box(D.pos,4,8),color("cyan");const l=vec(D.swordLength,0).rotate(D.swordAngle);line(D.pos.x,D.pos.y-4,D.pos.x+l.x,D.pos.y-4+l.y,D.isJumping?5:2),(bn.length===0||rnd()<dd)&&bn.push({pos:vec(205,rnd(30,Ai-5)),size:rnd(3,6)}),remove(bn,t=>(t.pos.x-=wu*sqrt(difficulty),color("red"),box(t.pos,t.size).isColliding.rect.cyan?(play("hit"),addScore(kn,t.pos),kn++,!0):(box(t.pos,t.size).isColliding.rect.blue&&(play("explosion"),end()),t.pos.x<-10))),Nt.segments.forEach((t,i)=>{if(t.x-=wu*sqrt(difficulty),color("green"),rect(t.x,Ai,t.width-2,20),t.x+t.width<200&&i===Nt.segments.length-1)if(rnd()<ud){const s=rnd(15,30);Nt.segments.push({x:t.x+t.width+s,width:rnd(30,100)})}else Nt.segments.push({x:t.x+t.width,width:rnd(50,150)})}),remove(Nt.segments,t=>t.x+t.width<0?!0:(!D.isJumping&&D.pos.x>t.x&&D.pos.x<t.x+t.width&&(D.pos.y=Ai),!1)),!Nt.segments.some(t=>D.pos.x>=t.x&&D.pos.x<=t.x+t.width)&&!D.isJumping&&(play("explosion"),end()),dd=clamp(.03+difficulty*.01,.02,.1),ud=clamp(.3+difficulty*.02,.3,.7)}const nk=Object.freeze(Object.defineProperty({__proto__:null,characters:ry,description:oy,options:ny,title:sy,update:dy},Symbol.toStringTag,{value:"Module"})),uy="BOARDING",fy=`
[Hold] Boarding
`,yy=[`
 lll
l l ll
 llll
 l  l
ll  ll
  `,`
 lll
l l ll
 llll
  ll
 l  l
 l  l
  `,`
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
     l
    ll
   ll
  ll
 ll
ll
`,`
l
ll
 ll
  ll
   ll
    ll
`,`
  l
 l
lllll
 l
  l
`,`
  l
   l
lllll
   l
  l
`],hy={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let sn,Pn,Oi,Ys,$n,Us,_e,Yl,Sn,fd;function gy(){if(!ticks){for(sn=[],Pn=[],Oi=50,Ys=-1,$n=0,Us=-1,_e=50,Sn=0,fd=.1;_e<91;)_u(),_e+=2;_e=Yl=91}color("black"),sn=sn.filter(e=>(e.pos.y-=fd*difficulty,char(addWithCharCode("e",e.angle),e.pos),e.pos.y>15&&e.pos.y<_e)),Yl-=fd*difficulty,Yl<11&&(Yl=11),_e+=(Yl-_e)*.1,color("red"),rect(0,_e,50,8),color("blue"),rect(50,_e,50,8),color("white"),char("a",5,_e+4),char("g",12,_e+4),text("GATE1",20,_e+4),char("c",95,_e+4),char("h",88,_e+4),text("GATE2",55,_e+4),Sn<0&&(_u(),Sn+=4),color(Ys<0?"red":"blue"),char(addWithCharCode("a",Ys+1+floor(ticks/30)%2),Oi,9),_e<=12&&(play("explosion"),end()),$n--;let l=1;if(input.isPressed){if($n<0){const e={pos:vec(Oi,9),vel:vec(),type:Ys,prevPos:vec(),bc:0};e.prevPos.set(e.pos),Pn.push(e),$n=9}l=.1}Oi+=Us*difficulty*l,(Oi<10&&Us<0||Oi>90&&Us>0)&&(Us*=-1),input.isJustReleased&&(Ys*=-1),Pn=Pn.filter(e=>{e.vel.y+=.2,e.vel.mul(.9),e.prevPos.set(e.pos),e.pos.add(e.vel),color(e.type<0?"red":"blue");const t=char(addWithCharCode("a",e.type+1+floor(ticks/30)%2),e.pos).isColliding.char;if(t.e||t.f){const i=wrap(e.pos.angleTo(e.prevPos),-PI,PI);let s;t.e?s=i<-PI/4||i>PI/4*3?-PI/4*3:PI/4:s=i<-PI/4*3||i>PI/4?PI/4*3:-PI/4;const o=vec(e.vel.length*2).rotate(s);e.vel.add(o),e.pos.add(e.vel),e.pos.add(e.vel),e.bc++}if(e.pos.y<0&&e.vel.y<0&&(e.vel.y*=-.5),(e.pos.x<0&&e.vel.x<0||e.pos.x>99&&e.vel.x>0)&&(e.vel.x*=-1),e.pos.y>_e)if((e.pos.x-50)*e.type>0){if(e.bc>0){play("powerUp"),addScore(e.bc,e.pos);const s=e.bc*2*difficulty;Yl+=s,Sn-=s,Yl>91&&(Yl=91)}else addScore(0,e.pos);return!1}else{play("hit"),addScore(-1-e.bc,e.pos);let s=sqrt(1+e.bc)*difficulty;return s>20&&(s=20),Yl-=s,!1}return!0})}function _u(){const l=vec(rnd(9,90),_e-3);sn.some(e=>e.pos.distanceTo(l)<16)||sn.push({pos:l,angle:rndi(2)})}const ck=Object.freeze(Object.defineProperty({__proto__:null,characters:yy,description:fy,options:hy,title:uy,update:gy},Symbol.toStringTag,{value:"Module"})),xy="BOX SNAKE",vy=`
[Hold] Stretch
`,my=[],by={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5},X=9,Xe=7;let p,yd,hd,wn,_n;function ky(){ticks||(p={head:{edge:1,pos:.5},tail:{edge:1,pos:.5},isStretching:!1,length:0,turret:{edge:1,pos:.5,ticks:0}},yd=[],hd=[],wn=0,_n=1);const l=sqrt(difficulty);if($y(),color("blue"),remove(yd,e=>{if(e.pos.addWithAngle(e.angle,3*l),bar(e.pos,2*l,3*l,e.angle).isColliding.rect.light_blue)return!0}),input.isJustPressed&&play("select"),input.isJustReleased&&play("laser"),input.isPressed?(p.head.pos+=.01*l,p.length>3&&p.head.edge===p.tail.edge&&p.head.pos>=p.tail.pos&&(p.turret.pos=p.head.pos,p.turret.edge=p.head.edge,play("coin"),_n++),p.head.pos>=1&&(p.head.pos-=1,p.head.edge=wrap(p.head.edge+1,0,4)),p.isStretching=!0):p.isStretching&&(p.tail.pos+=.1*l,p.length<1&&p.tail.edge===p.head.edge&&p.tail.pos>=p.head.pos?(p.isStretching=!1,p.tail.pos=p.head.pos):p.tail.pos>=1&&(p.length>=.1*l?(p.tail.pos-=1,p.tail.edge=wrap(p.tail.edge+1,0,4)):(p.isStretching=!1,p.tail.edge=wrap(p.tail.edge+1,0,4),p.tail.pos=p.head.pos))),Py(),p.turret.pos-=.01,color("transparent"),box(Rl(p.turret.edge,p.turret.pos),3,3).isColliding.rect.green?p.turret.pos<=0&&(p.turret.pos+=1,p.turret.edge=wrap(p.turret.edge-1,0,4)):(p.turret.pos=p.head.pos,p.turret.edge=p.head.edge),p.turret.ticks--,p.turret.ticks<0){const e=Rl(p.turret.edge,p.turret.pos),t=(p.turret.edge+2)*PI/2;yd.push({pos:e,angle:t}),color("blue"),particle(e,{count:2,speed:2,angle:t,angleWidth:.3}),p.turret.ticks=3}if(wn-=l,wn<0){const e=vec(rnd(20,80),rnd(20,80)),t=e.angleTo(50,50);hd.push({pos:e,vel:vec(rnd(.5,1)*l,0).rotate(t+rnds(.2))}),wn+=rnd(9,99)}color("red"),remove(hd,e=>{e.pos.add(e.vel);const t=box(e.pos,4).isColliding.rect;if(t.blue)return play("powerUp"),addScore(Math.ceil(p.length*10)*_n,e.pos),particle(e.pos),!0;t.green&&(play("explosion"),end()),e.pos.x<X&&e.vel.x<0&&(e.vel.x*=-1),e.pos.x>100-X&&e.vel.x>0&&(e.vel.x*=-1),e.pos.y<X&&e.vel.y<0&&(e.vel.y*=-1),e.pos.y>100-X&&e.vel.y>0&&(e.vel.y*=-1)}),color("black"),text(`x${_n}`,3,9,{isSmallText:!0})}function Py(){color("green");let l=p.head.edge,e=p.head.pos,t=p.tail.pos;p.length=0;for(let i=0;i<5;i++){if(l===p.tail.edge)if(e>=t){t=p.tail.pos,line(Rl(l,e),Rl(l,t)),p.length+=e-t;break}else if(i===0)t=0,line(Rl(l,e),Rl(l,t)),p.length+=e-t,e=1;else{e=p.tail.pos,line(Rl(l,e),Rl(l,t)),p.length+=e-t;break}else t=0,line(Rl(l,e),Rl(l,t)),p.length+=e-t,e=1;l=wrap(l-1,0,4)}color("white"),box(Rl(p.head.edge,p.head.pos),1,1)}function Rl(l,e){switch(l){case 0:return vec(100-X,(100-X*2)*e+X);case 1:return vec(100-X-(100-X*2)*e,100-X);case 2:return vec(X,100-X-(100-X*2)*e);case 3:return vec((100-X*2)*e+X,X)}}function $y(){color("light_blue"),rect(X-Xe,X-Xe,100-(X-Xe)*2,Xe),rect(X-Xe,X-Xe,Xe,100-(X-Xe)*2),rect(X-Xe,100-X,100-(X-Xe)*2,Xe),rect(100-X,X-Xe,Xe,100-(X-Xe)*2)}const ak=Object.freeze(Object.defineProperty({__proto__:null,characters:my,description:vy,options:by,title:xy,update:ky},Symbol.toStringTag,{value:"Module"})),Sy="BS FISH",wy=`
[Hold] Speed up
`,_y=[`
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
`],Ty={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:10};let Ve,Tn,Cn,zi,ji,In,Xt;function Cy(){ticks||(Ve={pos:vec(20,20),vx:1,ticks:0},Tn=[],Cn=0,zi=3,ji=0,In=0,Xt=1),input.isJustPressed&&play("select");const l=Ve.pos.x>30?(Ve.pos.x-30)*.1*sqrt(difficulty):0;if(Ve.vx+=((input.isPressed?3*sqrt(difficulty):.1)-Ve.vx)*.2,Ve.ticks+=Ve.vx,Ve.pos.x+=Ve.vx-l,color("black"),char(addWithCharCode("b",floor(Ve.ticks/10)%2),Ve.pos),Cn--,Cn<0){const e=vec(rnd(130,220),120),t=vec(-rnd(1,1.5)*.5*sqrt(difficulty),-2.5*sqrt(difficulty));let i="normal";zi--,zi<0&&(ji===0?(i=rnd()<.5?"fake":"big",zi=rnd(2,4),ji+=i==="big"?1:2):ji===1?(i="fake",zi=rnd(2,4),ji++):(i=rnd()<.5?"fake":"big",zi=rnd(3,9),ji++)),i==="big"&&(rnd()<.7?(t.y*=1.125,t.x*=.9):(t.y*=.97,t.x*=1.5)),Tn.push({pos:e,vel:t,type:i}),Cn=rnd(40,60)/difficulty}remove(Tn,e=>{const t=vec(e.pos);e.vel.y+=.03*difficulty,e.pos.add(e.vel),e.pos.x-=l,color("black");const i=e.type==="big"||e.type==="fake"?6:1,s=50+2*i;if(e.pos.y>s)color("blue");else{if(e.type==="fake"){const o=[2,1];return[[2,0],[3,0],[4,0],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[5,2]].forEach(r=>{const n=r[0],c=r[1];Tn.push({pos:vec(e.pos.x+n*6-15,e.pos.y+c*6-6),vel:vec(e.vel),type:n==o[0]&&c===o[1]?"eye":"normal"})}),!0}e.type==="big"&&(color("white"),line(e.pos.x,e.pos.y-3,e.pos.x-10,e.pos.y),line(e.pos.x,e.pos.y-5,e.pos.x+16,e.pos.y),line(e.pos.x,e.pos.y+5,e.pos.x-16,e.pos.y),line(e.pos.x,e.pos.y+5,e.pos.x+16,e.pos.y)),color(e.type==="eye"?"blue":"black")}if(char("a",e.pos,{scale:{x:i,y:i}}),e.type!=="big"&&e.pos.distanceTo(Ve.pos)<6)return addScore(Xt,e.pos),e.type==="normal"?(play("coin"),Xt++):(play("powerUp"),Xt+=10),!0;if(e.pos.x<-18||e.pos.y>120)return e.type!=="big"&&Xt>1&&Xt--,!0;(t.y-s)*(e.pos.y-s)<0&&play("hit")}),color("transparent"),char(addWithCharCode("b",floor(Ve.ticks/10)%2),Ve.pos).isColliding.rect.white&&(play("explosion"),end()),In=wrap(In-l,-10,210),color("blue"),rect(0,50,200,2),color("cyan"),times(5,e=>{rect(wrap(In+220/5*e,-10,210),50,9,2)}),color("black"),text(`x${Xt}`,3,9)}const pk=Object.freeze(Object.defineProperty({__proto__:null,characters:_y,description:wy,options:Ty,title:Sy,update:Cy},Symbol.toStringTag,{value:"Module"})),Iy="CAST N",Ry=`
[Hold] Select power
[Release] Cast [Tap] Pull
`,Ey=[`
 YYY
YyyyY
YyyyY
YyyyY
 YYY
`,`
  lll
l ll l
llllll
l llll
  ll
`],Ay={viewSize:{x:150,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let Vt,El,Ul,Rn,Ns,En,il,Xs;const sl=vec(5,20),Tu=9;function Oy(){if(ticks||(Vt=times(20,l=>({pos:vec(sl),vel:vec(),nextNode:void 0})),times(19,l=>{Vt[l+1].nextNode=Vt[l]}),El="ready",Ul=0,Rn=[],Ns=0,En=1,il=40,Xs=1),color("light_yellow"),line(0,sl.y+3,150,120),color("light_blue"),rect(0,il,150,3),color("black"),char("a",Vt[0].pos),il<sl.y-4&&(play("explosion"),end()),El==="ready"&&input.isJustPressed&&(play("select"),Ul=1,El="angle",Xs=1),El==="angle"){Ul+=.05*sqrt(difficulty);const l=.1-Ul*.2;line(sl,vec(sl).addWithAngle(l,Ul*5+3),2),(input.isJustReleased||Ul>3)&&(play("jump"),Ul=clamp(Ul,1,3),El="throw",Vt[0].vel.set(sqrt(difficulty)*Ul).rotate(l))}if(El==="throw"&&(Vt.forEach((l,e)=>{if(l.pos.x=clamp(l.pos.x,0,147),e===0){if(!char("a",l.pos).isColliding.rect.light_yellow){let t=l.pos.y;l.pos.add(l.vel),t<il&&l.pos.y>=il&&(l.vel.x=0,l.vel.y*=.1),l.vel.y+=(l.pos.y<il?.05:.01)*difficulty,l.vel.mul(.99)}}else if(!line(l.nextNode.pos,l.pos,2).isColliding.rect.light_yellow){if(l.pos.distanceTo(l.nextNode.pos)>Tu){const i=l.nextNode.pos.angleTo(l.pos);l.pos.set(l.nextNode.pos).addWithAngle(i,Tu)}l.pos.add(l.vel),l.vel.y+=(l.pos.y<il?.005:.001)*difficulty,l.vel.mul(.99)}}),input.isJustPressed&&(play("powerUp"),El="pull")),El==="pull"&&Vt.forEach((l,e)=>{if(l.vel.set(),l.pos.distanceTo(sl)>1&&l.pos.x>sl.x){const t=l.pos.angleTo(sl);l.pos.addWithAngle(t,sqrt(difficulty)*2)}else l.pos.set(sl),e===0&&(El="ready");e>0&&line(l.nextNode.pos,l.pos,2)}),Rn.length===0&&(Ns=0),Ns--,Ns<0){En--;let l=1;En<0&&(l=0,En=rnd(1,7));const e=rndi(3,8),t=vec(153,rnd(il+(l===0?19:9),90)),i=-rnd(1,sqrt(difficulty))*(l==0?.3:.2);times(e,()=>{Rn.push({pos:vec(t).add(rnd(20),rnds(9)).clamp(153,180,il+4,96),vel:vec(i,0),type:l})}),Ns=rnd(120,150)/sqrt(difficulty)}remove(Rn,l=>{color(l.type===0?"red":"blue");const e=char("b",l.pos,{mirror:{x:l.vel.x<0?-1:1}}).isColliding;if(e.rect.black||e.char.a){if(El==="pull"){const t=l.pos.angleTo(sl);if(l.pos.addWithAngle(t,sqrt(difficulty)*2),l.pos.y-=difficulty*.3,l.pos.x<sl.x+9)return addScore(l.type===0?-1:Xs,sl.x+clamp(Xs*6,0,140),sl.y+(l.type===0?9:0)),Xs++,il=clamp(il+(l.type===0?-5:1)*sqrt(difficulty),0,50),play(l.type===0?"hit":"coin"),!0}e.rect.light_yellow||(l.pos.y+=difficulty*.3),rnd()<.1&&(l.vel.x*=-1);return}return l.pos.y<il+3?l.vel.y+=.1:l.vel.y=0,l.pos.add(l.vel),l.vel.x+=rnds(sqrt(difficulty))*.01,e.rect.light_yellow&&l.vel.x<0&&(l.vel.x*=-1),l.vel.x>0&&l.pos.x>153||l.pos.x<-3}),il-=sqrt(difficulty)*.01}const dk=Object.freeze(Object.defineProperty({__proto__:null,characters:Ey,description:Ry,options:Ay,title:Iy,update:Oy},Symbol.toStringTag,{value:"Module"})),zy="CATAPULT",jy=`
[Tap] Throw
`,qy=[],Wy={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:6};let An,On,P,Gt,zn;function By(){ticks||(An=[{pos:vec(200,60),width:20,isPassed:!0}],On=50,P={pos:vec(200,60),vel:vec(),bar:An[0],barPos:-10,grv:.1},Gt=1,zn=0);const l=input.isPressed;let e=difficulty*.05;if(P.pos.x>30&&(e+=(P.pos.x-30)*.1),P.pos.x-=e,P.bar!=null){if(P.barPos+=(l?-1:1)*difficulty*.2,Gt>1&&(Gt-=.5),P.pos.set(vec(P.bar.pos).addWithAngle(l?-PI/4:-PI/4*3,4).addWithAngle(l?-(PI/4)*3:PI/4*3,P.barPos)),abs(P.barPos)>P.bar.width*.65)P.bar=void 0,P.vel.set();else if(P.barPos>0){color(P.barPos>P.bar.width*.45?"light_red":"light_black");let t=vec(P.bar.pos).addWithAngle(-PI/4,4).addWithAngle(-PI/4*3,P.barPos),i=vec().addWithAngle(-PI/4,sqrt(P.barPos)*sqrt(difficulty));t.add(i);for(let s=0;s<99&&(t.add(i),i.y+=P.grv,s%5===0&&box(t,3),!(t.y>99));s++);color("black"),input.isJustPressed&&(play("jump"),P.vel.set().addWithAngle(-PI/4,sqrt(P.barPos)*sqrt(difficulty)),P.pos.add(P.vel),P.bar=void 0,zn=0)}}else P.pos.add(P.vel),P.vel.y+=P.grv,Gt+=P.vel.x*.1;if(input.isJustPressed&&play("laser"),box(P.pos,5),(P.pos.y>99||P.pos.x<0)&&(play("explosion"),end()),remove(An,t=>{if(t.pos.x-=e,bar(t.pos,t.width,3,l?PI/4:-PI/4).isColliding.rect.black&&P.bar==null){play("powerUp"),addScore(ceil(Gt),P.pos);const i=vec(t.pos).addWithAngle(l?-PI/4:-PI/4*3,4);P.bar=t,P.barPos=clamp(i.distanceTo(P.pos)*(P.pos.x>i.x?-1:1),-t.width*.4,t.width*.4),P.grv=.1*difficulty,t.isPassed=!0}return!t.isPassed&&t.pos.x+t.width*.5<P.pos.x&&(t.isPassed=!0,zn++,Gt+=zn*10),t.pos.x<-t.width/2}),On-=e,On<0){const t=rnd(20,30);An.push({pos:vec(200+t/2,rnd(50,90)),width:t,isPassed:!1}),On+=t/2+rnd(30,50)}text(`+${ceil(Gt)}`,3,9)}const uk=Object.freeze(Object.defineProperty({__proto__:null,characters:qy,description:jy,options:Wy,title:zy,update:By},Symbol.toStringTag,{value:"Module"})),Jy="CATCHING WHEEL",Hy=`
[Hold] Rotate wheel
`,My=[`
lllll
 lll
 lll
`,`
  ll
l l  l
 llll 
  l
 l l
l   l
`],Dy={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingParticleFront:!0,audioSeed:8};let Y,gd,jn,xd,qn,Qp;const Cu=40,Iu=99,Ru=3,Eu=.02;function Ly(){ticks||(Y={center:vec(50,90),radius:40,angle:0,spokeCount:6,rotationSpeed:.05,isAlive:times(6,()=>!0)},gd=[],jn=Cu,xd=[],qn=Iu,Qp=1),qn-=difficulty,qn<=0&&(xd.push({pos:vec(rnd(20,80),0),vel:vec(0,0)}),qn=Iu*rnd(.8,1)),color("red"),remove(xd,e=>(e.vel.y+=Eu,e.pos.y+=e.vel.y*difficulty,text("*",e.pos),e.pos.y>95)),color("blue"),arc(Y.center,Y.radius),input.isPressed&&(Y.angle+=Y.rotationSpeed*difficulty);for(let e=0;e<Y.spokeCount;e++){const t=Y.angle+e*2*PI/Y.spokeCount,i=vec(Y.center).addWithAngle(t,Y.radius);if(color("black"),line(Y.center,i),Y.isAlive[e]){const s=vec(i);color("yellow"),char("a",s,{scale:{x:Ru,y:Ru}}).isColliding.text["*"]&&Au(e)}}jn-=sqrt(difficulty),jn<=0&&(gd.push({pos:vec(rnd(10,90),0),vel:vec(0,0)}),jn=Cu*rnd(.7,1)),color("yellow"),remove(gd,e=>{e.vel.y+=Eu,e.pos.add(e.vel);const t=char("b",e.pos);if(t.isColliding.text["*"])return!0;for(let i=0;i<Y.spokeCount;i++)if(t.isColliding.char.a){play("coin"),addScore(Qp,e.pos),Qp++;let s=rndi(Y.spokeCount);for(let o=0;o<Y.spokeCount;o++){if(!Y.isAlive[s]){Y.isAlive[s]=!0;break}s=(s+1)%Y.spokeCount}return!0}if(e.pos.y>100){let i=rndi(Y.spokeCount);for(let s=0;s<Y.spokeCount;s++){if(Y.isAlive[i]){Au(i);break}i=(i+1)%Y.spokeCount}return play("explosion"),!0}});let l=!1;for(let e=0;e<Y.spokeCount;e++)if(Y.isAlive[e]){l=!0;break}l||end()}function Au(l){play("explosion"),Y.isAlive[l]=!1,color("red");const e=Y.angle+l*2*PI/Y.spokeCount,t=vec(Y.center).addWithAngle(e,Y.radius);particle(t.x,clamp(t.y,0,95),{count:20,speed:2}),Qp=1}const fk=Object.freeze(Object.defineProperty({__proto__:null,characters:My,description:Hy,options:Dy,title:Jy,update:Ly},Symbol.toStringTag,{value:"Module"})),Fy="CATE P",Yy=`
[Tap]
 Turn & Shot
`,Uy=[`
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
`],Ny={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let Wn,Me,ut,Bn,gl,Ge;const vd=[vec(1,0),vec(.7,.7),vec(0,1),vec(-.7,.7),vec(-1,0),vec(-.7,-.7),vec(0,-1),vec(.7,-.7)];function Xy(){if(ticks||(Wn=[],Bn=0,ut=void 0,gl={pos:vec(50,50),angle:0},Ge=void 0),color("light_blue"),rect(0,0,99,6),rect(0,93,99,6),rect(0,6,6,87),rect(93,6,6,87),(ticks&&input.isJustPressed||!gl.pos.isInRect(9,9,82,82))&&(Ge==null&&input.isJustPressed&&(play("powerUp"),Ge={pos:vec(gl.pos),angle:gl.angle,multiplier:1}),gl.pos.clamp(9,90,9,90),gl.angle=wrap(gl.angle+2,0,8)),gl.pos.add(vec(vd[gl.angle]).mul(difficulty*.2)),color("black"),char(Ge==null?"a":"b",gl.pos,{rotation:gl.angle/2}),Ge!=null&&(Ge.pos.isInRect(9,9,82,82)?(Ge.pos.add(vec(vd[Ge.angle]).mul(difficulty*1.5)),char("c",Ge.pos,{rotation:Ge.angle/2})):Ge=void 0),Bn<=0&&(Me={pos:vec(rnd(9,90),rnd()<.5?-3:103),angle:0,speed:rnd(1,difficulty)*.2,ticks:rnd(999),count:rndi(5,9)},rnd()<.5&&Me.pos.swapXy(),Me.angle=Me.pos.x>99?4:Me.pos.y>99?6:Me.pos.x<0?0:2,Bn=rnd(60,90)/difficulty),Me.ticks+=Me.speed,Me.count<=0&&Bn--,ut!=null&&ut.pos.isInRect(3,3,94,94)&&(ut=void 0),Me.count>0&&ut==null){play("laser");const l={pos:vec(Me.pos),angle:Me.angle,speed:Me.speed,ticks:Me.ticks,isAppearing:!0};Wn.push(l),ut=l,Me.count--}Wn=Wn.filter(l=>{const e=vd[l.angle];if(l.pos.add(e.x*l.speed,e.y*l.speed),l.isAppearing)l.isAppearing=!l.pos.isInRect(9,9,81,81);else{let n=0;(l.pos.x<9||l.pos.x>90)&&n++,(l.pos.y<9||l.pos.y>90)&&n++,n===1?(l.angle=wrap(l.angle+3,0,8),l.pos.clamp(9,90,9,90)):n===2&&(l.angle=wrap(l.angle+4,0,8),l.pos.clamp(9,90,9,90))}l.ticks+=l.speed;let t=wrap(l.ticks,0,8);const i=t<4?5*t/5-2:5*(8-t)/5-2,s=vec(3,0).rotate(l.angle*PI/4+PI/2),o=vec(i,0).rotate(l.angle*PI/4);color("red"),box(vec(l.pos).add(s).add(o),2,2),box(vec(l.pos).sub(s).sub(o),2,2),color("green");const r=box(l.pos,5,5).isColliding.char;return r.c?(play("coin"),addScore(Ge.multiplier,l.pos),particle(l.pos,9,sqrt(Ge.multiplier)),Ge.multiplier++,l===ut&&(ut=void 0),!1):((r.a||r.b)&&(play("explosion"),end()),!0)})}const yk=Object.freeze(Object.defineProperty({__proto__:null,characters:Uy,description:Yy,options:Ny,title:Fy,update:Xy},Symbol.toStringTag,{value:"Module"})),Vy="CIRCLE W",Gy=`
[Hold] Expand
`,Ky=[],Qy={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Jn,Hn,Vs,ft,Gs,qi;function Zy(){ticks||(Jn=[{pos:vec(200,50),radius:10,type:"player"}],Hn=0,Vs=30,ft=1,qi=1,Gs=vec()),input.isJustPressed&&play("laser"),ft<9&&qi>1&&qi--,ft+=sqrt(difficulty)*(input.isPressed?1:-1)*.5,ft<1&&(ft=1);let l;remove(Jn,i=>{if(i.pos.add(Gs),i.pos.y=wrap(i.pos.y,-15,115),i.type==="player"){l=i;return}return i.pos.x<-i.radius}),color("green");const e=l.pos;arc(e,ft),e.x<20&&(e.x=20);let t=!1;if(Jn.forEach(i=>{i.type!=="player"&&(color(i.type==="danger"?"red":"blue"),arc(i.pos,i.radius).isColliding.rect.green&&(i.type==="danger"?(play("explosion"),end()):t||(play("coin"),qi+=ceil(ft),addScore(qi,i.pos),i.type="player",ft=i.radius,t=!0,l.pos.x=-99,l.type="normal")))}),Hn+=Gs.x,Hn<0){let i=vec(),s;const o=Vs===0?"danger":"normal";color("transparent");for(let r=0;r<9;r++){s=rnd(8,15),i.set(200+s,rndi(99));const n=box(i,s*(o==="danger"?8:5),s*2.5).isColliding.rect;if(!(n.blue||n.red)){Jn.push({pos:i,radius:s,type:o}),Vs--,Vs<0&&(play("hit"),Vs=rndi(24,30)),Hn=5;break}}}Gs.set(-sqrt(difficulty),(50-e.y)*.1),e.x>20&&(Gs.x-=(e.x-20)*.1),color("black"),text(`x${qi}`,3,9)}const hk=Object.freeze(Object.defineProperty({__proto__:null,characters:Ky,description:Gy,options:Qy,title:Vy,update:Zy},Symbol.toStringTag,{value:"Module"})),e1="CLEAN ROBO",l1=`
[Hold] Speed up
`,t1=[],i1={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5},kf=10;let Re,on,nt,Ks,Wi;function s1(){ticks||(Re={pos:vec(90,50),angle:0,vx:1,speed:1},on=times(2,()=>({poss:times(3,()=>vec()),dist:50,angle:0})),Mn(0,!0),Mn(1,!0),Wi=1,Ks=void 0),o1();const l=4;Ks!=null&&(color("red"),box(Ks,l)),nt!=null&&(color("yellow"),box(nt,l)),input.isJustPressed&&play("select"),input.isPressed?Re.speed+=.3:(Re.angle+=.05*difficulty,Re.speed+=(1-Re.speed)*.2,Wi>1&&(Wi-=.1)),Re.pos.x+=Re.vx*Re.speed*difficulty*.2;let e=!1,t=!1;color("light_black");const i=times(3,s=>{const o=vec(kf).rotate(Re.angle+PI*2/3*s).add(Re.pos);return bar(o,5,3,ticks*.7+s),o});if(color("black"),times(3,s=>{const o=line(i[s],i[wrap(s+1,0,3)]);o.isColliding.rect.purple&&(e=!0),o.isColliding.rect.yellow&&(t=!0)}),text(`x${ceil(Wi)}`,3,9),t&&(play("powerUp"),addScore(ceil(Wi),nt),Wi+=10,nt=void 0),(Re.pos.x-100)*Re.vx>0&&e){Re.vx*=-1,Ks=void 0,nt!=null?(play("explosion"),Ks=vec(nt),Re.speed=1,color("red"),particle(nt)):play("click");const s=(-Re.vx+1)/2;on[s].dist=clamp(on[s].dist+(nt==null?-10:20),30,100),Mn(s,!0);const o=(Re.vx+1)/2;Mn(o,!1)}}function Mn(l,e){const t=on[l],i=e?rnds(PI/7):t.angle,s=kf*1.7;t.poss.forEach((r,n)=>{r.set(s),l==0?r.rotate(i+PI-PI*2/3*(n-1)).add(100-t.dist,50):r.rotate(i-PI*2/3*(-n+1)).add(100+t.dist,50)}),t.angle=i;const o=t.poss[1];nt=vec(o.x-7*(l*2-1),(o.y-50)*.5+50)}function o1(){on.forEach(l=>{color("purple");const e=l.poss,t=e[1];(t.x<0||t.x>199)&&(color("red"),play("random"),end()),line(e[0].x,0,e[0]),line(e[0],e[1]),line(e[1],e[2]),line(e[2],e[2].x,99)})}const gk=Object.freeze(Object.defineProperty({__proto__:null,characters:t1,description:l1,options:i1,title:e1,update:s1},Symbol.toStringTag,{value:"Module"})),r1="CLOCK TURRET",n1=`
[Hold]
 Stop and Shoot
`,c1=[],a1={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let cl,Dn,Bi,Ln,Fn,md,bd,Yn;function p1(){ticks||(cl={angle:-PI/2,angleVel:1,shootTicks:0},Dn=[],Bi=[],Ln=0,md=[],Fn=0,bd=[],Yn=1),color("light_black");const l=vec();if(times(12,e=>{l.set(50,50).addWithAngle(-PI/2+(e+1)*PI*2/12,25).sub(e>=9?3:0,0),text(`${e+1}`,l)}),color("blue"),remove(Dn,e=>(e.pos.addWithAngle(e.angle,sqrt(difficulty)*3),bar(e.pos,4,2,e.angle),!e.pos.isInRect(-5,-5,110,110))),color("black"),input.isJustPressed&&(play("select"),cl.angleVel*=-1),input.isPressed?(cl.shootTicks+=difficulty,cl.shootTicks>7&&(play("hit"),cl.shootTicks-=7,Dn.push({pos:vec(50,50).addWithAngle(cl.angle,12),angle:cl.angle}),Dn.push({pos:vec(50,50).addWithAngle(cl.angle,-5),angle:cl.angle+PI}))):cl.angle+=difficulty*cl.angleVel*.1,bar(50,50,20,3,cl.angle,.2),color("blue"),box(50,50,5),Fn-=difficulty,Fn<0&&Bi.length>0){const e=Bi[rndi(Bi.length)],t=vec(e.pos).addWithAngle(e.angle,e.speed*45/difficulty),i=wrap(t.angleTo(50,50)-e.angleToCenter,-PI,PI);t.isInRect(5,5,90,90)&&abs(i)>PI*.07&&(e.bulletTicks=45,Fn=rnd(45,60))}if(color("yellow"),remove(bd,e=>(e.pos.addWithAngle(e.angle,difficulty),box(e.pos,6).isColliding.rect.black?(play("coin"),Yn++,!0):!e.pos.isInRect(-5,-5,110,110))),Ln-=difficulty,Ln<0){const e=rnd(PI*2),t=e+PI/2*(rndi(2)*2-1),i=rnd(30,40),s=vec(50,50).addWithAngle(t,-i).addWithAngle(e+PI,60);Bi.push({pos:s,angle:e,angleToCenter:t,speed:rnd(1,difficulty)*.5,bulletTicks:0,wasInScreen:!1}),Ln=rnd(50,90)}remove(Bi,e=>{if(e.pos.addWithAngle(e.angle,e.speed),e.bulletTicks>0){wrap(e.pos.angleTo(50,50)-e.angleToCenter,-PI,PI),e.bulletTicks-=difficulty,color("light_red");const t=e.bulletTicks/6+1;bar(e.pos,100,t,e.angleToCenter,0),e.bulletTicks<=0&&(play("laser"),md.push({pos:vec(e.pos),angle:e.angleToCenter,speed:difficulty*9}))}if(color("purple"),bar(e.pos,7,5,e.angleToCenter).isColliding.rect.blue)return play("powerUp"),particle(e.pos),addScore(Yn),bd.push({pos:e.pos,angle:e.angleToCenter}),!0;if(!e.wasInScreen&&e.pos.isInRect(0,0,100,100)&&(e.wasInScreen=!0),e.wasInScreen&&!e.pos.isInRect(-5,-5,110,110))return!0}),color("red"),remove(md,e=>(e.pos.addWithAngle(e.angle,e.speed),bar(e.pos,e.speed*1.2,4,e.angle).isColliding.rect.black&&(play("explosion"),end()),!e.pos.isInRect(-5,-5,110,110))),color("black"),text(`x${Yn}`,3,9)}const xk=Object.freeze(Object.defineProperty({__proto__:null,characters:c1,description:n1,options:a1,title:r1,update:p1},Symbol.toStringTag,{value:"Module"})),d1="COUNTER B",u1=`
[Hold] Beam
`,f1=[],y1={theme:"pixel",viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let kd,Un,k,R,Nn,Qs;function h1(){ticks||(k={pos:vec(20,60),speed:0,beamLength:0,baseX:30,invincibleTicks:0},kd=[],Un=9,R={pos:void 0,radius:0,enemy:void 0},Qs=1,Nn=0);const l=(k.pos.x-k.baseX)*.1;k.baseX+=(30-k.baseX)*.001,k.pos.x<0&&(play("explosion"),k.pos.x=0,end()),color("yellow"),rect(0,90,200,10),Nn=wrap(Nn-l,0,200),color("white"),rect(Nn,90,2,10);const e=4*sqrt(difficulty);if(k.speed+=((input.isPressed?.2:2)*sqrt(sqrt(difficulty))-k.speed)*.2,k.pos.x+=k.speed-l,R.pos==null?input.isPressed?(k.beamLength<=0&&(play("select"),color("cyan"),particle(k.pos,20,3,0,.3)),k.beamLength=clamp(k.beamLength+e,0,300)):k.beamLength=0:(k.beamLength=R.pos.x-k.pos.x,k.beamLength<0&&R.enemy!=null&&(R.enemy.beamLength=-9999,R.enemy=void 0)),k.beamLength>0&&(color("light_cyan"),rect(k.pos.x,k.pos.y-1,k.beamLength,3),color("cyan"),box(k.pos.x+k.beamLength,k.pos.y,5)),R.pos!=null&&(R.pos.x-=l,color("purple"),arc(R.pos,R.radius,6,ticks*.1,ticks*.1+PI*2),particle(R.pos,1,R.radius*.1),R.enemy==null?(R.radius-=sqrt(difficulty)*2,R.radius<1&&(R.pos=void 0)):(R.radius=clamp(R.radius+(input.isPressed?1:-2)*sqrt(difficulty),0,30),R.radius<1&&(R.enemy!=null&&(R.enemy.beamLength=-9999),R.pos=void 0))),Un--,Un<0){const t=rnd()<.6?vec(rnd(150,300),-5):vec(205,rnd(85)),i=rnd()<.05?vec(k.pos.x+9,k.pos.y):vec(t.x-rnd(30,150),k.pos.y);kd.push({pos:t,angle:t.angleTo(i),speed:rnd(1,sqrt(difficulty)),beamLength:-rnd(sqrt(difficulty)*20)}),Un=rnd(30,40)/difficulty}remove(kd,t=>{if(t.pos.addWithAngle(t.angle,t.speed),t.pos.x-=l,R.enemy===t&&R.pos!=null?(t.beamLength=t.pos.distanceTo(R.pos),t.speed*=.8):(t.beamLength+=e*.2,t.beamLength-e*.3<0&&t.beamLength>=0&&(play("laser"),color("red"),particle(t.pos,9,3,t.angle,.5))),t.beamLength>0){color("light_red");const s=vec(t.pos).addWithAngle(t.angle,t.beamLength);line(t.pos,s),color("red");const o=box(s,5).isColliding.rect;R.pos==null&&o.cyan&&(play("powerUp"),Qs=1,R.pos=vec(k.pos.x+k.beamLength,k.pos.y),R.enemy=t,R.radius=1,color("purple"),particle(R.pos,30,5)),R.enemy!==t&&(o.purple||s.y>90||s.x<-99)&&(t.beamLength=-9999)}color("black"),bar(vec(t.pos).addWithAngle(t.angle+PI/5*4,3),1,2,t.angle);const i=bar(t.pos,2,3,t.angle).isColliding.rect;return i.purple||i.light_cyan?(i.purple?(play("coin"),addScore(Qs,t.pos),Qs<64&&(Qs*=2)):play("hit"),particle(t.pos),R.enemy===t&&(R.enemy=void 0),!0):(t.beamLength<-999&&(t.speed<1&&(t.speed+=(1-t.speed)*.1),t.angle>0&&(t.angle+=(PI-t.angle)*.05)),t.pos.x<-5)}),color(k.invincibleTicks>0&&k.invincibleTicks%10<5?"transparent":"blue"),box(vec(k.pos).addWithAngle(-(PI/5)*4,3),3,2),k.invincibleTicks--,box(k.pos,5,3).isColliding.rect.light_red&&k.invincibleTicks<0&&!(R.pos!=null&&R.pos.distanceTo(k.pos)<R.radius+9)&&(play("explosion"),particle(k.pos,50,4),k.baseX-=10,k.pos.x-=10,k.invincibleTicks=60)}const vk=Object.freeze(Object.defineProperty({__proto__:null,characters:f1,description:u1,options:y1,title:d1,update:h1},Symbol.toStringTag,{value:"Module"})),g1="CYWALL",x1=`
[Tap] Move
`,v1=[],m1={theme:"shape",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let Zp,Xn,ed,Be;function b1(){ticks===0&&(Zp=[],Xn=0,ed=void 0,Be=void 0),Xn<=0&&(k1(),Xn+=rnd(20,40));let l=difficulty*.1;const e=Be.p.y;if(e<50&&(l+=(50-e)*.05),Xn-=l,addScore(l),Be.p.y>99&&(play("explosion"),end()),Zp=Zp.filter(t=>(t.p.y+=l,t.p.y>99+t.r?!1:(color(t===Be||t===Be.next?"cyan":"red"),box(t.p,3,3),color("red"),t.a+=t.v,range(t.num).forEach(i=>{const s=t.a+i*PI*2/t.num;bar(vec(t.p).addWithAngle(s,t.r),t.l,3,s+PI/2)}),!0))),color("cyan"),Be.next!=null&&input.isJustPressed){if(line(Be.p,Be.next.p,3).isColliding.rect.red)play("explosion"),end();else{play("coin");const t=vec(Be.p),i=vec(Be.next.p).sub(Be.p).div(9),s=i.angle;times(9,o=>{particle(t,4,2,s+PI,.5),t.add(i)})}Be=Be.next}else box(Be.p,5,5).isColliding.rect}function k1(){const l=rnd(20,30),e={p:vec(rnd(20,80),-l),r:l,num:rndi(1,4),a:rnd(PI*2),v:rnds(.02,.05)*difficulty,l:rnd(10,20),next:void 0};ed!=null&&(ed.next=e),Be==null&&(Be=e),ed=e,Zp.push(e)}const mk=Object.freeze(Object.defineProperty({__proto__:null,characters:v1,description:x1,options:m1,title:g1,update:b1},Symbol.toStringTag,{value:"Module"})),P1="DESCENT S",$1=`
[Hold] Thrust up
`,S1=[`
l cc
lllll
llllll
`,`
  ll
  ll
  ll
llllll
 llll
  ll
`,`
ll
  l
 l
lll
`],w1={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let E,Ji;function _1(){ticks||(E={pos:vec(9,9),vel:vec(.2),up:-2,down:2,nextUp:-3,nextDown:3},Ji=[{pos:vec(30,50),width:40},{pos:vec(50,75),width:35},{pos:vec(70,99),width:30}]),E.vel.y+=input.isPressed?E.up*.005:E.down*.005,input.isJustPressed&&play("coin"),input.isJustReleased&&play("laser"),E.pos.y+=E.vel.y,color(E.vel.y>1?"red":E.vel.y>.6?"yellow":"blue"),rect(1,20,3,E.vel.y*20),color("red"),rect(0,40,5,1);let l=0;E.pos.y>19?l=(19-E.pos.y)*.2:E.pos.y<9&&(l=(9-E.pos.y)*.2),E.pos.y+=l,Ji.forEach((t,i)=>{color(i===0?"black":"light_black"),t.pos.add(-E.vel.x,l),rect(t.pos,t.width,3),i===0&&(color("yellow"),rect(0,t.pos.y+3,t.pos.x+t.width,2),rect(t.pos.x+t.width,0,1,t.pos.y+5))}),color("black");const e=char("a",E.pos).isColliding.rect;if(e.black)if(E.vel.y>1)play("explosion"),end();else{const t=Ji.shift();play("powerUp"),addScore(floor(t.pos.x+t.width-E.pos.x+1),E.pos);const i=Ji[Ji.length-1];Ji.push({pos:vec(i.pos.x+i.width*.7+rnd(30),i.pos.y+rnd(20,40)),width:rnd(25,50)}),E.up=E.nextUp,E.down=E.nextDown,E.nextUp=floor(-difficulty*4+rnds(difficulty*3)),E.nextDown=floor(difficulty*4+rnds(difficulty*2)),E.vel.set(difficulty*.2,0)}(e.yellow||E.pos.y<0)&&(play("explosion"),end()),color(input.isPressed?"yellow":"cyan"),char("b",60,10,{mirror:{y:-1}}),color("black"),text(`${-E.up}m/s`,76-(-E.up>9?6:0),10),char("c",97,9),color(input.isPressed?"cyan":"yellow"),char("b",60,17),color("black"),text(`${E.down}m/s`,76-(E.down>9?6:0),17),char("c",97,16),text("NEXT",70,24),color("cyan"),char("b",60,31,{mirror:{y:-1}}),color("black"),text(`${abs(E.nextUp)}m/s`,76-(-E.nextUp>9?6:0),31),char("c",97,30),color("cyan"),char("b",60,38),color("black"),text(`${E.nextDown}m/s`,76-(E.nextDown>9?6:0),38),char("c",97,37)}const bk=Object.freeze(Object.defineProperty({__proto__:null,characters:S1,description:$1,options:w1,title:P1,update:_1},Symbol.toStringTag,{value:"Module"})),T1="D LASER",C1=`
[Tap]  Turn
[Hold] Stop
`,I1=[`
 ll
ll
 l
 ll
l
`,`
 ll
ll
 l
ll
  l
`,`
l l l
 lll
  l
 l l
l   l
`],R1={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let Zs,yt,Kt,ht,Pd,Vn,V,Hi;function E1(){ticks||(Zs=[],yt=0,Kt=0,ht=0,Pd=[],Vn=0,Hi=80,V={pos:vec(50,90),vx:1,ticks:0,dist:0});const l=sqrt(difficulty)*.05+(V.pos.y<Hi?(Hi-V.pos.y)*.1:0);if(Hi+=(80-Hi)*.001,Vn-=l,Vn<0){play("hit");const t=rndi(10)*10+5;Pd.push({pos:vec(t<50?0:99,15),tx:t}),Vn+=rnd(9,36)}remove(Pd,t=>(t.pos.y+=l,abs(t.pos.x-t.tx)<1?(t.pos.x=t.tx,color("blue")):(t.pos.x+=(t.tx-t.pos.x)*.2,color("light_blue")),box(t.pos,8,4),color("black"),char("c",t.pos.x,t.pos.y+4),t.pos.y>99)),yt>10?(yt+=sqrt(difficulty)*9,Zs.length===0&&(play("powerUp"),Zs=times(10,t=>({pos:vec(t*10,10),isHit:!1}))),play("laser"),yt>199&&(play("coin"),addScore(ceil(V.dist*sqrt(V.dist)*sqrt(difficulty)*.1),V.pos),e())):(ht+=rnds(sqrt(difficulty))*1e-4,Kt+=ht,(Kt<0&&ht<0||Kt>sqrt(difficulty)*.2&&ht>0)&&(ht=-ht,Kt*=rnd(.2,1.5)),yt+=Kt),color("light_red"),rect(0,9,100,1),color("red"),rect(0,0,100,yt<10?yt:10),Zs.forEach(t=>{if(t.isHit)t.pos.y+=l;else if(t.pos.y+=sqrt(difficulty)*9,color("transparent"),rect(t.pos.x,10,10,t.pos.y).isColliding.rect.blue){t.isHit=!0;for(let i=0;i<99&&(t.pos.y--,!!rect(t.pos.x,10,10,t.pos.y).isColliding.rect.blue);i++);}color("red"),rect(t.pos.x,10,10,t.pos.y)}),input.isJustPressed&&(play("select"),V.vx*=-1),V.pos.y+=l,input.isPressed||(V.pos.x+=V.vx*sqrt(difficulty),(V.pos.x<0&&V.vx<0||V.pos.x>99&&V.vx>0)&&(V.vx*=-1),V.pos.x=clamp(V.pos.x,0,99),V.pos.y-=sqrt(difficulty)*.5,V.dist+=sqrt(difficulty)*.5,V.ticks+=sqrt(difficulty)),V.pos.y>99&&(play("lucky"),end()),color("black"),char(addWithCharCode("a",floor(V.ticks/20)%2),V.pos,{mirror:{x:V.vx}}).isColliding.rect.red&&(particle(V.pos,30,3),Hi+=7,V.pos.y+=7,play("explosion"),e());function e(){Zs=[],yt=0,Kt*=rnd(),ht*=rnd(),V.dist=0}}const kk=Object.freeze(Object.defineProperty({__proto__:null,characters:I1,description:C1,options:R1,title:T1,update:E1},Symbol.toStringTag,{value:"Module"})),A1="D MISSILE",O1=`
[Tap]  Launch
[Hold] Turn
`,z1=[],j1={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let Mi,eo,lo,Qt,Gn,Zt;const Ou=-PI/9*8,zu=vec(60,90);function q1(){if(ticks||(Mi=[],eo=0,lo=0,Qt=[],Gn=0,Zt=1),input.isJustPressed&&(play("select"),Gn=Qt.length===0?99:Qt.length>=3?0:9),Gn--,input.isJustReleased&&Gn>0&&(play("coin"),Qt.push({pos:vec(zu),angle:Ou,speed:.5*sqrt(difficulty)}),Zt*=.9,Zt<1&&(Zt=1)),remove(Qt,l=>(l.pos.addWithAngle(l.angle,l.speed),l.speed*=1.002,input.isPressed&&(l.angle+=l.speed*(l.speed<3*sqrt(difficulty)?.1:.01)),color("purple"),box(vec(l.pos).addWithAngle(l.angle,-3),5),color("blue"),bar(l.pos,3,3,l.angle),!l.pos.isInRect(-3,-3,106,93))),Qt.length<3&&(color("blue"),bar(zu,3,3,Ou)),color("light_black"),rect(0,90,100,10),Mi.length===0&&(eo=0),eo--,eo<0){const l=rndi(3,6);times(l,()=>{const e=vec(rnd(10,90),-rnd(5,25)),t=vec(rnd(1,sqrt(difficulty))*.1).rotate(e.angleTo(rnd(10,90),90)),i=rnd()<sqrt(difficulty)?ceil(rnd(300,400)/sqrt(difficulty)):999;Mi.push({pos:e,vel:t,from:vec(e),ticks:i,id:lo,isRemoving:!1}),lo++}),eo=150/sqrt(difficulty)*l}remove(Mi,l=>{if(l.isRemoving)return!0;if(l.ticks>0&&(l.pos.add(l.vel),l.ticks--,l.ticks===0)){play("hit");const e=rndi(2,5);times(e,t=>{const i=vec(l.pos),s=vec(l.vel.length).rotate(i.angleTo(rnd(10,90),90));Mi.push({pos:i,vel:s,from:vec(i),ticks:999,id:t===0?l.id:lo,isRemoving:!1}),lo++})}if(color("light_black"),line(l.from,l.pos,2),l.ticks>0&&(color("red"),box(l.pos,4).isColliding.rect.blue))return play("powerUp"),addScore(floor(Zt),l.pos),particle(l.pos),Zt+=1/clamp(Qt.length,1,99),Mi.forEach(e=>{e.id===l.id&&(e.isRemoving=!0)}),!0;l.pos.y>90&&(play("explosion"),end())}),color("black"),text(`x${floor(Zt)}`,3,9)}const Pk=Object.freeze(Object.defineProperty({__proto__:null,characters:z1,description:O1,options:j1,title:A1,update:q1},Symbol.toStringTag,{value:"Module"})),W1="D PISTOLS",B1=`
[Tap] Turn & Fire
[Hold] Cross Fire
`,J1=[`
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
`],H1={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let Ee,Di,Kn,Qn,to,$d,Sd,gt;function M1(){if(ticks||(Ee={pos:vec(50,20),my:1},Di=0,Kn=[],Qn=[],to=0,$d=50,Sd=1,gt=0),input.isJustPressed&&(play("laser"),Ee.my*=-1,times(2,l=>{Kn.push({pos:vec(Ee.pos.x,Ee.pos.y+Ee.my),angle:l*PI})}),gt=clamp(gt-1,0,99)),input.isPressed?(Di+=difficulty,Di>30&&(play("select"),times(4,l=>{Kn.push({pos:vec(Ee.pos),angle:l*PI/2})}),Di=0,gt=clamp(gt-5,1,99))):Di=0,Ee.pos.y+=Ee.my*difficulty*(1-Di/30),(Ee.pos.y<0&&Ee.my<0||Ee.pos.y>99&&Ee.my>0)&&(Ee.my*=-1),color("black"),char(addWithCharCode("a",floor(ticks/15)%2),Ee.pos,{mirror:{x:Ee.my}}),remove(Kn,l=>(l.pos.addWithAngle(l.angle,difficulty*2),bar(l.pos,1,6,l.angle),!l.pos.isInRect(-3,-3,106,106))),Qn.length===0&&(to=0),to--,to<0){rnd()<.3&&($d=rnd(9,90),Sd*=-1);const l=vec(Sd,0);l.x*=rnd(1,difficulty)*.3,Qn.push({pos:vec(l.x>0?-3:103,$d),vel:l,ticks:0}),to=rnd(20,40)/difficulty}color("red"),remove(Qn,l=>{l.pos.add(l.vel),(l.pos.x>50&&l.vel.x>.1||l.pos.x<50&&l.vel.x<-.1)&&(l.pos.x=50,l.vel.y=Ee.pos.y<l.pos.y?-abs(l.vel.x):abs(l.vel.x),l.vel.x*=1e-4),l.ticks++;const e=char(addWithCharCode("c",floor(l.ticks/15)%2),l.pos,{mirror:{x:l.vel.x<0?-1:1}}).isColliding;if(e.rect.black)return play("hit"),gt=clamp(gt+1,0,99),addScore(gt,l.pos),particle(l.pos),!0;(e.char.a||e.char.b)&&(play("explosion"),end())})}const $k=Object.freeze(Object.defineProperty({__proto__:null,characters:J1,description:B1,options:H1,title:W1,update:M1},Symbol.toStringTag,{value:"Module"})),D1="EAROCK",L1=`
[Hold] Thrust
[Tap]  Turn
`,F1=[`
  ll
  ll
llllll
 llll
ll  ll
l    l
`],Y1={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let Ae,Nl,Oe,io,so,Zn,oo,ju;function U1(){ticks||(Ae=vec(50,20),Nl=vec(.1,0),Oe=0,io=[],so=0,Zn=!0,oo=1,ju=times(36,()=>({pos:vec(rnd(99),rnd(99))})));const l=vec(50,50),e=15,t=sqrt(difficulty);if(color("light_black"),ju.forEach(o=>{box(o.pos,1,1)}),color("blue"),arc(l,e-5,10),color("green"),arc(l.x+5,l.y-3,e*.2,e*.5),arc(l.x-7,l.y+4,e*.3,e*.5),color("red"),input.isJustPressed&&(play("hit"),Nl.mul(.5),Nl.addWithAngle(Oe,t*.1),particle(Ae,9,2,Oe+PI,.2)),input.isPressed?(Nl.addWithAngle(Oe,t*.01),particle(Ae,1,1,Oe+PI,.2)):Oe=i(Oe,l,.01),input.isJustReleased&&(Oe=i(Oe,l,.2),particle(Ae,5,1,l.angleTo(Ae),.2)),Nl.mul(.98),Ae.add(Nl.x*t,Nl.y*t),Ae.x<0&&s(0),Ae.x>99&&s(PI),Ae.y<0&&s(PI/2),Ae.y>99&&s(-PI/2),Ae.distanceTo(l)<e*1.1&&(play("select"),s(l.angleTo(Ae))),color("red"),bar(Ae,3,3,Oe-.2,1.4),bar(Ae,3,3,Oe+.2,1.4),color("black"),bar(Ae,5,3,Oe),so--,so<0){const o={pos:vec(l).addWithAngle(Zn?rnd(PI):rnd(PI*2),Zn?50:70),vel:vec()};Zn=!1,o.vel.addWithAngle(o.pos.angleTo(l)+rnds(1),.1+rnd(difficulty-1)*.1),io.push(o),so+=300/difficulty}color("yellow"),io=io.filter(o=>(o.pos.add(o.vel),o.vel.mul(1-.01/t),o.vel.addWithAngle(o.pos.angleTo(l),2e-4*t),char("a",o.pos).isColliding.rect.black?(play("coin"),addScore(oo,o.pos),oo++,!1):(o.pos.isInRect(-3,-3,103,103)||o.pos.add(o.vel.x*9,o.vel.y*9),o.pos.isInRect(-50,-50,150,150)?(o.pos.distanceTo(l)<e&&(play("explosion"),color("red"),text("X",o.pos),color("yellow"),end()),!0):!1))),io.length===0&&(so=0),color("black"),text(`+${oo}`,3,95);function i(o,r,n){let c=Ae.angleTo(r),a=wrap(o-c,-PI,PI);return abs(a)<n?c:a>0?o-n:o+n}function s(o){const r=wrap(Oe+PI-o,-PI,PI);abs(r)<PI/2&&(Oe=Oe+PI-r*2);const n=Nl.length;Nl.set(0,0).addWithAngle(Oe,n/2),oo=1}}const Sk=Object.freeze(Object.defineProperty({__proto__:null,characters:F1,description:L1,options:Y1,title:D1,update:U1},Symbol.toStringTag,{value:"Module"})),N1="ELASTIC HERO",X1=`
[Hold] Stretch & Aim
[Release] Launch
`,V1=[],G1={viewSize:{x:100,y:150},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let w,wd,xl;const qs=100,at=150,K1=.1,Q1=20;function Z1(){ticks||(w={pos:vec(qs/2,at-20),vel:vec(0,-1),angle:0,stretchLength:0},wd=qu(),xl=at),w.pos.add(w.vel),w.vel.y+=K1,w.vel.mul(w.pos.y<xl?.99:.9),input.isPressed?(w.stretchLength=Math.min(w.stretchLength+1,Q1),w.angle=(w.angle+.1)%(2*Math.PI)):(input.isJustReleased&&(play("powerUp"),w.vel=vec(w.stretchLength*.5,0).rotate(w.angle)),w.stretchLength=0),(w.pos.x<3&&w.vel.x<0||w.pos.x>qs-3&&w.vel.x>0)&&(w.vel.x*=-.8),w.pos.y<3&&(w.pos.y+=150,addScore(floor(xl),w.pos),xl+=at,wd=qu(),play("coin")),w.pos.y>at-3&&w.vel.y>0&&(w.vel.y*=-.8),xl>140&&(xl+=(140-xl)*.05),xl-=difficulty*.1,color("light_cyan"),rect(0,xl,qs,at-xl),xl<0&&(play("explosion"),end()),eh(),lh(),color("blue"),wd.forEach(l=>{box(l.pos,l.width,l.height).isColliding.rect.green&&(w.vel.y>0&&w.pos.y<l.pos.y?(w.vel.y*=-.8,w.pos.y=l.pos.y-l.height/2-3,play("click")):w.vel.y<0&&w.pos.y>l.pos.y&&(w.vel.y*=-.8,w.pos.y=l.pos.y+l.height/2+3,play("click")))})}function eh(){color("green"),arc(w.pos,5),w.stretchLength>0&&(color("black"),line(w.pos,vec(w.pos).add(vec(w.stretchLength,0).rotate(w.angle))))}function lh(){color("light_black"),rect(0,0,3,at),rect(qs-3,0,3,at),rect(0,at-3,qs,3)}function qu(){const l=[];for(let e=at-40;e>20;e-=20){const t=rnd(20,30);l.push({pos:vec(rnd(t/2,qs-t/2),e),width:t,height:7})}return l}const wk=Object.freeze(Object.defineProperty({__proto__:null,characters:V1,description:X1,options:G1,title:N1,update:Z1},Symbol.toStringTag,{value:"Module"})),th="FALL BOUNCE",ih=`
[Hold]
 Fall & Bounce
`,sh=[],oh={isPlayingBgm:!0,isReplayEnabled:!0,seed:1};let ln,Pe,ec;const Wu=15;function rh(){if(!ticks){ln=[];for(let l=0;l<2;l++)Bu();Pe={pos:vec(50,10),vx:1,width:10,targetY:void 0},ec=0}if(Pe.targetY!=null)Pe.pos.y+=(Pe.targetY-Pe.pos.y)*.2,abs(Pe.targetY-Pe.pos.y)<1&&(Pe.targetY=void 0);else{const l=input.isPressed?difficulty*1.5:difficulty*.25;Pe.pos.y+=l}if(Pe.pos.x=wrap(Pe.pos.x+Pe.vx,0,100),color(input.isPressed?"cyan":"light_black"),box(Pe.pos,Pe.width,3),Pe.pos.y>103&&(play("hit"),end()),ec--,ec<0){for(let l=0;l<2;l++)Bu();ec=ceil(rnd(40,60)/difficulty)}ln.forEach(l=>{l.pos.y+=difficulty*1,color("blue"),box(l.pos,l.width,5).isColliding.rect.cyan&&Pe.targetY==null&&(play("powerUp"),addScore(Pe.pos.y-10,l.pos),Pe.targetY=10)}),ln=ln.filter(l=>l.pos.y<103)}function Bu(){ln.push({pos:vec(rnd(100-Wu),-5),width:rnd(Wu,35)})}const _k=Object.freeze(Object.defineProperty({__proto__:null,characters:sh,description:ih,options:oh,title:th,update:rh},Symbol.toStringTag,{value:"Module"})),nh="FISH GRILL",ch=`
[Hold] Burn up
`,ah=[`
  l
l lll
llll l
llllll
l lll
  l
`],ph={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let $e,ei,_d,Ju;const dh=.1,uh=-1,Td=100,fh=50,yh=80,hh=10,gh=20;function xh(){ticks||($e={pos:vec(20,50),velocity:vec(0,-3),energy:Td,baseEnergy:Td},ei=[{pos:vec(100,50),width:15,isBurned:!1}],_d=[],Ju=vec(-1,0)),$e.velocity.y+=dh,$e.pos.add($e.velocity),$e.baseEnergy+=.1,$e.energy+=($e.baseEnergy-$e.energy)*.01;const l=1+$e.energy/Td*2;if(input.isPressed&&($e.velocity.y=uh,_d.push({pos:vec($e.pos.x,$e.pos.y+l),timeLeft:10})),input.isJustPressed&&play("select"),color("purple"),arc($e.pos,l),remove(_d,e=>{e.timeLeft--,color("red");for(let t=0;t<3;t++){const i=e.pos.x+rnd(-2,2),s=e.pos.y+rnd(0,5),o=rnd(1,3);line(i-o/2,s+o/2,i,s-o/2),line(i,s-o/2,i+o/2,s+o/2),line(i+o/2,s+o/2,i-o/2,s+o/2)}return e.timeLeft<=0}),remove(ei,e=>{e.pos.add(Ju),color(e.isBurned?"black":"cyan");const t=char("a",e.pos,{scale:{x:e.width/6},mirror:{x:-1}});return t.isColliding.rect.red&&($e.energy+=5,e.isBurned?addScore(floor($e.energy/100)):(play("powerUp"),addScore(floor($e.energy/10),e.pos),e.isBurned=!0)),t.isColliding.rect.purple&&(play("explosion"),end()),e.pos.x+e.width<0}),ei[ei.length-1].pos.x<100){play("click");const t=ei[ei.length-1].pos.x+rnd(fh,yh),i=rnd(10,90),s=rnd(hh,gh);ei.push({pos:vec(t,i),width:s,isBurned:!1})}($e.pos.y<-l||$e.pos.y>100+l)&&(play("explosion"),end())}const Tk=Object.freeze(Object.defineProperty({__proto__:null,characters:ah,description:ch,options:ph,title:nh,update:xh},Symbol.toStringTag,{value:"Module"})),vh="FLIPBOMB",mh=`
[Tap] Flip
`,bh=[],kh={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let lc,tc,ic,sc,oc,rc;function Ph(){if(ticks||(lc=[],tc=[],ic=[],sc=oc=0,rc=1),color("blue"),line(99,75,75,86),input.isJustPressed?(play("laser"),line(70,89,50,80),rc=1):line(70,89,50,98),color("purple"),ic=ic.filter(l=>{let e=l.a;const t=l.t<20?l.t*.5:20*.5-(l.t-20),i=l.t===0?10:t+3;return times(5,s=>{box(vec(l.p).addWithAngle(e,t),i,i),e+=PI*2/5}),l.t++,l.a+=.2,l.t<30}),oc-=difficulty,oc<0&&(lc.push({p:vec(99,70),v:vec(-1,.5).mul(difficulty),s:0}),oc=60),lc=lc.filter(l=>(l.p.add(l.v),color(l.s===0?"blue":"cyan"),l.s===0?l.p.x<70?input.isJustPressed&&(l.v.set(2,-4).rotate((l.p.x-70)*.06),l.s=1):l.p.x<50&&(l.s=1):particle(l.p,1,l.v.length,l.v.angle+PI,.1),box(l.p,3,3).isColliding.rect.purple?!1:l.p.isInRect(0,0,99,99))),sc-=difficulty,sc<0){const l=vec(rnd(80),0),e=vec(rnd(20,70),70).sub(l).div(500/rnd(1,difficulty));tc.push({p:l,v:e}),sc+=rnd(30,50)}tc=tc.filter(l=>{l.p.add(l.v),color("red");const e=box(l.p,5,5).isColliding.rect;return e.cyan||e.purple?(play("hit"),ic.push({p:l.p,t:0,a:rnds(PI)}),color("purple"),particle(l.p,16,3),addScore(rc,l.p),rc++,!1):((l.p.y>99||e.blue)&&(play("explosion"),end()),!0)})}const Ck=Object.freeze(Object.defineProperty({__proto__:null,characters:bh,description:mh,options:kh,title:vh,update:Ph},Symbol.toStringTag,{value:"Module"})),$h="FLIP O",Sh=`
[Tap] Flip
`,wh=[],_h={theme:"shapeDark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:3};let Xl,xt,ro,no;const Li=2,nc=12,co=vec(9,5),Th=8;function Ch(){ticks||(Xl=[{pos:vec(80,10),pp:vec(80,10),vel:vec(1,0),angle:rnd(PI*2),multiplier:1}],xt=0,ro=[],no=0);let l=0;ro.forEach(r=>{color(r.hasBall?"red":"cyan"),box(r.pos,co),r.pos.y>l&&(l=r.pos.y)});let e=l<29?(30-l)*.1:sqrt(difficulty)*.02;input.isJustPressed&&(play("laser"),e+=sqrt(difficulty)*.3*Xl.length,xt=(xt+1)%2),color("light_cyan"),rect(5,0,90,5),color("light_blue"),rect(0,0,5,99),rect(95,0,5,99),color("blue");let t=bar(7,75,25,3,.5,0).isColliding.rect;t={...t,...bar(94,75,25,3,PI-.5,0).isColliding.rect},color("purple");const i=xt===0?.5:-.5;t={...t,...bar(33,88,nc,3,i,0).isColliding.rect};const s=xt===0?PI+.5:PI-.5;for(t={...t,...bar(68,88,nc,3,s,0).isColliding.rect},(t.cyan||t.red)&&(color("red"),bar(7,75,25,3,.5,0),bar(94,75,25,3,PI-.5,0),play("explosion"),end()),input.isJustPressed&&(xt===0?bar(68,88,nc,3,PI,0):bar(33,88,nc,3,0,0)),remove(Xl,r=>{r.pp.set(r.pos),r.pp.y+=e,r.vel.y+=.1,r.vel.mul(.99),r.pos.add(vec(r.vel).mul(sqrt(difficulty)*.5)),r.pos.y+=e,r.angle+=r.vel.x*.03+r.vel.y*.02,color("black");const n=arc(r.pos,Li,3,r.angle,r.angle+PI*2).isColliding.rect;if(n.red||n.cyan){addScore(r.multiplier*Xl.length,r.pos),r.multiplier++,color("transparent");const c=arc(r.pp.x,r.pos.y,Li).isColliding.rect,a=arc(r.pos.x,r.pp.y,Li).isColliding.rect;c.red||c.cyan||o(r,r.vel.x>0?-PI:0),a.red||a.cyan||o(r,r.vel.y>0?-PI/2:PI/2)}if(n.light_cyan&&(play("hit"),o(r,PI/2,"light_cyan")),n.light_blue&&(play("hit"),o(r,r.pos.x<50?0:PI,"light_blue")),n.blue&&o(r,r.pos.x<50?.5-PI/2:PI-.5+PI/2,"blue"),n.purple)if(input.isJustPressed){play("jump");const c=vec(r.pos),a=xt===1?.5:-.5,y=xt===1?PI+.5:PI-.5;o(r,r.pos.x<50?a-PI/2:y+PI/2,"purple"),o(r,-PI/2,"purple"),o(r,r.pos.x<50?i-PI/2:s+PI/2,"purple"),r.vel.add(vec(r.pos).sub(c)),r.multiplier=1}else o(r,r.pos.x<50?i-PI/2:s+PI/2,"purple");if(r.pos.y>99+Li)return play("select"),!0}),Xl.length===0&&(play("explosion"),end()),Xl.forEach(r=>{Xl.forEach(n=>{n===r||n.pos.distanceTo(r.pos)>Li*2||o(r,n.pos.angleTo(r.pos))})}),color("transparent"),remove(ro,r=>{if(r.pos.y+=e,box(r.pos,co).isColliding.rect.black)return r.hasBall?(play("powerUp"),Xl.push({pos:vec(r.pos),pp:vec(r.pos),vel:vec(1,0).rotate(PI*2),angle:rnd(PI*2),multiplier:1})):play("coin"),!0}),no-=e;no<0;){let r=(co.x+1)/2;const n=-no,c=.1/Xl.length;for(let a=0;a<Th/2;a++)rnd()<.5&&(ro.push({pos:vec(50-r,n),hasBall:rnd()<c}),ro.push({pos:vec(50+r,n),hasBall:rnd()<c})),r+=co.x+1;no+=co.y+1}function o(r,n,c){const a=wrap(r.vel.angle-n-PI,-PI,PI);if(abs(a)<PI/2&&r.vel.addWithAngle(n,r.vel.length*cos(a)*1.7),c!=null){color("transparent");for(let y=0;y<9&&(r.pos.addWithAngle(n,1),!!arc(r.pos,Li).isColliding.rect[c]);y++);}}}const Ik=Object.freeze(Object.defineProperty({__proto__:null,characters:wh,description:Sh,options:_h,title:$h,update:Ch},Symbol.toStringTag,{value:"Module"})),Ih="FLOORS 5",Rh=`
[Tap]  Jump / Double Jump
[Hold] Fly
`,Eh=[`



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
`],Ah={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let cc;const ac=["red","green","blue","yellow","purple"];let u,pc,ao;function Oh(){ticks||(cc=times(5,s=>({pos:vec([25,52,105,160,220][s],[30,50,70,60,40][s]),width:[10,35,30,30,50][s],index:s,paintFrom:0,paintTo:0})),u={pos:vec(10,10),vel:vec(1,0),floor:void 0,by:0,bvy:0,fallTicks:-99,jumpCount:0},pc=times(5,()=>!1),ao=1),cc.forEach((s,o)=>{s.pos.x+s.width<0&&(s.pos.set(rnd(200,250),rnd(30,90)),s.width=rnd(20,60),s.paintFrom=s.paintTo=0),color(ac[o]),s.pos.x-=u.vel.x,rect(s.pos,s.width,6),color("white"),rect(s.pos.x+1,s.pos.y+1,s.width-2,4),color(ac[o]),rect(s.pos.x+s.paintFrom,s.pos.y+1,s.paintTo-s.paintFrom,4)}),u.vel.x+=difficulty*.02,u.floor==null&&(u.vel.y+=input.isPressed?.03:.18),u.pos.y+=u.vel.y,u.bvy-=u.by*.1,u.by+=u.bvy,u.by*=.9,u.fallTicks--,color("black");const l=char("a",u.pos.x,clamp(u.pos.y,0,999)).isColliding.rect,e=char("b",u.pos.x,u.pos.y+u.by).isColliding.rect;u.floor==null?(ac.forEach((s,o)=>{(l[s]||e[s])&&(u.vel.y>=0?(play("select"),u.floor=cc[o],u.pos.y=u.floor.pos.y-3,u.vel.y=0,u.vel.x=sqrt(difficulty),u.floor.paintFrom=clamp(u.pos.x-5-u.floor.pos.x,0,999),u.jumpCount=0,pc[o]=!0):(play("hit"),u.pos.y=cc[o].pos.y+9-u.by,u.vel.y*=-.7))}),u.floor==null&&(u.fallTicks>-9||u.jumpCount<2)&&input.isJustPressed&&(play("jump"),u.vel.y=-2,u.vel.x=sqrt(difficulty),u.bvy=-2,u.jumpCount++)):input.isJustPressed?(play("jump"),i(u.floor),u.floor.pos.x=-999,u.floor=void 0,u.vel.y=-2,u.vel.x=sqrt(difficulty),u.bvy=-2,u.jumpCount++):u.floor.pos.x+u.floor.width<u.pos.x-3?(i(u.floor),u.floor.pos.x=-999,u.floor=void 0,u.vel.x=sqrt(difficulty),u.fallTicks=0,u.jumpCount=0):u.floor.paintTo=clamp(u.pos.x+5-u.floor.pos.x,0,u.floor.width);let t=!0;pc.forEach((s,o)=>{color(ac[o]),char(s?"c":"d",o*7+3,96),t=s&&t}),t&&(play("coin"),ao++,pc=times(5,()=>!1)),ao>1&&(color("black"),text(`x${ao}`,45,96)),u.pos.y>99&&(play("explosion"),end());function i(s){play("powerUp");const o=s.paintTo-s.paintFrom,r=o>=s.width?3:1;let n=s.pos.y-(r>1?7:0);const c=clamp(floor(o)*ao,0,999);for(let a=0;a<r;a++)addScore(c,s.pos.x+s.width+15,n),n+=7}}const Rk=Object.freeze(Object.defineProperty({__proto__:null,characters:Eh,description:Rh,options:Ah,title:Ih,update:Oh},Symbol.toStringTag,{value:"Module"})),zh="FOOT LASER",jh=`
[Tap] Jump / Double jump
      Descent
`,qh=[`
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
  ll
 l  l
 l  l
`,`
  lll
ll l l
 llll
 l  l
ll  ll
`,`
ll
 ll
 ll l
llllll


`,`

    l
llllll
 ll
 ll
ll
`],Wh={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:4},Vl=90,Hu=2;let z,po,Fi,dc,uc,Yi,fc;function Bh(){ticks||(z={pos:vec(20,50),vy:0,jumpCount:9,isOnFloor:!1,multiplier:1,shots:[],nextShotTicks:0},po=[],Fi=0,dc=rnd(300,400),uc=rnd(200,300),Yi=0,fc=0);const l=sqrt(difficulty);if(fc+=l,color("light_black"),rect(Yi,Vl,210,9),rect(Yi+212,Vl,210,9),Yi-=l,Yi<-209&&(Yi+=212),z.isOnFloor||(z.vy+=(input.isPressed?.1:.3)*l,z.pos.y+=z.vy,z.pos.y>Vl&&(play("hit"),z.pos.y=Vl,z.isOnFloor=!0,z.jumpCount=0,z.multiplier=1),z.nextShotTicks--,z.nextShotTicks<0&&(z.shots.push(vec(z.pos.x+2,z.pos.y+9)),z.nextShotTicks+=rnd(4,9))),input.isJustPressed&&(z.jumpCount===Hu?(play("laser"),z.vy+=9*sqrt(l)):z.jumpCount<Hu&&(play("jump"),z.vy=-3*sqrt(l),z.isOnFloor=!1),z.jumpCount++),color("black"),char(addWithCharCode("a",floor(fc/15)%2),z.pos.x+3,z.pos.y-3),z.isOnFloor||(color("light_blue"),rect(z.pos.x+2,z.pos.y,2,Vl-z.pos.y)),color("purple"),remove(z.shots,e=>{if(e.y>Vl)return particle(z.pos.x+3,Vl,3,3,-PI/2,PI/7),!0;rect(e,2,-9),e.y+=6}),Fi--,dc--,uc--,Fi<0){const e=-rnd(1,2)*l;po.push({pos:vec(200,Vl),vx:e,isFlying:!1}),Fi=rnd(30,60)/difficulty}if(dc<0){const e=-rnd(1,2)*l,t=rndi(3,6);times(t,i=>{po.push({pos:vec(200,Vl-i*6),vx:e,isFlying:!1})}),dc=rnd(100,600)/difficulty,Fi+=9/difficulty}if(uc<0){const e=-rnd(1,2)*l,t=rndi(1,5),i=vec(206,rnd(50,80));times(t,()=>{po.push({pos:vec(i),vx:e,isFlying:!0}),i.x+=7}),uc=rnd(100,400)/difficulty,Fi+=9/difficulty}color("red"),remove(po,e=>{e.pos.x+=e.vx;const t=char(addWithCharCode(e.isFlying?"e":"c",floor(fc/20)%2),e.pos.x+3,e.pos.y-3,{mirror:{x:-1}}).isColliding;return t.rect.light_blue?(play("coin"),addScore(z.multiplier,e.pos.x+z.multiplier*2,e.pos.y),particle(e.pos.x+2,e.pos.y,3,2,-PI/2,PI),z.multiplier++,!0):((t.char.a||t.char.b)&&(play("explosion"),rewind()),e.pos.x<-6)})}const Ek=Object.freeze(Object.defineProperty({__proto__:null,characters:qh,description:jh,options:Wh,title:zh,update:Bh},Symbol.toStringTag,{value:"Module"})),Jh="FRACAVE",Hh=`
[Hold]
 Accelerate
`,Mh=[],Dh={viewSize:{x:100,y:150},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:6};let de,Ui,uo,yc;function Lh(){if(ticks||(de={pos:vec(40,75),angle:0,speed:1,noReflectionDistance:0},Ui=[...l(20,0,20,150,3),...l(80,0,80,150,3)],uo=1,yc=150),yc+=uo,yc>=150){yc=0;const e=l(20,-150,20,0,3),t=l(80,-150,80,0,3);Ui.push(...e,...t)}input.isJustPressed&&play("click"),input.isPressed?de.speed+=(2-de.speed)*.3:de.speed+=(.1-de.speed)*.3,de.pos.addWithAngle(de.angle,de.speed*difficulty),de.noReflectionDistance-=de.speed*difficulty,Ui.forEach(e=>{e.y1+=uo,e.y2+=uo}),color("cyan"),bar(de.pos,7,3,de.angle),color("black"),Ui.forEach(e=>{if(line(e.x1,e.y1,e.x2,e.y2).isColliding.rect.cyan&&de.noReflectionDistance<0){const t=vec(e.x2-e.x1,e.y2-e.y1),i=vec(-t.y,t.x).normalize(),s=vec(Math.cos(de.angle),Math.sin(de.angle)),o=s.x*i.x+s.y*i.y,r=vec(s.x-2*o*i.x,s.y-2*o*i.y);de.angle=Math.atan2(r.y,r.x),de.speed=.2,addScore(1,de.pos),de.pos.addWithAngle(de.angle,7),play("hit"),de.noReflectionDistance=9}}),de.pos.isInRect(0,0,100,150)||(play("explosion"),end()),uo=difficulty,Ui=Ui.filter(e=>e.y1<170);function l(e,t,i,s,o){if(o===0)return[{x1:e,y1:t,x2:i,y2:s}];const r=(e+i)/2,n=(t+s)/2,c=rnds(10),a=rnds(5);return[...l(e,t,r+c,n+a,o-1),...l(r+c,n+a,i,s,o-1)]}}const Ak=Object.freeze(Object.defineProperty({__proto__:null,characters:Mh,description:Hh,options:Dh,title:Jh,update:Lh},Symbol.toStringTag,{value:"Module"})),Fh="FROOOOG",Yh=`
[Hold]    Bend
[Release] Jump
`,Uh=[],Nh={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Ni,fo,hc,yo,$;function Xh(){ticks||(Ni=[],hc=[],yo=90,fo=0,times(3,()=>i(!0)),times(7,()=>i()),times(99,()=>t()),$={y:95,py:0,targetY:0,state:"stop",isSafe:!0});let l=difficulty*.02;if($.y<90&&(l+=(90-$.y)*.1),$.y>103&&(play("explosion"),end()),Ni.forEach(s=>{s.y+=l}),hc.forEach(s=>{s.pos.y+=l}),yo+=l,yo>-50&&i(),$.y+=l,$.py+=l,$.targetY+=l,t(),$.state==="stop"&&(e(),input.isPressed&&(play("select"),$.state="bend",$.targetY=$.y-3)),$.state==="bend"){$.targetY-=sqrt(difficulty)*.7,color("light_black"),rect(49,$.targetY,1,$.y-$.targetY),e();let s=$.targetY;for(let o=0;o<Ni.length;o++){const r=Ni[o];r.y>$.targetY&&(s=r.y-5)}color("light_black"),box(50,s,3,5),(input.isJustReleased||$.targetY<9)&&(play("powerUp"),$.state="jump",$.targetY=s,$.py=$.y)}if($.state==="jump"){$.y-=sqrt(difficulty)*1.5;const s=sin(($.y-$.targetY)/($.py-$.targetY)*PI)+1;if(e(s),$.y<$.targetY){play("hit"),color("transparent"),$.y=$.targetY;const o=box(50,$.y,1).isColliding.rect.light_green,r=o||$.isSafe?0:ceil(($.py-$.y-1)/10);addScore(r*r,50,$.y),$.state="stop",$.isSafe=o}}function e(s=1){const o=$.y;color("green");const r=box(50,o,3*s,5*s).isColliding.rect;s===1&&(r.red||r.yellow||r.purple||r.blue||r.cyan)&&(play("explosion"),end());const n=2*s,c=2*s*s,a=2*s,y=3*s;box(50-n,o-c,a,y),box(49+n,o-c,a,y),box(50-n,o+c,a,y),box(49+n,o+c,a,y)}function t(){remove(Ni,s=>(s.ticks>999?(color("light_green"),box(50,s.y+5,100,9)):(color("light_black"),box(50,s.y,100,1)),s.ticks--,s.ticks<0&&(hc.push({pos:vec(s.vx<0?99+s.width/2:-s.width/2,s.y+5),vx:s.vx,width:s.width,color:s.color}),s.ticks=s.interval*rnd(.9,1.6)),s.y>99)),remove(hc,s=>(s.pos.x+=s.vx,color(s.color),box(s.pos,s.width,7),s.pos.x<-s.width||s.pos.x>99+s.width||s.pos.y>103))}function i(s=!1){fo--;const o=sqrt(difficulty)+.1,r=(rnd(o)*rnd(o)*rnd(o)+1)*.3*(rnd()<.5?-1:1),n=rndi(9,19),c=n+rnd(40,90)/abs(r);Ni.push({y:yo,vx:r,width:n,color:["red","purple","yellow","blue","cyan"][rndi(5)],interval:c,ticks:fo<0||s?9999999:rnd(c/2)}),yo-=10,fo<0&&(fo=rndi(9,16))}}const Ok=Object.freeze(Object.defineProperty({__proto__:null,characters:Uh,description:Yh,options:Nh,title:Fh,update:Xh},Symbol.toStringTag,{value:"Module"})),Vh="GEOCENT",Gh=`
[Hold]
 Speed up & Turn
`,Kh=[],Qh={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let gc,J,Mu;function Zh(){if(!ticks){let i=.03;gc=times(9,s=>(i*=.7,{cPos:vec(),radius:s*4,angle:rnd(PI*2),av:i,size:[3,1,1,2,1,1,1,1,1][s],color:["yellow","red","red","cyan","red","red","red","red","red"][s],pos:vec()})),J={angle:0,va:0,dist:void 0,speed:0,posHistory:[],crates:[]},Mu=times(20,()=>vec(rnd(99),rnd(99)))}color("light_black"),Mu.forEach(i=>{box(i,1)}),gc.forEach(i=>{i.angle+=i.av*difficulty,i.cPos.set(50,50).addWithAngle(i.angle,i.radius)});let l=gc[3].cPos;if(gc.forEach(i=>{i.pos.set(i.cPos).sub(l).add(50,50),color(i.color),arc(i.pos,i.size)}),J.dist==null){J.angle=(rndi(4)+.3+rnd(.4))*PI/2,J.dist=abs(sin(J.angle*2))*25+36,J.speed=0,J.posHistory=[];const i=J.crates.length+1;J.crates=times(i,s=>(s+1)*9)}input.isJustPressed&&(play("select"),J.speed+=difficulty),J.speed+=((input.isPressed?5:1)*difficulty*.1-J.speed)*.5,J.dist-=J.speed,J.va+=((input.isPressed?.03:-.003)*difficulty-J.va)*.05,J.angle+=J.va;const e=vec(50,50).addWithAngle(J.angle,J.dist);J.posHistory.unshift(vec(e)),color("black"),remove(J.crates,i=>{const s=i>=J.posHistory.length?e:J.posHistory[i],o=box(s,2).isColliding.rect;if(o.red||o.yellow)return play("hit"),particle(s),!0}),color("red"),particle(e,1,J.speed*3,J.angle,.5),color("blue"),bar(vec(e).addWithAngle(J.angle,2),2,3,J.angle+PI/2),color("black");const t=bar(e,1,3,J.angle).isColliding.rect;t.cyan?(play("coin"),addScore(J.crates.length,e),J.dist=void 0):(t.red||t.yellow)&&(play("explosion"),end())}const zk=Object.freeze(Object.defineProperty({__proto__:null,characters:Kh,description:Gh,options:Qh,title:Vh,update:Zh},Symbol.toStringTag,{value:"Module"})),eg="G PRESS",lg=`
[Tap] Press
`,tg=[],ig={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let g,Cd,xc,vc,ho,vl,mc,ml;const Xi=20;function sg(){if(ticks||(g={y:30,vy:1,width:80,vw:0},Cd=[],xc=0,vc=[],ho=0,vl=mc=ml=70),g.vw!==0?(g.width+=g.vw*5*sqrt(difficulty),g.width<0&&(play("explosion"),g.width=0,g.vw=.5),g.width>80&&(g.width=80,g.vw=0)):(g.y+=g.vy*sqrt(difficulty),(g.y<Xi/2&&g.vy<0||g.y>vl-Xi/2&&g.vy>0)&&(g.vy*=-1),input.isJustPressed&&(play("select"),mc=ml=vl+12,g.vw=-1)),color(g.vw<0||g.width===0?"red":"black"),rect(50-g.width/2,g.y-Xi/2,-5,Xi),rect(50+g.width/2,g.y-Xi/2,5,Xi),(g.vw<0||g.width===0)&&(color("purple"),rect(1,g.y,1,99),rect(1,g.y,44-g.width/2,1),rect(98,g.y,1,99),rect(98,g.y,-(44-g.width/2),1)),color("black"),rect(0,g.y-1,1,99),rect(2,g.y+1,1,99),rect(0,g.y-1,45-g.width/2,1),rect(2,g.y+1,43-g.width/2,1),rect(99,g.y-1,1,99),rect(97,g.y+1,1,99),rect(99,g.y-1,-(45-g.width/2),1),rect(97,g.y+1,-(43-g.width/2),1),xc--,xc<0){const l=rnd(5,9);Cd.push({pos:vec(rnd(20+l,80-l),vl+l/2),vel:vec(0,-rnd(1,2)/l*difficulty),size:l}),ml+=l*.03,xc+=rnd(10,50)/difficulty}if(color("purple"),remove(Cd,l=>{if(l.pos.add(l.vel),box(l.pos,l.size).isColliding.rect.red){if(l.size>g.width)return play("hit"),times(ceil(l.size),()=>{vc.push({pos:vec(l.pos.x+rnds(l.size/2),l.pos.y+rnds(l.size/2)),vel:vec()})}),!0;l.pos.x=l.pos.x<50?50-g.width/2+l.size/2:50+g.width/2-l.size/2}return l.pos.y<-l.size/2}),color("light_purple"),remove(vc,l=>{if(l.vel.y+=difficulty*.1,l.pos.add(l.vel),box(l.pos,2),l.pos.y>vl+1)return ho=9/difficulty,play("laser"),ml-=.35,!0}),ho>0&&(ho--,ho<=0&&mc>ml)){play("coin");const l=mc-ml;addScore(ceil(l*sqrt(l)),50,vl)}ml<50&&(ml+=(50-ml)*.05),vl+=(ml-vl)*.2,color("purple"),rect(0,vl,100,101-vl),g.vw===0&&vc.length===0&&vl>=100&&ml>=100&&(play("lucky"),end())}const jk=Object.freeze(Object.defineProperty({__proto__:null,characters:tg,description:lg,options:ig,title:eg,update:sg},Symbol.toStringTag,{value:"Module"})),og="GRAPPLING H",rg=`
[Tap] Release hook
      Hold anchor
`,ng=[],cg={viewSize:{x:100,y:150},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let j;const ag=4;let go;const pg=1;let xo;const Du=20;let vo,bc,kc;function dg(){ticks||(go=[vec(50,0)],j={pos:vec(30,30),vel:vec(),attachedAnchor:go[0]},xo=0,bc=!1,kc=!1),kc=input.isJustPressed;let l=.1*difficulty;for(j.pos.y<75&&(l+=(75-j.pos.y)*.1),xo+=l,vo+=l;xo>Du;)xo-=Du,go.push(vec(rnd(10,90),-5+xo));let e=null,t=25;if(go.forEach(i=>{const s=j.pos.distanceTo(i);j.attachedAnchor==null&&s<t&&(e=i,t=s)}),remove(go,i=>(i.y+=l,color(i===e?"red":"black"),arc(i,pg).isColliding,i===e&&(color("red"),line(j.pos,i,1),bc&&input.isPressed&&(play("coin"),j.attachedAnchor=i,vo>0&&addScore(ceil(sqrt(vo*vo)*.1),i),kc=!1)),i.y>155)),color("blue"),j.pos.add(j.vel),j.vel.mul(1-abs(j.vel.length)*.001),j.vel.y+=.1,j.pos.y+=l,(j.pos.x<0&&j.vel.x<0||j.pos.x>100&&j.vel.x>0)&&(play("hit"),j.vel.x*=-.8),j.attachedAnchor!=null){j.attachedAnchor.y>150&&(play("explosion"),end());const i=j.pos.distanceTo(j.attachedAnchor),s=j.pos.angleTo(j.attachedAnchor),o=i;j.vel.addWithAngle(s,o*.01),line(j.pos,j.attachedAnchor,2),kc&&(play("jump"),j.attachedAnchor.set(0,999),j.attachedAnchor=null,j.vel.addWithAngle(s,o*.2),vo=0,bc=!1)}else j.pos.y>150&&j.vel.y>0&&(play("explosion"),end());arc(j.pos,ag,2).isColliding,input.isJustReleased&&(bc=!0)}const qk=Object.freeze(Object.defineProperty({__proto__:null,characters:ng,description:rg,options:cg,title:og,update:dg},Symbol.toStringTag,{value:"Module"})),ug="GRAVELER",fg=`
[Hold]
 Reverse gravity
`,yg=[`
l
 lll
ll  ll
 ll
`],hg={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let Pc,ne,mo,bo;const Id=10;let $c,ko,Po,$o,Vi,So,Sc,wo;function gg(){ticks||(Pc=times(11,e=>({pos:vec(e*10,50),width:60})),ne={y:50,vy:0,w:60,wy:0},mo=10,bo=0,Po=0,$c=55,ko=0,$o=times(5,e=>({pos:vec(e*7+15,55),type:"coin"})),Vi=10,So=0,wo=1);const l=difficulty*.5;if(Pc.forEach(e=>{color("blue"),rect(e.pos.x,0,11,e.pos.y-e.width/2),rect(e.pos.x,e.pos.y+e.width/2,11,101-e.pos.y-e.width/2),color(input.isPressed?"purple":"cyan");for(let t=e.pos.y-e.width/2+Po;t<e.pos.y;t+=10)rect(e.pos.x,t,10,1);for(let t=e.pos.y+e.width/2-Po;t>e.pos.y;t-=10)rect(e.pos.x,t,10,1);if(Id>=e.pos.x&&Id<e.pos.x+10){let t=$c<e.pos.y?-1:1;input.isPressed&&(t*=-1.5),ko+=sqrt(difficulty)*t*.015}e.pos.x-=l}),Po=wrap(Po+difficulty*(input.isPressed?.25:-.16),0,10),mo-=l,mo<=0){const e=Pc[bo];bo=wrap(bo+1,0,11),ne.vy+=rnds(.2),ne.y+=ne.vy,ne.wy+=rnds(.2),ne.w+=ne.wy,ne.y-ne.w/2<20&&ne.vy<0&&(ne.vy+=1),ne.y+ne.w/2>80&&ne.vy>0&&(ne.vy-=1),ne.w<32&&ne.wy<0&&(ne.wy+=1),ne.w>60&&ne.wy>0&&(ne.wy-=1),e.pos.set(100+mo,ne.y),e.width=ne.w,mo+=10}if(color("black"),ticks<60&&(ko*=ticks/60),$c+=ko,ko*=.99,char("a",Id,$c).isColliding.rect.blue&&(play("explosion"),end()),input.isJustPressed?play("laser"):input.isJustReleased&&play("hit"),$o=$o.filter(e=>{if(e.type==="coin"){color("yellow");const t=text("o",e.pos).isColliding;if(t.char.a)return play("powerUp"),addScore(wo,e.pos),wo++,!1;if(t.rect.blue)return Sc+=Sc<50?10:-10,!1}else color("red"),text("x",e.pos).isColliding.char.a&&(play("explosion"),end());return e.pos.x-=l,e.pos.x<-3?(e.type==="coin"&&wo>1&&wo--,!1):!0}),Vi-=l,Vi<0){const e=Pc[wrap(bo-1,0,11)];So===0?($o.push({pos:vec(103,rnd(e.pos.y-10,e.pos.y+10)),type:"spike"}),So=rndi(3,7),Vi=rnd(40,60)*sqrt(difficulty),Sc=rnd()<.5?rnd(e.pos.y-e.width*.36,e.pos.y-e.width*.2):rnd(e.pos.y+e.width*.36,e.pos.y+e.width*.2)):($o.push({pos:vec(103,Sc),type:"coin"}),So--,So===0?Vi=rnd(40,60)*sqrt(difficulty):Vi=7)}}const Wk=Object.freeze(Object.defineProperty({__proto__:null,characters:yg,description:fg,options:hg,title:ug,update:gg},Symbol.toStringTag,{value:"Module"})),xg="GRAVITY WELL",vg=`
[Tap] Anti Gravity Pulse
`,mg=[],bg={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let T,wc,li,_c,_o,Lu,To;function kg(){if(ticks||(T={pos:vec(50,50),velocity:vec(0,0),radius:9},wc=0,li=[],_c=0,_o=[],Lu=times(20,()=>({pos:vec(rnd(0,100),rnd(0,100)),vx:-rnd(.1,.2)})),To=vec()),To.x=-.5*sqrt(difficulty),wc+=To.x,wc<0&&(addScore(floor(T.radius),T.pos),wc+=30),color("black"),Lu.forEach(t=>{t.pos.x+=t.vx,t.pos.x<0&&(t.pos.x+=100),box(t.pos,1)}),li.forEach(t=>{t.pos.add(To)}),_c+=To.x,_c<0){const t=rnd(5,9);li.push({pos:vec(100+t,rnd(10,90)),radius:t,strength:.1}),_c+=rnd(30,40)}remove(li,t=>t.pos.x<-10),T.pos.add(T.velocity);let l=T.pos.x+10;T.velocity.x+=1/l/l,l=110-T.pos.x,T.velocity.x-=1/l/l,l=T.pos.y+10,T.velocity.y+=1/l/l,l=105-T.pos.y,T.velocity.y-=1/l/l,T.velocity.mul(.99),li.forEach(t=>{let i=vec(t.pos).sub(T.pos),s=i.length;if(s>0){let o=t.strength/s;T.velocity.add(vec(i).normalize().mul(o))}}),input.isJustPressed&&T.radius>2&&(play("laser"),T.radius-=1,_o.push({pos:vec(T.pos),radius:0,strength:.5})),_o.forEach(t=>{t.pos.set(T.pos),t.radius+=1,li.forEach(i=>{let s=vec(i.pos).sub(t.pos),o=s.length;if(o<t.radius+i.radius){let r=t.strength/sqrt(o);T.velocity.add(vec(s).normalize().mul(-r)),i.pos.add(vec(s).normalize().mul(r))}})}),remove(_o,t=>t.radius>20),li.forEach(t=>{color("white"),box(t.pos,t.radius*2),color("purple"),arc(t.pos,t.radius)}),color("cyan"),_o.forEach(t=>{arc(t.pos,t.radius)}),color("yellow"),arc(T.pos,T.radius).isColliding.rect.purple?(play("hit"),T.radius-=.2):T.radius=clamp(T.radius+.05,1,9),T.radius<1&&(play("explosion"),end()),(T.pos.x<0&&T.velocity.x<0||T.pos.x>100&&T.velocity.x>0)&&(T.velocity.x*=-1),(T.pos.y<0&&T.velocity.y<0||T.pos.y>100&&T.velocity.y>0)&&(T.velocity.y*=-1)}const Bk=Object.freeze(Object.defineProperty({__proto__:null,characters:mg,description:vg,options:bg,title:xg,update:kg},Symbol.toStringTag,{value:"Module"})),Pg="GRENADIER",$g=`
[Tap]  Climb out
[Hold] Throw
`,Sg=[`
  ll
  l
 llll
 ll
  llll
ll   l
`,`
ll
l  ll
 ll
ll
  llll
ll   
`,`
  ll
  l
 lllll
l l
  llll
ll 
`,`
   ll
ll l
  lll
   l l
llll
    l
`,`
  ll
llll
  lll
 llll
l l ll
 llll
`,`
 llll
llll
 llll
`],wg={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let Gi,Ki,Co,Tc,Al,Gl,Qi,Cc,vt;function _g(){ticks||(Gi=[{x:10}],Ki=[],Tc=[],Cc=[],Al=10,Gl="in_hole",Co=0,vt=1);const l=(Al-10)*.05;if(color("black"),rect(0,70,200,9),color("white"),Gi=Gi.filter(e=>(e.x-=l,box(e.x,70,6,10).isColliding.char.e?!1:e.x>-4)),color("red"),Ki.forEach(e=>{char("e",e.x,67)}),color("black"),Cc=Cc.filter(e=>(e.pos.add(e.vel),e.vel.y+=.1*difficulty,text("o",e.pos).isColliding.char.e?!1:e.pos.y>68?(play("hit"),particle(e.pos,10,1,-PI/2,PI*.7),Gi.push({x:e.pos.x}),!1):!0)),Co--,Co<0){const e=rnd(sqrt(difficulty)-1)+1,t=300/(rnd(sqrt(difficulty))+1),i=rnd(sqrt(sqrt(difficulty))-1)+1;Ki.push({x:203,vx:.08*e,fireTicks:rnd(t),fireInterval:t,fireSpeed:.4*i}),Co=200/(rnd(sqrt(difficulty))+1)}if(Ki=Ki.filter(e=>(e.x-=e.vx*vt+l,color("transparent"),box(e.x,67,6,6).isColliding.text.o?(play("explosion"),color("red"),particle(e.x,67,20,2,-PI/2,PI*1.2),addScore(e.x,e.x,67),!1):(e.fireTicks--,e.x>150&&Gl!=="in_hole"&&e.fireTicks<0&&(play("laser"),e.fireTicks=e.fireInterval,Tc.push({x:e.x-5,vx:e.fireSpeed})),e.x>-4))),color("red"),Tc=Tc.filter(e=>(e.x-=e.vx*vt+l,char("f",e.x,65),e.x>-4)),Ki.length===0&&(Co*=.7),color("transparent"),Gi=Gi.filter(e=>!box(e.x,70,7,10).isColliding.char.e),color("black"),Al-=l,Gl==="in_hole")vt+=.05,input.isJustPressed?(Gl="running",Al+=6):(char("a",Al,72).isColliding.char.e&&(play("lucky"),end()),color("transparent"),box(Al+5,72,6,6).isColliding.rect.white&&Al++);else if(Gl==="running"){vt+=(1-vt)*.1,Al+=.8*sqrt(difficulty);const e=char(addWithCharCode("c",floor(ticks/30)%2),Al,67).isColliding;(e.char.e||e.char.f)&&(play("lucky"),end()),e.rect.white?Gl="in_hole":input.isJustPressed&&(Gl="throwing",Qi=0)}else if(Gl==="throwing"){vt+=(1-vt)*.1;const e=vec(Al,67);if(input.isJustReleased||Qi<-1)play("powerUp"),Cc.push({pos:vec(e),vel:vec((4-Qi*.5)*sqrt(difficulty),0).rotate(Qi)}),Gl="running";else{const t=char("b",e).isColliding.char;(t.e||t.f)&&(play("lucky"),end()),line(e,vec(e).add(vec(10,0).rotate(Qi)),2),Qi-=.02*sqrt(difficulty)}}}const Jk=Object.freeze(Object.defineProperty({__proto__:null,characters:Sg,description:$g,options:wg,title:Pg,update:_g},Symbol.toStringTag,{value:"Module"})),Tg="GROWTH",Cg=`
[Hold] Growth
`,Ig=[],Rg={theme:"pixel",viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let be,Rd,Ic;const Io=60;function Eg(){ticks||(be={x:9,vx:1,size:5},Rd=[],Ic=0);let l=be.x>9?(be.x-9)*.5:0;if(color("light_blue"),rect(0,Io,200,10),input.isJustPressed&&play("laser"),be.size+=((input.isPressed?50:5)-be.size)*clamp(be.vx,1,999)*.01,be.vx+=(15/be.size-1)*.02*sqrt(difficulty),be.x+=be.vx-l,be.x+be.size/2<1&&end(),color("yellow"),rect(0,Io,be.x+be.size/2,-be.size),Ic-=l,Ic<0){let e=rnd()<.8?3:rnd(5)*rnd(5)+3;e<7&&(e=3),Rd.push({x:400,size:e}),Ic+=rnd(30,50)}remove(Rd,e=>{e.x-=l,color(e.size>be.size?"red":"cyan");const t=e.x>100?(e.x-100)/300+1:1,i=e.size/t;if(rect(e.x/t,Io,i,-i).isColliding.rect.yellow){if(e.size>be.size)play("explosion"),end();else{play(e.size<5?"hit":"powerUp");const o=sqrt(e.size);particle(e.x,Io-e.size/2,o,o,0,PI/2),addScore(ceil(clamp(be.vx,1,999)*e.size),e.x,Io-be.size)}return!0}})}const Hk=Object.freeze(Object.defineProperty({__proto__:null,characters:Ig,description:Cg,options:Rg,title:Tg,update:Eg},Symbol.toStringTag,{value:"Module"})),Ag="HEXMIN",Og=`
[Tap] Roll
`,zg=[],jg={theme:"shape",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let Rc,Ec,Ac,Ro,mt;const Fu=[4,6,8,10,10,10],Yu=[49,42,33,22,11];function qg(){ticks||(Rc=times(6,()=>({value:0})),Ec=0,Ac=0,Ro=0,mt=1),input.isJustPressed&&(play("laser"),Ro=wrap(Ro+1,0,6),mt=ceil(mt*.9)-1,mt<1&&(mt=1));const l=vec();for(let t=0;t<6;t++){const i=wrap(t-Ro,0,6);l.set(50,50).addWithAngle(t*PI/3,Yu[4]),color(i===0||i===2?"red":"light_black"),e(l,Fu[4]/2)}if(Ec--,Ec<0){for(let t=0;t<6;t++){let i=Rc[t];i.value>0&&(play("hit"),i.value++,i.value>4&&(play("explosion"),end()))}if(Ac--,Ac<0){let t=rndi(6);for(let i=0;i<6;i++){const s=Rc[t];if(s.value===0){s.value=1;break}t=wrap(t+1,0,6)}Ac=floor(rnd(1+3/difficulty))}Ec+=30/sqrt(difficulty)}Rc.forEach((t,i)=>{for(let s=0;s<5&&!(t.value<=s);s++)l.set(50,50).addWithAngle(i*PI/3,Yu[s]),color(s<3?"green":"blue"),e(l,Fu[s]/2);if(t.value===4){const s=wrap(i-Ro,0,6);(s===0||s===2)&&(play("coin"),addScore(mt,50,50),mt+=6,t.value=0)}}),color("black"),text(`x${mt}`,3,9);function e(t,i){const s=vec(),o=vec();s.set(t).addWithAngle(5.5*PI/3,i);for(let r=0;r<6;r++)o.set(s),s.set(t).addWithAngle((r+.5)*PI/3,i),line(s,o,2)}}const Mk=Object.freeze(Object.defineProperty({__proto__:null,characters:zg,description:Og,options:jg,title:Ag,update:qg},Symbol.toStringTag,{value:"Module"})),Wg="HOLES",Bg=`
[Tap]
 Change holes
`,Jg=[],Hg={theme:"shape",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:2};let Kl,Zi,bt,Oc,zc,es,ti;const Eo=1,bl=.2,ls=12;function Mg(){ticks||(Kl=[{pos:vec(10,0),vel:vec(),angle:0}],Zi=[],bt={pos:vec(),wall:void 0},t(20,0),Oc=0,zc=0,es=0,ti=60),input.isJustPressed&&(play("laser"),zc=zc===0?1:0,ti-=sqrt(difficulty)*9),color("light_yellow"),rect(0,0,5,99),rect(95,0,5,99),color("yellow"),bt.pos.y-=es,addScore(es*Kl.length),line(bt.pos,bt.pos.x+1,bt.pos.y,7),remove(Zi,s=>(s.pos.y-=es,s.pos.y<9&&s.pos.y--,(s.index<0||s.index===zc)&&(color(`${s.pos.y<9?"light_":""}${s.angle===0?"green":"cyan"}`),bar(s.pos,s.length,4,s.angle===0?bl:PI-bl,0)),s.pos.y<-s.length*sin(bl)));let l=0;remove(Kl,s=>{s.vel.y+=.2*sqrt(difficulty),s.vel.mul(1-.02*sqrt(difficulty)),s.pos.add(vec(s.vel).mul(sqrt(difficulty)*.5)),s.pos.y-=es,s.pos.y<ti+20&&s.pos.y>l&&(l=s.pos.y),s.angle+=s.vel.x*.03+s.vel.y*.02,color("red");const o=arc(s.pos,Eo,3,s.angle,s.angle+PI*2).isColliding.rect;return o.yellow&&(play("coin"),addScore(Kl.length*10,s.pos),i(bt.wall)),o.light_yellow&&e(s,s.pos.x<50?0:PI,"light_yellow"),o.green&&e(s,bl-PI/2,"green"),o.cyan&&e(s,PI-bl+PI/2,"cyan"),s.pos.y>99+Eo?(play("hit"),!0):s.pos.y<-Eo}),es=l>ti?(l-ti)*.1:0,ti+=(60-ti)*.01,Kl.length===0&&(play("explosion"),end()),Kl.forEach(s=>{Kl.forEach(o=>{o===s||o.pos.distanceTo(s.pos)>Eo*2||e(s,o.pos.angleTo(s.pos))})});function e(s,o,r){const n=wrap(s.vel.angle-o-PI,-PI,PI);if(abs(n)<PI/2&&s.vel.addWithAngle(o,s.vel.length*cos(n)*1.7),r!=null){color("transparent");for(let c=0;c<9&&(s.pos.addWithAngle(o,1),!!arc(s.pos,Eo).isColliding.rect[r]);c++);}}function t(s,o){bt.pos.set(o===0?10:89,s);const r={pos:vec(o===0?7:93,s+9),length:9,angle:o,index:-1};Zi.push(r),bt.wall=r}function i(s){Kl.length<9&&Kl.push({pos:vec(rnd(30,70),0),vel:vec(0,sqrt(difficulty)),angle:rnd(PI*2)});const o=s.pos.y,r=s.angle,n=[],c=80,a=ls+9;for(let Bt=0;Bt<5;Bt++){const Jt=rnd(15,c-a/2-5);let Ht=!0;n.forEach(Sf=>{abs(Jt-Sf)<ls+9&&(Ht=!1)}),Ht&&n.push(Jt)}n.sort();const y=vec(r===0?7:93,o),x=r===0?bl:PI-bl;let Je;n.forEach(Bt=>{const Jt=Bt-ls/2-(Je==null?0:Je+ls/2)*(1/cos(bl));Zi.push({pos:vec(y),length:Jt-5,angle:r,index:-1}),y.addWithAngle(x,Jt);const Ht=ls*(1/cos(bl));Zi.push({pos:vec(y),length:Ht-5,angle:r,index:Oc}),rnd()<.7&&(Oc=Oc===0?1:0),y.addWithAngle(x,Ht),Je=Bt});const Ci=(c-(Je+ls/2))*(1/cos(bl));Zi.push({pos:vec(y),length:Ci-5,angle:r,index:-1}),s.pos.y=-99,t(o+80*sin(bl)+9,r===0?1:0)}}const Dk=Object.freeze(Object.defineProperty({__proto__:null,characters:Jg,description:Bg,options:Hg,title:Wg,update:Mg},Symbol.toStringTag,{value:"Module"})),Dg="IN TOW",Lg=`
[Tap] Multiple jumps
`,Fg=[`
 bbbb
bbblwb
bbbbyy
  bb
bbbb
  y y
`,`
 bbbb
bbblwb
bbbbyy
bbbb
 bbb
 y y
`,`


 yy
 yyl
yyyy
 yy
 y
`,`
 rrr l
rrrr l
rrrr l
rrrr l
rrrr l
 rrr l
`],Yg={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let H,kt,jc,Ed,qc,Ad,Wc,Bc;function Ug(){ticks||(H={pos:vec(64,32),vy:0,posHistory:[],isJumping:!0},kt=[],jc=[],Ed=[{pos:vec(90,70),width:90,hasChick:!1},{pos:vec(170,50),width:90,hasChick:!0}],qc=0,Ad=[],Wc=99,Bc=!1);const l=sqrt(difficulty);if(H.isJumping){kt.length>0&&input.isJustPressed&&(play("jump"),play("hit"),H.vy=-2*sqrt(difficulty),kt.shift(),jc.push({pos:vec(H.posHistory[2]),vy:0}));const t=vec(H.pos);H.vy+=(input.isPressed?.05:.2)*difficulty,H.pos.y+=H.vy;const i=vec(H.pos).sub(t).div(9);color("white"),times(9,()=>{t.add(i),box(t,6)})}else input.isJustPressed&&(play("jump"),H.vy=-2*sqrt(difficulty),H.isJumping=!0);if(color("black"),char(H.vy<0?"b":"a",H.pos),qc-=l,qc<0){const t=rnd(40,80);Ed.push({pos:vec(200+t/2,rndi(30,90)),width:t,hasChick:!0}),qc+=t+rnd(10,30)}remove(Ed,t=>{t.pos.x-=l,color("light_yellow");const i=box(t.pos,t.width,4).isColliding.rect;if(H.vy>0&&i.white&&(H.pos.y=t.pos.y-5,H.isJumping=!1,H.vy=0),t.hasChick){color("black");const s=char("c",t.pos.x,t.pos.y-5).isColliding.char;(s.a||s.b)&&(kt.length<30&&kt.push({index:0,targetIndex:0}),play("select"),addScore(kt.length,t.pos.x,t.pos.y-5),t.hasChick=!1)}return t.pos.x<-t.width/2}),H.posHistory.forEach(t=>{t.x-=l}),H.posHistory.unshift(vec(H.pos)),H.posHistory.length>99&&H.posHistory.pop(),color("transparent"),H.isJumping||box(H.pos.x,H.pos.y+4,9,2).isColliding.rect.light_yellow||(H.isJumping=!0),Wc-=l,Wc<0&&(Ad.push({pos:vec(203,rndi(10,90)),vx:rnd(1,difficulty)*.3}),Wc+=rnd(50,80)/sqrt(difficulty)),color("black"),remove(Ad,t=>{t.pos.x-=t.vx+l;const i=char("d",t.pos).isColliding.char;return i.a||i.b?(play("explosion"),kt.length>0?(Bc=!0,H.vy=3*sqrt(difficulty)):end(),!0):t.pos.x<-3}),color("black");let e=Bc;Bc=!1,remove(kt,(t,i)=>{t.targetIndex=3*(i+1),t.index+=(t.targetIndex-t.index)*.05;const s=H.posHistory[floor(t.index)];if(char("c",s).isColliding.char.d&&(play("powerUp"),e=!0),e)return jc.push({pos:vec(s),vy:0}),!0}),remove(jc,t=>(t.vy+=.3*difficulty,t.pos.y+=t.vy,char("c",t.pos,{mirror:{y:-1}}),t.pos.y>103)),color("black"),char(H.vy<0?"b":"a",H.pos),H.pos.y>99&&(play("explosion"),end())}const Lk=Object.freeze(Object.defineProperty({__proto__:null,characters:Fg,description:Lg,options:Yg,title:Dg,update:Ug},Symbol.toStringTag,{value:"Module"})),Ng="JUGGLING ACT",Xg=`
[Hold] Throw ball back
[Release] Move
`,Vg=[`
  lll
  lll
  ll
  ll
 llll
ll  ll
`],Gg={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ee,Os,Jc;const Uu=.02,Kg=2,Qg=.36;function Zg(){ticks||(ee={pos:vec(50,90),velX:0,state:"ready"},Os=[],Jc=0);const l=sqrt(difficulty);if(input.isJustPressed?(play("select"),ee.state="catch"):input.isJustReleased&&(ee.state="ready"),!input.isPressed){let t=ex();if(t){let i=t.pos.x>ee.pos.x?1:-1;ee.velX+=i*Qg}}ee.velX*=.85,ee.pos.x+=ee.velX*l,(ee.pos.x<5&&ee.velX<0||ee.pos.x>95&&ee.velX>0)&&(ee.velX*=-.5),color("blue");const e=ee.state==="catch"?-5:0;box(ee.pos.x-5,ee.pos.y+e,3,3),box(ee.pos.x+5,ee.pos.y+e,3,3),char("a",ee.pos,{mirror:{x:ee.velX>0?1:-1}}),color("red"),remove(Os,t=>{if(t.pos.add(vec(t.vel).mul(l)),t.vel.mul(.99),(t.pos.x<0&&t.vel.x<0||t.pos.x>100&&t.vel.x>0)&&(t.vel.x*=-1),t.state==="falling"?(t.vel.y+=Uu*l,ee.state==="catch"&&t.pos.y>ee.pos.y-8&&t.pos.y<ee.pos.y&&Math.abs(t.pos.x-ee.pos.x)<10&&(play("jump"),t.state="rising",t.vel.y=-Kg,t.vel.x=(t.pos.x-ee.pos.x)/10+rnds(.1),addScore(Os.length,t.pos))):(t.vel.y+=Uu*l,t.vel.y>=0&&(t.state="falling")),arc(t.pos,2),t.pos.y>100)return play("click"),!0}),Jc-=l,Jc<=0&&(play("laser"),Os.push({pos:vec(rnd(10,90),0),vel:vec(0,0),state:"falling"}),Jc=200),Os.length===0&&(play("explosion"),end())}function ex(){let l=null,e=1/0;return Os.forEach(t=>{if(t.state==="falling"){let i=Math.abs(t.pos.y-ee.pos.y);i<e&&(e=i,l=t)}}),l}const Fk=Object.freeze(Object.defineProperty({__proto__:null,characters:Vg,description:Xg,options:Gg,title:Ng,update:Zg},Symbol.toStringTag,{value:"Module"})),lx="JUMP ON",tx=`
[Tap] Jump on
`,ix=[`
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
llllll
l ll l
l ll l
llllll
 l  l
 l  l
  `,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`,`
  lll
ll l l
 llll
 l  l
ll  ll
`,`
 llll
l ll l
 llll
  ll
 l  l
 l  l
`,`


  ll
 l ll
 llll
  ll
`,`


llllll


`,`


ll  ll
  ll

`,`


l    l
 l  l
  ll
`,`

  ll
ll  ll


`,`
  ll
 l  l
l    l


`],sx={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:3};let Od,Ao,Hc,ts,Oo,Mc,v,zd,Dc;function ox(){ticks||(Od=[],Ao=0,Hc=0,ts=0,Oo=[{x:30,animTicks:99},{x:60,animTicks:99}],Mc=0,v={pos:vec(5,87),hole:void 0,state:"walk"},zd=[],Dc=1),color("light_yellow"),rect(0,90,100,10),times(5,e=>{rect(0,90-(e+1)*12,100,3)}),color("light_purple"),rect(0,10,100,10);let l=difficulty*.03;if(v.pos.x>15&&(l+=(v.pos.x-15)*.1),Mc-=l,Mc<0&&(Oo.push({x:104,animTicks:99}),Mc+=rnd(30,45)),remove(Oo,e=>{e.x-=l,color("white"),box(e.x,60,8,80),color("black"),e.animTicks+=difficulty;const t=e.animTicks<21?[1,2,1,0,3,4,3][floor(e.animTicks/3)]:0;return char(addWithCharCode("h",t),e.x,90),e.x<-4}),Hc--,Hc<0&&(ts=0,Ao=rndi(1,1+round(sqrt(difficulty)*2)),Hc=(Ao*8+rnd(100,110))/difficulty),ts--,ts<0&&(Od.push({pos:vec(103,87-rndi(6)*12),hole:void 0,state:"walk",nextDotsDist:rnd(6)}),Ao--,Ao===0?ts=9999:ts=rnd(8,10)/difficulty),color("red"),remove(Od,e=>{if(e.state==="walk")e.pos.x+=-difficulty-l,Oo.forEach(t=>{const i=e.pos.x-t.x;i<8&&i>0&&(play("laser"),e.state="jumpTo",e.hole=t)}),char("e",e.pos,{mirror:{x:-1}});else if(e.state==="jumpTo"){e.pos.x+=-difficulty-l;const t=e.pos.x-e.hole.x;e.pos.y+=t<4?1:-1,t<=0&&(e.state="down"),char("d",e.pos,{mirror:{x:-1}})}else if(e.state==="down")e.pos.x=e.hole.x,e.pos.y+=difficulty,e.pos.y>90&&(play("hit"),e.state="up",e.hole.animTicks=0),char("f",e.pos);else if(e.state==="up"){e.pos.x=e.hole.x,e.pos.y-=difficulty,e.pos.y<23&&(e.state="down");const t=e.pos.y-v.pos.y;t<1&&t>-9&&(e.state="jumpFrom",e.pos.y=ceil((e.pos.y-90)/12)*12+87),char("f",e.pos)}else if(e.state==="jumpFrom"){e.pos.x+=-difficulty-l;const t=e.hole.x-e.pos.x;e.pos.y+=t<4?-1:1,t>=8&&(play("laser"),e.state="walk",e.pos.y=round((e.pos.y-90)/12)*12+87,Dc=1),char("d",e.pos,{mirror:{x:-1}})}return e.state==="walk"&&(e.nextDotsDist-=difficulty,e.nextDotsDist<0&&(zd.push({pos:vec(e.pos)}),e.nextDotsDist+=6)),e.pos.x<-3}),color("black"),v.state==="walk")v.pos.x+=difficulty-l,Oo.forEach(t=>{const i=t.x-v.pos.x;i<8&&i>0&&(play("jump"),v.state="jumpTo",v.hole=t)}),char(addWithCharCode("a",floor(ticks/10)%2),v.pos).isColliding.char.e&&(play("explosion"),end());else if(v.state==="jumpTo"){v.pos.x+=difficulty-l;const e=v.hole.x-v.pos.x;v.pos.y+=e<4?1:-1,e<=0&&(v.state="down"),char("a",v.pos)}else if(v.state==="down")v.pos.x=v.hole.x,v.pos.y+=difficulty,v.pos.y>90&&(play("powerUp"),v.state="up",v.hole.animTicks=0),char("c",v.pos);else if(v.state==="up")v.pos.x=v.hole.x,v.pos.y-=difficulty,v.pos.y<23&&(v.state="down"),input.isPressed&&(play("jump"),v.state="jumpFrom",v.pos.y=ceil((v.pos.y-90)/12)*12+87),char("c",v.pos);else if(v.state==="jumpFrom"){v.pos.x+=difficulty-l;const e=v.pos.x-v.hole.x;v.pos.y+=e<4?-1:1,e>=8&&(v.state="walk",v.pos.y=round((v.pos.y-90)/12)*12+87),char("a",v.pos)}v.pos.x<0&&(play("explosion"),end()),color("yellow"),remove(zd,e=>{e.pos.x-=l;const t=char("g",e.pos).isColliding.char;return t.a||t.b?(play("coin"),addScore(Dc,e.pos),Dc++,!0):e.pos.x<-3})}const Yk=Object.freeze(Object.defineProperty({__proto__:null,characters:ix,description:tx,options:sx,title:lx,update:ox},Symbol.toStringTag,{value:"Module"})),rx="KITE",nx=`
[Hold] Blow wind
`,cx=[`
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
     l
lllll

llll
   
llllll
`,`
 yyyy
yY YYy
yY YYy
yY YYy
yY YYy
 yyyy
`],ax={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let A,ue,jd,Lc,qd,Fc,Yc,Wd,Nu,Uc;const Nc=50;function px(){ticks||(A={pos:vec(40,50),vel:vec()},ue={pos:vec(20,87),vel:vec(),ticks:0},Yc=0,jd=[],Lc=0,qd=[],Fc=0,Wd=[],Nu=times(2,s=>({yAngle:s*PI/2,hAngle:s*PI})),Uc=0);const l=sqrt(difficulty),e=A.pos.x>60?(A.pos.x-60)*.1:0;if(Uc-=e,Uc<0&&(addScore(1),Nu.forEach((s,o)=>{const r=sin(s.yAngle)*9+sin(s.hAngle)*20-10;s.yAngle+=rnd(l)*.2,s.hAngle+=rnd(l)*.4,r>0&&Wd.push({pos:vec(205,o===0?0:90),height:r*(o===0?1:-1)})}),Uc+=10),color("red"),remove(Wd,s=>(s.pos.x-=e,line(s.pos.x-5,s.pos.y,s.pos.x,s.pos.y+s.height),line(s.pos.x+5,s.pos.y,s.pos.x,s.pos.y+s.height),s.pos.x<-5)),input.isJustPressed&&play("select"),input.isPressed&&A.vel.add(difficulty*.2,-difficulty*.2),A.vel.y+=difficulty*.01,A.vel.mul(.95),A.pos.add(A.vel),A.pos.x-=e,A.pos.y<0?(A.pos.y=0,A.vel.y=0):A.pos.y>87&&(A.pos.y=87,A.vel.y=0),color("blue"),box(A.pos,6).isColliding.rect.red){const s=A.pos.y<50?1:-1;play("hit"),color("transparent");let o=0;for(;box(A.pos,6).isColliding.rect.red&&o<9;)A.pos.y+=3*s,o++;A.vel.y=sqrt(o)*s*2*l}color("light_black");let t=vec(A.pos.x-3,A.pos.y+3);line(t,vec(t).add(-A.vel.x*3,A.vel.y+9),2),t=vec(A.pos.x+3,A.pos.y+3),line(t,vec(t).add(-A.vel.x*3,A.vel.y+9),2),line(A.pos,ue.pos,2),ue.pos.add(ue.vel),ue.pos.x-=e,ue.pos.y<87?(ue.vel.y+=l*sqrt(99-ue.pos.y)*.01,ue.vel.x*=.95,ue.ticks=0):(ue.vel.y=0,ue.pos.y=87,ue.vel.x*=.9,ue.ticks++),color("black"),char(addWithCharCode("a",floor(ue.ticks/15)%2),ue.pos).isColliding.rect.red&&(play("explosion"),end());const i=ue.pos.distanceTo(A.pos);if(i>Nc){const s=ue.pos.angleTo(A.pos);ue.vel.addWithAngle(s,(i-Nc)*.05),A.vel.addWithAngle(s+PI,(i-Nc)*.01),A.pos.addWithAngle(s+PI,i-Nc)}for(Lc-=input.isPressed?3:1;Lc<0;)jd.push({pos:vec(-3,rnd(0,87)),vel:vec(rnd(1,2)*l*(input.isPressed?2:1),0)}),Lc+=30/l;color("light_cyan"),remove(jd,s=>(s.pos.add(s.vel),char("c",s.pos).isColliding.rect.blue?(play("hit"),A.vel.add(s.vel),!0):s.pos.x>203)),Fc-=e,Fc<0&&(qd.push({pos:vec(203,rnd(30,80)),vel:vec(rnd(1,l)*-.5,0)}),Fc+=rnd(199,299)),color("black"),remove(qd,s=>{s.pos.add(s.vel),s.pos.x-=e;const o=char("d",s.pos).isColliding;return o.rect.red?!0:o.char.a||o.char.b?(play("coin"),addScore(clamp(ceil(ue.vel.x*5),1,99)*50,s.pos),!0):(o.char.c&&s.pos.x++,s.pos.distanceTo(ue.pos)<24&&(s.vel.addWithAngle(s.pos.angleTo(ue.pos),l),s.vel.mul(.9)),!s.pos.isInRect(-3,-3,210,93))}),Yc=wrap(Yc-e,-9,209),color("light_black"),rect(0,90,200,10),color("white"),rect(Yc,90,2,10)}const Uk=Object.freeze(Object.defineProperty({__proto__:null,characters:cx,description:nx,options:ax,title:rx,update:px},Symbol.toStringTag,{value:"Module"})),dx="LADDER DROP",ux=`
[Tap] Drop
`,fx=[`
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
llllll
llllll
llllll
llllll
 l  l
 l  l
  `,`
llllll
llllll
llllll
llllll
ll  ll
  `,`
b    b
bbbbbb
b    b
b    b
bbbbbb
b    b
  `,`
LLLLLL
r rr r
r rr r

rr rr
rr rr
  `,`
b    b
bbbbbb
b    b
b    b
bbbbbb
b    b
  `,`
RRRRRR
rrrrrr
rrrrrr
rrrrrr
rrrrrr
rrrrrr
  `,`
 yyy
yYYYy
yYyYy
yYYYy
 yyy
  `],yx={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:9};let Bd,Xc,Jd,Vc,h,zo,Hd,ii,is,jo;const Xu=4;function hx(){ticks||(Bd=[{pos:vec(2,88),size:vec(16,2),lxs:[],state:"fix",hasCoin:!1}],Xc=1,Jd=50,Vc=Xu,t(),h={pos:vec(9,91),vx:1,state:"walk"},Hd=[],ii=is=0,jo=1,zo=0),color("light_blue"),rect(0,0,2,100),rect(98,0,2,100),color("black");let l=99;if(remove(Bd,i=>{if(i.state==="wait")i.pos.x+=Xc*sqrt(difficulty)*1.5,Jd=i.pos.x,i.pos.x<-9?(Xc*=-1,i.pos.x=-9):i.pos.x>109-i.size.x*6&&(Xc*=-1,i.pos.x=109-i.size.x*6),e(i),input.isJustPressed&&(play("select"),i.state="drop");else if(i.state==="drop"){i.pos.y+=6*sqrt(difficulty),color("transparent");let s=e(i);if(s.e||s.f){for(;s.e||s.f;)i.pos.y--,s=e(i);i.pos.y=floor(i.pos.y)+is%1,i.state="fix",i.hasCoin&&(i.hasCoin=!1,times(i.size.x,o=>{Hd.push(vec(i.pos.x+o*6+2,i.pos.y+2))})),t()}color("black"),e(i)}else i.state==="fix"&&(i.pos.y+=ii,color("black"),e(i),i.pos.y<l&&(l=i.pos.y));if(i.pos.y>99)return i.state==="drop"&&t(),!0}),color("black"),h.pos.y+=ii,h.state==="walk"||h.state==="downWalk"){h.pos.x+=h.vx*sqrt(difficulty)*.4;let i=char(addWithCharCode("a",floor(ticks/30)%2),h.pos,{mirror:{x:h.vx}}).isColliding.char;i.h&&(play("explosion"),end()),i.f||h.pos.x<5||h.pos.x>95?(play("laser"),h.vx*=-1,h.pos.x+=h.vx*2,zo++,zo>8&&(h.pos.x=clamp(h.pos.x,10,90),h.pos.y-=6,zo=0,h.state="drop")):zo=0,i.e?h.state==="walk"&&(h.state="up"):(h.state="walk",color("transparent"),i=char("a",h.pos.x,h.pos.y+6).isColliding.char,i.e||i.f||(h.state="drop"))}else if(h.state==="up"){play("hit"),h.pos.y-=sqrt(difficulty)*.3,color("transparent");let i=char("c",h.pos).isColliding.char;if(!i.e&&i.f)h.state="down";else if(!i.e){let s=h.pos.y;for(;i.e;)s++,i=char("c",h.pos.x,s).isColliding.char;h.pos.y=floor(s)+is%1,h.pos.x+=h.vx*sqrt(difficulty)*.5,h.state="walk"}color("black"),char(addWithCharCode("c",floor(ticks/30)%2),h.pos)}else if(h.state==="down"){play("hit"),h.pos.y+=sqrt(difficulty)*.4,color("transparent");let i=char("c",h.pos.x,h.pos.y+6).isColliding.char;if(!i.e&&i.f){let s=h.pos.y+6;for(;i.f;)s--,i=char("c",h.pos.x,s).isColliding.char;h.pos.y=floor(s)+is%1,h.state="downWalk"}color("black"),char(addWithCharCode("c",floor(ticks/30)%2),h.pos)}else{h.pos.y+=sqrt(difficulty)*.5,color("transparent");let i=char("a",h.pos).isColliding.char;if(i.e||i.f){let s=h.pos.y;for(;!(i.e||i.f);)s--,i=char("a",h.pos).isColliding.char;h.pos.y=floor(s-1)+is%1,h.state="walk"}color("black"),char("a",h.pos,{mirror:{x:h.vx}})}h.pos.y>99&&(play("explosion"),end()),color("black"),remove(Hd,i=>{i.y+=ii;const s=char("i",i).isColliding.char;if(s.a||s.b)return play("coin"),addScore(jo,i),jo++,!0;if(i.y>36&&(s.e||s.f))return!0;if(i.y>103)return jo>1&&jo--,!0}),ii=.01*difficulty,l<30&&(ii+=(30-l)*.1),is+=ii;function e(i){const s=i.state=="fix"?"e":"g",o=i.state=="drop"?"h":"f";let r,n=0,c={};return times(i.size.x,a=>{times(i.size.y,y=>{if(r=void 0,y===0&&i.hasCoin?r="i":y>=1&&n<i.lxs.length&&a===i.lxs[n]?r=s:y===1&&(r=o),r!=null){const x=char(r,i.pos.x+a*6+3,i.pos.y+y*6+3).isColliding.char;c={...c,...x}}}),a===i.lxs[n]&&n++}),c}function t(){const i=vec(rndi(4,8),rndi(3,6));let s=-1,o=rndi(1,5);const r=[];for(;s<i.x;)s+=o,r.push(s),s+=rndi(2,5);let n=!1;Vc--,Vc===0&&(Vc=Xu,n=!0),Bd.push({pos:vec(clamp(Jd,2,98-i.x*6),0),size:i,lxs:r,state:"wait",hasCoin:n})}}const Nk=Object.freeze(Object.defineProperty({__proto__:null,characters:fx,description:ux,options:yx,title:dx,update:hx},Symbol.toStringTag,{value:"Module"})),gx="LASER FORTRESS",xx=`
[Hold] Laser irradiation
`,vx=[`
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
`,`
  l
  l
ll ll
  l
  l
`,`
 l
l  l
lllll
l  l
 l
`],mx={theme:"pixel",viewSize:{x:160,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let Md,qo,Wo,Bo,Dd,Jo,si,Gc;function bx(){ticks||(Md=[],qo=0,Wo=5,Dd=-1,Bo="enemy",Jo=40,si=void 0,Gc=1),color("blue"),rect(0,50,200,10),color("light_cyan"),rect(0,7,14,22),char("f",17,8),input.isJustPressed&&(play("select"),si=Jo,Gc=1,color("blue"),particle(20,8,9,3,0,PI/8)),si!=null&&input.isPressed&&(play("laser"),color("blue"),line(si,50,20,8,2),si+=difficulty*2,particle(si,50,1,2,-PI/2,PI/6),color("purple"),box(si-2,50,5,1)),qo--,qo<0&&(Md.push({x:163,vx:difficulty*(Wo===Dd?2:1),ticks:rndi(99),type:Bo}),Wo--,Wo<0?(Wo=9-floor(sqrt(rnd(50))),qo=rnd(20,30)/difficulty,Bo==="ally"?Bo="enemy":rnd()<.3&&(Bo="ally"),Dd=rnd()<.5?-1:rndi(2)):qo=rnd(5,8)/difficulty);let l=200;remove(Md,e=>{if(e.x-=e.vx,e.type==="enemy"&&e.x<l&&(l=e.x),e.ticks++,color(e.type==="ally"?"blue":"red"),char(addWithCharCode(e.type==="ally"?"a":"c",floor(e.ticks/12)%2),e.x,47,{mirror:{x:-1}}).isColliding.rect.purple)return e.type==="ally"?(play("explosion"),end()):(play("hit"),particle(e.x,47),addScore(Gc,e.x,47),Gc++),!0;if(e.x<0)return e.type==="enemy"&&(play("explosion"),color("red"),text("X",3,47),end()),!0}),l<200&&(Jo+=(l-difficulty*3-5-Jo)*.3),color("black"),char("e",Jo,47)}const Xk=Object.freeze(Object.defineProperty({__proto__:null,characters:vx,description:xx,options:mx,title:gx,update:bx},Symbol.toStringTag,{value:"Module"})),kx="LEVITATION",Px=`
[Tap] Levitate / Fall
`,$x=[`
 lll
ll ll  
ll ll  
ll ll  
ll ll  
ll lll
`,`
 llll
ll  ll
ll  ll
ll  ll
ll  ll
 llll
  `],Sx={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let se,Ld,Kc,Qc;function wx(){ticks||(se={pos:vec(40,40),vel:vec(1,0),state:"crawl"},Ld=[{pos:vec(0,60),width:99}],Kc=0,Qc=1),input.isJustPressed&&(play("select"),se.state=se.state==="crawl"?"roll":"crawl",Qc=1),se.state==="crawl"?(se.vel.x=-.4*difficulty,se.vel.y=0):(se.vel.x=.2*difficulty,se.vel.y+=.2*sqrt(difficulty)),se.vel.y*=.99,se.pos.add(se.vel),se.pos.y<0&&se.vel.y<0&&(se.pos.y=0,se.vel.y*=-.3);const l=difficulty*.5;if(Kc-=l,Kc<0){const t=rnd(30,50);Ld.push({pos:vec(100,rnd(30,90)),width:t}),Kc=t+rnd(9)}(se.pos.y>100||se.pos.x<-3||se.pos.x>103)&&(play("explosion"),end()),color("green");const e=se.state==="crawl"?"b":"a";char(e,se.pos),color("light_black"),remove(Ld,t=>(rect(t.pos,t.width,5).isColliding.char.a&&se.vel.y>=0&&(play("jump"),addScore(Qc,se.pos),Qc++,se.pos.y=t.pos.y-3,se.vel.y*=-1.5),t.pos.x-=l,t.pos.x+t.width<0))}const Vk=Object.freeze(Object.defineProperty({__proto__:null,characters:$x,description:Px,options:Sx,title:kx,update:wx},Symbol.toStringTag,{value:"Module"})),_x="LIFT UP",Tx=`
[Hold]
 Go up fast
`,Cx=[`
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
l   l
llll
lll
llll
l   l
`,`
  ll
   ll   
llllll
   ll   
  ll
`,`
 llll
l llll
llll l
llll l
ll   l
 llll
`],Ix={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Ho,Pt,$t,De,Mo,Zc,ss,Do,Fd,Yd,os,ea,rs;function Rx(){ticks||(Ho=times(19,t=>({pos:vec(50,t*6-3),width:60})),Pt=0,$t=0,De={pos:vec(40,90),vx:1,ty:90},Mo=0,Zc=[],ss=Do=Fd=0,Yd=1,os=50,ea=60,rs=1),Mo+=((input.isPressed?1:0)-Mo)*.1;const l=difficulty*(1+Mo*3)*.2;if(Ho.forEach((t,i)=>{if(t.pos.y+=l,t.pos.y>110){t.pos.y-=Ho.length*6;const s=Ho[wrap(i-1,0,Ho.length)];os=t.pos.x=s.pos.x+Pt,ea=t.width=s.width+$t,Pt=clamp(Pt+rnds(1)*sqrt(difficulty),-5,5),$t=clamp($t+rnds(1)*sqrt(difficulty),-3,3),Pt*=.95,$t*=.95,(t.pos.x+t.width/2>95&&Pt>0||t.pos.x-t.width/2<5&&Pt<0)&&(Pt*=-.5),(t.width>80&&$t>0||t.width<40&&$t<0)&&($t*=-.5)}color("red"),char("c",t.pos.x-t.width/2,t.pos.y),char("c",t.pos.x+t.width/2,t.pos.y,{mirror:{x:-1}}),color("light_red"),rect(t.pos.x-t.width/2-2,t.pos.y-2,-70,5),rect(t.pos.x+t.width/2+2,t.pos.y-2,70,5)}),ss-=l,ss<0){if(Do>0)Zc.push({pos:vec(Fd,-3),type:"bonus"}),ss=6;else if(Do<0&&rnd()<.5)Do=rndi(2,6),Fd=os+rnds(ea*.25),ss=0;else{const t=os+rnd(.1,.4)*Yd*ea;rnd()<.8&&(Yd*=-1),Zc.push({pos:vec(t,-3),type:"turn"}),ss=rnd(10,20)}Do--}input.isJustPressed&&play("select"),De.pos.x+=De.vx*.05*difficulty*(4-Mo*3),De.ty-=sqrt(difficulty)*.04,De.pos.y+=(De.ty-De.pos.y)*.2,color("black");const e=char(addWithCharCode("a",floor(ticks/15)%2),De.pos,{mirror:{x:De.vx<0?-1:1}}).isColliding;(e.rect.light_red||e.char.c)&&(play("explosion"),end()),remove(Zc,t=>{if(t.pos.y+=l,t.type==="turn"){color("cyan");const i=char("d",t.pos,{mirror:{x:De.vx>0?-1:1}}).isColliding;if((i.rect.light_red||i.char.c)&&(t.pos.x+=t.pos.x>os?-1:1),i.char.a||i.char.b)return play("laser"),De.vx*=-1,!0}else{color("yellow");const i=char("e",t.pos).isColliding;if((i.rect.light_red||i.char.c)&&(t.pos.x+=t.pos.x>os?-1:1),i.char.a||i.char.b)return play("coin"),addScore(rs,t.pos),rs=clamp(rs+1,1,99),De.ty+=(99-De.ty)*.1,!0}if(t.pos.y>103)return t.type==="bonus"&&(rs=clamp(rs-1,1,99)),!0}),color("black"),rect(0,De.pos.y+3,100,6),De.pos.y<0&&(play("explosion"),end())}const Gk=Object.freeze(Object.defineProperty({__proto__:null,characters:Cx,description:Tx,options:Ix,title:_x,update:Rx},Symbol.toStringTag,{value:"Module"})),Ex="LIGHT DARK",Ax=`
[Tap] Jump
[Hold] Fly
`,Ox=[`
    ll
   l
  l
  ll
 l  l
l    l
`,`
  ll
  l
  l
  ll
  ll
 l  l
`,`
  ll
  ll
 llll
 llll
llllll
llllll
`],zx={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let Lo,la,ns,St,Fo,Yo,Ql,Uo,ta;function jx(){if(!ticks){Lo=[];for(let i=0;i<10;i++)Lo.push({x:i<5?25+i*9:99+i*9,type:"coin",side:i<5?"light":"dark"});la=[200,300],ns=["coin","spike"],St=vec(9,0),Ql="light",Fo=vec(2),Yo="ground",Uo=1,ta=0}const l=Fo.x*difficulty;color("light_black"),rect(0,50,200,50),Yo==="ground"?input.isJustPressed&&(Ql=Ql==="light"?"dark":"light",play(Ql==="light"?"jump":"laser"),Fo.y=3*sqrt(difficulty),St.y=7,Yo="jump",ta=0):(input.isJustPressed&&(play("hit"),Ql=Ql==="light"?"dark":"light"),Fo.y-=(input.isPressed?.1:.5)*difficulty,St.y+=Fo.y,St.y<0&&(St.y=0,Yo="ground"));const e=Ql==="light"?47-St.y:53+St.y;color(Ql==="light"?"black":"white");const t=Yo==="jump"?"b":addWithCharCode("a",floor(ticks*difficulty/10)%2);char(t,St.x,e,Ql==="light"?{}:{mirror:{y:-1}}).isColliding,Lo=Lo.filter(i=>{const s=i.side==="light"?46:54;color(i.side==="light"?"black":"white");let o;if(i.type==="spike"?o=char("c",i.x,s,i.side==="light"?{}:{mirror:{y:-1}}).isColliding:o=text("o",i.x,s,i.side==="light"?{}:{mirror:{y:-1}}).isColliding,o.char.a||o.char.b)if(i.type==="spike")play("explosion"),end();else return play(i.side==="light"?"coin":"select"),addScore(Uo,i.x+ta*7,s),Uo++,ta++,!1;return i.x-=l,i.x<-3?(i.type==="coin"&&Uo>1&&Uo--,!1):!0});for(let i=0;i<2;i++){la[i]-=l;const s=i===0?"light":"dark",o=ns[i]==="coin"?9:6,r=ns[i]==="coin"?rndi(4,8):rndi(5,15);if(la[i]<0){for(let n=0;n<r;n++)Lo.push({x:200+n*o,type:ns[i],side:s});la[i]=r*o+rnd(40,120),ns[i]=ns[i]==="coin"?"spike":"coin"}}}const Kk=Object.freeze(Object.defineProperty({__proto__:null,characters:Ox,description:Ax,options:zx,title:Ex,update:jx},Symbol.toStringTag,{value:"Module"})),qx="LLAND",Wx=`
[Hold] Thrust up
`,Bx=[`
 llll
l    l
 llll
 l  l
l ll l
ll  ll
`],Jx={isPlayingBgm:!0,isReplayEnabled:!0,theme:"pixel",audioSeed:3};let ia,oi,Zl,Ud,Nd,Xd,ri,sa,oa,Vd,ra,Gd;function Hx(){if(ticks||(ia=times(9,l=>l===4?{y:oa=49,c:"cyan"}:{y:90-l,c:"red"}),oi=25+difficulty*5,Zl=Ud=Nd=Xd=sa=Gd=0,ri=7),ia.map((l,e)=>{color(l.c),rect(wrap(e*13+Ud-13,-13,104),l.y,13,99)}),color("green"),Vd=char("a",25,oi),sa)if(input.isJustPressed)sa=0;else return;if(Ud-=difficulty,(Nd-=difficulty)<0&&(ra=ia[wrap(Xd,0,9)],ra.y=ri>7||ri===1?rnd(70,90):ri===0?oa=rnd(40,70):rnd(40,90),ri--,ri<0?(ra.c="cyan",ri=9):ra.c="red",Xd++,Nd+=13),Gd&&(input.isJustPressed&&(play("laser"),Zl-=.4),input.isPressed&&(Zl-=.2,particle(24.5,oi+2,1,1,PI/2,1))),Zl+=.1,Zl*=.99,oi<0&&Zl<0&&(Zl*=-1),oi+=Zl*difficulty,Vd.isColliding.rect.cyan&&(play("select"),particle(24.5,oi),sa=++score,Zl=0,oi=oa-3,ia.map(l=>l.c="red"),Gd=1),Vd.isColliding.rect.red&&(play("explosion"),end()),rect(-1,0,1,99).isColliding.rect.cyan){color("red");for(let l=oa-4;l<99;l+=7)text("X",2,l);play("explosion"),end()}}const Qk=Object.freeze(Object.defineProperty({__proto__:null,characters:Bx,description:Wx,options:Jx,title:qx,update:Hx},Symbol.toStringTag,{value:"Module"})),Mx="METEO PLANET",Dx=`
[Tap] Move
`,Lx=[`
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
l l l
l lll
ll ll
 lll
`],Fx={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let Kd,na,Qd,kl,cs,Zd,Vu;function Yx(){ticks||(Kd=[{dist:53,angle:rndi(4)*PI/2,type:0}],na=0,Qd=rndi(1,4),kl=0,cs=0,Zd=0,Vu=times(24,i=>({dist:rnd(10,70),angle:rnd(PI*2)})));const l=sqrt(difficulty);color("light_black");const e=vec();if(Vu.forEach(i=>{e.set(50,50).addWithAngle(i.angle-kl,i.dist),box(e,1)}),color("black"),input.isJustPressed&&(play("select"),cs+=PI/2),kl<cs&&(kl+=.3*l,kl>cs&&(kl=cs,kl>PI*2.2&&(kl=cs=PI/2)),Zd+=l),char(addWithCharCode("a",floor(Zd/3)%2),50,42),arc(50,50,3,2,-kl+PI*.2,-kl+PI*2.2),na--,na<0){const i=rndi(6);let s=70,o=Qd*(PI/2);times(11,r=>{let n=abs(r-5);n<=i&&Kd.push({dist:s,angle:o,type:n===0?0:i-n+1}),s+=6}),na=rnd(30,50)/sqrt(l),Qd+=rndi(1,4)}const t=vec();remove(Kd,i=>{if(i.dist-=.5*l,t.set(50,50).addWithAngle(i.angle-kl,i.dist),i.type===0){color("black");const s=char("c",t).isColliding.char;(s.a||s.b)&&(play("explosion"),end())}else{color("yellow");const s=box(t,i.type).isColliding.char;if(s.a||s.b)return play("powerUp"),addScore(i.type,t),!0}if(i.dist<5)return i.type===0&&(play("hit"),particle(t)),!0})}const Zk=Object.freeze(Object.defineProperty({__proto__:null,characters:Lx,description:Dx,options:Fx,title:Mx,update:Yx},Symbol.toStringTag,{value:"Module"})),Ux="M FIELD",Nx=`
[Tap] Jump / Double jump
[Hold] Speed up
`,Xx=[`
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
`],Vx={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let e0,ca,l0,t0,aa,pa,Q,da,No;function Gx(){ticks||(e0=[],ca=0,l0=3,t0=[],aa=[],pa=0,Q={pos:vec(80,87),vel:vec(),jumpCount:0},da=0,No=1);const l=Q.pos.x>99?(Q.pos.x-99)*.1*sqrt(difficulty):0;color("light_black"),rect(0,90,200,10),da=wrap(da-l,0,200),color("white"),rect(da,90,2,10),color("red"),remove(t0,i=>(i.x-=l,i.ticks+=sqrt(difficulty),box(i.x,86,sin(i.ticks*.1)*50,8),i.ticks>PI/.1)),pa-=l,pa<0&&(rnd()<.7?aa.push({x:203,vx:-rnd(1,2)*sqrt(difficulty)*.4}):aa.push({x:-3,vx:rnd(1.5,2)*sqrt(difficulty)*.4}),pa+=rnd(20,30)),color("purple"),remove(aa,i=>(i.x+=i.vx-l,Q.jumpCount===0&&(i.x<Q.pos.x-20&&i.vx<0||i.x>Q.pos.x+20&&i.vx>0)&&(i.vx*=-1),char(addWithCharCode("c",floor(ticks/20)%2),i.x,87,{mirror:{x:i.vx>0?1:-1}}).isColliding.rect.red?(play("powerUp"),addScore(No,i.x,87),particle(i.x,87),No<64&&(No*=2),!0):i.x<-9)),Q.vel.x+=((input.isPressed?1:.3)*sqrt(difficulty)-Q.vel.x)*.1,Q.jumpCount>0&&(Q.vel.y+=(input.isPressed?.05:.1)*difficulty,Q.pos.y>87&&(Q.pos.y=87,Q.vel.y=0,Q.jumpCount=0)),Q.jumpCount<2&&input.isJustPressed&&(play("jump"),Q.vel.y=-2*sqrt(difficulty),Q.pos.y-=6,Q.jumpCount++),Q.pos.add(Q.vel),Q.pos.x-=l,color("black");const e=char(Q.jumpCount>0||ticks%30>15?"a":"b",Q.pos).isColliding;e.rect.red&&(play("lucky"),end()),(e.char.c||e.char.d)&&(Q.vel.y>0?(play("jump"),Q.vel.y*=-.8,Q.pos.y=80):(play("explosion"),end())),ca-=l,ca<0&&(e0.push({x:203,ticks:0,isBlinking:!1}),ca=l0>0||rnd()<.6?rnd(9,20):rnd(50,80),l0--),remove(e0,i=>{i.x-=l;let s=i.ticks>0?89:91;if(color("purple"),i.ticks>0){if(i.ticks+=sqrt(difficulty),i.ticks>59)return t(i.x),!0;i.ticks%30>15?(i.isBlinking||play("laser"),i.isBlinking=!0):(color("transparent"),i.isBlinking=!1)}const o=box(i.x,s,6,3).isColliding;return o.rect.red?(t(i.x),!0):(i.ticks===0&&(o.char.a||o.char.b)&&(play("hit"),No=1,i.ticks=1),i.x<-3)});function t(i){play("explosion"),t0.push({x:i,ticks:0}),color("red"),particle(i,89,9,2,-PI/2,PI/2)}}const e3=Object.freeze(Object.defineProperty({__proto__:null,characters:Xx,description:Nx,options:Vx,title:Ux,update:Gx},Symbol.toStringTag,{value:"Module"})),Kx="MIRROR FLOOR",Qx=`
[Tap]  Jump
[Hold] Speed up
`,Zx=[`
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
ll lll
ll lll
ll lll
ll lll
 llll
 `],ev={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let i0,ua,s0,_,Xo=1;const fa=9;function lv(){ticks||(i0=[{pos:vec(10,50),width:80}],ua=0,s0=[vec(60,47)],_={y:10,my:0,vy:0,speed:1,side:1,state:"jump"},Xo=1);const l=difficulty*.5*_.speed;if(_.state==="run"&&input.isJustPressed&&(play("powerUp"),_.vy=-1.5*sqrt(difficulty)*_.side,_.state="jump"),_.state==="jump"&&(_.vy+=.07*difficulty*_.side,_.y+=_.vy),input.isPressed?_.speed+=(2-_.speed)*.05:_.speed+=(1-_.speed)*.2,(_.y<0&&_.side===-1||_.y>99&&_.side===1)&&(play("lucky"),end()),color("black"),char(addWithCharCode("a",floor(ticks/15)%2),fa,_.y,{mirror:{y:_.side}}),ua-=l,ua<0){const t={pos:vec(100,rnd(10,90)),width:rnd(45,75)};i0.push(t);let i=rnd(20,25);for(;i<t.width-20;)s0.push(vec(100+i,t.pos.y-3)),i+=rnd(15,30);ua+=t.width+rnd(10,20)}let e=!1;remove(i0,t=>{t.pos.x-=l,color(_.side===1?"cyan":"light_cyan");const i=rect(t.pos,t.width,1).isColliding.char;color(_.side===-1?"cyan":"light_cyan");const s=rect(t.pos.x,t.pos.y+1,t.width,1).isColliding.char;return(i.a||i.b||s.a||s.b)&&_.vy*_.side>0&&(play("laser"),_.state="run",_.y=t.pos.y+(_.side===1?-3:5)),t.pos.x-3<fa&&fa<t.pos.x+t.width+3&&(_.my=t.pos.y-(_.y-t.pos.y)+2,color("light_black"),char(addWithCharCode("a",floor(ticks/15)%2),fa,_.my,{mirror:{y:-_.side}}),e=!0),t.pos.x<-t.width}),e||(_.state="jump"),remove(s0,t=>{t.x-=l,color(_.side===1?"yellow":"light_yellow");const i=char("c",t).isColliding.char;if(color(_.side===1?"light_yellow":"yellow"),char("c",t.x,t.y+8),i.a||i.b)return play("coin"),addScore(Xo,t),Xo++,_.side*=-1,_.vy*=-1,_.y=_.my,!0;if(t.x<-3)return Xo>1&&Xo--,!0})}const l3=Object.freeze(Object.defineProperty({__proto__:null,characters:Zx,description:Qx,options:ev,title:Kx,update:lv},Symbol.toStringTag,{value:"Module"})),tv="M JAMMING",iv=`
[Hold] Expand range
[Release] Jamming
`,sv=[`
bblb
b l b
  b
bb bb
`],ov={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:4};let oe,as,ya,ha,Gu,wt;function rv(){ticks||(oe={pos:vec(50,50),vel:vec(),radius:0},as=[],ya=0,ha=[],Gu=times(30,()=>({pos:vec(rnd(99),rnd(99)),spRatio:rnd(.2,.3),color:["light_cyan","light_purple","light_yellow"][rndi(3)]})),wt=1);const l=vec(50,50).sub(oe.pos).mul(.05*sqrt(difficulty));if(Gu.forEach(i=>{i.pos.add(vec(l).mul(i.spRatio)).wrap(0,99,0,99),color(i.color),rect(i.pos,1,1)}),color("red"),remove(ha,i=>(i.radius+=sqrt(difficulty)*i.vr*.5,i.radius>i.targetRadius&&i.vr>0&&(i.vr=-1),arc(i.pos,i.radius,5),i.radius<1)),oe.vel.mul(.98),oe.pos.add(oe.vel).add(l),color("black"),char("a",oe.pos,{mirror:{x:oe.vel.x<0?-1:1}}),input.isJustPressed&&play("select"),input.isPressed||input.isJustReleased?(oe.radius*=1+.01*sqrt(difficulty),oe.vel.mul(.9),color("cyan")):(oe.radius=clamp(oe.radius+sqrt(difficulty)*.5,0,15),color("light_cyan")),arc(oe.pos,oe.radius,2),input.isJustReleased||oe.radius>50){play("laser"),wt=1;let i=0;as.forEach(s=>{s.pos.distanceTo(oe.pos)<oe.radius+1&&s.explosionRadius<0&&i++}),as.forEach(s=>{s.pos.distanceTo(oe.pos)<oe.radius+1&&s.explosionRadius<0&&(s.angle=oe.pos.angleTo(s.pos),s.explosionRadius=clamp(i*sqrt(i),1,25),s.angleVel=0,s.speed/=2,addScore(wt,s.pos),wt++)}),oe.radius=i}if(ya--,ya<0){let i=floor(rnd(6,9)*difficulty);times(i,()=>{const s=vec(50,50).addWithAngle(rnd(PI*2),99),o=s.angleTo(rnd(40,60),rnd(40,60)),r=rnd(1,sqrt(difficulty))*.005,n=sqrt(difficulty)*.4;as.push({pos:s,angle:o,angleVel:r,speed:n,explosionRadius:-1})}),ya=rnd(60,70)}let e,t=50;remove(as,i=>{const s=i.pos.angleTo(oe.pos),o=wrap(i.angle-s,-PI,PI);o>i.angleVel?i.angle-=i.angleVel:o<-i.angleVel?i.angle+=i.angleVel:i.angle=s,i.pos.addWithAngle(i.angle,i.speed).add(l),color(i.explosionRadius<0?"purple":"cyan");const r=bar(i.pos,3,3,i.angle).isColliding;if(color("red"),particle(i.pos,1,i.speed,i.angle+PI,1),r.rect.red)return i.explosionRadius>1?(play("powerUp"),ha.push({pos:i.pos,radius:1,targetRadius:i.explosionRadius,vr:1})):(play("coin"),particle(i.pos,9,2)),addScore(wt,i.pos),wt++,!0;r.char.a&&(play("explosion"),end());const n=i.pos.distanceTo(oe.pos);return n<t&&(t=n,e=i),!i.pos.isInRect(-100,-100,200,200)}),remove(as,i=>{if(i.explosionRadius>0&&(color("transparent"),bar(i.pos,3,3,i.angle).isColliding.rect.purple))return play("powerUp"),ha.push({pos:i.pos,radius:1,targetRadius:i.explosionRadius,vr:1}),color("red"),particle(i.pos,9,2),addScore(wt,i.pos),wt++,!0}),e!=null&&oe.vel.addWithAngle(e.pos.angleTo(oe.pos)+PI/3,sqrt(difficulty)*.01)}const t3=Object.freeze(Object.defineProperty({__proto__:null,characters:sv,description:iv,options:ov,title:tv,update:rv},Symbol.toStringTag,{value:"Module"})),nv="MONKEY T",cv=`
[Hold] Compress
[Release] Launch
`,av=[`
l  ll
l l  l
l  ll
 lll l
lll  l
  `,`
  lll
   l
  l l
  l l l
 l l l
l l l 
  `,`
llll
 llll
  llll
 lll
ll  l
  `],pv={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let et,al,ga,ni,ci,fu,Ku,xa;function dv(){ticks||(et=vec(50,90),al=vec(.3,0),ga=0,ni=0,ci=0,Qu(),Ku=times(3,t=>({position:vec(rnd(10,90),rnd(10,70)),speed:.5+t*.1})),xa=1),input.isJustPressed&&(ci=ni=0),input.isPressed&&(ni=Math.min(ni+1,30)),input.isJustReleased&&(ci=ni,ni=0,ga=0);const l=90+ni*.25+ci*.25;color("black"),line(25,l,75,l,2),al.y+=.1,et.add(al.x*difficulty,al.y),(et.x<25&&al.x<0||et.x>75&&al.x>0)&&(al.x=-al.x),color("red"),char("a",et,{mirror:{x:al.x>0?1:-1}}).isColliding.rect.black&&al.y>0&&(et.y=l-5,al.y=-al.y*.2-ci*.13,ci>1&&(play("jump"),ci=0)),et.y>99&&(et.y=80),color("yellow"),remove(fu,t=>{if(char("b",t.position).isColliding.char.a)return play("coin"),xa+=ga,ga++,addScore(xa,et),particle(t.position),!0}),fu.length===0&&Qu(),color("black"),remove(Ku,t=>{t.position.x+=t.speed*(t.position.x<10&&t.speed>0||t.position.x>90&&t.speed<0?.5:1),(t.position.x<-10&&t.speed<0||t.position.x>110&&t.speed>0)&&(t.position.y=rnd(10,70),t.speed=-t.speed),char("c",t.position,{mirror:{x:t.speed>0?1:-1}}).isColliding.char.a&&(play("explosion"),end())}),text(`x${xa}`,3,10)}function Qu(){fu=times(5,()=>({position:vec(rnd(30,70),rnd(20,70))}))}const i3=Object.freeze(Object.defineProperty({__proto__:null,characters:av,description:cv,options:pv,title:nv,update:dv},Symbol.toStringTag,{value:"Module"})),uv="MORTAR",fv=`
[Hold] Adjust distance
[Release] Fire
`,yv=[`
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
`],hv={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let Vo,Go,o0,le,Pl,Ke,pl,va,ma,Ko,Zu;function gv(){if(ticks||(Vo=times(5,()=>({pos:vec(rnd(49,60),rnd(-149,-140)),vy:.1})),Go=0,o0=0,le={pos:vec(30,95),vx:1,sightY:void 0},Pl={pos:vec(),width:void 0},Ke={pos:vec(),targetRadius:void 0,radius:void 0},pl=0,va=0,ma=1,Ko=3,Zu=times(99,()=>vec(rnd(99),rnd(-300,100)))),color("light_black"),Zu.forEach(e=>{box(e.x,e.y+pl,3,1)}),Ke.radius!=null)color("red"),Ke.radius+=(Ke.targetRadius-Ke.radius)*.1,arc(Ke.pos.x,Ke.pos.y+pl,Ke.radius,5),Ke.targetRadius-Ke.radius<1&&(Ke.radius=void 0);else if(le.sightY!=null){le.sightY-=sqrt(difficulty)*2*Ko;let e=0;le.sightY<0&&(pl+=(90-le.sightY-pl)*(.05*sqrt(difficulty)*Ko),e=clamp(-le.sightY*.3,0,30)),e+=2,color("black"),arc(le.pos.x,le.sightY+pl,e,2),(input.isJustReleased||le.sightY<-200)&&(e===2?Pl.width==null&&(play("laser"),Pl.pos.set(le.pos),Pl.width=ceil((91-le.sightY)*.2)):(play("explosion"),Ke.targetRadius=e,Ke.radius=0,Ke.pos.set(le.pos.x,le.sightY)),le.sightY=void 0,Ko>1&&Ko--)}else pl*=.8,le.pos.x+=le.vx*difficulty,(le.pos.x<3&&le.vx<0||le.pos.x>96&&le.vx>0)&&(le.vx*=-1),input.isJustPressed&&(play("select"),le.sightY=90,ma=1);if(Pl.width!=null&&(Pl.pos.y-=sqrt(difficulty)*3,color("red"),box(Pl.pos.x,Pl.pos.y+pl,Pl.width,6),Pl.pos.y<-3&&(Pl.width=void 0)),va>0&&(pl*=.5,va>9&&end()),color("black"),char("a",le.pos.x,le.pos.y+pl),Vo.length===0&&(Go=0),Go--,Go<0){const e=rnd(.5,sqrt(difficulty)*2)*.1,t=rnd(20,80);times(rndi(5,9),()=>{Vo.push({pos:vec(t+rnds(9),-280+rnds(9)),vy:e*rnd(.9,1.1)})}),Go=99*sqrt(Vo.length)/difficulty}color("red");let l=-200;remove(Vo,e=>{const t=char("b",e.pos.x,e.pos.y+pl).isColliding.rect;if(e.pos.y>99)play("lucky"),text("X",e.pos.x,97),va++;else{let i=e.vy*sqrt(120-o0)/4;if(le.sightY!=null&&(i*=.3),e.pos.y+=i,t.red)return play("powerUp"),addScore(ma,e.pos.x,e.pos.y+pl),ma++,!0;e.pos.y>l&&(l=e.pos.y)}}),o0=l}const s3=Object.freeze(Object.defineProperty({__proto__:null,characters:yv,description:fv,options:hv,title:uv,update:gv},Symbol.toStringTag,{value:"Module"})),xv="M RIDER",vv=`
[Hold] Go up
`,mv=[`
  ll
  l  l
 llll
l l
 l l
ll  l
`,`
  ll
 l
llll
 l
  l  
   ll
`,`
l
ll
llllll
 ll
 l   
`],bv={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ba,ka,Pa,$a,G,ps;function kv(){if(ticks||(ba=[{pos:vec(30,60),vel:vec(1,-1.5)}],ka=9,Pa=[],$a=0,G={pos:vec(),vel:vec(),missile:ba[0]},ps=1),input.isJustPressed&&play("select"),G.missile==null)G.vel.x+=(input.isPressed?.04:-.02)*sqrt(difficulty),G.vel.y+=(input.isPressed?.01:.05)*sqrt(difficulty),G.vel.mul(.99),G.pos.add(G.vel);else{const e=G.missile;e.vel.y+=(input.isPressed?-1:1)*.05*difficulty,e.vel.y*=.99,e.vel.x+=(sqrt(difficulty)-e.vel.x)*.1,G.pos.set(e.pos.x,e.pos.y-4),G.vel.set(e.vel)}const l=G.pos.x>50?(G.pos.x-50)*.1*sqrt(difficulty):0;if(G.pos.x-=l,color("black"),char(G.missile==null?"b":"a",G.pos.x,clamp(G.pos.y,-2,99),{rotation:G.missile!=null?0:floor(ticks/10)%4}),(G.missile!=null&&G.pos.y<-1||G.pos.y>99)&&(play("explosion"),end()),ka--,ka<0){const e=vec(210,rnd(40,70));ba.push({pos:e,vel:vec(rnd(.4,.5)*sqrt(difficulty)).rotate(e.angleTo(0,rnd(50,60))+PI)}),ka=rnd(60,300)/sqrt(difficulty)}if(remove(ba,e=>(e.pos.add(e.vel),e.pos.x-=l,color("light_red"),box(e.pos.x-9,e.pos.y,5),particle(e.pos.x-9,e.pos.y,e===G.missile?3:2,1,PI,.5),color(e===G.missile?"red":"black"),box(e.pos,18,3).isColliding.char.b&&(play("powerUp"),ps=ceil(ps*.5),G.missile=e),!e.pos.isInRect(-9,-3,230,116))),$a--,$a<0){const e=vec(203,rnd(30,90));Pa.push({pos:e,vel:vec(rnd(.05,.3)*sqrt(difficulty)).rotate(e.angleTo(0,rnd(40,90))+PI),removeTicks:0,baseRemoveTicks:0}),$a=rnd(20,24)/sqrt(difficulty)}remove(Pa,e=>{if(e.pos.add(e.vel),e.pos.x-=l,e.removeTicks>0&&(color("light_red"),particle(e.pos,1,1),e.removeTicks-=sqrt(difficulty),e.removeTicks<=0)){play("coin"),particle(e.pos,9,2),addScore(ps,e.pos),ps++;const i=e.baseRemoveTicks*.9;return i>2&&Pa.forEach(s=>{s!==e&&s.pos.distanceTo(e.pos)<36&&(line(s.pos,e.pos),s.removeTicks=s.baseRemoveTicks=i)}),!0}return color("black"),char("c",e.pos).isColliding.rect.red&&(G.missile!=null&&(play("jump"),particle(e.pos,9,3),G.vel.y=-2*sqrt(difficulty),G.missile.pos.x=-99,G.missile=void 0),e.baseRemoveTicks=e.removeTicks=9),!e.pos.isInRect(-3,-3,206,106)}),color("black"),text(`x${ps}`,3,9)}const o3=Object.freeze(Object.defineProperty({__proto__:null,characters:mv,description:vv,options:bv,title:xv,update:kv},Symbol.toStringTag,{value:"Module"})),Pv="NS CLIMB",$v=`
[Tap] Reverse
`,Sv=[],wv={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ef,lf,dl,_t,ai;function _v(){ticks||(ef=times(22,e=>({pos:vec(e%2===0?20:80,e/2*10-5),type:e<10?"S":"",wallIndex:e%2})),lf=[{type:"",prevType:"S",count:rndi(2,4),x:20,vx:0},{type:"",prevType:"S",count:rndi(2,4),x:80,vx:0}],dl=vec(50,90),_t=vec(0,-1),ai="N"),input.isJustPressed&&(ai=ai==="N"?"S":"N",play(ai==="N"?"laser":"select")),dl.add(_t),_t.x*=.98,_t.y+=.001*difficulty;let l=0;dl.y<70&&(l=(70-dl.y)*.1),dl.y>99&&(play("explosion"),end()),dl.y+=l,addScore(l),color(ai==="N"?"red":"blue"),box(dl,7,7),color("white"),text(ai,dl.x-1,dl.y-1),ef.forEach(e=>{if(e.pos.y+=l,e.type!==""){const i=dl.distanceTo(e.pos),s=dl.angleTo(e.pos);_t.addWithAngle(s,difficulty/i/i*(e.type===ai?-1:1))}color(e.type===""?"light_black":e.type==="N"?"red":"blue");const t=box(e.pos,9,9).isColliding.rect;if((t.blue||t.red)&&(play("hit"),dl.x=e.pos.x+(e.wallIndex===0?10:-10),(e.wallIndex===0&&_t.x<0||e.wallIndex===1&&_t.x>0)&&(_t.x*=-.7)),color("white"),text(e.type,e.pos.x-1,e.pos.y-1),e.pos.y>105){e.pos.y-=110;const i=lf[e.wallIndex];i.x+=i.vx,e.pos.x=i.x,i.vx+=rnds(.1),e.wallIndex===0?(i.x<10&&i.vx<0||i.x>40&&i.vx>0)&&(i.vx*=-.5):(i.x<60&&i.vx<0||i.x>90&&i.vx>0)&&(i.vx*=-.5),i.count--,i.count<0&&(i.type===""?(i.type=i.prevType==="N"?"S":"N",i.prevType=i.type,i.count=rndi(3,9)):(i.type="",i.count=rndi(2,4))),e.type=i.type}})}const r3=Object.freeze(Object.defineProperty({__proto__:null,characters:Sv,description:$v,options:wv,title:Pv,update:_v},Symbol.toStringTag,{value:"Module"})),Tv="NUMBER BALL",Cv=`
[Hold]    Set angle
[Release] Hit a shot
`,Iv=[],Rv={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let Qo,Zo,lt,pi,Sa,er;function Ev(){ticks||(Qo=[],Zo=!0,lt=[{value:void 0,x:0,width:200}],pi=1,Sa=er=0);const l=lt[0],e=l.x+l.width;let t=sqrt(difficulty)*.04+Sa;Sa*=.9,er=clamp(er-.01,0,9),e>100&&(t+=(e-100)*.1);const i=clamp(difficulty*2,1,9);let s=0;if(remove(lt,(o,r)=>{if(o.x-=t,color(r==0?"light_red":"light_green"),rect(o.x,50,o.width-2,10),s=o.x+o.width,o.value!=null){color("red"),text(`${o.value}`,o.x+7,55);let n=!1;if(Qo.forEach(c=>{c.state==="onFloor"&&c.pos.x>o.x-3&&c.pos.x<s+3&&o.value===c.value&&(n=!0)}),n)return play("coin"),addScore(o.value*pi,o.x+7,50),pi<16&&(pi*=2),!0}if(r<lt.length-1){const n=lt[r+1];s<n.x+2?o.x+=(n.x-s)*.1:o.x=n.x-o.width}}),color("green"),rect(0,50,20,10),color("white"),rect(20,50,13,10),lt[0].x+lt[0].width<30&&(color("red"),text("X",33,55),play("explosion"),end()),s<200&&(play("hit"),lt.push({value:rndi(floor(i))+1,x:200,width:rnd(20,50)})),ticks>30&&Zo){let o;for(let r=0;r<9;r++){o=rndi(floor(i))+1;let n=!1;if(lt.forEach(c=>{c.value===o&&(n=!0)}),n)break}play("laser"),Qo.push({value:o,pos:vec(10,47),vel:vec(1,0).rotate(-.1),state:"stay"}),Zo=!1}remove(Qo,o=>{if(o.state==="removing")return!0;if(o.state==="stay")input.isJustPressed&&play("select"),input.isPressed&&(o.vel.rotate(-.01*difficulty),color("black"),line(vec(o.vel).mul(3).add(o.pos),vec(o.vel).mul(15).add(o.pos),2)),(input.isJustReleased||o.vel.angle<-PI*.47)&&(play("powerUp"),pi>1&&(pi/=2),Sa=er,er++,o.vel.mul(5),o.state="flying");else if(o.state==="flying")o.vel.y+=.1,o.vel.mul(.99),o.pos.add(o.vel),o.pos.y>47&&(o.vel.y*=-.5,o.vel.x*=.5,o.pos.y=47,abs(o.vel.y)<.5&&(o.state="onFloor",Zo=!0));else if(o.state==="onFloor")o.vel.x*=.9,o.pos.x+=o.vel.x,o.vel.y=0,o.pos.x<30&&(o.state="falling");else if(o.state==="falling"&&(o.vel.y+=.1,o.pos.y+=o.vel.y,o.pos.y>63))return!0;if(o.state!=="stay"&&o.state!=="falling"&&(o.pos.x-=t,Qo.forEach(r=>{r!==o&&r.pos.distanceTo(o.pos)<6&&(o.vel.addWithAngle(r.pos.angleTo(o.pos),r.vel.length*.7),r.vel.addWithAngle(o.pos.angleTo(r.pos),o.vel.length*.7))})),color("blue"),text(`${o.value}`,o.pos),o.pos.x>220||o.pos.x<-20||o.pos.y<-50)return o.state==="flying"&&(Zo=!0),!0}),color("black"),text(`x${pi}`,3,10)}const n3=Object.freeze(Object.defineProperty({__proto__:null,characters:Iv,description:Cv,options:Rv,title:Tv,update:Ev},Symbol.toStringTag,{value:"Module"})),Av="NUMBER LINE",Ov=`
[Tap] Sum
`,zv=[],jv={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let ds,tf,di,tt;function qv(){ticks||(di=[{y:12,ty:12,index:0},{y:94,ty:94,index:1}],ds=[],tf=times(2,e=>({nextTicks:0,line:di[e]})),tt=-1),di.forEach(e=>{e.ty+=(1-e.index*2)*difficulty*.01,e.y+=(e.ty-e.y)*.2,e.index===0&&e.y<12&&(play("coin"),e.ty++,addScore(1)),e.index===1&&e.y>94&&e.ty--,color(e.index===0?"blue":"red"),rect(0,e.y,100,1)}),di[0].y>=di[1].y&&(play("lucky"),end()),tt<0?input.isJustPressed&&(play("select"),ds.forEach(e=>{e.x>3&&e.x<97&&(e.isSummed=!0)}),tt=0):tt++,tf.forEach(e=>{e.nextTicks--,e.nextTicks<0&&(ds.push({value:rndi(1,10),x:-3,vx:rnd(1,difficulty)*.7,line:e.line,isSummed:!1}),e.nextTicks=rnd(10,30)/difficulty)});let l=[0,0];if(remove(ds,e=>{const t=e.line;if(e.isSummed){if(tt<0)return!0;for(let n=0;n<ds.length;n++){const c=ds[n];if(c===e)break;if(c.isSummed&&c.line===e.line&&abs(c.x-e.x)<6)return c.value+=e.value,!0}e.x+=(50-e.x)*.1;const o=t.index===0?e.x:100-e.x,r=t.y+t.index*8-4+(tt+(tt>0?10:0))*(1-t.index*2)*.2*sqrt(difficulty);color("black"),text(`${e.value}`,o-(e.value>9?3:0),r),l[t.index]=e.value;return}e.x+=e.vx;const i=t.index===0?e.x:100-e.x,s=t.y+t.index*6-3;return color(["blue","cyan","green","purple","red"][floor((e.value-1)/2)]),text(`${e.value}`,i,s),e.x>103}),tt>60/sqrt(difficulty)){tt=-1;let e=l[0]-l[1];e>0?play("powerUp"):e<0&&play("explosion"),addScore(e,50,50),di[0].ty-=e*sqrt(difficulty),di[1].ty+=e*sqrt(difficulty)}}const c3=Object.freeze(Object.defineProperty({__proto__:null,characters:zv,description:Ov,options:jv,title:Av,update:qv},Symbol.toStringTag,{value:"Module"})),Wv="ORBIT MAN",Bv=`
[Tap] Launch
`,Jv=[],Hv={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let wa,lr,N,tr,ir,sf;function Mv(){ticks||(wa=[{pos:vec(50,0),radius:5,isDestroyed:!1}],lr=20,N={planet:wa[0],angle:PI/2,av:1,pos:vec(50,0),target:vec(50,0)},tr=0,ir=1,sf=times(20,()=>({pos:vec(rnd(99),rnd(99)),vy:rnd(3,6)})));let l=sqrt(difficulty)*.05;for(tr=clamp(tr-difficulty,1,99),N.planet.pos.y<80&&(l+=(80-N.planet.pos.y)*(.1/tr)),color("light_black"),sf.forEach(n=>{n.pos.y+=l/n.vy,n.pos.y>99&&(n.pos.set(rnd(99),0),n.vy=rnd(3,6)),rect(n.pos,1,1)}),lr-=l;lr<0;){const n=rnd(4,9);wa.push({pos:vec(rnd(10+n,90-n),lr-30),radius:n,isDestroyed:!1}),lr+=n*rnd(1,2)}N.angle+=difficulty*.03*N.av,color("light_blue"),bar(N.planet.pos,99,4,N.angle,-N.planet.radius*.015),color("black");let e,t=0,i=[N.planet];if(remove(wa,n=>{if(n.isDestroyed)return particle(n.pos,ceil(n.radius*4),sqrt(n.radius)*.5),!0;n.pos.y+=l;const c=arc(n.pos,n.radius).isColliding.rect;if(n!==N.planet&&c.black)return!0;if(n!==N.planet&&n.pos.y>-n.radius-4&&c.light_blue){i.push(n);const a=n.pos.distanceTo(N.planet.pos);a>t&&(e=n,t=a)}return n.pos.y>100+n.radius*2}),input.isJustPressed)if(e==null){play("explosion");for(let n=0;n<99&&(N.pos.addWithAngle(N.angle,3),!!N.pos.isInRect(5,5,95,95));n++);end()}else play("powerUp"),ir>1&&ir--,i.length>2&&play("hit"),i.forEach(n=>{n!==e&&(n.isDestroyed=!0,addScore(ir,n.pos),ir++)}),N.planet=e,N.angle+=PI,N.av*=-1,tr=20;const s=N.angle;N.target.set(N.planet.pos).addWithAngle(s,N.planet.radius),N.pos.add(vec(N.target).sub(N.pos).mul(.1)),color("cyan");const o=vec(N.pos).addWithAngle(s,4),r=vec(o).addWithAngle(s+PI*.75,3);line(o,r,2),r.set(o).addWithAngle(s-PI*.75,3),line(o,r,2),r.set(o).addWithAngle(s,4),line(o,r,2),r.set(o).addWithAngle(s-PI*.3,3),o.addWithAngle(s+PI*.3,3),line(o,r,2),N.planet.pos.y-N.planet.radius>99&&(play("explosion"),end())}const a3=Object.freeze(Object.defineProperty({__proto__:null,characters:Jv,description:Bv,options:Hv,title:Wv,update:Mv},Symbol.toStringTag,{value:"Module"})),Dv="PAKU PAKU",Lv=`
[Tap] Turn
`,Fv=[`
  llll
 lll
lll
lll
 lll
  llll
`,`
  lll
 lllll
lll
lll
 lllll
  lll
`,`
  ll
 llll
llllll
llllll
 llll
  ll
`,`
  lll
 l l l
 llll
 llll
llll
l l l
`,`
  lll
 l l l
 llll
 llll
 llll
 l l
`,`
ll
ll
`,`
 ll
llll
llll
 ll
`,`
  l l



`],Yv={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let nl,ke,yu,Ol,sr,zs;function Uv(){ticks||(nl={x:10,vx:1},ke={x:100,eyeVx:0},zs=0,of(),Ol=sr=0),sr+=difficulty,color("black"),text(`x${zs}`,3,9),input.isJustPressed&&(nl.vx*=-1),nl.x+=nl.vx*.5*difficulty,nl.x<-3?nl.x=103:nl.x>103&&(nl.x=-3),color("blue"),rect(0,48,100,1),rect(0,50,100,1),rect(0,58,100,1),rect(0,61,100,1),color("green");const l=floor(sr/7)%4;char(addWithCharCode("a",l===3?1:l),nl.x,55,{mirror:{x:nl.vx}}),remove(yu,i=>{color(i.isPower&&floor(sr/7)%2===0?"transparent":"yellow");const s=char(i.isPower?"g":"f",i.x,55).isColliding.char;if(s.a||s.b||s.c)return i.isPower?(play("jump"),ke.eyeVx===0&&(Ol=120)):play("hit"),addScore(zs),!0});const e=ke.eyeVx!==0?ke.eyeVx:(nl.x>ke.x?1:-1)*(Ol>0?-1:1);ke.x=clamp(ke.x+e*(Ol>0?.25:ke.eyeVx!==0?.75:.55)*difficulty,0,100),(ke.eyeVx<0&&ke.x<1||ke.eyeVx>0&&ke.x>99)&&(ke.eyeVx=0),color(Ol>0?Ol<30&&Ol%10<5?"black":"blue":ke.eyeVx!==0?"black":"red");const t=char(ke.eyeVx!==0?"h":addWithCharCode("d",floor(sr/7)%2),ke.x,55,{mirror:{x:e}}).isColliding.char;ke.eyeVx===0&&(t.a||t.b||t.c)&&(Ol>0?(play("powerUp"),addScore(10*zs,ke.x,55),ke.eyeVx=nl.x>50?-1:1,Ol=0,zs++):(play("explosion"),end())),Ol-=difficulty,yu.length===0&&(play("coin"),of())}function of(){let l=nl.x>50?rndi(1,6):rndi(10,15);yu=times(16,e=>({x:e*6+5,isPower:e===l})),zs++}const p3=Object.freeze(Object.defineProperty({__proto__:null,characters:Fv,description:Lv,options:Yv,title:Dv,update:Uv},Symbol.toStringTag,{value:"Module"})),Nv="PARKING",Xv=`
[Hold]
 Turn right
`,Vv=[],Gv={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:1};let us,fs,_a,or,Ta,Ca,$l,ui,ys;function Kv(){ticks||(us=[],fs=-PI/2,or=0,_a=1,Ta=[],Ca=0,$l=void 0,ui=0,ys=1);const l=difficulty;let e=l*1.05;if(us.length>0){const s=us[0].pos.y;s<50&&(e+=(50-s)*.1)}else or--;ui-=e,color("light_black"),rect(0,0,11,100),rect(89,0,11,100),times(3,s=>{const o=30+s*20;times(6,r=>{const n=r*20-ui%20-10;box(o,n,3,10)})}),color("light_yellow"),rect(82,-ui%93+6,7,90),rect(82,-ui%93-88,7,90),color("white"),box(93,-ui%200-50,7,44),color("light_black");let t=-ui%200-69;["P","A","R","K","I","N","G"].forEach(s=>{text(s,92,t),t+=6}),$l==null&&($l=vec(rnd(40,70),rnd(-50,-20))),color("yellow"),box($l,8),color("white"),text("$",$l),$l.y+=e,$l.y>103&&(ys>1&&ys--,$l=void 0),Ca-=e,Ca<0&&(play("laser"),Ta.push({pos:vec(rnd(80,84),-5),angle:rnd(-PI/8*3,-PI/8),color:["red","blue","cyan","purple"][rndi(4)]}),Ca=rnd()<.7?rnd(8,12):rnd(100,200)),remove(Ta,s=>(s.pos.y+=e,i(s.pos,s.angle,s.color),s.pos.y>105)),or-=e-l,us.length<_a&&or<0&&(play("hit"),us.push({pos:vec(rnd(20,60),-5),color:["red","blue","cyan","purple"][rndi(4)]}),or=15*sqrt(difficulty)),fs+=(input.isPressed?1:-1)*sqrt(difficulty)*.1,fs=clamp(fs,-PI/2,0),remove(us,s=>{const o=s.pos.y<3?-PI/2:fs;s.pos.addWithAngle(o,l),s.pos.y+=e;const r=i(s.pos,o,s.color).rect;if((r.red||r.blue||r.cyan||r.purple)&&(play("explosion"),color("light_red"),text("X",s.pos),end()),r.light_yellow)return play("powerUp"),addScore(ys*10,s.pos),Ta.push({pos:s.pos,angle:fs,color:s.color}),_a+=1/_a,!0;r.yellow&&($l.y>-3&&(play("coin"),addScore(ys,$l),ys++),$l=void 0),s.pos.y>103&&(play("explosion"),color("light_red"),text("X",s.pos.x,96),end())});function i(s,o,r){const n=vec();return color("black"),n.set(s).addWithAngle(o+PI/4,3),box(n,3),n.set(s).addWithAngle(o+PI/4*3,3),box(n,3),n.set(s).addWithAngle(o+PI/4*5,3),box(n,3),n.set(s).addWithAngle(o+PI/4*7,3),box(n,3),color(r),bar(s,4,4,o).isColliding}}const d3=Object.freeze(Object.defineProperty({__proto__:null,characters:Vv,description:Xv,options:Gv,title:Nv,update:Kv},Symbol.toStringTag,{value:"Module"})),Qv="PIN CLIMB",Zv=`
[Hold] Stretch
`,e2=[],l2={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let ze,Ia,rr;const r0=7;function t2(){ticks||(Ia=[vec(50,0)],rr=10,ze={angle:0,length:r0,pin:Ia[0]});let l=difficulty*.02;ze.pin.y<80&&(l+=(80-ze.pin.y)*.1),input.isJustPressed&&play("select"),input.isPressed?ze.length+=difficulty:ze.length+=(r0-ze.length)*.1,ze.angle+=difficulty*.05,line(ze.pin,vec(ze.pin).addWithAngle(ze.angle,ze.length)),ze.pin.y>98&&(play("explosion"),end());let e;for(remove(Ia,t=>(t.y+=l,box(t,3).isColliding.rect.black&&t!==ze.pin&&(e=t),t.y>102)),e!=null&&(play("powerUp"),addScore(ceil(ze.pin.distanceTo(e)),e),ze.pin=e,ze.length=r0),rr-=l;rr<0;)Ia.push(vec(rnd(10,90),-2-rr)),rr+=rnd(5,15)}const u3=Object.freeze(Object.defineProperty({__proto__:null,characters:e2,description:Zv,options:l2,title:Qv,update:t2},Symbol.toStringTag,{value:"Module"})),i2="PIZZA ARROW",s2=`
[Hold] Pull
[Release] Release
`,o2=[`
 r   r
rrllll
 r   r
`],r2={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let te,Sl,Le,nr,n0,zl,fi,cr;function n2(){ticks||(te=void 0,Le=void 0,nr=n0=floor(1+(difficulty-1)*2),zl=16,fi=1,cr=1),zl--,zl>=0&&(zl<=15?(zl===15&&(te={from:PI/4,to:PI/4*7,angle:rnd(PI/2),angleVel:.2,y:0}),te.y=50-zl*5,cr=1):te.y=(30-zl)*5+50),color("yellow");const l=vec(30,te.y),e=te.from+te.angle,t=te.to+te.angle;arc(l,20,4,e,t);const i=vec(l),s=vec(l);if(line(i.addWithAngle(e,5),s.addWithAngle(e,20),4),i.set(l),s.set(l),line(i.addWithAngle(t,5),s.addWithAngle(t,20),4),color("red"),arc(30,te.y,5,4,e,t-PI*2),te.angle+=te.angleVel*fi,zl<0&&Le==null&&input.isPressed&&(play("select"),Le={x:80,vx:1},nr--),zl<0&&(color("black"),times(nr,o=>{char("a",95,40-o*3)}),text(`x${cr}`,3,10)),Le!=null){input.isPressed&&(fi+=(.05-fi)*.1),(input.isJustReleased||Le.x>90)&&(play("laser"),Le.vx=-5),Le.vx<0&&(fi+=(1-fi)*.2),Le.x>70&&(color("light_black"),line(80,30,Le.x+4,51,2),line(80,70,Le.x+4,51,2)),Le.x+=Le.vx*fi,color("black");const o=char("a",Le.x,50).isColliding.rect;if(o.yellow){play("hit");const r=wrap(-te.angle,0,PI*2);if(r>te.from&&r<te.to){let n;r-te.from>te.to-r?(n=te.to-r,Sl={from:r,to:te.to,angle:te.angle,pos:vec(30,50)},te.to=r):(n=r-te.from,Sl={from:te.from,to:r,angle:te.angle,pos:vec(30,50)},te.from=r),play("coin"),addScore(ceil(n*100*cr),40,50),cr++}Le=void 0,nr===0&&(play("powerUp"),n0++,nr=n0,zl=30)}else o.red&&(play("explosion"),Le=void 0,end())}if(Sl!=null){Sl.pos.add(-5,3),color("light_yellow");const o=vec(Sl.pos),r=Sl.from+Sl.angle,n=Sl.to+Sl.angle;arc(o,20,4,r,n);const c=vec(o),a=vec(o);line(c.addWithAngle(r,5),a.addWithAngle(r,20),4),c.set(o),a.set(o),line(c.addWithAngle(n,5),a.addWithAngle(n,20),4),Sl.pos.x<-20&&(Sl=void 0)}}const f3=Object.freeze(Object.defineProperty({__proto__:null,characters:o2,description:s2,options:r2,title:i2,update:n2},Symbol.toStringTag,{value:"Module"})),c2="PULSE PIPER",a2=`
[Hold] Charge
`,p2=[],d2={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Ne,ku,Ra,Pu;const u2=.7,f2=1,y2=.5,h2=60,ld=50;function g2(){ticks||(Ne={pos:vec(1,ld),charge:0},ku=[],Ra=0,Pu=0),color("cyan"),line(0,ld,100,ld,4),x2(),v2(),Ra-=difficulty,Ra<0&&(m2(),Ra+=h2)}function x2(){Ne.pos.x+=u2*difficulty,Ne.pos.x>100&&(Ne.pos.x=0),input.isJustPressed&&play("select"),input.isPressed&&(Ne.charge=clamp(Ne.charge+f2*difficulty,0,99)),input.isJustReleased?(play("laser"),color("yellow"),particle(Ne.pos,10,2),color("red"),Pu=floor(Ne.charge),Ne.charge=0):color("yellow");const l=4+Ne.charge;box(Ne.pos.x,Ne.pos.y-l/2,8,4),box(Ne.pos.x,Ne.pos.y+l/2,8,4)}function v2(){remove(ku,l=>{l.pos.x-=y2*difficulty,color(l.isDot?"red":"purple");const e=l.gap+l.size.y/2,t=box(l.pos.x,l.pos.y-e,l.size.x,l.size.y).isColliding.rect,i=box(l.pos.x,l.pos.y+e,l.size.x,l.size.y).isColliding.rect;return l.isDot&&(t.red||i.red)?(play("powerUp"),color("red"),particle(l.pos,15,3),addScore(Pu,l.pos),!0):(!l.isDot&&(t.yellow||i.yellow)&&(play("explosion"),end()),l.pos.x+l.size.x/3<0)})}function m2(){play("click");const l=rnd()<.7,e=rnd()<.3,t=l?vec(4,2):vec(9,e?50:4),i=l||!e&&Ne.pos.x<40&&rnd()<.65?0:rnd(10,20);ku.push({pos:vec(100+t.x/2,ld),size:t,gap:i,isDot:l})}const y3=Object.freeze(Object.defineProperty({__proto__:null,characters:p2,description:a2,options:d2,title:c2,update:g2},Symbol.toStringTag,{value:"Module"})),b2="REBIRTH",k2=`
[Tap] Jump / Land
`,P2=[`
 ll
lll l
lll ll
lll ll
llllll
 l  l
`,`
   ll
  l
 lll
 l
l l
   l
`,`
  ll
l l
 llll
  l  
 l ll
l
`,`
  ll
l l l
 lll
  l
 l ll
l  
`,`
  ll
  l 
 lll
l l l
 l ll
ll  l
`,`
  ll
 l 
ll
l l 
 l l
  l l
`,`
 llll
ll  ll
l ll l
 llll
  ll
`],$2={theme:"dark",viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,seed:2e3};let c0,Ea,a0,p0,Aa,hs,Oa,C,ar;function S2(){if(ticks||(c0=[],Ea=0,a0=0,p0=[],Aa=60,hs=1,Oa=1,C={pos:vec(110,57),ox:10,vel:vec(),world:1,state:"run"},ar=1),color("black"),rect(100,60,100,40),color("light_black"),rect(0,0,100,60),Ea--,Ea<0){const i=a0%2===0?1:-1;c0.push({x:i>0?203:-3,vx:rnd(1,sqrt(difficulty))*(i>0?-1:1),world:i}),a0++,Ea=rnd(50,60)/sqrt(difficulty)}remove(c0,i=>(i.x+=i.vx,color(i.world>0?"black":"white"),char("a",i.x,57,{mirror:{x:i.world>0?-1:1}}),i.world>0?i.x<103:i.x>97)),C.pos.add(C.vel),C.vel.mul(.99),C.vel.x*=.8;let l;C.state==="run"?(C.pos.x+=(100+C.world*C.ox-C.pos.x)*.05,C.ox=clamp(C.ox+sqrt(difficulty)*.3,10,80),input.isJustPressed&&(play("jump"),C.state="jump",C.vel.y=-2*sqrt(difficulty)),l=addWithCharCode("b",floor(ticks/10)%2)):C.state==="jump"?(C.vel.y+=(input.isPressed?.07:.14)*difficulty,C.pos.y>57&&(C.pos.y=57,C.vel.y=0,C.state="run"),input.isJustPressed&&(play("laser"),C.state="land",C.vel.y=4*sqrt(difficulty)),l="d"):C.state==="land"&&(C.pos.y>57&&(C.pos.y=57,C.vel.y=0,C.state="run"),l="e"),abs(C.vel.x)>1&&(l="f");const e=C.pos.x<100?-1:1;color(e>0?"black":"white"),char(l,C.pos,{mirror:{x:e}}).isColliding.char.a&&abs(C.vel.x)<2&&(play("hit"),C.vel.x=(C.world>0?-1:1)*C.ox*.2*sqrt(difficulty),C.world=C.world>0?-1:1,C.ox=10,ar>1&&ar--),Aa--,Aa<0&&(Oa--,Oa<0&&(hs=hs>0?-1:1,Oa=rndi(4)),p0.push({pos:vec(hs>0?203:-3,rnd()<.5?57:rnd(40,50)),vx:rnd(1,sqrt(difficulty))*(hs>0?-1:1)/3,world:hs}),Aa=rnd(120,150)/sqrt(difficulty)),remove(p0,i=>{i.pos.x+=i.vx,color("yellow");const s=char("g",i.pos,{mirror:{x:i.world>0?-1:1}}).isColliding.char;if(s.b||s.c||s.d||s.e||s.f)return play("coin"),addScore(ar,i.pos),ar++,!0;(i.world>0?i.pos.x<103:i.pos.x>97)&&(play("explosion"),color("red"),text("X",100,i.pos.y),end())})}const h3=Object.freeze(Object.defineProperty({__proto__:null,characters:P2,description:k2,options:$2,title:b2,update:S2},Symbol.toStringTag,{value:"Module"})),w2="REFLECTOR",_2=`
[Tap]  Turn
[Hold] Enforce reflector
`,T2=[`
y cc y
 cccc
llllll
lllll
 l l
`,`
y cc y
 cccc
llllll
 lllll
  l l
`,`
 rrr
rrrrr
rrrrrr
lwlwll
 lwll
`,`
 rrr
rrrrr
rrrrrr
llwlwl
 llwl
`],C2={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ie,za,pr,d0,ja,qa;function I2(){if(ticks||(ie={pos:vec(40,9),vx:1,angle:0,power:0},za=times(9,()=>{const l=rnd()<.5?-1:1,e=rnd(60,300)/difficulty,t=rnd(1,5);return{pos:vec(rnd(99),87),vx:l,angle:-PI/2,angleVel:t*.002,speed:.1/sqrt(t)*sqrt(difficulty),fireTicks:e,fireInterval:e,fireSpeed:rnd(1,1.5)*sqrt(difficulty)}}),pr=0,d0=[],ja=[],qa=1),color("light_black"),rect(0,90,100,10),(input.isJustPressed||ie.pos.x<3&&ie.vx<0||ie.pos.x>97&&ie.vx>0)&&(play("select"),ie.vx*=-1),input.isPressed?ie.power+=(1-ie.power)*.05:ie.power*=.9,ie.pos.x+=ie.vx*sqrt(difficulty)*(input.isPressed?.5:1)*.5,input.isPressed||(ie.angle=clamp(ie.angle-ie.vx*sqrt(difficulty)*.07,-PI/4,PI/4)),color("black"),char(addWithCharCode("a",floor(ticks/15)%2),ie.pos),color("blue"),bar(vec(ie.pos).addWithAngle(ie.angle+PI/2,6),9-ie.power*9,3+ie.power*3,ie.angle),za.length===0&&(pr=0),pr--,pr<0){const l=rnd()<.5?-1:1,e=rnd(200,300)/difficulty,t=rnd(1,5);za.push({pos:vec(l>0?-3:103,87),vx:l,angle:-PI/2,angleVel:t*.002,speed:.1/sqrt(t)*sqrt(difficulty),fireTicks:e,fireInterval:e,fireSpeed:rnd(1,1.5)*sqrt(difficulty)}),pr=rnd(60,80)/sqrt(difficulty)}color("light_red"),ja.length===0&&(qa=1),remove(ja,l=>{l.ticks--;const e=l.radius*sin(l.ticks/l.duration*PI);return arc(l.pos,e),l.ticks<0}),color("black"),remove(za,l=>{l.pos.x+=l.vx*l.speed;const e=l.pos.angleTo(ie.pos);return abs(e)<l.angleVel?l.angle=e:e<l.angle?l.angle-=l.angleVel:l.angle+=l.angleVel,bar(l.pos,3,2,l.angle,-.5),char(addWithCharCode("c",floor(ticks/25)%2),l.pos,{mirror:{x:l.vx<0?-1:1}}).isColliding.rect.light_red?(play("powerUp"),addScore(qa,l.pos),qa++,particle(l.pos),!0):(l.fireTicks--,l.fireTicks<0&&(play("laser"),d0.push({pos:vec(l.pos),vel:vec(l.fireSpeed,0).rotate(l.angle)}),l.fireTicks=l.fireInterval),l.pos.x<-3||l.pos.x>103)}),remove(d0,l=>{l.pos.add(l.vel),color(l.vel.y<0?"red":"purple");const e=bar(l.pos,4,3,l.vel.angle).isColliding;if(l.vel.y<0)if(e.rect.blue){play("coin"),particle(l.pos,9,1+ie.power*2,ie.angle+PI/2,PI/8);const t=l.vel.angle-ie.angle,i=l.vel.angle,s=l.vel.length*(1+ie.power*4);l.vel.set().addWithAngle(i-t*2,s),l.pos.addWithAngle(i-t*2,s*2),l.pos.y<20&&(l.pos.y=20)}else(e.char.a||e.char.b)&&(play("lucky"),end());if(l.vel.y>0&&(e.char.c||e.char.d||e.rect.light_black)){play("explosion");const t=l.vel.length/sqrt(difficulty),i=t*t,s=sqrt(i)*9;return ja.push({pos:l.pos,radius:i,ticks:s,duration:s}),!0}return!l.pos.isInRect(-3,-3,106,106)}),color("light_black"),rect(0,90,100,10)}const g3=Object.freeze(Object.defineProperty({__proto__:null,characters:T2,description:_2,options:C2,title:w2,update:I2},Symbol.toStringTag,{value:"Module"})),R2="ROLL HOLD",E2=`
[Hold]
 Hold an angle
`,A2=[`
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
`],O2={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingParticleFront:!0,isDrawingScoreFront:!0,audioSeed:50},u0=vec(50,50),z2=12;let jl,Wa,f0,dr,y0,rn,ur,h0,g0,Ba,x0;function j2(){ticks||(jl=0,Wa=1,f0=[],dr=0,y0=[],rn={pos:vec(),vx:0},rf(),ur=0,h0=[],g0=[],Ba=0,x0=0);const l=sqrt(difficulty);Ba--,Ba<=0&&(g0.push({pos:vec(100,85),size:vec(rndi(10,20),-rndi(30,60))}),Ba=rndi(5,50)*10),remove(g0,t=>(t.pos.x-=.1,color("light_black"),rect(t.pos,t.size),color("white"),rect(t.pos.x+1,t.pos.y,t.size.x-2,t.size.y+1),t.pos.x+t.size.x<0)),color("light_cyan"),rect(0,85,100,20),color("light_purple"),rect(0,70,100,9),rect(0,92,100,3),x0+=l,input.isJustPressed&&(play("select"),Wa*=-1,dr=0);const e=vec(z2).rotate(jl).add(u0);color("light_cyan"),input.isPressed?(dr-=l,dr<0&&(play("laser"),f0.push({pos:vec(e),angle:jl}),dr=9,particle(e,3,1,jl,.5)),bar(e,4,1,jl+(Wa>0?PI/2:-PI/2),-.5)):jl=wrap(jl+Wa*.07*l,-PI,PI),color("cyan"),remove(f0,t=>(t.pos.addWithAngle(t.angle,l*2),bar(t.pos,3,2,t.angle),!t.pos.isInRect(-9,-9,120,120))),color("black"),char("a",u0,{mirror:{x:jl<-PI/2||jl>PI/2?-1:1}}),color("blue"),bar(e,2,3,jl),ur-=l,ur<0&&(y0.push({pos:vec(rn.pos),vx:rn.vx,score:9,isFired:!1}),rnd()<.25?(rf(),ur=120/l):ur=25/l),color("black"),remove(y0,t=>{if(t.pos.x+=t.vx,!t.isFired&&(t.vx>0&&t.pos.x>90||t.vx<0&&t.pos.x<9)){play("click");const s=t.pos.angleTo(u0);h0.push({pos:vec(t.pos),vel:vec(l*.3).rotate(s)}),particle(t.pos,3,2,s,.2),t.isFired=!0}const i=char(addWithCharCode("b",[0,1,2,1][floor(x0/20)%4]),t.pos,{mirror:{x:t.vx>0?1:-1}}).isColliding.rect;return i.cyan||i.blue?(play("powerUp",{seed:5}),addScore(i.blue?10:ceil(t.score),t.pos),particle(t.pos),!0):(t.score-=.033*l,t.pos.x<-5||t.pos.x>105)}),color("red"),remove(h0,t=>{t.pos.add(t.vel);const i=box(t.pos,4).isColliding;if(i.rect.blue)return play("powerUp"),addScore(10,t.pos),particle(t.pos),!0;i.char.a&&(play("explosion"),end())})}function rf(){const l=sqrt(difficulty)*(rndi(2)*2-1)*.4;rn.pos.set(l>0?-3:103,rnd(9,90)),rn.vx=l}const x3=Object.freeze(Object.defineProperty({__proto__:null,characters:A2,description:E2,options:O2,title:R2,update:j2},Symbol.toStringTag,{value:"Module"})),q2="ROLL S",W2=`
[Tap] Change angle
[Hold] Fire
`,B2=[`
ll
ll
ll
ll
ll
ll
`,`
  ll
   ll
    ll
    ll
   ll 
  ll
`,`
  lll
   ll
  lll
 ll ll
ll  ll 
ll  ll
`,`




llllll
llllll
`,`



ll
llllll
llllll
`,`
ll
ll
ll
ll
ll
ll
`],J2={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingParticleFront:!0,isDrawingScoreFront:!0,audioSeed:6};let L,v0,m0,Ja,b0,fr,yr;const nf=20;function H2(){ticks||(L={pos:vec(nf,50),angle:0,va:1,ticks:0,fireTicks:0},v0=[],m0=[],Ja=0,b0=[],fr=0,yr=1);let l=0;const e=floor(L.angle)*PI/4,t=vec(L.pos.x,L.pos.y-9);let i=!1;input.isJustReleased&&(play("select"),L.angle+=L.va,(L.angle<-1||L.angle>1)&&(L.va*=-1,L.angle+=L.va*2),L.fireTicks=9/sqrt(difficulty)),input.isPressed?((L.angle===0||L.angle===4)&&(t.set(L.pos.x+(L.angle===0?6:-6),L.pos.y-3),i=!0),L.angle=floor(L.angle),L.fireTicks--,L.fireTicks<0&&(play("hit"),times(5,r=>{v0.push({pos:vec(t),vel:vec(3*sqrt(difficulty)).rotate(e+r*.12-.24)})}),L.fireTicks=9/sqrt(difficulty))):(l=sqrt(difficulty)*.5,L.ticks+=sqrt(difficulty)),fr+=l,fr>yr*100&&(play("coin"),yr++),color("green"),rect(0,20,100,5),rect(0,50,100,5),rect(0,80,100,5),rect(0,80,100,5),color("light_black"),rect(0,25,100,25),rect(0,55,100,25),color("light_blue"),rect(0,85,100,15),color("light_green"),rect(wrap(-fr+nf,0,100),25,2,25),rect(wrap(-fr+67,-10,110),55,2,25),color("black"),i?(char("d",t),color("blue"),char("e",L.pos.x,L.pos.y-3)):(char("a",t),color("blue"),char(addWithCharCode("b",floor(L.ticks/15)%2),L.pos.x,L.pos.y-3)),color("black"),bar(t,6,3,e,0),color("blue"),remove(v0,r=>(r.pos.add(r.vel),r.pos.x-=l,bar(r.pos,3,3,r.vel.angle),!r.pos.isInRect(-3,-3,106,106)));const s=ceil(300/sqrt(difficulty)),o=ceil(36/sqrt(difficulty));Ja--,Ja<0&&(m0.push({pos:vec(105,rndi(3)*30+20),vel:vec(rnd(1,difficulty)*-.2),angle:0,ticks:0,fireTicks:rndi(s)}),Ja=rnd(50,60)/difficulty),remove(m0,r=>{const n=vec(r.pos.x,r.pos.y-9);r.fireTicks--,r.fireTicks<0?(-r.fireTicks%o===0&&(play("jump"),b0.push({pos:n,vel:vec(sqrt(difficulty)).rotate(r.angle)})),-r.fireTicks>=o*3&&(r.fireTicks=s)):(r.angle=floor((r.pos.angleTo(L.pos)+PI/8)/(PI/4))*(PI/4),r.pos.add(r.vel),r.ticks-=r.vel.x*5),r.pos.x-=l,color("red");const c=char("f",n,{mirror:{x:-1}}).isColliding,a=char(addWithCharCode("b",floor(r.ticks/15)%2),r.pos.x,r.pos.y-3,{mirror:{x:-1}}).isColliding;return color(r.fireTicks<0?"red":"black"),bar(n,6,3,r.angle,0),c.rect.blue||a.rect.blue?(play("powerUp"),color("red"),addScore(yr),particle(r.pos),!0):(c.char.a&&(play("explosion"),end()),!r.pos.isInRect(-5,-5,110,110))}),color("red"),remove(b0,r=>{r.pos.add(r.vel),r.pos.x-=l;const n=bar(r.pos,3,3,r.vel.angle).isColliding.char;return(n.a||n.d)&&(play("explosion"),end()),!r.pos.isInRect(-5,-5,110,110)}),color("black"),text(`x${yr}`,3,9)}const v3=Object.freeze(Object.defineProperty({__proto__:null,characters:B2,description:W2,options:J2,title:q2,update:H2},Symbol.toStringTag,{value:"Module"})),M2="ROTATION ROD",D2=`
[Tap] Turn
`,L2=[],F2={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let Qe,k0,Ha,hr,P0,gr,xr;function Y2(){ticks||(Qe={center:vec(50,50),length:48,angle:0,rotationSpeed:.05},k0=[],Ha=0,P0=[],gr=0,xr=1);const l=sqrt(difficulty);input.isJustPressed&&(Qe.rotationSpeed*=-1,play("select")),input.isPressed||(Qe.angle+=Qe.rotationSpeed*l),color("blue"),bar(Qe.center,Qe.length,2,Qe.angle);const e=vec(Qe.center).addWithAngle(Qe.angle,Qe.length*.48),t=vec(Qe.center).addWithAngle(Qe.angle+.2*(Qe.rotationSpeed>0?1:-1),Qe.length*.42);line(e,t),Ha-=l,Ha<0&&(play("laser"),hr=U2(.5*l),k0.push({pos:vec(hr.pos),vel:vec(hr.vel)}),Ha=99,gr=9),color("red"),remove(k0,i=>(i.pos.add(i.vel),box(i.pos,5).isColliding.rect.blue&&(play("explosion"),end()),!i.pos.isInRect(-5,-5,110,110))),gr-=difficulty,gr<0&&(P0.push({pos:vec(hr.pos),vel:vec(hr.vel)}),gr=9),color("yellow"),remove(P0,i=>{i.pos.add(i.vel);const s=box(i.pos,3).isColliding.rect.blue;return s&&(play("coin"),addScore(ceil(xr),i.pos),xr+=10),s||!i.pos.isInRect(-5,-5,110,110)}),xr*=.99,color("black"),text(`x${ceil(xr)}`,2,10,{isSmallText:!0})}function U2(l){const e=rndi(4);let t,i;switch(e){case 0:t=vec(rnd()<.5?rnd(20,40):rnd(60,80),-3),i=vec(0,l);break;case 1:t=vec(103,rnd()<.5?rnd(20,40):rnd(60,80)),i=vec(-l,0);break;case 2:t=vec(rnd()<.5?rnd(20,40):rnd(60,80),103),i=vec(0,-l);break;case 3:t=vec(-3,rnd()<.5?rnd(20,40):rnd(60,80)),i=vec(l,0);break}return{pos:t,vel:i}}const m3=Object.freeze(Object.defineProperty({__proto__:null,characters:L2,description:D2,options:F2,title:M2,update:Y2},Symbol.toStringTag,{value:"Module"})),N2="R WHEEL",X2=`
[Tap] 
 Multiple jumps
`,V2=[`
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
`],G2={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let vr,yi,$0,fe,Ma,Da,mr;const hi=40,Tt=32;function K2(){ticks||(vr=times(Tt,()=>({height:0,isHit:!1})),yi=0,$0=[],fe={y:0,vy:0},Ma=[],Da=1,mr=0);const l=sqrt(difficulty);if(input.isJustPressed&&(play("jump"),fe.vy=-2*l,vr.forEach(s=>{s.isHit=!1}),fe.y===0&&(fe.y+=fe.vy,Da=0,i())),fe.y<0){const s=fe.vy;fe.vy+=(input.isPressed?1:3)*.03*difficulty,fe.vy*=.98,fe.y<-hi*2+6&&fe.vy<0&&(fe.vy*=-.5),s*fe.vy<=0&&(play("laser"),Ma.push({pos:vec(50,50+hi+fe.y),width:0,isSpike:!0})),fe.y+=fe.vy,fe.y>0&&(fe.y=fe.vy=0)}color("black"),char(fe.y>0?"a":addWithCharCode("a",floor(ticks/10)%2),50,50+hi+fe.y-3);const e=.03*l;color("yellow"),remove($0,s=>{const o=vec(50,50).addWithAngle(s.angle,s.radius);s.angle+=e;const r=char("c",o).isColliding.char;if(r.a||r.b)return play("coin"),Ma.push({pos:vec(50,50+hi+fe.y),width:0,isSpike:!1}),!0}),remove(Ma,s=>(s.isSpike?(s.width+=l,s.pos.y+=l*3,color("purple")):(s.width+=l*2,s.pos.y+=l*2,color("yellow")),box(s.pos,s.width,3),s.pos.y>103)),yi+=e,color("black"),arc(50,50,hi+3,3,yi,yi+PI*2);let t=yi;mr=0,vr.forEach(s=>{color(s.height>0?"red":"transparent");const o=vec(50,50).addWithAngle(t,hi*(1-s.height*.1)),r=vec(50,50).addWithAngle(t,hi);.05+s.height*.1;let n=line(o,vec(r).addWithAngle(t-PI/2,50/Tt)).isColliding;n={...n,...line(o,vec(r).addWithAngle(t+PI/2,50/Tt)).isColliding},!s.isHit&&n.rect.purple&&(play("hit"),s.height++,s.isHit=!0),s.height>0&&(n.rect.yellow?(play("select"),Da+=s.height,addScore(Da,o),s.height=0):(n.char.a||n.char.b)&&(play("explosion"),end())),t+=PI*2/Tt,s.height>0&&mr++}),mr===0&&(vr[wrap(floor((-yi-PI/4)/(PI*2/Tt)),0,Tt)].height=1,vr[wrap(floor((-yi-PI/4*3)/(PI*2/Tt)),0,Tt)].height=1,i());function i(){times(ceil(mr/9),()=>{$0.push({angle:-PI/3*2+rnds(PI/4*3),radius:rnd(10,30)})})}}const b3=Object.freeze(Object.defineProperty({__proto__:null,characters:V2,description:X2,options:G2,title:N2,update:K2},Symbol.toStringTag,{value:"Module"})),Q2="SCAFFOLD",Z2=`
[Tap] Change angle
[Hold] Scaffold 
`,e5=[`
    ll
   lll
  ll
 ll
ll
l
`,`




llllll
llllll
`,`
l
ll
 ll
  ll
   lll
    ll
`,`
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
  `],l5={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:10};let S0,ul,it,br,kr,wl,Pr,$r,fl,Sr;function t5(){ticks||(S0=times(9,i=>({pos:vec(i*6+3,52),type:1})),ul=vec(9*6+3,52),it=0,br=1,kr=0,wl=vec(-9,0),Pr=[],$r=0,fl=vec(5,50),Sr=1);let l=difficulty*.05;if(ul.x>40&&(l+=(ul.x-40)*.1),wl.x-=l,color("red"),wl.x<-6){let i=47;for(let s=0;s<9;s++){const o=47+rndi(-9,9)*4;if(abs(o-ul.y)<25){i=o;break}}wl.set(6-ul.x%6+120,i),Pr.push({pos:vec(wl.x+4,wl.y+4),vy:.1,d:2,distance:4,type:"gold"}),color("purple"),rect(100,0,40,100),color("red"),$r+=30}rect(wl.x+3,0,2,wl.y-12),rect(wl.x+3,wl.y+18,2,82-wl.y),rect(0,-7,100,9),rect(0,98,100,9),input.isJustReleased&&(play("laser"),(it===0&&br===-1||it===2&&br===1)&&(br*=-1),it+=br),input.isPressed?(kr++,kr>15/sqrt(difficulty)&&(play("select"),S0.push({pos:vec(ul.x,ul.y+(it===2?4:0)),type:it}),ul.add(6,it*4-4),kr=0)):kr=0,color("black"),remove(S0,i=>(i.pos.x-=l,char(addWithCharCode("a",i.type),i.pos),i.pos.x<-3)),color("cyan"),ul.x-=l,char(addWithCharCode("a",it),ul.x,ul.y+(it===2?4:0));let e=0;fl.x<20&&(e+=(20-fl.x)*.2),fl.x+=e-l,char(addWithCharCode("d",floor(ticks/15)%2),fl).isColliding.rect.red&&(play("explosion"),end()),color("transparent");let t;for(let i=0;i<9;i++){const s=box(fl.x+4,fl.y,1,6).isColliding.char;if(s.a)t=0,fl.y--;else if(s.b)t=1,fl.y--;else if(s.c)t=2,fl.y--;else{if(t!=null)break;fl.y++}}if(t===0&&(fl.y+=4),$r-=l,$r<0){const i=Pr.length<2||rnd()<.5?"gold":"spike",s=rnd(20,60)/(i==="gold"?4:1.5);rnds(20)*(i==="gold"?1:1.5),Pr.push({pos:vec(120,clamp(ul.y+rnds(20),10,90)),d:s/2,distance:s,vy:rnds(1,sqrt(difficulty))*.3,type:i}),$r=rnd(15,25)}remove(Pr,i=>{i.pos.x-=l,i.pos.y+=i.vy,i.d-=abs(i.vy),i.d<0&&(i.d=i.distance,i.vy*=-1),color(i.type==="gold"?"yellow":"red");const s=text(i.type==="gold"?"$":"x",i.pos).isColliding;if(i.distance>4&&s.rect.purple)return!0;if(s.char.d||s.char.e){if(i.type==="gold")return play("coin"),addScore(Sr,i.pos),Sr++,!0;play("explosion"),end()}if(i.pos.x<-3)return i.type==="gold"&&Sr>1&&(play("hit"),Sr--),!0})}const k3=Object.freeze(Object.defineProperty({__proto__:null,characters:e5,description:Z2,options:l5,title:Q2,update:t5},Symbol.toStringTag,{value:"Module"})),i5="SCRAMBIRD",s5=`
[Tap]
 Fly & Shoot
`,o5=[`
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
`],r5={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let cf,gs,Ct,w0,_0,La,yl,Fa,Ya,ql,wr;function n5(){ticks||(cf=times(11,t=>({x:t*10,height:10})),gs=10,Ct=0,w0=[],_0=[],La=10,yl={pos:vec(10,50),vy:0},Fa=[],Ya=[],ql=50,wr=1);const l=difficulty*.3,e=["purple","blue","green","red"][floor(ticks/420)%4];color(e),cf.forEach(t=>{t.x-=l,t.x<-10&&(t.x+=110,gs+=Ct,gs<10&&Ct<0||gs>50&&Ct>0?(Ct*=-1,gs+=Ct):rnd()<.2?Ct=0:rnd()<.3&&(Ct=rnd()<.5?-10:10),t.height=gs,La--,La<0?(_0.push(vec(t.x+5,90-t.height-3)),La=rnd(1,16)):rnd()<.5&&w0.push({pos:vec(t.x+5,90-t.height-3),launchTicks:rnd()<.5/sqrt(difficulty)?9999:rnd(200,300)/difficulty})),rect(t.x,90-t.height,9,t.height),rect(t.x,0,9,5)}),color("black"),input.isJustPressed&&(play(ql>0?"laser":"hit"),yl.vy-=difficulty*(ql>0?.5:.1),Fa.push(vec(yl.pos)),Ya.push({pos:vec(yl.pos),vel:vec(2*sqrt(difficulty),0)})),yl.vy+=.015*difficulty,yl.vy*=.98,yl.pos.y+=yl.vy,char(addWithCharCode("c",yl.vy<0?0:1),yl.pos).isColliding.rect[e]&&(play("explosion"),end()),color("red"),particle(yl.pos.x-2,yl.pos.y,.5,.5,PI,PI/5),remove(Fa,t=>(t.x+=2*sqrt(difficulty),char("e",t).isColliding.rect[e]?!0:t.x>103)),color("cyan"),remove(Ya,t=>{if(t.vel.y+=.1*difficulty,t.vel.mul(.9),t.pos.add(t.vel),bar(t.pos,2,2,t.vel.angle).isColliding.rect[e])return!0}),remove(w0,t=>{t.pos.x-=l,t.launchTicks--,t.launchTicks<0&&(t.pos.y-=difficulty*.5),color("black");const i=char("a",t.pos).isColliding;if(i.char.e||i.rect.cyan)return play("hit"),color("red"),particle(t.pos),addScore(wr,t.pos),wr++,!0;if((i.char.c||i.char.d)&&(play("explosion"),end()),t.pos.x<-3||t.pos.y<-3)return wr>1&&wr--,!0}),color("black"),remove(_0,t=>{t.x-=l;const i=char("b",t).isColliding;return i.char.e||i.rect.cyan?(play("powerUp"),color("blue"),particle(t),ql=clamp(ql+10,0,50),!0):((i.char.c||i.char.d)&&(play("explosion"),end()),t.x<-3)}),color("transparent"),remove(Fa,t=>{const i=char("e",t).isColliding.char;return i.a||i.b}),remove(Ya,t=>{const i=bar(t.pos,2,2,t.vel.angle).isColliding.char;return i.a||i.b}),ql=clamp(ql-difficulty*.025,0,50),color("yellow"),text("FUEL",10,93),rect(40,90,ql,6),color("blue"),rect(40+ql,90,50-ql,6)}const P3=Object.freeze(Object.defineProperty({__proto__:null,characters:o5,description:s5,options:r5,title:i5,update:n5},Symbol.toStringTag,{value:"Module"})),c5="SHINY",a5=`
[Hold] Rainy
`,p5=[`
  ll
  l
lllll
  l
 l lll
l
`,`
   ll
   l
lllll
  l
ll ll
     l
`,`
  lll
 l l l
  lll
   l
llll
    l
`,`
 lll
l l l
 lll
  l
 l lll
l   
`,`
l l l
l l l
 lll
  l
 l l
l   l 
`,`
  ll
 llll
llllll
llllll
 llll
  ll
`],d5={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let xs,Ua,vs,af,_r,T0,ms;const pf=89,C0=20;function u5(){ticks||(xs=[],Ua=[],vs=times(22,o=>({pos:vec((o-1)*10+5,95),size:8})),af=times(30,o=>{const r=vec((o+1)/31*199+rnds(3),rnd(5,15)),n=vec(r.x<99?-20:220,r.y);return{pos:vec(n),rainyPos:r,shinyPos:n,radius:rnd(5,10),weakDropTicks:rnd(99),strongDropTicks:rnd(100,900)}}),_r=0,ms=0,T0=0),xs.length===0&&(ms<9&&ms++,xs=times(ms,()=>({pos:vec(-4,pf),speed:rnd(.1,.15)*difficulty,ticks:rndi(999),isRunning:!1,isFalling:!1})),vs[C0].size=8);const l=input.isPressed;input.isJustPressed&&(play("hit"),T0=rnds(.5)*sqrt(difficulty),vs[C0].size-=.1),input.isJustReleased&&play("hit"),_r+=!l&&_r>0?-1:l&&_r<10?1:0;const e=_r/10;color("yellow");const t=vec(100,10),i=vec();if(char("f",t),e<1)for(let o=0;o<7;o++){const r=ticks*.05+o*PI*2/7,n=abs(sin(o+ticks*.05)*5*(1-e))+10;t.set(100,10).addWithAngle(r,7),i.set(100,10).addWithAngle(r,n),line(t,i)}color("light_black"),af.forEach(o=>{o.pos.set(o.rainyPos.x*e+o.shinyPos.x*(1-e),o.rainyPos.y*e+o.shinyPos.y*(1-e)),o.pos.y>-9&&o.pos.y<209&&box(o.pos,o.radius*2,o.radius*2),o.weakDropTicks--,o.weakDropTicks<0&&(l&&s(o.pos.x,o.pos.y+o.radius,"weak"),o.weakDropTicks=rnd(100,200)),o.strongDropTicks--,o.strongDropTicks<0&&(l&&s(o.pos.x,o.pos.y+o.radius,"strong"),o.strongDropTicks=rnd(500,999)/difficulty)}),vs.forEach((o,r)=>{r===C0?(color("black"),o.size>=1&&(box(o.pos.x,o.pos.y-(4-o.size/2),8,o.size),o.size-=.005*difficulty)):o.size<8?(color("light_black"),box(o.pos,o.size,o.size),o.size+=.12*difficulty):(color("black"),box(o.pos,8,8))}),color("red"),xs=xs.filter(o=>{let r=o.isRunning?2+floor(o.ticks/15)%2:0+floor(o.ticks/30)%2;o.isFalling?r=4:o.pos.x+=o.speed*(o.isRunning?5:1);let n=addWithCharCode("a",r);if(char(n,o.pos).isColliding.rect.black)o.pos.y=pf,o.isFalling=!1;else if(o.isFalling=!0,o.pos.y+=difficulty,o.pos.y>103)return ms--,ms<=0?(play("lucky"),end()):play("explosion"),!1;o.ticks++;const c=floor(30/difficulty);if(o.ticks%c===0&&(o.isRunning=l),o.pos.x>203){play("powerUp");const a=floor(vs[20].size*xs.length);return a>0&&addScore(a,190,80),!1}return!0}),Ua=Ua.filter(o=>{if(o.pos.add(o.vel),o.type==="strong"){color("blue");const r=line(o.pos,vec(o.vel).normalize().mul(4).add(o.pos),3).isColliding.char;if(r.a||r.b||r.c||r.d)return!1}else color("light_blue"),line(o.pos,vec(o.vel).normalize().mul(3).add(o.pos),2);if(o.pos.y>90){if(o.type==="strong"){const r=floor(o.pos.x/10)+1;r>=2&&r<20&&(play("select"),vs[r].size=0)}return!1}return!0});function s(o,r,n){Ua.push({pos:vec(o,r),vel:vec((rnds(.2)+T0)*difficulty,difficulty),type:n})}}const $3=Object.freeze(Object.defineProperty({__proto__:null,characters:p5,description:a5,options:d5,title:c5,update:u5},Symbol.toStringTag,{value:"Module"})),f5="SKY RAFTSMAN",y5=`
[Tap] Jump
`,h5=[],g5={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:2};let I,Ws,td,od,id,Fl;const x5=2,v5=.1;function m5(){ticks||b5(),Fl=-.05,I.pos.y>50&&Ws.length>0?Fl+=(50-I.pos.y)*.2:I.pos.y<20&&(Fl+=(20-I.pos.y)*.1),Fl*=difficulty,$5(),k5(),P5(),S5()}function b5(){Ws=times(5,l=>({pos:vec(l===0?50:rnd(10,90),75+l*30),size:l===0?20:rnd(15,25),rotationSpeed:l===0?-.05:rnds(.04,.08),angle:0,vel:vec(),yDist:0})),I={pos:vec(),isJumping:!1,currentLog:Ws[0],vel:vec()},td=0,od=[],id=0,Fl=0}function k5(){input.isJustPressed&&!I.isJumping&&(play("jump"),I.isJumping=!0,I.vel.set(0,0).addWithAngle(I.currentLog.angle,x5),I.pos.add(vec(I.vel).mul(2)),I.currentLog.vel.set(vec(I.vel).mul(-1))),I.isJumping?(I.pos.add(vec(I.vel).mul(difficulty)),I.vel.mul(.99),I.vel.y+=v5/(input.isPressed?2:1),I.pos.y+=Fl):I.currentLog&&I.pos.set(I.currentLog.pos).addWithAngle(I.currentLog.angle,I.currentLog.size/2),(I.pos.x<3&&I.vel.x<0||I.pos.x>97&&I.vel.x>0)&&(I.vel.x=-I.vel.x),I.pos.y>100&&(play("explosion"),end())}function P5(){remove(Ws,l=>{if(l.pos.add(vec(l.vel).mul(difficulty)),l.yDist+=l.vel.y*difficulty,l.yDist>20){l.yDist-=20;const e=floor(l.vel.y*difficulty*5);e>0&&(l.pos.y<100?(play("coin"),addScore(e,l.pos)):addScore(e,l.pos.x,99))}return l.vel.mul(.99),l.pos.y+=Fl,(l.pos.x<l.size/2&&l.vel.x<0||l.pos.x>100-l.size/2&&l.vel.x>0)&&(l.vel.x=-l.vel.x),l.angle+=l.rotationSpeed*difficulty,l.pos.y<-99}),td+=Fl,td<0&&!I.isJumping&&(Ws.push({pos:vec(rnd(10,90),125),size:rnd(15,25),rotationSpeed:rnds(.04,.08),angle:0,vel:vec(),yDist:0}),td=100)}function $5(){if(remove(od,l=>(l.pos.y+=Fl/2,l.pos.y<-20)),id+=Fl,id<0){let l=rndi(3,6),e=rnd(100);for(let t=0;t<l;t++)od.push({pos:vec(e+rnds(20),120+rnd(10)),size:vec(rnd(15,25),rnd(5,15))});id+=rnd(120,160)}}function S5(){color("light_cyan"),od.forEach(l=>{box(l.pos,l.size)}),color("red"),box(I.pos,6),color("yellow"),Ws.forEach(l=>{l.pos.y>100+l.size/2?(color("light_yellow"),rect(l.pos.x-l.size/2,98,l.size,2)):(color("yellow"),arc(l.pos,l.size/2,3,l.angle,l.angle+2*PI).isColliding.rect.red&&I.isJumping&&(play("click"),I.isJumping=!1,I.currentLog=l,l.angle=l.pos.angleTo(I.pos)))})}const S3=Object.freeze(Object.defineProperty({__proto__:null,characters:h5,description:y5,options:g5,title:f5,update:m5},Symbol.toStringTag,{value:"Module"})),w5="SLALOM",_5=`
[Hold] Turn
`,T5=[],C5={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Na,I0,Xa,It,Fe,Va,Ze,Tr,Cr,Ga,Ka;function I5(){if(ticks||(Na=[],I0=1,Xa=0,It=0,Fe=vec(90,90),Ze=-PI/4*3,Va=vec(1).rotate(Ze),Tr=99,Cr=void 0,Ga=[],Ka=0),Ka-=It,Ka<0){const r=rnd()<.5?rndi(-5,5):rndi(95,105);Ga.push({p:vec(r,-9),s:vec(rndi(9,19),rndi(5,9)*2)}),Ka+=10}color("purple"),Ga=Ga.filter(r=>(r.p.y+=It,box(r.p,r.s),r.p.y<109)),Xa-=It,Xa<0&&(play("select"),Na.push({y:-5,side:I0,length:rndi(40,60)}),I0*=-1,Xa+=rndi(80,90)),color("red");let l;if(Na=Na.filter(r=>(r.y+=It,box(r.side===1?99-r.length/2:r.length/2,r.y,r.length,4),l==null&&r.y<Fe.y+9&&(l=r),r.y<105)),l!==Cr){Cr=l;const r=floor(100/(sqrt(Tr)+1))-15;r>0&&(play("coin"),addScore(r,Fe)),Tr=99}color("black");const e=ticks<60?ticks/60:1;input.isPressed&&(Ze+=(Cr||{side:0}).side*.07*difficulty*e,particle(Fe,1,Va.length,Ze+PI,.2)),Va.mul(1-.02/difficulty).add(vec(.03).rotate(Ze)).mul(e),Fe.add(Va),It=0,Fe.y<88&&(It+=(88-Fe.y)*.5),Fe.y+=It,bar(vec(Fe).add(vec(2,2).rotate(Ze)),1,2,Ze),bar(vec(Fe).add(vec(-2,2).rotate(Ze)),1,2,Ze),bar(vec(Fe).add(vec(2,-2).rotate(Ze)),1,2,Ze),bar(vec(Fe).add(vec(-2,-2).rotate(Ze)),1,2,Ze),color("blue");const t=bar(Fe,4,3,Ze).isColliding.rect;(t.red||t.purple||!Fe.isInRect(0,0,99,99))&&(play("explosion"),end());const i=Cr||{y:0,length:0,side:1},o=vec(i.side===1?99-i.length:i.length,i.y).distanceTo(Fe);o<Tr&&(Tr=o)}const w3=Object.freeze(Object.defineProperty({__proto__:null,characters:T5,description:_5,options:C5,title:w5,update:I5},Symbol.toStringTag,{value:"Module"})),R5="SLASHES",E5=`
[Tap] Turn
`,A5=[],O5={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let Ir,Qa,Za,st,Rr;function z5(){ticks||(Ir=[{pos:vec(22,50),angle:PI/4,width:30,isAppearing:!1}],Qa=0,Za=1,st=1,Rr=0),input.isJustPressed&&(play("select"),Za*=-1),st+=(difficulty-st)*.03;const l=vec(st*Za,st);if(Qa-=difficulty,Qa<0){const i=rndi(20,50)+20;Ir.push({pos:vec(rndi(-99,199),-i),angle:rnd()<.5?-PI/4:PI/4,width:i,isAppearing:!0}),Qa+=rnd(10,15)}Ir.forEach(i=>{color("light_purple"),bar(i.pos,i.width,22,i.angle)}),Ir=Ir.filter(i=>{color("purple");const s=bar(i.pos,i.width,i.isAppearing?20:4,i.angle).isColliding.rect;if(i.isAppearing){if(s.purple)return!1;i.isAppearing=!1,i.width-=20}return i.pos.add(l),i.pos.y<99+i.width}),color("black");const e=-(Za*PI)/4+PI/2,t=bar(50,90,4,3,e,.9).isColliding.rect;t.purple?(play("explosion"),end()):t.light_purple?(play("laser"),st+=.03*difficulty,Rr+=st,particle(50,90,3,st*2,e,.3)):(particle(50,90,1,st,e,0),Rr>0&&(play("powerUp"),addScore(Rr,50,90),Rr=0))}const _3=Object.freeze(Object.defineProperty({__proto__:null,characters:A5,description:E5,options:O5,title:R5,update:z5},Symbol.toStringTag,{value:"Module"})),j5="SLIME STRETCHER",q5=`
[Hold] Stretch
[Release] Contract
`,W5=[`
 llll
l  lll
l llll
l llll
llll l
 llll
`],B5={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let d,Er,R0,Ar,ep,lp,gi;function J5(){if(ticks||(d={pos:vec(50,90),width:20,height:20,baseWidth:20,baseHeight:20,maxHeight:80,velocity:1,isOnGround:!0},Er=[],R0=[],Ar=1,ep=50,lp=30,gi=1),input.isPressed?(d.height=Math.min(d.height+2,d.maxHeight),d.width=Math.max(d.width-.5,d.baseWidth/2),d.velocity=.5*difficulty,d.pos.y=Math.max(d.pos.y-2,10)):(d.height=Math.max(d.height-4,d.baseHeight),d.width=Math.min(d.width+1,d.baseWidth),d.velocity=1.5*difficulty),d.pos.x+=d.velocity,d.pos.x<50&&d.pos.x++,d.pos.x<-d.width&&(play("explosion"),end()),ep-=d.velocity,ep<=0){const l=rnd(20,60);Er.push({pos:vec(200,rnd(0,70)),width:l,height:rnd(20,40)}),ep=rndi(35,55)+l}lp-=d.velocity,lp<=0&&(R0.push({pos:vec(203,rnd(20,80))}),lp=rndi(30,60)),d.isOnGround=!1,Er.forEach(l=>{d.pos.x+d.width>l.pos.x&&d.pos.x<l.pos.x+l.width&&d.pos.y+d.height>l.pos.y&&d.pos.y<l.pos.y+l.height&&(d.pos.y+d.height<l.pos.y+10?(d.height--,d.pos.y=l.pos.y-d.height,d.isOnGround=!0):d.pos.y>l.pos.y+l.height-10?(d.pos.y=l.pos.y+l.height,d.height-=2):d.pos.x+d.width<l.pos.x+5?(d.pos.x=l.pos.x-d.width,d.width--):(d.pos.y=l.pos.y-d.height,d.isOnGround=!0))}),d.isOnGround||(d.pos.y=Math.min(d.pos.y+1,90)),d.pos.y+d.height>=90&&(d.pos.y=90-d.height,d.isOnGround=!0),color("green"),rect(d.pos,d.width,d.height),color("black"),Er.forEach(l=>{rect(l.pos,l.width,l.height)}),rect(0,90,200,10),Ar=d.velocity,d.pos.x-=Ar,remove(Er,l=>(l.pos.x-=Ar,l.pos.x<-l.width)),color("yellow"),remove(R0,l=>{const e=char("a",l.pos).isColliding.rect;if(e.black)return!0;if(e.green)return play("coin"),addScore(gi,l.pos),gi++,!0;if(l.pos.x-=Ar,l.pos.x<-3)return gi--,gi<1&&(gi=1),!0}),color("black"),text(`x${gi}`,2,10,{isSmallText:!0})}const T3=Object.freeze(Object.defineProperty({__proto__:null,characters:W5,description:q5,options:B5,title:j5,update:J5},Symbol.toStringTag,{value:"Module"})),H5="SNAKE 1",M5=`
[Tap] Turn
`,D5=[],L5={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let je,tp,ip,Or,sp,op,E0,df;const F5=[[1,0],[0,1],[-1,0],[0,-1]],Y5=[">","v","<","^"];function U5(){ticks||(color("green"),je={pos:vec(8,8),angle:0,rotation:1},tp=0,ip=!1,Or=!1,sp=times(4,t=>vec(4+t,8)),op=[vec(12,8)],E0=times(16,()=>"#").join(""),df=`#${times(14,()=>" ").join("")}#`),text(E0,3,9);for(let t=1;t<=13;t++)text(df,3,9+t*6);if(text(E0,3,9+14*6),!Or&&input.isJustPressed&&(play("select"),Or=!0),tp--,tp<0){ip?ip=!1:sp.shift(),sp.push(vec(je.pos)),Or&&(je.angle=wrap(je.angle+je.rotation,0,4),Or=!1);const t=F5[je.angle];je.pos.add(t[0],t[1]),tp=20/difficulty}sp.forEach(t=>{text("o",t.x*6+3,t.y*6+3)});const l=text(Y5[wrap(je.angle+je.rotation,0,4)],je.pos.x*6+3,je.pos.y*6+3).isColliding.text;(l.o||l["#"])&&(play("explosion"),color("white"),rect(je.pos.x*6,je.pos.y*6,6,6),color("green"),text("X",je.pos.x*6+3,je.pos.y*6+3),end());let e=!1;if(op=op.filter(t=>{const i=text("$",t.x*6+3,t.y*6+3).isColliding.text;return i.v||i[">"]||i["<"]||i["^"]?(e=!0,!1):!0}),e){play("coin"),addScore(1),ip=!0,je.rotation*=-1,color("transparent");for(let t=0;t<2;t++)for(let i=0;i<99;i++){let s=rndi(2,14),o=rndi(3,14);const r=text("$",s*6+3,o*6+3).isColliding.text;if(!(r.v||r[">"]||r["<"]||r["^"]||r.o)){op.push(vec(s,o));break}}color("green")}}const C3=Object.freeze(Object.defineProperty({__proto__:null,characters:D5,description:M5,options:L5,title:H5,update:U5},Symbol.toStringTag,{value:"Module"})),N5="SNAKY",X5=`
[Hold] Up
`,V5=[`
 llll
ll lll
l llll
llllll
llllll
 llll
`],G5={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Ie,A0,zr,rp,np,jr;function K5(){ticks||(Ie=[{angle:0,va:0,prevNode:void 0,nextNode:void 0}],o(),A0=[],zr=0,rp=2,np=50,jr=4,times(jr,s),zr=0),input.isJustPressed&&play("select");const l=(50+Ie.length*3)/Ie.length,e=PI/(sqrt(Ie.length-1)+3);let t=vec(0,50),i=0;Ie.forEach((n,c)=>{if(c===0){const a=n.angle;n.angle=clamp(n.angle+(input.isPressed?-1:1)*.03*sqrt(difficulty),-e,e),n.va=n.angle-a}else n.angle+=n.va,(n.angle>n.prevNode.angle+e&&n.va>0||n.angle<n.prevNode.angle-e&&n.va<0)&&(n.va*=-.2);n.va*=.95,n.nextNode!=null&&(n.nextNode.va+=n.va*.07*sqrt(sqrt(difficulty))),n.prevNode!=null&&(n.prevNode.va+=n.va*.01*sqrt(sqrt(difficulty))),i+=n.angle,color(c===Ie.length-1?"red":"black"),bar(t,l,3,n.angle,0),t.addWithAngle(n.angle,l)}),zr--,zr<0&&s(),remove(A0,n=>{n.vx*=1+.005*sqrt(difficulty),n.pos.x+=n.vx,color(n.isRed?"red":"black");const c=char("a",n.pos).isColliding.rect;let a=0;if(c.red?n.isRed?(play("powerUp"),a=Ie.length*Ie.length,o()):(play("coin"),a=Ie.length):c.black&&(n.isRed?(play("hit"),a=-Ie.length,r()):(play("laser"),a=1)),a!==0)return addScore(a,n.pos),!0;n.pos.x<0&&(play("explosion"),color("red"),text("X",3,n.pos.y),end())});function s(){let n=!1;rp--,rp<0&&(n=!0,rp=7),A0.push({pos:vec(103-jr*10,np),vx:-rnd(1,difficulty)*.1,isRed:n});const c=rnd(20,80);zr=abs(np-c+10)*4/sqrt(difficulty),np=c,jr>0&&jr--}function o(){if(Ie.length>9)return;const n=Ie[Ie.length-1],c={angle:0,va:0,prevNode:n,nextNode:void 0};n.nextNode=c,Ie.push(c)}function r(){Ie.pop(),Ie[Ie.length-1].nextNode=void 0}}const I3=Object.freeze(Object.defineProperty({__proto__:null,characters:V5,description:X5,options:G5,title:N5,update:K5},Symbol.toStringTag,{value:"Module"})),Q5="SQUARE BAR",Z5=`
[Hold] Grow
`,em=[],lm={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:5};let xi,O0;const K=40,tm=[[1,0],[0,1],[-1,0],[0,-1]],qr=vec(50,50);let cp;function im(){ticks||(xi=[{pos:vec(50,50-K/2-1),length:9,spRatio:0,angle:3,tAngle:0,type:"player"},{pos:vec(50,50+K/2+1),length:12,spRatio:0,angle:1,tAngle:2,type:"enemy"}],O0=[],times(3,()=>{e("spike")}),times(7,()=>{e("gold")}),cp=1),color("light_black"),box(qr,K);let l=!1;wrap(qr.angleTo(xi[0].pos)-qr.angleTo(xi[1].pos),-PI,PI)>0&&(l=!0),input.isJustPressed&&play("select"),remove(xi,t=>{if(t.type==="player"?input.isPressed?t.length+=(20+sqrt(difficulty)*9-t.length)*.1:t.length+=(9-t.length)*.2:t.length=11+sqrt(difficulty)*4,t.angle=wrap(t.angle+.03*difficulty,0,4),t.angle>=t.tAngle&&t.angle<t.tAngle+PI/4){play("hit"),t.angle=t.tAngle;const s=tm[t.angle],o=vec(s[0],s[1]).mul(t.length*(1-t.spRatio)).add(t.pos);switch(t.angle){case 0:o.x>50+K/2+1?(t.tAngle=1,t.spRatio=1-(o.x-(50+K/2+1))/t.length,t.pos.set(50+K/2+1,50-K/2-1)):(t.angle=2,t.spRatio=0,t.pos.set(o));break;case 1:o.y>50+K/2+1?(t.tAngle=2,t.spRatio=1-(o.y-(50+K/2+1))/t.length,t.pos.set(50+K/2+1,50+K/2+1)):(t.angle=3,t.spRatio=0,t.pos.set(o));break;case 2:o.x<50-K/2-1?(t.tAngle=3,t.spRatio=1-(50-K/2-1-o.x)/t.length,t.pos.set(50-K/2-1,50+K/2+1)):(t.angle=0,t.spRatio=0,t.pos.set(o));break;case 3:o.y<50-K/2-1?(t.tAngle=0,t.spRatio=1-(50-K/2-1-o.y)/t.length,t.pos.set(50-K/2-1,50-K/2-1)):(t.angle=1,t.spRatio=0,t.pos.set(o));break}}color(t.type==="player"?"green":l?"red":"yellow");const i=bar(t.pos,t.length,3,t.angle*PI/2,t.spRatio).isColliding.rect;if(t.type==="enemy"&&i.green)if(l)play("explosion"),end();else{play("powerUp"),addScore(10*cp,t.pos),cp++;const s=[vec(50,50-K/2-1),vec(50+K/2+1,50),vec(50,50+K/2-1),vec(50-K/2+1,50)],o=wrap(xi[0].tAngle+2,0,4);return xi.push({pos:s[o],length:12,spRatio:0,angle:wrap(o-1,0,4),tAngle:o,type:"enemy"}),!0}}),remove(O0,t=>{t.ticks<60?t.ticks%15===0&&t.size--:t.size<4&&t.ticks%15===0&&t.size++,color(t.type==="spike"?"red":"yellow");const i=box(t.pos,t.size).isColliding.rect;if(i.green)if(t.type==="spike")t.size===4&&(play("explosion"),end());else return play("coin"),addScore(cp,t.pos),e("gold"),!0;if(t.ticks--,t.ticks<0||i.red||i.yellow)return e(t.type),!0});function e(t){let i;for(let s=0;s<99&&(i=vec(rnd(50-K/2-1-20,50+K/2),rnd(50-K/2-1-20,50-K/2-(t==="spike"?15:4))).sub(qr).rotate(rndi(4)*PI/2).add(qr),!(i.distanceTo(xi[0].pos)>36));s++);O0.push({pos:i,type:t,ticks:floor(rnd(777,999)/sqrt(difficulty)),size:0})}}const R3=Object.freeze(Object.defineProperty({__proto__:null,characters:em,description:Z5,options:lm,title:Q5,update:im},Symbol.toStringTag,{value:"Module"})),sm="S SHAKE",om=`
[Tap] Shake
`,rm=[`
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
`],nm={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let vi,Wr,z0,ap,Br;function cm(){if(!ticks){let o=0;vi=times(22,r=>(o+=PI*4/20,{pos:vec(r*10),angle:o,height:9})),Wr=1,z0=[],ap=0,Br=1}let l=difficulty*.3;input.isJustPressed&&(play("jump"),Wr=3,Br=1),Wr+=(1-Wr)*.05;let e=0;vi.forEach((o,r)=>{if(o.pos.x+=l,o.pos.x>210){o.pos.x-=220;const n=vi[wrap(r+1,0,22)];o.angle=n.angle-PI*4/20*rnd(.5,1.5),o.height=n.height+rnds(1),o.height+=(9-o.height)*.05}o.pos.y=sin(o.angle)*o.height,o.pos.y>e&&(e=o.pos.y)});let t;vi.forEach(o=>{o.pos.y=(o.pos.y-e)*Wr+99,t!=null&&t.x<o.pos.x&&line(t,o.pos),t=o.pos});const i=vi[0].pos,s=vi[vi.length-1].pos;s.x<i.x&&line(s,i),ap--,ap<0&&(z0.push({pos:vec(203,50),vel:vec(-rnd(1,sqrt(difficulty))*.3*sqrt(difficulty)),isOnGround:!0,ticks:0}),ap=rnd(120)/difficulty/difficulty),remove(z0,o=>{if(o.pos.add(o.vel),o.ticks-=o.vel.x,color("transparent"),o.isOnGround){if(input.isJustPressed){let r=0;for(let n=0;n<99;n++)if(o.pos.y--,r--,box(o.pos,6).isColliding.rect.black){o.vel.y=r*sqrt(difficulty)*.3,o.isOnGround=!1;break}}if(box(o.pos,6).isColliding.rect.black)for(let r=0;r<99&&(o.pos.y--,!!box(o.pos,6).isColliding.rect.black);r++);else for(let r=0;r<99;r++)if(o.pos.y++,box(o.pos,6).isColliding.rect.black){o.pos.y--;break}}else if(o.vel.y+=.03*difficulty,box(o.pos,6).isColliding.rect.black)o.isOnGround=!0,o.vel.y=0;else if(o.vel.y>0){let r=o.pos.y;for(let n=0;n<9;n++)if(r-=3,box(o.pos.x,r,6).isColliding.rect.black){o.pos.y=r-5,o.isOnGround=!0,o.vel.y=0;break}}return color("black"),char(addWithCharCode("a",floor(o.ticks/9)%2),o.pos,{mirror:{x:-1}}),o.pos.y<-3?(play("coin"),addScore(Br,o.pos.x,clamp(9+Br*3,9,60)),Br++,!0):(o.pos.x<3&&(play("explosion"),end()),o.pos.y>103)})}const E3=Object.freeze(Object.defineProperty({__proto__:null,characters:rm,description:om,options:nm,title:sm,update:cm},Symbol.toStringTag,{value:"Module"})),am="STAGE SEPARATION",pm=`
[Tap] Staging
`,dm={viewSize:{x:100,y:150},theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5},um=[];let q,j0,uf,q0,pp,wi,re;function fm(){ticks||(q={pos:vec(50,90),vel:vec(0,-.5),currentStage:4,stageHeight:10,stageBurnTime:100},j0=[],q0=[],uf=times(200,()=>({x:rnd(-200,300),y:rnd(-1e3,0)})),pp=99,wi=0,re=1);const l=-q.pos.y;addScore(-q.vel.y*.1);const e=q.pos.y-130*re;wi+=clamp((e-wi)*.1,-99,0),re=clamp(1+l/9999,1,3),color("black"),uf.forEach(i=>{const s=(i.x-50)/re+50,o=(i.y-wi)%1e3/re;s>=0&&s<=100&&o>=0&&o<=150&&box(s,o,1)}),q.vel.y-=.1*(q.stageBurnTime/60),q.vel.y+=.05,q.pos.y+=q.vel.y*difficulty,q.stageBurnTime>0&&(q.stageBurnTime-=difficulty),input.isJustPressed&&q.currentStage>2&&(play("click"),q0.push({pos:vec(q.pos.x,q.pos.y+q.stageHeight*(q.currentStage-1)),vel:vec(rnds(.5),q.vel.y+.5),height:q.stageHeight}),q.currentStage--,q.vel.y-=.5,q.stageBurnTime=60),q.currentStage=clamp(q.currentStage+.02*difficulty,0,4),color(q.currentStage>2?"red":"light_red");const t=W0(q.pos);if(rect(t.x-5/re,t.y,10/re,q.stageHeight*q.currentStage/re),q.stageBurnTime>0&&particle(t.x,t.y+q.stageHeight*q.currentStage/re,{count:1,speed:q.stageBurnTime/20/re,angle:PI/2,angleWidth:.3}),t.y>150&&(play("explosion"),end()),color("purple"),remove(q0,i=>{i.vel.y+=.1,i.pos.add(i.vel);const s=W0(i.pos);return rect(s.x-5/re,s.y,10/re,i.height/re),i.pos.y>wi+200*re}),pp+=q.vel.y*difficulty,pp<0){const i=rndi(0,2),s=i?50+70*re:50-70*re;j0.push({pos:vec(s,wi-rnd(0,200*re)),size:rnd(5,15),vel:vec((i?-1:1)*rnd(.5,.8),rnd(-15,0)).mul(re/2)}),pp=rnd(120,160)/sqrt(re)}color("light_black"),remove(j0,i=>{i.pos.add(vec(i.vel).mul(difficulty));const s=W0(i.pos),o=arc(s.x,s.y,i.size/re).isColliding.rect;return o.red||o.light_red?(play("explosion"),end(),!1):i.pos.x<50-70*re||i.pos.x>50+70*re})}function W0(l){return{x:(l.x-50)/re+50,y:(l.y-wi)/re}}const A3=Object.freeze(Object.defineProperty({__proto__:null,characters:um,description:pm,options:dm,title:am,update:fm},Symbol.toStringTag,{value:"Module"})),ym="STOMPING BUBBLES",hm=`
[Hold] Stomp
`,gm=[],xm={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let qe;const vm=5;let dp=1.5,up,fp,bs,yp;const mm=5,bm=9,km=.1,Pm=.3;function $m(){ticks||(qe={pos:vec(50,0),vy:0},up=[],fp=0,bs=[],yp=1);const l=sqrt(difficulty);if(qe.pos.x+=dp*l,(qe.pos.x>95&&dp>0||qe.pos.x<5&&dp<0)&&(dp*=-1),qe.pos.y+=qe.vy*l,qe.vy+=.01*(input.isPressed?9:1),qe.vy*=.99,qe.pos.y<0&&qe.vy<0&&(qe.vy*=-.5),qe.pos.y>99&&(play("explosion"),end()),input.isJustPressed&&play("select"),fp-=l,fp<0){const t=rnd(mm,bm);up.push({pos:vec(rnd(0,100),102+t),size:t,speed:rnd(km,Pm)}),fp+=9}up.forEach(t=>{t.pos.y-=t.speed*l}),bs.forEach(t=>{t.size+=l,t.duration-=l}),remove(bs,t=>t.duration<=0),color("red"),box(qe.pos,vm),color("yellow"),bs.forEach(t=>{arc(t.pos,t.size)}),color("cyan");let e=!1;remove(up,t=>{const i=arc(t.pos,t.size).isColliding.rect;return i.red||i.yellow?(play("powerUp"),particle(t.pos,{count:t.size*2,speed:3}),addScore(yp,t.pos),yp++,bs.push({pos:vec(t.pos),size:t.size,duration:5}),i.red&&!e&&(qe.vy*=-1,qe.pos.y+=qe.vy*2,e=!0),!0):t.pos.y<-t.size}),bs.length===0&&(yp=1)}const O3=Object.freeze(Object.defineProperty({__proto__:null,characters:gm,description:hm,options:xm,title:ym,update:$m},Symbol.toStringTag,{value:"Module"})),Sm="SUB JUMP",wm=`
[Hold] Go up & 
       Speed up
`,_m=[`
   ll
   l
  lll
l l l
llllll
l lll
`,`
   ll
   l
  lll
  l l
llllll
  lll
`,`
 llll
ll lll
ll lll
ll lll
ll lll
 llll
`],Tm={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Jr,Hr,Mr,Ye,W,B0,hp,Dr;function Cm(){ticks||(Jr=times(12,o=>vec(o*10-10,rnd(75,85))),Hr="sea",Mr=50,Ye=0,W={pos:vec(5,55),vel:vec(0,-1)},B0=[],hp=0,Dr=1);const l=sqrt(difficulty);let e=0;W.pos.x>10&&(e+=(W.pos.x-10)*.2),Mr-=e;let t=Jr[Jr.length-1];Jr.forEach((o,r)=>{o.x-=e;const n=Jr[wrap(r-1,0,12)];o.x<-10&&(Mr<0&&(Hr=Hr==="land"?"sea":"land",Mr=rnd(200,300)/(Hr==="land"?7/sqrt(difficulty):1)),o.x+=120,Ye+=rnds(l)*2,Ye*=.95,Hr==="sea"?(n.y<55?Ye+=5:n.y<65?Ye+=3:(n.y<65&&Ye<0||n.y>90&&Ye>0)&&(Ye*=-.5),o.y=n.y+Ye,Mr<60&&(Ye+=4)):(n.y>50?Ye-=5:(n.y<40&&Ye<0||n.y>45&&Ye>0)&&(Ye*=-.5),o.y=n.y+Ye/3),o.y=clamp(o.y,35,95)+rnds(5)),n.x<o.x?(color(n.y<50||o.y<50?"green":"purple"),line(n,o,2)):t=n}),color("blue"),rect(0,50,100,2),input.isJustPressed&&play("select"),input.isPressed?W.pos.y>50?(W.vel.y-=l*.06,W.vel.x+=(1*l-W.vel.x)*.1):(W.vel.y+=l*.01,W.vel.x+=(1*l-W.vel.x)*.1):W.pos.y>50?(W.vel.y+=l*.03,W.vel.x+=(.5*l-W.vel.x)*.1):(W.vel.y+=l*.05,W.vel.x+=(.5*l-W.vel.x)*.1);let i=W.pos.y;W.vel.mul(W.pos.y>50?.95:.99),W.pos.add(W.vel),W.pos.x-=e,color("blue"),i>50&&W.pos.y<50&&(play("jump"),particle(W.pos.x,50,9,1,-PI/2,PI)),i<50&&W.pos.y>50&&(play("hit"),particle(W.pos.x,50,9,.5,-PI/2,PI)),color("black");const s=char(W.pos.y<50?"a":addWithCharCode("a",floor(ticks/7)%2),W.pos).isColliding.rect;(s.purple||s.green)&&(play("explosion"),end()),W.pos.y>55&&(color("blue"),particle(W.pos.x-3,W.pos.y+1,.3,1,PI,.1)),hp-=e,hp<0&&(B0.push(vec(t.x,t.y-(t.y<50?rnd(5,10):rnd(10,20)))),hp=rnd(10,40)),color("yellow"),remove(B0,o=>{o.x-=e;const r=char("c",o).isColliding.char;if(r.a||r.b)return play("coin"),addScore(Dr,o),Dr++,!0;if(o.x<-3)return Dr>1&&Dr--,!0})}const z3=Object.freeze(Object.defineProperty({__proto__:null,characters:_m,description:wm,options:Tm,title:Sm,update:Cm},Symbol.toStringTag,{value:"Module"})),Im="SUNFLOWER SWAY",Rm=`
[Hold] Sunny
`,Em=[`
 yyyy
ylllly
ylllly
ylllly
ylllly
 yyyy
`,`
  l
 lll
l lll
l lll
 lll
`,`
l ll l
 l  l
l ll l
llllll
 llll
l ll l
`,`
   ll
  lll
 llll
lllll
  ll
 ll
`,`
 llll
llllll
llllll
llllll
llllll
 llll
`],Am={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ye,J0,H0,mi,gp,xp;function Om(){ticks||(ye={pos:vec(30,95),height:40,angle:0,swayVelocity:.001,leafPositions:[.2,.4,.6]},J0=[],H0=[],mi=120,gp=30,xp=60),color("yellow"),rect(0,90,100,10),input.isPressed?(ye.swayVelocity+=.005,mi+=(80-mi)*.1):mi+=(120-mi)*.1,input.isJustPressed&&play("select"),ye.swayVelocity*=.97,ye.angle+=ye.swayVelocity,ye.swayVelocity-=ye.angle*.01,mi<110&&zm(mi),ye.height-=.045*difficulty,ye.height>70&&(ye.height=70),ye.height<9&&(play("explosion"),end()),color("green");let l=vec(ye.pos).addWithAngle(ye.angle-PI/2,ye.height);line(ye.pos,l),ye.leafPositions.forEach((e,t)=>{const i=vec(ye.pos).addWithAngle(ye.angle-PI/2,ye.height*e),s=t%2===0?1:-1;char("d",i.x+s*3,i.y,{mirror:{x:s}})}),color("black"),char("a",l,{scale:{x:2,y:2}}),gp--,gp<=0&&(J0.push({pos:vec(rnd(99),-3),speed:rnd(.5,1)*difficulty}),gp=rnd(30,40)/difficulty),remove(J0,e=>(e.pos.y+=e.speed,color("light_blue"),char("b",e.pos).isColliding.char.a?(play("coin"),addScore(ye.height,l),ye.height+=7,!0):e.pos.y>90)),xp--,xp<=0&&(H0.push({pos:vec(rnd()<.25?rnd(20):rnd(40,99),-3),speed:rnd(.3,.8)*difficulty}),xp=rnd(60,70)/difficulty),remove(H0,e=>(e.pos.y+=e.speed,color("red"),char("c",e.pos).isColliding.char.a?(play("hit"),ye.height-=15,!0):e.pos.y>90))}const vp=vec(),ff=vec();function zm(l){color("yellow"),vp.set(l,10),char("e",vp);for(let e=0;e<7;e++){const t=ticks*.05+e*PI*2/7,i=abs(sin(e+ticks*.05)*5)+10;vp.set(l,10).addWithAngle(t,7),ff.set(l,10).addWithAngle(t,i),line(vp,ff)}}const j3=Object.freeze(Object.defineProperty({__proto__:null,characters:Em,description:Rm,options:Am,title:Im,update:Om},Symbol.toStringTag,{value:"Module"})),jm="SURVIVOR",qm=`
[Tap] Jump
`,Wm=[`
llllll
ll l l
ll l l
llllll
 l  ll
 l  
  `,`
llllll
ll l l
ll l l
llllll
ll  l
    l
  `],Bm={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let ct,mp;const Jm=9;let M,Lr;function Hm(){if(ticks||(ct=[],mp=[],M=void 0,Lr=!0),M==null){Mm();const e=rnd(5,Lr?15:25);M={pos:vec((Lr?90+difficulty*30:120)+e,93-e),vx:rnd(Lr?1.5:1,2)/sqrt(e*.3+1),r:e,angle:rnd(PI*2)},Lr=!1}M.pos.x-=M.vx*difficulty,arc(M.pos,M.r,3+M.r*.1,M.angle,M.angle+PI),arc(M.pos,M.r,3+M.r*.1,M.angle+PI,M.angle+PI+PI),M.angle-=M.vx/M.r*1,particle(M.pos.x,M.pos.y+M.r,M.r*.05,M.vx*5,-.1,.2),M.ticks++,rect(0,93,99,7);let l=0;ct=ct.filter(e=>(e.ticks++,e.underFoot==null&&ct.forEach(t=>{if(e!==t&&e.isOnFloor&&e.pos.distanceTo(t.pos)<4){play("select");let i=e;for(let r=0;r<99&&i.underFoot!=null;r++)i=i.underFoot;let s=t;for(let r=0;r<99&&s.onHead!=null;r++)s=s.onHead;s.onHead=i,i.underFoot=s;let o=e;for(let r=0;r<99&&(o.isJumped=o.isOnFloor=!1,o.onHead!=null);r++)o=o.onHead;o=e;for(let r=0;r<99&&(o.isJumped=o.isOnFloor=!1,o.underFoot!=null);r++)o=o.underFoot}}),input.isJustPressed&&(e.isOnFloor||e.underFoot!=null&&e.underFoot.isJumped)&&(play("jump"),e.vel.set(0,-1.5),particle(e.pos,10,2,PI/2,.5),e.isOnFloor=!1,e.isJumping=!0,e.underFoot!=null&&(e.underFoot.onHead=void 0,e.underFoot=void 0)),e.underFoot!=null?(e.pos.set(e.underFoot.pos).add(0,-6),e.vel.set()):(e.pos.add(e.vel.x*difficulty,e.vel.y*difficulty),e.vel.x*=.95,(e.pos.x<7&&e.vel.x<0||e.pos.x>=77&&e.vel.x>0)&&(e.vel.x*=-.5),e.pos.x<50?e.vel.x+=.01*sqrt(50-e.pos.x+1):e.vel.x-=.01*sqrt(e.pos.x-50+1),e.isOnFloor?e.pos.x<M.pos.x&&(e.vel.x-=.1*sqrt(M.r)/sqrt(M.pos.x-e.pos.x+1)):(e.vel.y+=.1,e.pos.y>90&&(e.pos.y=90,e.isOnFloor=!0,e.isJumped=!1,e.vel.y=0)),e.pos.y<0&&e.vel.y<0&&(e.vel.y*=-.5)),char(addWithCharCode("a",floor(e.ticks/30)%2),e.pos).isColliding.rect.black?(e.onHead!=null&&(e.onHead.underFoot=void 0,e.onHead.isJumping=!0),e.underFoot!=null&&(e.underFoot.onHead=void 0),play("hit"),mp.push({pos:vec(e.pos),vel:vec(e.vel).add(-M.vx*2,0)}),!1):e.pos.isInRect(0,-50,100,150)?!0:(l++,!1))),times(l,Pf),ct.forEach(e=>{e.isJumping&&(e.isJumped=!0,e.isJumping=!1)}),ct.length<=0&&(play("lucky"),end()),mp=mp.filter(e=>(e.pos.add(e.vel),e.vel.y+=.2,char("a",e.pos,{mirror:{y:-1}}),e.pos.y<105)),M.pos.x<-M.r&&(M=void 0,addScore(ct.length,10,50))}function Mm(){for(play("powerUp");ct.length<Jm;)Pf()}function Pf(){ct.push({pos:vec(rnd(10,40),rnd(-9,0)),vel:vec(rnds(1),rnd(1)),isOnFloor:!1,isJumping:!1,isJumped:!1,underFoot:void 0,onHead:void 0,ticks:rndi(60)})}const q3=Object.freeze(Object.defineProperty({__proto__:null,characters:Wm,description:qm,options:Bm,title:jm,update:Hm},Symbol.toStringTag,{value:"Module"})),Dm="SWINGBY",Lm=`
[Hold]
 Turn right
`,Fm=[],Ym={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let Fr,ks,he,bi,Rt,yf;function Um(){ticks||(Fr=[{pos:vec(),screenPos:vec(),radius:20}],ks=vec(),times(20,()=>{t(ks,150,-PI,PI)}),Fr.shift(),he={pos:vec(),vel:vec()},bi=0,Rt=vec(50,50),yf=times(30,()=>({pos:vec(rnd(99),rnd(99)),velRatio:-rnd(.05,.2)})));const l=sqrt(difficulty);if(color("light_black"),yf.forEach(i=>{i.pos.add(vec(he.vel).mul(i.velRatio)),(i.pos.x<0||i.pos.x>99)&&(i.pos.y=rnd(99)),(i.pos.y<0||i.pos.y>99)&&(i.pos.x=rnd(99)),i.pos.wrap(0,100,0,100),rect(i.pos,1,1)}),box(vec(he.pos).mul(-1).add(Rt).clamp(-3,103,-3,103),10),color("black"),remove(Fr,i=>{const s=i.pos.distanceTo(he.pos),o=i.radius;return he.vel.addWithAngle(he.pos.angleTo(i.pos),l*o*.01/clamp(s-o,2,99)),s<99+o?(i.screenPos.set(i.pos).sub(he.pos).add(Rt),arc(i.screenPos,o-2,5)):i.screenPos.set(999,999),s>150}),ks.distanceTo(he.pos)>50){const i=ks.angleTo(he.pos);ks.set(he.pos),times(5,()=>{t(vec(ks).addWithAngle(i,100),70,i-PI/2,i+PI/2)})}if(he.vel.mul(1-.01/l),Rt.set(50,50).addWithAngle(he.vel.angle+PI,clamp(sqrt(he.vel.length)*19,1,30)),input.isPressed){play("laser");const i=he.vel.angle+PI/2;he.vel.addWithAngle(i,l*.05),particle(Rt,1,2,i+PI,PI/8)}const e=he.vel.angle;he.vel.addWithAngle(e,l*.01),particle(Rt,.5,1,e+PI,PI/8),he.pos.add(he.vel),bar(Rt,3,3,he.vel.angle).isColliding.rect.black?(play("hit"),he.vel.mul(1-.01*l),bi+=4*difficulty,particle(Rt,3,bi*.1),bi>99&&(play("explosion"),end())):bi>0&&(bi-=l),color("red"),rect(0,95,bi,5),score=floor(he.pos.length);function t(i,s,o,r){for(let n=0;n<99;n++){const c=vec(i).addWithAngle(rnd(o,r),rnd(s)),a=rnd(5,15);let y=!0;if(Fr.forEach(x=>{y&&x.pos.distanceTo(c)<x.radius+a+30&&(y=!1)}),y){Fr.push({pos:c,screenPos:vec(),radius:a});break}}}}const W3=Object.freeze(Object.defineProperty({__proto__:null,characters:Fm,description:Lm,options:Ym,title:Dm,update:Um},Symbol.toStringTag,{value:"Module"})),Nm="TAPE J",Xm=`
[Hold]    Pull
[Release] Release
`,Vm=[],Gm={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let M0,bp,_l,f,D0,kp,Wl,Ps;const Bl=90;function Km(){if(ticks||(M0=[],bp=0,_l=[],f={from:vec(100,Bl-1),to:vec(100,Bl-1),type:"ground",rect:void 0},D0=[],kp=100/difficulty,Wl=0,Ps=0),input.isJustPressed&&play("select"),input.isPressed){const e=difficulty;switch(Ps+=e,f.type){case"ground":f.to.x+=e;break;case"up":f.to.y-=e,f.to.y<Bl-f.rect.size.y&&(f.to.y=Bl-f.rect.size.y,_l.push({from:vec(f.from),to:vec(f.to)}),f.type="top",play("coin"),f.from.set(f.to));break;case"top":f.to.x+=e,f.to.x>f.rect.x+f.rect.size.x+1&&(f.to.x=f.rect.x+f.rect.size.x+1,_l.push({from:vec(f.from),to:vec(f.to)}),f.type="down",play("coin"),f.from.set(f.to));break;case"down":f.to.y+=e,f.to.y>Bl-1&&(f.to.y=Bl-1,_l.push({from:vec(f.from),to:vec(f.to)}),f.type="ground",play("coin"),f.from.set(f.to),f.to.x+=3,f.rect=void 0);break}}else if(Ps>0&&(play("powerUp"),addScore(floor(sqrt(Ps)*Ps*.1+1),f.to),Ps=0),_l.length>0){const e=_l[0];e.from.x+=(e.to.x-e.from.x)*.2*sqrt(difficulty),e.from.y+=(e.to.y-e.from.y)*.2*sqrt(difficulty),e.from.distanceTo(e.to)<3&&_l.splice(0,1)}else f.from.x+=(f.to.x-f.from.x)*.2*sqrt(difficulty),f.from.y+=(f.to.y-f.from.y)*.2*sqrt(difficulty);f.from.x-=Wl,f.from.x<0&&(f.from.x=0),f.to.x<0&&(play("explosion"),end()),f.to.x-=Wl,color("black"),remove(_l,e=>(e.from.x-=Wl,e.from.x<0&&(e.from.x=0),e.to.x-=Wl,line(e.from,e.to),e.to.x<0)),line(f.from,f.to,3),color("light_yellow");let l=_l.length>0?_l[0].from:f.from;if(box(l.x-1,l.y-1,5,5),color("purple"),box(f.to,3,3),Wl=difficulty*.1,f.to.x>50&&(Wl+=(f.to.x-50)*.1),bp-=Wl,bp<0){const e=rnd(20,40);M0.push({x:200,size:vec(e,rnd(10,50))}),bp=e+rnd(20,70)}if(color("light_black"),rect(0,Bl,200,100-Bl),remove(M0,e=>{if(rect(e.x,90,e.size.x,-e.size.y).isColliding.rect.purple&&f.type==="ground"){const t=vec(e.x-1,Bl-1);_l.push({from:vec(f.from),to:t}),f.from.set(t),f.to.set(t),f.type="up",play("coin"),f.rect=e}return e.x-=Wl,e.x<-e.size.x}),kp--,kp<0){play("laser");const e=rnd(5,15),t={pos:vec(rnd(150,220),-e),vel:vec(-rnd(.5,1),rnd(.8,1.2)),size:e};t.vel.mul(difficulty),D0.push(t),kp=rnd(40,60)/difficulty}color("red"),remove(D0,e=>{e.pos.add(e.vel),e.pos.x-=Wl;const t=box(e.pos,e.size,e.size).isColliding.rect;if(particle(e.pos.x+rnds(e.size/2),e.pos.y+rnds(e.size/2),rnd()*e.size/2,-e.vel.length,e.vel.angle,.3),(t.black||t.purple||t.light_yellow)&&(play("explosion"),end()),t.light_black||e.pos.y>Bl)return play("hit"),particle(e.pos,e.size*5),!0})}const B3=Object.freeze(Object.defineProperty({__proto__:null,characters:Vm,description:Xm,options:Gm,title:Nm,update:Km},Symbol.toStringTag,{value:"Module"})),Qm="TAPPUMP",Zm=`
[Tap]  Jump
[Hold] Pump
`,eb=[`
r r r
 r r
rrRrr
 r r
r r r
`,`
 yyyy
y yyYy
y yyYy
y yyYy
y yyYy
 yyyy
`],lb={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let ce,L0,Pp,F0,Yr,ki,$p;function tb(){ticks||(ce={pos:vec(10,50),vel:vec(0,-2),radius:1,rv:0},L0=[],F0=[],Yr=50,ki=0,Pp=40,$p=0);const l=ce.pos.x>20?(ce.pos.x-20)*.2:0;Pp-=l,Pp<0&&(play("laser"),L0.push(vec(103,rnd(99))),Pp+=rnd(40,140)),color("black"),remove(L0,t=>(t.x-=l,char("a",t),t.x<-2)),color("green"),ce.vel.x=difficulty,input.isJustPressed&&(play("select"),ce.vel.y-=sqrt(difficulty)*2),ce.vel.y-=sqrt(difficulty)*(input.isPressed?.03:-.12),input.isPressed?(ce.rv+=difficulty*.08,ce.radius+=ce.rv):(ce.radius+=(1-ce.radius)*.04*difficulty,ce.rv=0),ticks<60&&ce.vel.mul(ticks/60),ce.pos.add(ce.vel),ce.pos.x-=l,(arc(ce.pos,ce.radius,5).isColliding.char.a||ce.pos.y<-5-ce.radius||ce.pos.y>105+ce.radius)&&(play("explosion"),end()),color("black"),$p-=l,ki+=rnds(.1),ki*=.98,Yr+=ki,(Yr<10&&ki<0||Yr>90&&ki>0)&&(ki*=-1),$p<0&&(F0.push(vec(103,Yr+rnds(9))),$p+=rnd(6,9)),remove(F0,t=>{t.x-=l;const i=char("b",t).isColliding;if(i.rect.green){const s=ceil(ce.radius);return play(s<20?"coin":"powerUp"),addScore(s,t),!0}return i.char.a||t.x<-3})}const J3=Object.freeze(Object.defineProperty({__proto__:null,characters:eb,description:Zm,options:lb,title:Qm,update:tb},Symbol.toStringTag,{value:"Module"})),ib="THROW M",sb=`
[Hold] Set angle
[Release] Shoot
`,ob=[`
llllll
ll l l
ll l l
llllll
 l  l
 l  l
  `,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`,`
 lll
ll ll
l lll
lllll
 lll
  ll
`,`
r  r
llllrr
r  r
`,`
 yyyy
 y yy
l yyyl
lyyyyl
 yyyy
 yyyy
`],rb={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let Y0,Sp,U0,ae,N0,$s;function nb(){if(ticks||(Y0=[],Sp=0,U0=[],ae={pos:vec(90,50),vy:-1,fireAngle:void 0},N0=[],$s=1),color("light_black"),rect(85,0,15,10),rect(85,92,15,8),color("black"),remove(N0,e=>(e.pos.add(e.vel),e.vel.y+=difficulty*.07,char("e",e.pos),e.pos.y>103)),Sp--,Sp<0){const e=rnd(200,300)/sqrt(difficulty);Y0.push({pos:vec(rnd(3,50),-5),vy:rnd(.1,.4)*difficulty,fireInterval:e,fireTicks:rnd(e),color:["red","cyan","yellow","green"][rndi(4)],isFalling:!1}),Sp=rnd(50,60)/difficulty/sqrt(difficulty)}remove(Y0,e=>{e.pos.y+=e.vy;let t=!1;return e.isFalling?e.vy+=.1:(e.fireTicks--,e.fireTicks<0&&(U0.push(vec(e.pos)),e.fireTicks=e.fireInterval),color(e.color),char("c",e.pos.x,e.pos.y-6).isColliding.char.e&&(t=!0)),color("black"),char("b",e.pos,{mirror:{y:e.isFalling?-1:1}}).isColliding.char.e&&!e.isFalling&&(t=!0),t&&(play("powerUp"),particle(e.pos.x,e.pos.y-6),e.isFalling=!0,addScore($s,e.pos),$s*=2),e.pos.y>105});const l=difficulty*.5;color("black"),remove(U0,e=>{e.x+=l;const t=char("d",e).isColliding;return t.char.e?(play("hit"),particle(e),addScore($s,e),$s++,!0):e.x>103||t.rect.light_black}),ae.pos.y+=ae.vy*difficulty*.5,(ae.pos.y<19&&ae.vy<0||ae.pos.y>90&&ae.vy>0)&&(ae.vy*=-1),color("blue"),char("c",ae.pos.x,ae.pos.y-6,{mirror:{x:-1}}).isColliding.char.d&&(play("explosion"),end()),color("black"),char("b",ae.pos.x,ae.pos.y,{mirror:{x:-1}}),ae.fireAngle==null&&input.isJustPressed&&(ae.fireAngle=PI/4*3),ae.fireAngle!=null&&(ae.fireAngle+=.1*difficulty,color("black"),line(ae.pos,vec(ae.pos).addWithAngle(ae.fireAngle,5),2),(input.isJustReleased||ae.fireAngle>PI/8*11)&&(play("laser"),N0.push({pos:vec(ae.pos),vel:vec().addWithAngle(ae.fireAngle,sqrt(difficulty)*3)}),ae.fireAngle=void 0,$s=1))}const H3=Object.freeze(Object.defineProperty({__proto__:null,characters:ob,description:sb,options:rb,title:ib,update:nb},Symbol.toStringTag,{value:"Module"})),cb="THUNDER",ab=`
[Tap] Turn
`,pb=[`
 l
lll
l l
`,`
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
  `],db={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:9};let Ss,ws,X0,Jl,wp;function ub(){if(ticks||(Ss=[],ws=-1,X0=[],Jl={x:40,vx:1},wp=1),Ss.length===0){const l=vec(rnd(30,70),0);Ss.push({from:l,to:vec(l),vel:vec(.5*difficulty,0).rotate(PI/2),ticks:ceil(30/difficulty),prevLine:void 0,isActive:!1})}color("light_blue"),rect(0,90,100,10),ws--,remove(Ss,l=>{if(l.isActive)return color("yellow"),line(l.from,l.to,4),ws<0;if(l.ticks--,ws>0)return l.ticks>0&&X0.push({pos:vec(l.to),vel:vec(0,-l.to.y*.02)}),!0;if(l.ticks>0){if(l.to.add(l.vel),ws<0&&(l.to.y>90||Ss.length>160)){play("explosion");let e=l;color("yellow");for(let t=0;t<99&&(particle(e.to,30,2),e.isActive=!0,e=e.prevLine,e!=null);t++);ws=ceil(20/sqrt(difficulty)),wp=1}}else if(l.ticks===0){play("hit"),color("black"),particle(l.to,9,1);for(let e=0;e<rndi(1,4);e++)Ss.push({from:vec(l.to),to:vec(l.to),vel:vec(l.vel).normalize().rotate(rnds(.7)).mul(rnd(.3,1)*sqrt(difficulty)),ticks:ceil(rnd(20,40)/difficulty),prevLine:l,isActive:!1})}color("light_black"),line(l.from,l.to,2)}),(input.isJustPressed||Jl.x<0&&Jl.vx<0||Jl.x>99&&Jl.vx>0)&&(play("laser"),Jl.vx*=-1),Jl.x+=Jl.vx*sqrt(difficulty),color("black"),char(addWithCharCode("b",floor(ticks/10)%2),Jl.x,87,{mirror:{x:Jl.vx>0?1:-1}}).isColliding.rect.yellow&&(play("lucky"),end()),color("yellow"),remove(X0,l=>{if(l.vel.y+=.1*difficulty,l.pos.add(l.vel),l.pos.y>89&&l.vel.y>0&&(l.vel.y*=-.5,l.vel.y>-.1))return!0;const e=char("a",l.pos).isColliding.char;if(e.b||e.c)return play("coin"),addScore(wp,l.pos),wp++,!0})}const M3=Object.freeze(Object.defineProperty({__proto__:null,characters:pb,description:ab,options:db,title:cb,update:ub},Symbol.toStringTag,{value:"Module"})),fb="TIMBER TEST",yb=`
[Tap] Cut a log
`,hb=[],gb={isPlayingBgm:!0,audioSeed:2};let ll,Wt,tn,Ll,qt,_i,hu,js,gu,xu,vu;function xb(){if(ticks||(gu=0,vu=!0,hf()),color("red"),rect(ll.x,20,ll.width,10),qt.x+=qt.vx,color("black"),rect(qt.x-1,10,3,input.isJustPressed?30:7),text(`1/${Wt}`,5,35),_i===0&&qt.x>=ll.x+ll.width){const l=vec(ll.width,10);Ll.push({size:l,pos:vec(ll.x+l.x/2,20+10/2),targetPos:vec(50,40+tn*15)}),ll.width=0,tn++,_i=1}if(_i===0&&input.isJustPressed){xu=!1;const l=qt.x-ll.x;if(l>0){play("select");const e=vec(l,10);Ll.push({size:e,pos:vec(ll.x+e.x/2,20+10/2),targetPos:vec(50,40+tn*15)}),ll.x=qt.x,ll.width-=l,tn++}}if(Ll.forEach(l=>{l.pos.distanceTo(l.targetPos)<1?l.pos=l.targetPos:l.pos.add(vec(l.targetPos).sub(l.pos).mul(.1)),color("red"),box(l.pos,l.size)}),_i>0){_i+=difficulty*(Ll.length+1)*.5;const l=clamp(floor(_i/20),0,Math.max(Wt,Ll.length));times(l,e=>{color("black");const t=40+e*15;if(e===0)js<0&&color("red"),text(`${js}`,80,t);else{const i=e-1<Ll.length?Ll[e-1].size.x:0,s=e<Ll.length?Ll[e].size.x:0,o=i===0&&s===0||e>Wt?100:floor(abs(i-s)/(i+s)*300);text(`-${o}`,74,t),e===hu&&(play("hit"),js-=o,hu++)}})}qt.x>160&&(js<0?(play("explosion"),end()):(score+=js,hf())),color("black"),gu<=3&&xu&&(times(Wt-1,l=>{text("^",ll.x+ll.width/Wt*(l+1),35)}),text("Cut here!",32,38))}function hf(){play("powerUp");const l=rnd(40,80);ll={x:(100-l)/2+rnd((100-l)/3),width:l},Wt=rndi(2,5),js=(Wt-1)*100,tn=0,Ll=[],qt={x:vu?-50:-30,vx:difficulty/sqrt(Wt)*2},_i=0,hu=1,gu++,xu=!0,vu=!1}const D3=Object.freeze(Object.defineProperty({__proto__:null,characters:hb,description:yb,options:gb,title:fb,update:xb},Symbol.toStringTag,{value:"Module"})),vb="T PUNCH",mb=`
[Tap]  Punch
[Hold] Roll
`,bb=[`
 bbbb
ppbbbb
ppprrr
 prrr
`,`
c   c
 ccc
ccbcc
 ccc
c   c
`,`
 lll
lyyyl
l   l
l b l
 lll
`],kb={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:2};let Z,_p,Ur,V0,Tp;function Pb(){ticks||(Z={angle:0,av:0,length:0,targetLength:9,isAttacking:!1,isAlive:times(6,()=>!0)},_p=[],Ur=0,V0=[],Tp=1);const l=sqrt(difficulty),e=Z.isAlive.length;color("black"),char("c",49,49),input.isJustPressed&&(Z.length<5?(play("select"),Z.isAttacking=!0):play("laser"),Tp=1),(!input.isPressed||Z.length>30)&&(Z.isAttacking=!1),Z.length+=((input.isPressed?36:0)-Z.length)*.1*sqrt(difficulty),input.isPressed?Z.av+=sqrt(difficulty)*.001:Z.av+=(.03*sqrt(difficulty)-Z.av)*.2,Z.angle+=Z.av;const t=sqrt(Z.length)*.5+3,i=vec();let s=Z.angle;if(Z.isAlive.forEach(n=>{if(s+=PI*2/Z.isAlive.length,!n)return;let c=5,a=Z.length/4;times(5,y=>{let x=t;y===4&&Z.isAttacking?(color("red"),x*=1.5):color("cyan"),box(i.set(50,50).addWithAngle(s,c),x),c+=a})}),_p.length===0&&(Ur=0),Ur--,Ur<0){const n=vec(rnd(99),rnd()<.5?-3:3);rnd()<.5&&n.swapXy(),_p.push({pos:n,vel:vec(rnds(l)*.3,rnds(l)*.3)}),Ur=rnd(60,99)/difficulty}const o=vec(50,50);remove(V0,n=>{n.vel.addWithAngle(o.angleTo(n.pos),l*.002),n.vel.mul(.98),n.pos.add(n.vel);const c=60/l;color(n.ticks>c?"black":"light_blue");const a=char("b",n.pos).isColliding.rect;return n.ticks>c&&(a.red||a.cyan)?(play("coin"),addScore(Tp,n.pos),Tp++,!0):(n.ticks++,!n.pos.isInRect(-3,-3,106,106))}),color("black"),remove(_p,n=>{n.pos.distanceTo(50,50)>30&&(n.vel.addWithAngle(n.pos.angleTo(50,50),l*.005),n.vel.mul(.99)),n.pos.add(n.vel);const c=char("a",n.pos,{mirror:{x:n.vel.x>0?1:-1}}).isColliding;if(c.rect.red){play("powerUp"),rnd(PI*2),times(16,y=>{V0.push({pos:vec(n.pos),vel:vec(y*.05).rotate(y),ticks:0})});let a=rndi(e);for(let y=0;y<e;y++){if(!Z.isAlive[a]){Z.isAlive[a]=!0;break}a=wrap(a+1,0,e)}return!0}if(c.rect.cyan)return play("explosion"),!0;c.char.c&&(play("lucky"),end())});let r=0;s=Z.angle,Z.isAlive.forEach((n,c)=>{if(s+=PI*2/e,!n)return;r++;let a=5,y=Z.length/4;times(5,x=>{x===4&&Z.isAttacking||(color("transparent"),box(i.set(50,50).addWithAngle(s,a),t).isColliding.char.a&&(color("cyan"),particle(i,9,2),Z.isAlive[c]=!1),a+=y)})}),r===0&&(play("lucky"),end())}const L3=Object.freeze(Object.defineProperty({__proto__:null,characters:bb,description:mb,options:kb,title:vb,update:Pb},Symbol.toStringTag,{value:"Module"})),$b="TR BEAM",Sb=`
[Hold]
 Tractor beam
`,wb=[`
y cc y
 cccc
llllll
lllll
 l l
`,`
y cc y
 cccc
llllll
 lllll
  l l
`],_b={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let ge,Cp,Ip,Rp,Ep;function Tb(){ticks||(ge={pos:vec(0,9),angle:-PI*.3,trLength:0},Cp=[],Ip=0,Rp=3,Ep=1),ge.angle+=sqrt(difficulty)*.03,ge.pos.x=sin(ge.angle)*40+50,input.isJustPressed&&(play("select"),Ep=1),input.isPressed?(play("laser"),ge.trLength=clamp(ge.trLength+difficulty*2,0,82)):ge.trLength*=1-clamp(sqrt(difficulty),1,3)*.2;let l=ticks%10/10*(PI/4);if(ge.trLength>1&&(color("blue"),times(4,()=>{line(4*cos(l)+ge.pos.x,ge.pos.y+5,9*cos(l)+ge.pos.x,ge.pos.y+5+ge.trLength,2),l+=PI/4})),color("black"),char(addWithCharCode("a",floor(ticks/30)%2),ge.pos),Ip--,Ip<0){Rp--;let e=!1;Rp<0&&(e=!0,Rp=rndi(9,12));const t=rnd(6,12);Cp.push({pos:vec(rnd(10,90),105+t),vel:vec(),radius:t,isRed:e,isBeamed:!1}),Ip=rnd(20,25)/sqrt(difficulty)}remove(Cp,e=>{e.pos.y>99?(e.vel.y-=sqrt(difficulty),e.vel.mul(.5)):e.pos.x<0||e.pos.x>99?e.vel.mul(.1):(e.vel.mul(.9),e.isRed&&(e.vel.y*=.9)),e.vel.y+=sqrt(difficulty)*.1,e.pos.add(e.vel),Cp.forEach(i=>{if(i===e)return;const s=i.pos.distanceTo(e.pos)-i.radius-e.radius;s<0&&e.vel.addWithAngle(i.pos.angleTo(e.pos),-s/sqrt(e.radius))}),color(e.isRed?"red":"black");const t=arc(e.pos,e.radius).isColliding;return t.char.a||t.char.b?(e.isRed?(play("explosion"),end()):(play("coin"),addScore(Ep,e.pos),Ep++),!0):(t.rect.blue?(e.vel.addWithAngle(e.pos.angleTo(ge.pos),sqrt(difficulty)/sqrt(e.radius)),e.vel.x+=(ge.pos.x-e.pos.x)*clamp(sqrt(difficulty),1,5)*.01,e.isBeamed=!0,e.isRed&&play("hit")):e.isBeamed&&(e.vel.y*=.1,e.vel.x*=5,e.isBeamed=!1),e.isRed&&!e.isBeamed&&(e.pos.x<e.radius||e.pos.x>99-e.radius)?(play("powerUp"),e.isRed=!1):!e.isBeamed&&e.pos.isInRect(10,12+e.radius,80,5)&&e.vel.y>0&&(e.isRed=!0),e.pos.x<-20||e.pos.x>120)}),ge.trLength>1&&(color("cyan"),times(4,()=>{line(4*cos(l)+ge.pos.x,ge.pos.y+5,9*cos(l)+ge.pos.x,ge.pos.y+5+ge.trLength),l+=PI/4}))}const F3=Object.freeze(Object.defineProperty({__proto__:null,characters:wb,description:Sb,options:_b,title:$b,update:Tb},Symbol.toStringTag,{value:"Module"})),Cb="TURBULENT",Ib=`
[Tap] Jump
`,Rb=[],Eb={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let gf,Tl,G0,Ap,b,K0;function Ab(){ticks||(gf=times(7,o=>({height:rnd(10,30),angle:o%2*PI+rnds(PI/4),va:rnd(.01,.02),x:o*20-20})),Tl=times(25,o=>vec()),G0=[],Ap=0,b={pos:vec(40,60),pp:vec(40,60),vel:vec(),angle:0,state:"float"});let l=.1*difficulty;b.pos.x>50&&(l+=(b.pos.x-50)*.1),gf.forEach((o,r)=>{o.x-=l,o.x<-20&&(o.x+=140,o.height=rnd(10,30),o.angle=rnd(PI*2),o.va=rnd(.01,.02*sqrt(difficulty))),o.angle+=o.va,Tl[r*4].set(o.x,60+sin(o.angle)*o.height)}),color("blue"),Tl.forEach((o,r)=>{const n=r%4;if(n!==0){let a=Tl[floor(r/4)*4],y=Tl[(floor(r/4)+1)*4];const x=[.2,.5,.8][n-1];o.set(a.x+5*n,a.y*(1-x)+y.y*x)}let c=Tl[wrap(r-1,0,Tl.length)];c.x<o.x&&line(c,o)}),Ap-=l,Ap<0&&(G0.push({x:103,vx:0}),Ap=rnd(100,120)/sqrt(difficulty)),color("red"),remove(G0,o=>{o.x-=l;const[r,n]=s(o.x);if(n==null)return!0;const c=n.y-r.y;o.vx+=c*.001,o.vx*=.9,o.x+=o.vx*sqrt(difficulty);const a=(o.x-r.x)/(n.x-r.x);return text("*",o.x,r.y+c*a-5),o.x<-3});let e;if(b.state==="float"){const[o,r]=s(b.pos.x);if(r!=null){const n=r.y-o.y;b.vel.x+=n*.002,b.vel.x*=.925,b.vel.x+=.025,b.pos.x+=b.vel.x;const c=(b.pos.x-o.x)/(r.x-o.x);b.pos.y=o.y+n*c,e=o.angleTo(r)}input.isJustPressed&&(play("jump"),K0=b.pos.x,b.vel.x=(b.pos.x-b.pp.x)*2,b.vel.y=(b.pos.y-b.pp.y)*5,b.vel.addWithAngle(e-PI/2,1),b.vel.y>-1&&(b.vel.y=-1),b.pos.add(b.vel),b.state="jump")}else K0-=l,b.vel.x+=.005,b.vel.y+=input.isPressed?.02:.1,b.vel.mul(.98),b.pos.add(b.vel),e=b.vel.angle;b.pos.x-=l,b.pos.clamp(5,95,5,95),b.pp.set(b.pos),b.angle+=wrap(e-b.angle,-PI,PI)*.1,e=b.angle;const t=vec(b.pos);t.addWithAngle(e-PI*.5,2),color("red"),bar(t,3,2,e),t.addWithAngle(e-PI*.4,2),color("black"),bar(t,4,2,e),t.addWithAngle(e-PI*.6,2);const i=bar(t,1,2,e).isColliding;if(b.state==="jump"&&i.rect.blue){const o=b.pos.x-K0;play("hit"),o>0&&(play("powerUp"),addScore(ceil(sqrt(o*o)),b.pos)),b.state="float",b.vel.x*=.5}i.text["*"]&&(play("explosion"),end());function s(o){let r,n;for(let c=0;c<Tl.length;c++)if(r=Tl[wrap(c-1,0,Tl.length)],n=Tl[c],!(r.x>n.x)&&r.x<=o&&o<n.x)return[r,n];return[void 0,void 0]}}const Y3=Object.freeze(Object.defineProperty({__proto__:null,characters:Rb,description:Ib,options:Eb,title:Cb,update:Ab},Symbol.toStringTag,{value:"Module"})),Ob="TWIN JUMPERS",zb=`
[Tap] Jump
`,jb=[`
 bb
 bb
bbbb
bbbb
b  b
b  b
`,`
 gggg
gggggg
gggggg
gg  gg
`],qb={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:9};let Se,Nr,Pi,_s,Op;function Wb(){ticks||(Se=[{pos:vec(20,70),vx:1,vy:0,onPlatformTicks:0},{pos:vec(80,70),vx:1,vy:0,onPlatformTicks:0}],Nr=1,Pi=[{pos:vec(50,80),width:100}],_s=.1,Op=0,times(3,e=>{Pi.push({pos:vec(rnd(0,40),70-e*30),width:rnd(20,50)}),Pi.push({pos:vec(rnd(60,100),70-e*30),width:rnd(20,50)})})),_s=.1*sqrt(difficulty);const l=Math.max(Se[0].pos.y,Se[1].pos.y);l<60&&(_s+=(60-l)*.05),addScore(_s),input.isJustPressed?(Se.forEach((e,t)=>{e.onPlatformTicks>0&&(play("jump",{volume:.5}),e.vy=(t===0?-3:-2.5)*Nr)}),Nr*=.8):Nr=clamp(Nr+.01,0,1),Se.forEach(e=>{e.pos.y+=e.vy,e.vy+=input.isPressed?.1:.2,e.pos.x+=e.vx*.6,e.onPlatformTicks--,(e.pos.x<3&&e.vx<0||e.pos.x>97&&e.vx>0)&&(e.vx=-e.vx),e.pos.y<0&&e.vy<0&&(e.pos.y=0,e.vy*=-.5)}),remove(Pi,e=>(e.pos.y+=_s,e.pos.y>109)),Op-=_s,Op<=0&&(Pi.push({pos:vec(rnd(0,50),-rnd(20)-5),width:rnd(30,50)}),Pi.push({pos:vec(rnd(50,100),-rnd(20)-5),width:rnd(30,50)}),Op=rnd(20,30)),color("black"),char("a",Se[0].pos),char("b",Se[1].pos),color("yellow"),Pi.forEach(e=>{const t=box(e.pos,e.width,4).isColliding.char;t.a&&Se[0].vy>0&&(Se[0].vy>2&&play("click"),Se[0].pos.y=e.pos.y-4,Se[0].vy=0,Se[0].onPlatformTicks=9),t.b&&Se[1].vy>0&&(Se[0].vy>2&&play("click"),Se[1].pos.y=e.pos.y-3,Se[1].vy=0,Se[1].onPlatformTicks=9)}),Se.some(e=>e.pos.y>102)&&(play("explosion"),end())}const U3=Object.freeze(Object.defineProperty({__proto__:null,characters:jb,description:zb,options:qb,title:Ob,update:Wb},Symbol.toStringTag,{value:"Module"})),Bb="TWO FACED",Jb=`
[Tap]  Turn
[Hold] Go forward
`,Hb=[`
 RRRR
Rr rrR
R rrrR
RrrrrR
RrrrrR
 RRRR
`],Mb={viewSize:{x:200,y:100},isDrawingScoreFront:!0,isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let S,Ts,$i,Et,pe,ot;function Db(){ticks||(S={pos:vec(0,20),side:-1,angle:-PI/2,av:1,speed:1,baseSpeed:1},Ts=[],$i=ot=3,Et=2,pe={pos:vec(),side:-1,angle:0});const l=sqrt(difficulty),e=vec();if(input.isJustPressed&&(play("laser"),S.av*=-1,S.speed+=.1),input.isPressed?(play("hit"),S.speed+=.01):(S.speed+=(1-S.speed)*.1,S.angle+=S.av*.03*l*S.speed*S.baseSpeed),S.baseSpeed*=1.002,S.pos.addWithAngle(S.angle,l*.5*S.speed*S.baseSpeed),s(S),Ts.unshift({pos:vec(S.pos),side:S.side,angle:S.angle}),Ts.length>256&&Ts.pop(),pe.pos.addWithAngle(pe.angle,l*.2),s(pe),color("black"),pe.side===-1&&char("a",pe.pos.x+150,pe.pos.y+50),pe.side===1&&char("a",pe.pos.x+50,pe.pos.y+50),color("green"),S.side===-1&&bar(S.pos.x+150,S.pos.y+50,3,4,S.angle),S.side===1&&bar(S.pos.x+50,S.pos.y+50,3,4,S.angle),color("light_yellow"),box(50,50,80),color("light_purple"),box(150,50,80),color("black"),pe.side===-1&&char("a",pe.pos.x+50,pe.pos.y+50),pe.side===1&&char("a",pe.pos.x+150,pe.pos.y+50),color("light_green"),Et+=(2-Et)*.03,times($i,o=>{const r=o*9;if(r>=Ts.length)return;color(o<Et?"light_black":"light_green");const n=Ts[r];if(n.side===-1){const c=bar(n.pos.x+50,n.pos.y+50,4,3,n.angle).isColliding.char;pe.side===-1&&c.a&&i(n.pos.x+50,n.pos.y+50)}if(n.side===1){const c=bar(n.pos.x+150,n.pos.y+50,4,3,n.angle).isColliding.char;pe.side===1&&c.a&&i(n.pos.x+150,n.pos.y+50)}}),color("green"),S.side===-1){const o=bar(S.pos.x+50,S.pos.y+50,3,4,S.angle).isColliding;pe.side===-1&&o.char.a&&i(S.pos.x+50,S.pos.y+50),o.rect.light_green&&(play("explosion"),end())}if(S.side===1){const o=bar(S.pos.x+150,S.pos.y+50,3,4,S.angle).isColliding;pe.side===1&&o.char.a&&i(S.pos.x+150,S.pos.y+50),o.rect.light_green&&(play("explosion"),end())}const t=ceil(ot);ot-=.01,ot<1&&(ot=1),ceil(ot)<t&&play("coin"),color("black"),text(`x${ceil(ot)}`,3,9);function i(o,r){play("powerUp"),S.baseSpeed=1,addScore(ceil(ot),o,r),$i<25&&$i++,ot+=$i,pe.pos.set(rnds(35),rnds(35)),pe.angle=rnds(PI),pe.side=S.side*-1}function s(o){e.set().addWithAngle(o.angle,1),(o.pos.x<-40&&e.x<0||o.pos.x>40&&e.x>0)&&(o.side*=-1,e.x*=-1,o.hasOwnProperty("av")&&(o.av*=-1,Et+=2)),(o.pos.y<-40&&e.y<0||o.pos.y>40&&e.y>0)&&(o.side*=-1,e.y*=-1,o.hasOwnProperty("av")&&(o.av*=-1,Et+=2)),Et>=$i-1&&(Et=$i-1),o.angle=e.angle}}const N3=Object.freeze(Object.defineProperty({__proto__:null,characters:Hb,description:Jb,options:Mb,title:Bb,update:Db},Symbol.toStringTag,{value:"Module"})),Lb="UD CAVE",Fb=`
[Hold] Go right
`,Yb=[`
 l
lll
 l
l l
`],Ub={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:30};let Xr,Cs,Hl,Ml,zp,jp,qp;const Is=10;function Nb(){ticks||(Xr=15,Cs=[],Hl=-50,Ml=times(3,s=>({x:0,vx:0,w:s>0?15:20,vw:0})),zp=[],jp=5,qp=1);const l=sqrt(difficulty);if(Hl-=l,Hl<0){addScore(qp);const s=Ml[0];Ml.forEach((x,Je)=>{x.vx+=rnds(2)*sqrt(difficulty),x.vw+=rnds(1)*sqrt(difficulty),x.x+=x.vx,x.w+=x.vw;const Ci=Je===0?-(17-7/sqrt(difficulty)):s.x-s.w,Bt=Je===0?17-7/sqrt(difficulty):s.x+s.w;(x.x-x.w<Ci&&x.vx<0||x.x+x.w>Bt&&x.vx>0)&&(x.vx*=-.5,x.x+=x.vx);const Jt=Je===0?5+5/sqrt(difficulty):Ml[0].w,Ht=Je===0?7+7/sqrt(difficulty):9+9/sqrt(difficulty);(x.w<Jt&&x.vw<0||x.w>Ht&&x.vw>0)&&(x.vw*=-.5,x.w+=x.vw)});const o=Ml[1],r=o.x-o.w+25,n=o.x+o.w+25;r>0&&Cs.push({pos:vec(r,-Hl),width:-r,vy:1}),n<50&&Cs.push({pos:vec(n,-Hl),width:50-n,vy:1});const c=Ml[2],a=75-c.x-c.w,y=75-c.x+c.w;a>50&&Cs.push({pos:vec(a,100+Hl),width:50-a,vy:-1}),y<100&&Cs.push({pos:vec(y,100+Hl),width:100-y,vy:-1}),jp--,jp<0&&(rnd()<.5?zp.push({pos:vec(Ml[1].x+rnds(Ml[1].w*.8)+25,-Hl-Is/2),vy:1}):zp.push({pos:vec(75-Ml[2].x+rnds(Ml[2].w*.8),100+Hl+Is/2),vy:-1}),jp=rnd(3,9)),Hl+=Is}color("red"),remove(Cs,s=>(s.pos.y+=s.vy*l,rect(s.pos,s.width,(Is-1)*-s.vy),s.vy>0?s.pos.y>100+Is:s.pos.y<-Is));const e=ticks<60?ticks/60:1;Xr=clamp(Xr+(input.isPressed?1:-1)*sqrt(difficulty)*.5*e,-25,25),color("black");const t=char("a",Xr+25,90).isColliding.rect,i=char("a",75-Xr,10).isColliding.rect;(t.red||i.red)&&(play("explosion"),end()),color("yellow"),remove(zp,s=>{s.pos.y+=s.vy*l;const o=char("$",s.pos).isColliding;return o.rect.red?!0:o.char.a?(play("powerUp"),qp++,!0):s.vy>0?s.pos.y>103:s.pos.y<-3}),color("black"),text(`x${qp}`,3,9)}const X3=Object.freeze(Object.defineProperty({__proto__:null,characters:Yb,description:Fb,options:Ub,title:Lb,update:Nb},Symbol.toStringTag,{value:"Module"})),Xb="UNCTRL",Vb=`
[Tap]  Fire
[Hold] Go up
`,Gb=[`
l ll ll
 lll
l  lll
l  lll
 lll
l ll ll
`,`
 ll ll
 lll
l  lll
l  lll
 lll
 ll ll
`,`
ll ll l
 lll
l  lll
l  lll
 lll
ll ll l
`],Kb={theme:"crt",viewSize:{x:150,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let Wp,Vr,Q0,Ue,Z0,Gr,xf;const Qb=vec(10,50),Zb=vec(8,50);function e9(){ticks||(Wp=[],Q0=[],Vr=0,Ue={pos:vec(),vel:vec(),state:"ready"},Z0=0,l(),xf=times(20,()=>vec(rnd(150),rnd(100)))),color("light_purple"),xf.forEach(e=>{box(e,5,2),e.x=wrap(e.x-.1*sqrt(difficulty),-3,153)}),color(Ue.state==="ready"?"light_blue":"blue"),Ue.state==="ready"?input.isJustPressed&&(play("select"),Ue.state="fired"):(input.isJustPressed&&play("hit"),input.isJustReleased&&play("laser"),Ue.vel.y+=input.isPressed?-.1:.1,Ue.pos.add(Ue.vel),particle(Ue.pos,1,1,Ue.vel.angle+PI,1),Ue.pos.isInRect(0,0,150,100)||l()),bar(Ue.pos,6,4,Ue.vel.angle,-.5),Wp.length===0&&(Vr=0),Vr--,Vr<0&&(Wp.push({pos:vec(153,rnds(20,40)+50),bulletAngle:rnds(PI*.3)+PI,fireTicks:rnd(60),animTicks:0}),Vr=200/sqrt(difficulty)),remove(Wp,e=>(e.animTicks+=sqrt(difficulty)*(e.pos.x<70?4:1),e.pos.x-=sqrt(difficulty)*(e.pos.x<70?.4:.1),color("red"),char(addWithCharCode("a",floor(e.animTicks/20)%3),e.pos,{mirror:{x:-1}}).isColliding.rect.blue?(play("powerUp"),particle(e.pos,19,3),addScore(Gr*10,e.pos),l(),!0):(e.fireTicks-=difficulty,e.pos.x>70&&(e.fireTicks<0?(Q0.push({pos:vec(e.pos.x-3,e.pos.y),vel:vec().addWithAngle(e.bulletAngle,.3*difficulty)}),e.fireTicks=60,e.bulletAngle=rnds(PI*.3)+PI):(color("light_red"),bar(e.pos.x-3,e.pos.y,4,2,e.bulletAngle,-.5))),e.pos.x<-3))),color("red"),remove(Q0,e=>(e.pos.add(e.vel),bar(e.pos,4,2,e.vel.angle,-.5).isColliding.rect.blue?(play("coin"),addScore(Gr,e.pos),particle(e.pos,9),Gr<64&&(Gr*=2),!0):!e.pos.isInRect(0,0,150,100))),color("blue"),Z0+=difficulty,char(addWithCharCode("a",floor(Z0/20)%3),Qb).isColliding.rect.red&&(play("explosion"),end());function l(){Ue.pos.set(Zb),Ue.vel.set(.5,.2),Ue.state="ready",Gr=1}}const V3=Object.freeze(Object.defineProperty({__proto__:null,characters:Gb,description:Vb,options:Kb,title:Xb,update:e9},Symbol.toStringTag,{value:"Module"})),l9="UP 1 WAY",t9=`
[Tap] Go up
`,i9=[`
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
  yy
  YY
 yyyy
 YYYY
yyyyyy
YYYYYY
    `,`
  rr
  rr
  rr
  rr
  rr
  rr
  `,`
  rr
 rRRr
 r  r
 rRRr
 rRRr
  rr
  `,`
  rr
 rRRr
r RR r
rRRRRr
 rRRr
  rr
  `,`
  rr
 rRRr
 r  r
 rRRr
 rRRr
  rr
  `,`
yyyy
y  y
yyyy
y Y YY
y Y YY
y Y YY
`],s9={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:5};let tl,Si,Kr,Bp,Jp,me,Hp,eu;const lu=l=>16+l*15;function o9(){if(!ticks){tl=times(6,t=>({y:lu(t),holeXs:t===5?[]:[rnd(99,180)],nextHoleDist:t===5?999999999:rnd(99),bambooXs:[],nextBamBooDist:0,skullXs:[],powXs:[]})),Si=0,Kr=rndi(tl.length-1),Bp=rnd(49,99),Jp=999;const e=5;me={pos:vec(20,lu(e)),floorIndex:e,targetFi:void 0},Hp=0,eu=!0}if(Hp+=difficulty,me.targetFi!=null){const e=lu(me.targetFi),t=e>me.pos.y?1:-1;me.pos.y+=t*difficulty*3,(me.pos.y-e)*t>0&&(me.pos.y=e,me.floorIndex=me.targetFi,me.targetFi=void 0)}me.targetFi==null&&(input.isJustPressed&&me.floorIndex>0?(play("jump"),me.targetFi=me.floorIndex-1):r9(me.floorIndex,me.pos.x)&&(play("click"),me.targetFi=me.floorIndex+1)),char(addWithCharCode("a",floor(Hp/20)%2),me.pos.x,me.pos.y-5);const l=difficulty;if(Si-=l,Si<0&&(tl[Kr].nextHoleDist<9?Kr=rndi(tl.length):(tl[Kr].bambooXs.push(209),eu?(eu=!1,Si=150):rnd()<.3?Si=6:(Si=rnd(200,300),Kr=rndi(tl.length)))),Bp-=l,Bp<0){const e=rndi(tl.length);tl[e].nextHoleDist>9&&Si>9&&tl[e].skullXs.push(209),Bp+=rnd(30,50)}if(Jp-=l,Jp<0){const e=rndi(tl.length);tl[e].powXs.push(209),Jp=999}color("light_blue"),rect(0,97,200,3),tl.forEach(e=>{e.nextHoleDist-=l,e.nextHoleDist<0&&(e.holeXs.push(200),e.nextHoleDist=rnd(32,99));let t=0;e.holeXs.forEach((i,s)=>{i>t&&(color("green"),rect(t,e.y-2,i-t,2),color("light_black"),rect(t,e.y,i-t,3)),t=i+9,e.holeXs[s]-=l}),t<200&&(color("green"),rect(t,e.y-2,200-t,2),color("light_black"),rect(t,e.y,200-t,3)),color("black"),remove(e.holeXs,i=>i<-9),e.bambooXs.forEach((i,s)=>{const o=char("c",i,e.y-5).isColliding.char;(o.a||o.b)&&(play("coin"),addScore(1,i,e.y-5),e.bambooXs[s]=-9),e.bambooXs[s]-=l}),remove(e.bambooXs,i=>i<-3),e.powXs.forEach((i,s)=>{const o=char("h",i,e.y-5).isColliding.char;(o.a||o.b)&&(play("powerUp"),tl.forEach(r=>{r.skullXs.forEach(n=>{r.bambooXs.push(n)}),r.skullXs=[]}),e.powXs[s]=-9),e.powXs[s]-=l}),remove(e.powXs,i=>i<-3),e.skullXs.forEach((i,s)=>{const o=char(addWithCharCode("d",floor(Hp/15)%4),i,e.y-5).isColliding.char;(o.c||o.h)&&(e.skullXs[s]=-9),(o.a||o.b)&&(play("explosion"),end()),e.skullXs[s]-=l}),remove(e.skullXs,i=>i<-3)})}function r9(l,e){let t=!1;return tl[l].holeXs.forEach(i=>{e>i+3&&e<i+6&&(t=!0)}),t}const G3=Object.freeze(Object.defineProperty({__proto__:null,characters:i9,description:t9,options:s9,title:l9,update:o9},Symbol.toStringTag,{value:"Module"})),n9="UP DOWN PRESS",c9=`
[Tap]  Jump
[Hold] Speed up
`,a9=[],p9={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let At,Mp,tu,Dp,Cl,m,Qr;const Ot=5,d9=1;function u9(){ticks||(At=[{from:vec(0,50),to:vec(100,50),angle:0}],Mp=-250,tu=[],Dp=0,Cl=vec(),m={pos:vec(20,50),vy:0,vx:0,angle:0,speed:1,state:"ground"},Qr=1),Cl.set(difficulty*.1),m.pos.x>50&&(Cl.x+=(m.pos.x-50)*.1);const[l,e]=r(m.pos.x+50);for(l<60?Cl.y+=(l-60)*.1:l>90&&(Cl.y+=(l-90)*.1),Mp-=Cl.x;Mp<0;){const n=At[At.length-1],c=vec(n.to);let a=vec(n.to);const y=rnd(20,60);a.x+=y,n.from.y-n.to.y===0&&(a.y+=rnds(.4,1.1)*y),At.push({from:c,to:a,angle:c.angleTo(a)}),Mp+=y}color("light_black"),remove(At,n=>(n.from.sub(Cl),n.to.sub(Cl),line(n.from,n.to),n.to.x<-50)),m.pos.x+=m.speed*sqrt(difficulty)-Cl.x+m.vx,m.vx*=.9,m.pos.x<0&&(play("lucky"),end());const[t,i]=r(m.pos.x);m.state==="jump"&&m.pos.y>t&&(m.state="ground"),m.state==="ground"&&(m.pos.y=t,m.speed+=Ot*m.angle*.02,m.angle+=(i-m.angle)*.025,input.isJustPressed&&(play("jump"),m.state="jump",m.vy=-2,Qr=1)),m.state==="jump"&&(m.pos.y+=m.vy*sqrt(difficulty),m.vy+=input.isPressed?.05:.2,m.angle+=(atan2(m.vy,m.speed)-m.angle)*.05),m.speed+=(d9*(input.isPressed?2.5:.5)-m.speed)*.1;const s=vec(m.pos);s.addWithAngle(m.angle,Ot*.6);const o=Ot;if(color("blue"),box(s.x,s.y-o/2,o),s.addWithAngle(m.angle,Ot*-1.2),box(s.x,s.y-o/2,o),color("cyan"),s.set(m.pos),s.addWithAngle(m.angle-PI/2,o),bar(s,Ot,Ot,m.angle),s.addWithAngle(m.angle-PI/4*3,o*.5),bar(s,Ot/2,Ot,m.angle),Dp-=Cl.x,Dp<0){At[At.length-1];const n=rnd(.3,1+sqrt(difficulty)),c=n>2.5?-5:205;tu.push({x:c,vx:0,size:rnd(5,8),speed:n,currentSpeed:0,angle:0,color:["red","yellow","green","purple"][rndi(4)]}),Dp+=rnd(100,120)/sqrt(difficulty)}remove(tu,n=>{n.x+=n.currentSpeed*sqrt(difficulty)-Cl.x;const[c,a]=r(n.x);if(n.currentSpeed+=n.size*n.angle*.02,n.currentSpeed+=(n.speed-n.currentSpeed)*.1,c==null)return!0;n.angle+=(a-n.angle)*.025;const y=vec(n.x,c);y.addWithAngle(n.angle,n.size*.6);const x=n.size;color("black"),box(y.x,y.y-x/2,x),y.addWithAngle(n.angle,n.size*-1.2),box(y.x,y.y-x/2,x),color(n.color),y.set(n.x,c),y.addWithAngle(n.angle-PI/2,x);let Je=bar(y,n.size,n.size,n.angle).isColliding.rect;y.addWithAngle(n.angle-PI/4*3,x*.5),Je={...Je,...bar(y,n.size/2,n.size,n.angle).isColliding.rect};const Ci=m.state==="jump"&&m.vy>=0;if(Ci&&(Je.cyan||Je.blue))return play("powerUp"),addScore(Qr,y),Qr<16&&(Qr*=2),particle(y),m.vy=-2,!0;!Ci&&Je.cyan&&(m.vx=-n.size-m.speed*1.5,play("explosion"),color("cyan"),particle(m.pos,9,2,0,1))});function r(n){let c=[void 0,void 0];return At.forEach(a=>{a.from.x<=n&&n<a.to.x&&(c=[(a.from.y-a.to.y)*(n-a.to.x)/(a.from.x-a.to.x)+a.to.y,a.angle])}),c}}const K3=Object.freeze(Object.defineProperty({__proto__:null,characters:a9,description:c9,options:p9,title:n9,update:u9},Symbol.toStringTag,{value:"Module"})),f9="UP SHOT",y9=`
[Hold] Stop & Shoot
[Release] Run
`,h9=[`
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
    `],g9={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let iu,Lp,su,ol,Fp,Yp,Zr;function x9(){ticks||(iu=[],Lp=0,su=[],ol={pos:vec(10,87),vx:difficulty*1.2,shotTicks:0},Fp=[],Yp=50,Zr=1);let l=difficulty*.1;if(ol.pos.x>30&&(l+=(ol.pos.x-30)*.05),Yp=wrap(Yp-l,0,99),color("light_black"),rect(0,90,100,10),color("white"),rect(Yp,90,1,10),ol.shotTicks--,input.isPressed?(input.isJustPressed&&(Zr=1,ol.vx=0),ol.shotTicks<0&&(play("laser"),Fp.push({pos:vec(ol.pos),vy:-2*difficulty}),ol.shotTicks=10/difficulty)):input.isJustReleased&&(play("select"),ol.vx=difficulty*1.2),ol.pos.x+=ol.vx-l,color("black"),remove(Fp,e=>(e.pos.x-=l,e.pos.y+=e.vy,box(e.pos,5,9),e.pos.y<0)),Lp-=l,Lp<0){const e=rnd(5,15);let t=rnd(10,50)/difficulty;const i=rnd(5,10)/sqrt(e)*sqrt(difficulty);t/=sqrt(i)/sqrt(e),iu.push({x:200,size:e,speed:i,interval:t,intervalVariation:rnd(.3,.9),ticks:rnd(t)}),Lp+=rnd(50,60)}remove(iu,e=>(e.x-=l,e.ticks--,e.ticks<0&&(su.push({pos:vec(e.x,-e.size/2),vy:0,size:e.size,speed:e.speed}),e.ticks=e.interval*(1+rnds(e.intervalVariation))),e.x<0)),color("red"),remove(su,e=>{if(e.vy+=e.speed*.01,e.pos.x-=l,e.pos.y+=e.vy,box(e.pos,e.size).isColliding.rect.black){if(e.size*=.7,color("black"),particle(e.pos,5,3,PI/2,.5),color("red"),e.size<5)return play("powerUp"),addScore(Zr*10,e.pos.x,clamp(e.pos.y,20,99)),particle(e.pos,19,3),!0;play("hit"),addScore(Zr,e.pos.x,clamp(e.pos.y,20,99)),Zr++}if(e.pos.y>90-e.size/2)return particle(e.pos,e.size*.3,sqrt(e.size)*.3),!0}),color("black"),(char(input.isPressed?"b":addWithCharCode("a",floor(ticks/20)%2),ol.pos).isColliding.rect.red||ol.pos.x<-2)&&(play("explosion"),end()),color("transparent"),remove(Fp,e=>box(e.pos,5,9).isColliding.rect.red)}const Q3=Object.freeze(Object.defineProperty({__proto__:null,characters:h9,description:y9,options:g9,title:f9,update:x9},Symbol.toStringTag,{value:"Module"})),v9="VINE CLIMBER",m9=`
[Hold] Climb
[Release] Slide
`,b9=[`
  ll
l ll l
 llll
  ll
 l  l
l    l 
`,`
  ll
  ll 
 llll
l ll l
 l  l
 l  l 
`,`
 lll
  l
 lll
l lll
 lll  
  `,`
 llll
l llll  
l llll  
l llll  
l llll  
 llll 
  `],k9={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let F,Dl,ou,Up,Il,en;function P9(){ticks||(F={centerX:50,ticks:0,amplitude:30,frequency:.03,bending:.5,targetAmplitude:30,targetFrequency:.03,targetBending:.5},Dl={pos:vec(50,80),speed:1},ou=[],Up=0,Il=void 0,en=1);let l=1;input.isPressed?(Dl.pos.y-=Dl.speed*.8*difficulty,l=floor(ticks/20)%2,ticks%20===0&&play("click")):(input.isJustReleased&&play("hit"),Dl.pos.y+=Dl.speed*1.2*difficulty),Dl.pos.y=clamp(Dl.pos.y,0,99),Dl.pos.x=F.centerX+Math.pow(Math.sin((F.ticks+Dl.pos.y*F.bending)*F.frequency/2),2)*F.amplitude*2-F.amplitude,F.ticks++,F.amplitude+=(F.targetAmplitude-F.amplitude)*.01,F.frequency+=(F.targetFrequency-F.frequency)*.01,F.bending+=(F.targetBending-F.bending)*.01,rnd()<.005&&(F.targetAmplitude=rnd(25,40),F.targetFrequency=rnd(.025,.04),F.targetBending=rnd(.45,.6)),color("green");for(let t=0;t<=100;t+=5){const i=F.centerX+Math.pow(Math.sin((F.ticks+t*F.bending)*F.frequency/2),2)*F.amplitude*2-F.amplitude;box(i,t,2,5)}if(F.ticks*F.frequency>=PI*2&&(F.ticks=0),color("red"),remove(ou,t=>(t.speed+=.01*sqrt(difficulty),t.pos.y+=t.speed,char("c",t.pos),t.pos.y>105)),Up--,Up<0&&(ou.push({pos:vec(rnd(10,90),0),speed:rnd(.5)*difficulty}),Up=rnd(70,90)/difficulty),color("blue"),char(addWithCharCode("a",l),Dl.pos).isColliding.char.c&&(play("explosion"),end()),Il==null){const t=rnds(.18,.25)*difficulty;Il={pos:vec(t>0?-10:110,rnd(10,90)),vx:t}}color("yellow"),Il.pos.x+=Il.vx;const e=char("d",Il.pos).isColliding.char;e.a||e.b?(play("coin"),addScore(en,Il.pos),en=clamp(en+1,1,9),Il=void 0):(Il.pos.x<-10||Il.pos.x>110)&&(en=1,Il=void 0)}const Z3=Object.freeze(Object.defineProperty({__proto__:null,characters:b9,description:m9,options:k9,title:v9,update:P9},Symbol.toStringTag,{value:"Module"})),$9="WAVY BIRD",S9=`
[Tap] Flap
`,w9={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3},_9=[];let we,ru,Np,nu,Rs;const T9=.1,C9=1.5,I9=2,R9=30,Es=8,E9=20,A9=60;function O9(){const l=sqrt(difficulty);if(ticks||(we={pos:vec(20,60),vel:vec(0,-3/l),size:vec(5,3),angle:0},ru=[],Np=0,nu=[],Rs=1),color("purple"),remove(nu,e=>(e.radius+=I9*l,arc(e.pos,e.radius,3,e.angle-.5,e.angle+.5),e.radius>=e.maxRadius)),we.pos.y+=we.vel.y*l,we.vel.y+=T9,we.angle+=(1.2-we.angle)*.02*l,input.isJustPressed&&(play("click"),nu.push({pos:vec(we.pos),radius:0,maxRadius:R9,angle:we.angle-.6*l}),we.vel.y=-C9,we.angle-=.6*l),we.angle=clamp(we.angle,-1.2,1.2),(we.pos.y<0||we.pos.y>99)&&(play("explosion"),end()),color("red"),bar(we.pos,we.size.x,we.size.y,we.angle),color("cyan"),remove(ru,e=>{e.pos.x-=l;const t=box(e.pos,e.size).isColliding.rect;return t.purple?(play("powerUp"),addScore(floor(Rs),e.pos.x,e.pos.y),Rs+=1,!0):(t.red&&(play("explosion"),end()),e.pos.x<-Es)}),Np-=l,Np<0){play("laser");const e=rnd(E9,A9);let t=rnd(0,110-e);for(let i=0;i<floor(e/Es);i++)ru.push({pos:vec(100+Es,t),size:vec(Es,Es)}),t+=Es;Np+=rnd(10,40)}Rs=clamp(Rs-.03*l,1,99),color("black"),text(`x${floor(Rs)}`,2,9)}const eP=Object.freeze(Object.defineProperty({__proto__:null,characters:_9,description:S9,options:w9,title:$9,update:O9},Symbol.toStringTag,{value:"Module"})),z9="WINDOW WASHER",j9=`
[Hold] Ascend
[Release] Descend
Clean windows!
`,q9=[`
  ll
 l  l
llllll
 l  l
`],W9={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1,isDrawingScoreFront:!0};let ve,mu,bu,sd,nn,Ti;function B9(){ticks||J9(),H9(),M9(),D9(),L9(),$f(),F9(),color("black"),text(`x${Ti}`,2,10,{isSmallText:!0})}function J9(){ve={pos:vec(50,10),vx:1,vy:1,width:20,height:5},mu=[];for(let l=0;l<10;l++)mu.push({pos:vec(rnd(15,85),20+l*30),width:15,height:20,isCleaned:!1});bu=[],sd=0,nn=.5,Ti=1}function H9(){color("light_cyan"),rect(0,0,3,100),rect(97,0,3,100)}function M9(){input.isJustPressed&&play("laser"),input.isPressed?ve.vy=-1.5:ve.vy=1,ve.pos.x+=ve.vx,(ve.pos.x>90||ve.pos.x<10)&&(play("click"),ve.vx*=-1),ve.pos.y+=ve.vy,ve.pos.y=clamp(ve.pos.y,5,95),$f()}function $f(){color("light_black"),rect(ve.pos.x-ve.width/2,0,1,ve.pos.y),rect(ve.pos.x+ve.width/2-1,0,1,ve.pos.y),color("blue"),box(ve.pos,ve.width,ve.height)}function D9(){mu.forEach(l=>{l.pos.y-=nn,l.pos.y<-30&&(l.pos.y+=330,l.isCleaned?l.isCleaned=!1:(play("hit"),Ti--,Ti<1&&(Ti=1))),color(l.isCleaned?"yellow":"cyan"),box(l.pos,l.width,l.height).isColliding.rect.blue&&!l.isCleaned&&(play("powerUp"),l.isCleaned=!0,addScore(Ti,l.pos),Ti++)})}function L9(){if(remove(bu,l=>(l.pos.y-=nn,l.type==="bird"&&(l.pos.x+=l.vx,(l.pos.x>95||l.pos.x<5)&&(l.vx*=-1)),color("red"),l.type==="bird"?char("a",l.pos,{mirror:{x:l.vx>0?1:-1}}).isColliding.rect.blue&&vf():box(l.pos,10,14).isColliding.rect.blue&&vf(),l.pos.y<-10)),sd-=nn,sd<0){let l=rnd()<.5;const e=vec(rnd(15,85),110);l||(color("transparent"),box(e,14,18).isColliding.rect.cyan&&(l=!0)),bu.push({pos:e,vx:l?rnd()<.5?.5:-.5:0,type:l?"bird":"open window"}),sd+=rnd(40,50)}}function F9(){nn=.5+difficulty*.1}function vf(){play("explosion"),end()}const lP=Object.freeze(Object.defineProperty({__proto__:null,characters:q9,description:j9,options:W9,title:z9,update:B9},Symbol.toStringTag,{value:"Module"})),Y9="WIND POWER",U9=`
[Hold] Blow air
`,N9=[],X9={isPlayingBgm:!0,isReplayEnabled:!0,seed:1};let As,hl,cu,au,Xp,zt;function V9(){ticks||(vec(0,50),As={pos:vec(10,60),speed:0,angle:0},hl={pos:vec(85,60),speed:0,angle:0},cu=[],Xp=9,au=!0,zt=0),input.isPressed?(zt+=difficulty*.02,zt=clamp(zt,0,1*difficulty)):zt*=.9,input.isJustPressed&&play("select"),input.isJustReleased&&play("click"),As.speed=zt*2,As.angle+=As.speed*.2,color("cyan"),box(As.pos,5,sin(As.angle)*20),hl.speed+=zt*.02,hl.speed=Math.min(hl.speed,10),hl.speed*=.98,hl.angle+=hl.speed*.2,color("light_black");for(let l=0;l<3;l++)bar(hl.pos,10,4,hl.angle+PI*2/3*l,0);if(hl.angle>PI*2&&(play("coin"),hl.angle%=PI*2),addScore(hl.speed),Xp-=difficulty,Xp<0){play("hit");const l=rnd(5,10),e=vec(rnd(20,au?60:99),-l);cu.push({pos:e,size:l,vx:0}),Xp=rnd(75,250),au=!1}remove(cu,l=>(l.pos.y+=difficulty*.5,l.pos.y>20&&l.pos.y<100&&(l.vx+=zt/l.size),l.vx*=.9,l.pos.x+=l.vx,color("black"),box(l.pos,l.size),box(l.pos,l.size).isColliding.rect.light_black&&(play("explosion"),end()),l.pos.y>100))}const tP=Object.freeze(Object.defineProperty({__proto__:null,characters:N9,description:U9,options:X9,title:Y9,update:V9},Symbol.toStringTag,{value:"Module"})),G9="ZONE B",K9=`
[Tap]  Turn
[Hold] Shot
`,Q9=[`
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
`],Z9={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let pu,mf,Vp,O,Gp,Kp,jt,rt,We,el,rl,du;const uu=[[1,0],[0,1],[-1,0],[0,-1]],bf=30;function ek(){if(ticks||(Gp=floor((difficulty-1)*2),Kp=!0,jt=0),Kp&&(rl=99,el={pos:vec(50,50),radius:120},We={pos:vec(50,50),radius:60},rt={pos:vec(),radius:0},pu=times(9+Gp*7,()=>({pos:vec(rnd(99),rnd(99)),angle:rndi(4),speed:0,shotTicks:rnd(50,150),burstTicks:0,burstCount:0,turnTicks:0,isReflecting:!1})),mf=times(19,()=>({pos:vec(rnd(9,89),rnd(9,89)),width:rnd(5,15),angle:rndi(2)})),Vp=[],O={pos:vec(50,80),angle:3,speed:0,isReflecting:!1,shotTicks:0},Gp++,Kp=!1,du=1),rl--,rl===9){rt.radius=We.radius-10,rt.pos.set(We.pos);for(let i=0;i<99&&(rt.pos.set(rnd(10,90),rnd(10,90)),!(rt.pos.distanceTo(We.pos)<We.radius-rt.radius));i++);}rl<0&&(rl=600),rl<9&&(We.pos.add((rt.pos.x-We.pos.x)/(rl+1),(rt.pos.y-We.pos.y)/(rl+1)),We.radius+=(rt.radius-We.radius)/(rl+1)),We.radius<60&&(color("light_black"),arc(We.pos,We.radius,2),rl>9&&(el.pos.add((We.pos.x-el.pos.x)/rl,(We.pos.y-el.pos.y)/rl),el.radius+=(We.radius-el.radius)/rl),color("blue"),arc(el.pos,el.radius,3)),color("yellow"),remove(mf,i=>{let s;return i.angle===0?s=box(i.pos,i.width,2):s=box(i.pos,2,i.width),s.isColliding.rect.blue}),remove(Vp,i=>{const s=uu[i.angle];i.pos.add(s[0],s[1]);const o=i.side==="player"||i.pos.distanceTo(O.pos)<bf;return color(o?i.side==="enemy"?"purple":"cyan":"transparent"),char(i.side==="enemy"?"c":"d",i.pos,{rotation:i.angle}).isColliding.rect.yellow||!i.pos.isInRect(0,0,99,99)?!0:(i.range--,i.range<0)}),remove(pu,i=>{const s=uu[i.angle];i.pos.add(s[0]*i.speed,s[1]*i.speed);const o=i.pos.distanceTo(O.pos)<bf;o&&(color("black"),char("b",i.pos.x+s[0]*2,i.pos.y+s[1]*2,{rotation:i.angle})),color(o?"red":"transparent");const r=char("a",i.pos,{rotation:i.angle}).isColliding;if(r.char.d)return play("explosion"),addScore(du,i.pos),du++,!0;r.rect.yellow||!i.pos.isInRect(0,0,99,99)?i.isReflecting||(i.angle+=2,i.isReflecting=!0):i.isReflecting=!1,i.shotTicks>7&&i.turnTicks--,i.turnTicks<0&&(i.angle++,i.turnTicks=rnd(200,300)),i.angle=wrap(i.angle,0,4),i.shotTicks--,i.shotTicks<0&&(i.burstCount--,i.burstCount<0?(i.shotTicks=rnd(100,200),i.burstCount=rndi(3,7)):(Vp.push({pos:vec(i.pos.x+s[0]*5,i.pos.y+s[1]*5),angle:i.angle,range:20,side:"enemy"}),i.shotTicks+=7)),i.speed+=((i.shotTicks<7?0:.2)-i.speed)*.1,t(i),i.pos.clamp(0,99,0,99)});const l=uu[O.angle];O.speed+=((input.isPressed?0:.2)-O.speed)*.1,input.isJustReleased&&O.speed>.04&&(play("laser"),O.angle=wrap(O.angle+1,0,4)),O.shotTicks--,input.isPressed&&O.speed<.04&&O.shotTicks<0&&(play("hit"),Vp.push({pos:vec(O.pos.x+l[0]*5,O.pos.y+l[1]*5),angle:O.angle,range:20,side:"player"}),O.shotTicks=7),O.pos.add(l[0]*O.speed,l[1]*O.speed),t(O),color("black"),char("b",O.pos.x+l[0]*2,O.pos.y+l[1]*2,{rotation:O.angle}),color("blue");const e=char("a",O.pos,{rotation:O.angle}).isColliding;(e.char.c||el.radius<1||O.pos.distanceTo(el.pos)>el.radius*1.05)&&(play("explosion"),end()),O.pos.clamp(0,99,0,99),e.rect.yellow||!O.pos.isInRect(0,0,99,99)?O.isReflecting||(O.angle+=2,O.isReflecting=!0):O.isReflecting=!1,O.angle=wrap(O.angle,0,4),jt<=-60&&pu.length===0&&(play("powerUp"),jt=60),jt>0?(color("black"),text("WINNER!",30,50),jt--,jt===0&&(Kp=!0)):jt>-60&&(color("black"),text(`LEVEL ${Gp}`,30,50),jt--);function t(i){if(i.pos.distanceTo(el.pos)<el.radius)return;const s=i.pos.angleTo(el.pos);s<-PI/4*3||s>PI/4*3?i.angle=2:s>PI/4?i.angle=1:s<-PI/4?i.angle=3:i.angle=0}}const iP=Object.freeze(Object.defineProperty({__proto__:null,characters:Q9,description:K9,options:Z9,title:G9,update:ek},Symbol.toStringTag,{value:"Module"}));export{e3 as $,Tk as A,Ck as B,Ik as C,Rk as D,Ek as E,Ak as F,Ok as G,zk as H,jk as I,qk as J,Wk as K,Bk as L,Jk as M,Hk as N,Mk as O,Dk as P,Lk as Q,Fk as R,Yk as S,Uk as T,Nk as U,Xk as V,Vk as W,Gk as X,Kk as Y,Qk as Z,Zk as _,lk as a,l3 as a0,t3 as a1,i3 as a2,s3 as a3,o3 as a4,r3 as a5,n3 as a6,c3 as a7,a3 as a8,p3 as a9,W3 as aA,B3 as aB,J3 as aC,H3 as aD,M3 as aE,D3 as aF,L3 as aG,F3 as aH,Y3 as aI,U3 as aJ,N3 as aK,X3 as aL,V3 as aM,G3 as aN,K3 as aO,Q3 as aP,Z3 as aQ,eP as aR,lP as aS,tP as aT,iP as aU,d3 as aa,u3 as ab,f3 as ac,y3 as ad,h3 as ae,g3 as af,x3 as ag,v3 as ah,m3 as ai,b3 as aj,k3 as ak,P3 as al,$3 as am,S3 as an,w3 as ao,_3 as ap,T3 as aq,C3 as ar,I3 as as,R3 as at,E3 as au,A3 as av,O3 as aw,z3 as ax,j3 as ay,q3 as az,tk as b,ik as c,sk as d,ok as e,rk as f,nk as g,ck as h,ak as i,pk as j,dk as k,uk as l,fk as m,yk as n,hk as o,gk as p,xk as q,vk as r,mk as s,bk as t,kk as u,Pk as v,$k as w,Sk as x,wk as y,_k as z};
