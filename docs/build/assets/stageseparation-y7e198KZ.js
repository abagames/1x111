const y="STAGE SEPARATION",v=`
[Tap] Staging
`,f={viewSize:{x:100,y:150},theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5},S=[];let e,a,d,u,l,i,t;function m(){ticks||(e={pos:vec(50,90),vel:vec(0,-.5),currentStage:4,stageHeight:10,stageBurnTime:100},a=[],u=[],d=times(200,()=>({x:rnd(-200,300),y:rnd(-1e3,0)})),l=99,i=0,t=1);const o=-e.pos.y;addScore(-e.vel.y*.1);const g=e.pos.y-130*t;i+=clamp((g-i)*.1,-99,0),t=clamp(1+o/9999,1,3),color("black"),d.forEach(r=>{const s=(r.x-50)/t+50,n=(r.y-i)%1e3/t;s>=0&&s<=100&&n>=0&&n<=150&&box(s,n,1)}),e.vel.y-=.1*(e.stageBurnTime/60),e.vel.y+=.05,e.pos.y+=e.vel.y*difficulty,e.stageBurnTime>0&&(e.stageBurnTime-=difficulty),input.isJustPressed&&e.currentStage>2&&(play("click"),u.push({pos:vec(e.pos.x,e.pos.y+e.stageHeight*(e.currentStage-1)),vel:vec(rnds(.5),e.vel.y+.5),height:e.stageHeight}),e.currentStage--,e.vel.y-=.5,e.stageBurnTime=60),e.currentStage=clamp(e.currentStage+.02*difficulty,0,4),color(e.currentStage>2?"red":"light_red");const c=p(e.pos);if(rect(c.x-5/t,c.y,10/t,e.stageHeight*e.currentStage/t),e.stageBurnTime>0&&particle(c.x,c.y+e.stageHeight*e.currentStage/t,{count:1,speed:e.stageBurnTime/20/t,angle:PI/2,angleWidth:.3}),c.y>150&&(play("explosion"),end()),color("purple"),remove(u,r=>{r.vel.y+=.1,r.pos.add(r.vel);const s=p(r.pos);return rect(s.x-5/t,s.y,10/t,r.height/t),r.pos.y>i+200*t}),l+=e.vel.y*difficulty,l<0){const r=rndi(0,2),s=r?50+70*t:50-70*t;a.push({pos:vec(s,i-rnd(0,200*t)),size:rnd(5,15),vel:vec((r?-1:1)*rnd(.5,.8),rnd(-15,0)).mul(t/2)}),l=rnd(120,160)/sqrt(t)}color("light_black"),remove(a,r=>{r.pos.add(vec(r.vel).mul(difficulty));const s=p(r.pos),n=arc(s.x,s.y,r.size/t).isColliding.rect;return n.red||n.light_red?(play("explosion"),end(),!1):r.pos.x<50-70*t||r.pos.x>50+70*t})}function p(o){return{x:(o.x-50)/t+50,y:(o.y-i)/t}}export{S as characters,v as description,f as options,y as title,m as update};