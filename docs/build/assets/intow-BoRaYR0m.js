const d="IN TOW",h=`
[Tap] Multiple jumps
`,v=[`
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
`],f={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let i,t,l,n,p,a,c,y;function x(){ticks||(i={pos:vec(64,32),vy:0,posHistory:[],isJumping:!0},t=[],l=[],n=[{pos:vec(90,70),width:90,hasChick:!1},{pos:vec(170,50),width:90,hasChick:!0}],p=0,a=[],c=99,y=!1);const r=sqrt(difficulty);if(i.isJumping){t.length>0&&input.isJustPressed&&(play("jump"),play("hit"),i.vy=-2*sqrt(difficulty),t.shift(),l.push({pos:vec(i.posHistory[2]),vy:0}));const s=vec(i.pos);i.vy+=(input.isPressed?.05:.2)*difficulty,i.pos.y+=i.vy;const o=vec(i.pos).sub(s).div(9);color("white"),times(9,()=>{s.add(o),box(s,6)})}else input.isJustPressed&&(play("jump"),i.vy=-2*sqrt(difficulty),i.isJumping=!0);if(color("black"),char(i.vy<0?"b":"a",i.pos),p-=r,p<0){const s=rnd(40,80);n.push({pos:vec(200+s/2,rndi(30,90)),width:s,hasChick:!0}),p+=s+rnd(10,30)}remove(n,s=>{s.pos.x-=r,color("light_yellow");const o=box(s.pos,s.width,4).isColliding.rect;if(i.vy>0&&o.white&&(i.pos.y=s.pos.y-5,i.isJumping=!1,i.vy=0),s.hasChick){color("black");const e=char("c",s.pos.x,s.pos.y-5).isColliding.char;(e.a||e.b)&&(t.length<30&&t.push({index:0,targetIndex:0}),play("select"),addScore(t.length,s.pos.x,s.pos.y-5),s.hasChick=!1)}return s.pos.x<-s.width/2}),i.posHistory.forEach(s=>{s.x-=r}),i.posHistory.unshift(vec(i.pos)),i.posHistory.length>99&&i.posHistory.pop(),color("transparent"),i.isJumping||box(i.pos.x,i.pos.y+4,9,2).isColliding.rect.light_yellow||(i.isJumping=!0),c-=r,c<0&&(a.push({pos:vec(203,rndi(10,90)),vx:rnd(1,difficulty)*.3}),c+=rnd(50,80)/sqrt(difficulty)),color("black"),remove(a,s=>{s.pos.x-=s.vx+r;const o=char("d",s.pos).isColliding.char;return o.a||o.b?(play("explosion"),t.length>0?(y=!0,i.vy=3*sqrt(difficulty)):end(),!0):s.pos.x<-3}),color("black");let u=y;y=!1,remove(t,(s,o)=>{s.targetIndex=3*(o+1),s.index+=(s.targetIndex-s.index)*.05;const e=i.posHistory[floor(s.index)];if(char("c",e).isColliding.char.d&&(play("powerUp"),u=!0),u)return l.push({pos:vec(e),vy:0}),!0}),remove(l,s=>(s.vy+=.3*difficulty,s.pos.y+=s.vy,char("c",s.pos,{mirror:{y:-1}}),s.pos.y>103)),color("black"),char(i.vy<0?"b":"a",i.pos),i.pos.y>99&&(play("explosion"),end())}export{v as characters,h as description,f as options,d as title,x as update};
