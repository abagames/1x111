const y="S SHAKE",u=`
[Tap] Shake
`,h=[`
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
`],x={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let o,t,c,n,e;function b(){if(!ticks){let l=0;o=times(22,i=>(l+=PI*4/20,{pos:vec(i*10),angle:l,height:9})),t=1,c=[],n=0,e=1}let d=difficulty*.3;input.isJustPressed&&(play("jump"),t=3,e=1),t+=(1-t)*.05;let p=0;o.forEach((l,i)=>{if(l.pos.x+=d,l.pos.x>210){l.pos.x-=220;const s=o[wrap(i+1,0,22)];l.angle=s.angle-PI*4/20*rnd(.5,1.5),l.height=s.height+rnds(1),l.height+=(9-l.height)*.05}l.pos.y=sin(l.angle)*l.height,l.pos.y>p&&(p=l.pos.y)});let r;o.forEach(l=>{l.pos.y=(l.pos.y-p)*t+99,r!=null&&r.x<l.pos.x&&line(r,l.pos),r=l.pos});const a=o[0].pos,f=o[o.length-1].pos;f.x<a.x&&line(f,a),n--,n<0&&(c.push({pos:vec(203,50),vel:vec(-rnd(1,sqrt(difficulty))*.3*sqrt(difficulty)),isOnGround:!0,ticks:0}),n=rnd(120)/difficulty/difficulty),remove(c,l=>{if(l.pos.add(l.vel),l.ticks-=l.vel.x,color("transparent"),l.isOnGround){if(input.isJustPressed){let i=0;for(let s=0;s<99;s++)if(l.pos.y--,i--,box(l.pos,6).isColliding.rect.black){l.vel.y=i*sqrt(difficulty)*.3,l.isOnGround=!1;break}}if(box(l.pos,6).isColliding.rect.black)for(let i=0;i<99&&(l.pos.y--,!!box(l.pos,6).isColliding.rect.black);i++);else for(let i=0;i<99;i++)if(l.pos.y++,box(l.pos,6).isColliding.rect.black){l.pos.y--;break}}else if(l.vel.y+=.03*difficulty,box(l.pos,6).isColliding.rect.black)l.isOnGround=!0,l.vel.y=0;else if(l.vel.y>0){let i=l.pos.y;for(let s=0;s<9;s++)if(i-=3,box(l.pos.x,i,6).isColliding.rect.black){l.pos.y=i-5,l.isOnGround=!0,l.vel.y=0;break}}return color("black"),char(addWithCharCode("a",floor(l.ticks/9)%2),l.pos,{mirror:{x:-1}}),l.pos.y<-3?(play("coin"),addScore(e,l.pos.x,clamp(9+e*3,9,60)),e++,!0):(l.pos.x<3&&(play("explosion"),end()),l.pos.y>103)})}export{h as characters,u as description,x as options,y as title,b as update};
