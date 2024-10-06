const y="SURVIVOR",x=`
[Tap] Jump
`,F=[`
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
  `],g={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let s,d;const c=9;let l,t;function m(){if(ticks||(s=[],d=[],l=void 0,t=!0),l==null){v();const e=rnd(5,t?15:25);l={pos:vec((t?90+difficulty*30:120)+e,93-e),vx:rnd(t?1.5:1,2)/sqrt(e*.3+1),r:e,angle:rnd(PI*2)},t=!1}l.pos.x-=l.vx*difficulty,arc(l.pos,l.r,3+l.r*.1,l.angle,l.angle+PI),arc(l.pos,l.r,3+l.r*.1,l.angle+PI,l.angle+PI+PI),l.angle-=l.vx/l.r*1,particle(l.pos.x,l.pos.y+l.r,l.r*.05,l.vx*5,-.1,.2),l.ticks++,rect(0,93,99,7);let a=0;s=s.filter(e=>(e.ticks++,e.underFoot==null&&s.forEach(u=>{if(e!==u&&e.isOnFloor&&e.pos.distanceTo(u.pos)<4){play("select");let r=e;for(let n=0;n<99&&r.underFoot!=null;n++)r=r.underFoot;let i=u;for(let n=0;n<99&&i.onHead!=null;n++)i=i.onHead;i.onHead=r,r.underFoot=i;let o=e;for(let n=0;n<99&&(o.isJumped=o.isOnFloor=!1,o.onHead!=null);n++)o=o.onHead;o=e;for(let n=0;n<99&&(o.isJumped=o.isOnFloor=!1,o.underFoot!=null);n++)o=o.underFoot}}),input.isJustPressed&&(e.isOnFloor||e.underFoot!=null&&e.underFoot.isJumped)&&(play("jump"),e.vel.set(0,-1.5),particle(e.pos,10,2,PI/2,.5),e.isOnFloor=!1,e.isJumping=!0,e.underFoot!=null&&(e.underFoot.onHead=void 0,e.underFoot=void 0)),e.underFoot!=null?(e.pos.set(e.underFoot.pos).add(0,-6),e.vel.set()):(e.pos.add(e.vel.x*difficulty,e.vel.y*difficulty),e.vel.x*=.95,(e.pos.x<7&&e.vel.x<0||e.pos.x>=77&&e.vel.x>0)&&(e.vel.x*=-.5),e.pos.x<50?e.vel.x+=.01*sqrt(50-e.pos.x+1):e.vel.x-=.01*sqrt(e.pos.x-50+1),e.isOnFloor?e.pos.x<l.pos.x&&(e.vel.x-=.1*sqrt(l.r)/sqrt(l.pos.x-e.pos.x+1)):(e.vel.y+=.1,e.pos.y>90&&(e.pos.y=90,e.isOnFloor=!0,e.isJumped=!1,e.vel.y=0)),e.pos.y<0&&e.vel.y<0&&(e.vel.y*=-.5)),char(addWithCharCode("a",floor(e.ticks/30)%2),e.pos).isColliding.rect.black?(e.onHead!=null&&(e.onHead.underFoot=void 0,e.onHead.isJumping=!0),e.underFoot!=null&&(e.underFoot.onHead=void 0),play("hit"),d.push({pos:vec(e.pos),vel:vec(e.vel).add(-l.vx*2,0)}),!1):e.pos.isInRect(0,-50,100,150)?!0:(a++,!1))),times(a,f),s.forEach(e=>{e.isJumping&&(e.isJumped=!0,e.isJumping=!1)}),s.length<=0&&(play("lucky"),end()),d=d.filter(e=>(e.pos.add(e.vel),e.vel.y+=.2,char("a",e.pos,{mirror:{y:-1}}),e.pos.y<105)),l.pos.x<-l.r&&(l=void 0,addScore(s.length,10,50))}function v(){for(play("powerUp");s.length<c;)f()}function f(){s.push({pos:vec(rnd(10,40),rnd(-9,0)),vel:vec(rnds(1),rnd(1)),isOnFloor:!1,isJumping:!1,isJumped:!1,underFoot:void 0,onHead:void 0,ticks:rndi(60)})}export{F as characters,x as description,g as options,y as title,m as update};
