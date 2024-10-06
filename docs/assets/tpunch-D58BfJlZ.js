const y="T PUNCH",k=`
[Tap]  Punch
[Hold] Roll
`,A=[`
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
`],m={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:2};let t,d,n,f,p;function b(){ticks||(t={angle:0,av:0,length:0,targetLength:9,isAttacking:!1,isAlive:times(6,()=>!0)},d=[],n=0,f=[],p=1);const r=sqrt(difficulty),a=t.isAlive.length;color("black"),char("c",49,49),input.isJustPressed&&(t.length<5?(play("select"),t.isAttacking=!0):play("laser"),p=1),(!input.isPressed||t.length>30)&&(t.isAttacking=!1),t.length+=((input.isPressed?36:0)-t.length)*.1*sqrt(difficulty),input.isPressed?t.av+=sqrt(difficulty)*.001:t.av+=(.03*sqrt(difficulty)-t.av)*.2,t.angle+=t.av;const g=sqrt(t.length)*.5+3,u=vec();let c=t.angle;if(t.isAlive.forEach(e=>{if(c+=PI*2/t.isAlive.length,!e)return;let i=5,l=t.length/4;times(5,s=>{let o=g;s===4&&t.isAttacking?(color("red"),o*=1.5):color("cyan"),box(u.set(50,50).addWithAngle(c,i),o),i+=l})}),d.length===0&&(n=0),n--,n<0){const e=vec(rnd(99),rnd()<.5?-3:3);rnd()<.5&&e.swapXy(),d.push({pos:e,vel:vec(rnds(r)*.3,rnds(r)*.3)}),n=rnd(60,99)/difficulty}const h=vec(50,50);remove(f,e=>{e.vel.addWithAngle(h.angleTo(e.pos),r*.002),e.vel.mul(.98),e.pos.add(e.vel);const i=60/r;color(e.ticks>i?"black":"light_blue");const l=char("b",e.pos).isColliding.rect;return e.ticks>i&&(l.red||l.cyan)?(play("coin"),addScore(p,e.pos),p++,!0):(e.ticks++,!e.pos.isInRect(-3,-3,106,106))}),color("black"),remove(d,e=>{e.pos.distanceTo(50,50)>30&&(e.vel.addWithAngle(e.pos.angleTo(50,50),r*.005),e.vel.mul(.99)),e.pos.add(e.vel);const i=char("a",e.pos,{mirror:{x:e.vel.x>0?1:-1}}).isColliding;if(i.rect.red){play("powerUp"),rnd(PI*2),times(16,s=>{f.push({pos:vec(e.pos),vel:vec(s*.05).rotate(s),ticks:0})});let l=rndi(a);for(let s=0;s<a;s++){if(!t.isAlive[l]){t.isAlive[l]=!0;break}l=wrap(l+1,0,a)}return!0}if(i.rect.cyan)return play("explosion"),!0;i.char.c&&(play("lucky"),end())});let v=0;c=t.angle,t.isAlive.forEach((e,i)=>{if(c+=PI*2/a,!e)return;v++;let l=5,s=t.length/4;times(5,o=>{o===4&&t.isAttacking||(color("transparent"),box(u.set(50,50).addWithAngle(c,l),g).isColliding.char.a&&(color("cyan"),particle(u,9,2),t.isAlive[i]=!1),l+=s)})}),v===0&&(play("lucky"),end())}export{A as characters,k as description,m as options,y as title,b as update};
