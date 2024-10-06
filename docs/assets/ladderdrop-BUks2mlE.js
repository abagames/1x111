const m="LADDER DROP",R=`
[Tap] Drop
`,Y=[`
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
  `],P={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:9};let C,p,k,b,s,n,w,t,i,f;const v=4;function q(){ticks||(C=[{pos:vec(2,88),size:vec(16,2),lxs:[],state:"fix",hasCoin:!1}],p=1,k=50,b=v,h(),s={pos:vec(9,91),vx:1,state:"walk"},w=[],t=i=0,f=1,n=0),color("light_blue"),rect(0,0,2,100),rect(98,0,2,100),color("black");let y=99;if(remove(C,l=>{if(l.state==="wait")l.pos.x+=p*sqrt(difficulty)*1.5,k=l.pos.x,l.pos.x<-9?(p*=-1,l.pos.x=-9):l.pos.x>109-l.size.x*6&&(p*=-1,l.pos.x=109-l.size.x*6),a(l),input.isJustPressed&&(play("select"),l.state="drop");else if(l.state==="drop"){l.pos.y+=6*sqrt(difficulty),color("transparent");let e=a(l);if(e.e||e.f){for(;e.e||e.f;)l.pos.y--,e=a(l);l.pos.y=floor(l.pos.y)+i%1,l.state="fix",l.hasCoin&&(l.hasCoin=!1,times(l.size.x,c=>{w.push(vec(l.pos.x+c*6+2,l.pos.y+2))})),h()}color("black"),a(l)}else l.state==="fix"&&(l.pos.y+=t,color("black"),a(l),l.pos.y<y&&(y=l.pos.y));if(l.pos.y>99)return l.state==="drop"&&h(),!0}),color("black"),s.pos.y+=t,s.state==="walk"||s.state==="downWalk"){s.pos.x+=s.vx*sqrt(difficulty)*.4;let l=char(addWithCharCode("a",floor(ticks/30)%2),s.pos,{mirror:{x:s.vx}}).isColliding.char;l.h&&(play("explosion"),end()),l.f||s.pos.x<5||s.pos.x>95?(play("laser"),s.vx*=-1,s.pos.x+=s.vx*2,n++,n>8&&(s.pos.x=clamp(s.pos.x,10,90),s.pos.y-=6,n=0,s.state="drop")):n=0,l.e?s.state==="walk"&&(s.state="up"):(s.state="walk",color("transparent"),l=char("a",s.pos.x,s.pos.y+6).isColliding.char,l.e||l.f||(s.state="drop"))}else if(s.state==="up"){play("hit"),s.pos.y-=sqrt(difficulty)*.3,color("transparent");let l=char("c",s.pos).isColliding.char;if(!l.e&&l.f)s.state="down";else if(!l.e){let e=s.pos.y;for(;l.e;)e++,l=char("c",s.pos.x,e).isColliding.char;s.pos.y=floor(e)+i%1,s.pos.x+=s.vx*sqrt(difficulty)*.5,s.state="walk"}color("black"),char(addWithCharCode("c",floor(ticks/30)%2),s.pos)}else if(s.state==="down"){play("hit"),s.pos.y+=sqrt(difficulty)*.4,color("transparent");let l=char("c",s.pos.x,s.pos.y+6).isColliding.char;if(!l.e&&l.f){let e=s.pos.y+6;for(;l.f;)e--,l=char("c",s.pos.x,e).isColliding.char;s.pos.y=floor(e)+i%1,s.state="downWalk"}color("black"),char(addWithCharCode("c",floor(ticks/30)%2),s.pos)}else{s.pos.y+=sqrt(difficulty)*.5,color("transparent");let l=char("a",s.pos).isColliding.char;if(l.e||l.f){let e=s.pos.y;for(;!(l.e||l.f);)e--,l=char("a",s.pos).isColliding.char;s.pos.y=floor(e-1)+i%1,s.state="walk"}color("black"),char("a",s.pos,{mirror:{x:s.vx}})}s.pos.y>99&&(play("explosion"),end()),color("black"),remove(w,l=>{l.y+=t;const e=char("i",l).isColliding.char;if(e.a||e.b)return play("coin"),addScore(f,l),f++,!0;if(l.y>36&&(e.e||e.f))return!0;if(l.y>103)return f>1&&f--,!0}),t=.01*difficulty,y<30&&(t+=(30-y)*.1),i+=t;function a(l){const e=l.state=="fix"?"e":"g",c=l.state=="drop"?"h":"f";let r,o=0,x={};return times(l.size.x,u=>{times(l.size.y,d=>{if(r=void 0,d===0&&l.hasCoin?r="i":d>=1&&o<l.lxs.length&&u===l.lxs[o]?r=e:d===1&&(r=c),r!=null){const g=char(r,l.pos.x+u*6+3,l.pos.y+d*6+3).isColliding.char;x={...x,...g}}}),u===l.lxs[o]&&o++}),x}function h(){const l=vec(rndi(4,8),rndi(3,6));let e=-1,c=rndi(1,5);const r=[];for(;e<l.x;)e+=c,r.push(e),e+=rndi(2,5);let o=!1;b--,b===0&&(b=v,o=!0),C.push({pos:vec(clamp(k,2,98-l.x*6),0),size:l,lxs:r,state:"wait",hasCoin:o})}}export{Y as characters,R as description,P as options,m as title,q as update};
