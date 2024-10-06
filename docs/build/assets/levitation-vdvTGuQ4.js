const c="LEVITATION",r=`
[Tap] Levitate / Fall
`,p=[`
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
  `],d={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let l,i,t,s;function n(){ticks||(l={pos:vec(40,40),vel:vec(1,0),state:"crawl"},i=[{pos:vec(0,60),width:99}],t=0,s=1),input.isJustPressed&&(play("select"),l.state=l.state==="crawl"?"roll":"crawl",s=1),l.state==="crawl"?(l.vel.x=-.4*difficulty,l.vel.y=0):(l.vel.x=.2*difficulty,l.vel.y+=.2*sqrt(difficulty)),l.vel.y*=.99,l.pos.add(l.vel),l.pos.y<0&&l.vel.y<0&&(l.pos.y=0,l.vel.y*=-.3);const o=difficulty*.5;if(t-=o,t<0){const e=rnd(30,50);i.push({pos:vec(100,rnd(30,90)),width:e}),t=e+rnd(9)}(l.pos.y>100||l.pos.x<-3||l.pos.x>103)&&(play("explosion"),end()),color("green");const a=l.state==="crawl"?"b":"a";char(a,l.pos),color("light_black"),remove(i,e=>(rect(e.pos,e.width,5).isColliding.char.a&&l.vel.y>=0&&(play("jump"),addScore(s,l.pos),s++,l.pos.y=e.pos.y-3,l.vel.y*=-1.5),e.pos.x-=o,e.pos.x+e.width<0))}export{p as characters,r as description,d as options,c as title,n as update};
