const n="D LASER",y=`
[Tap]  Turn
[Hold] Stop
`,u=[`
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
`],x={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let r,s,o,i,d,p,l,e;function h(){ticks||(r=[],s=0,o=0,i=0,d=[],p=0,e=80,l={pos:vec(50,90),vx:1,ticks:0,dist:0});const c=sqrt(difficulty)*.05+(l.pos.y<e?(e-l.pos.y)*.1:0);if(e+=(80-e)*.001,p-=c,p<0){play("hit");const t=rndi(10)*10+5;d.push({pos:vec(t<50?0:99,15),tx:t}),p+=rnd(9,36)}remove(d,t=>(t.pos.y+=c,abs(t.pos.x-t.tx)<1?(t.pos.x=t.tx,color("blue")):(t.pos.x+=(t.tx-t.pos.x)*.2,color("light_blue")),box(t.pos,8,4),color("black"),char("c",t.pos.x,t.pos.y+4),t.pos.y>99)),s>10?(s+=sqrt(difficulty)*9,r.length===0&&(play("powerUp"),r=times(10,t=>({pos:vec(t*10,10),isHit:!1}))),play("laser"),s>199&&(play("coin"),addScore(ceil(l.dist*sqrt(l.dist)*sqrt(difficulty)*.1),l.pos),f())):(i+=rnds(sqrt(difficulty))*1e-4,o+=i,(o<0&&i<0||o>sqrt(difficulty)*.2&&i>0)&&(i=-i,o*=rnd(.2,1.5)),s+=o),color("light_red"),rect(0,9,100,1),color("red"),rect(0,0,100,s<10?s:10),r.forEach(t=>{if(t.isHit)t.pos.y+=c;else if(t.pos.y+=sqrt(difficulty)*9,color("transparent"),rect(t.pos.x,10,10,t.pos.y).isColliding.rect.blue){t.isHit=!0;for(let a=0;a<99&&(t.pos.y--,!!rect(t.pos.x,10,10,t.pos.y).isColliding.rect.blue);a++);}color("red"),rect(t.pos.x,10,10,t.pos.y)}),input.isJustPressed&&(play("select"),l.vx*=-1),l.pos.y+=c,input.isPressed||(l.pos.x+=l.vx*sqrt(difficulty),(l.pos.x<0&&l.vx<0||l.pos.x>99&&l.vx>0)&&(l.vx*=-1),l.pos.x=clamp(l.pos.x,0,99),l.pos.y-=sqrt(difficulty)*.5,l.dist+=sqrt(difficulty)*.5,l.ticks+=sqrt(difficulty)),l.pos.y>99&&(play("lucky"),end()),color("black"),char(addWithCharCode("a",floor(l.ticks/20)%2),l.pos,{mirror:{x:l.vx}}).isColliding.rect.red&&(particle(l.pos,30,3),e+=7,l.pos.y+=7,play("explosion"),f());function f(){r=[],s=0,o*=rnd(),i*=rnd(),l.dist=0}}export{u as characters,y as description,x as options,n as title,h as update};
