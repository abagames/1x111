const f="CAST N",v=`
[Hold] Select power
[Release] Cast [Tap] Pull
`,x=[`
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
`],h={viewSize:{x:150,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let p,s,o,y,c,a,l,r;const t=vec(5,20),u=9;function g(){if(ticks||(p=times(20,e=>({pos:vec(t),vel:vec(),nextNode:void 0})),times(19,e=>{p[e+1].nextNode=p[e]}),s="ready",o=0,y=[],c=0,a=1,l=40,r=1),color("light_yellow"),line(0,t.y+3,150,120),color("light_blue"),rect(0,l,150,3),color("black"),char("a",p[0].pos),l<t.y-4&&(play("explosion"),end()),s==="ready"&&input.isJustPressed&&(play("select"),o=1,s="angle",r=1),s==="angle"){o+=.05*sqrt(difficulty);const e=.1-o*.2;line(t,vec(t).addWithAngle(e,o*5+3),2),(input.isJustReleased||o>3)&&(play("jump"),o=clamp(o,1,3),s="throw",p[0].vel.set(sqrt(difficulty)*o).rotate(e))}if(s==="throw"&&(p.forEach((e,i)=>{if(e.pos.x=clamp(e.pos.x,0,147),i===0){if(!char("a",e.pos).isColliding.rect.light_yellow){let d=e.pos.y;e.pos.add(e.vel),d<l&&e.pos.y>=l&&(e.vel.x=0,e.vel.y*=.1),e.vel.y+=(e.pos.y<l?.05:.01)*difficulty,e.vel.mul(.99)}}else if(!line(e.nextNode.pos,e.pos,2).isColliding.rect.light_yellow){if(e.pos.distanceTo(e.nextNode.pos)>u){const n=e.nextNode.pos.angleTo(e.pos);e.pos.set(e.nextNode.pos).addWithAngle(n,u)}e.pos.add(e.vel),e.vel.y+=(e.pos.y<l?.005:.001)*difficulty,e.vel.mul(.99)}}),input.isJustPressed&&(play("powerUp"),s="pull")),s==="pull"&&p.forEach((e,i)=>{if(e.vel.set(),e.pos.distanceTo(t)>1&&e.pos.x>t.x){const d=e.pos.angleTo(t);e.pos.addWithAngle(d,sqrt(difficulty)*2)}else e.pos.set(t),i===0&&(s="ready");i>0&&line(e.nextNode.pos,e.pos,2)}),y.length===0&&(c=0),c--,c<0){a--;let e=1;a<0&&(e=0,a=rnd(1,7));const i=rndi(3,8),d=vec(153,rnd(l+(e===0?19:9),90)),n=-rnd(1,sqrt(difficulty))*(e==0?.3:.2);times(i,()=>{y.push({pos:vec(d).add(rnd(20),rnds(9)).clamp(153,180,l+4,96),vel:vec(n,0),type:e})}),c=rnd(120,150)/sqrt(difficulty)}remove(y,e=>{color(e.type===0?"red":"blue");const i=char("b",e.pos,{mirror:{x:e.vel.x<0?-1:1}}).isColliding;if(i.rect.black||i.char.a){if(s==="pull"){const d=e.pos.angleTo(t);if(e.pos.addWithAngle(d,sqrt(difficulty)*2),e.pos.y-=difficulty*.3,e.pos.x<t.x+9)return addScore(e.type===0?-1:r,t.x+clamp(r*6,0,140),t.y+(e.type===0?9:0)),r++,l=clamp(l+(e.type===0?-5:1)*sqrt(difficulty),0,50),play(e.type===0?"hit":"coin"),!0}i.rect.light_yellow||(e.pos.y+=difficulty*.3),rnd()<.1&&(e.vel.x*=-1);return}return e.pos.y<l+3?e.vel.y+=.1:e.vel.y=0,e.pos.add(e.vel),e.vel.x+=rnds(sqrt(difficulty))*.01,i.rect.light_yellow&&e.vel.x<0&&(e.vel.x*=-1),e.vel.x>0&&e.pos.x>153||e.pos.x<-3}),l-=sqrt(difficulty)*.01}export{x as characters,v as description,h as options,f as title,g as update};
