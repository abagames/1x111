const f="M RIDER",a=`
[Hold] Go up
`,u=[`
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
`],v={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let o,t,c,r,e,s;function y(){if(ticks||(o=[{pos:vec(30,60),vel:vec(1,-1.5)}],t=9,c=[],r=0,e={pos:vec(),vel:vec(),missile:o[0]},s=1),input.isJustPressed&&play("select"),e.missile==null)e.vel.x+=(input.isPressed?.04:-.02)*sqrt(difficulty),e.vel.y+=(input.isPressed?.01:.05)*sqrt(difficulty),e.vel.mul(.99),e.pos.add(e.vel);else{const l=e.missile;l.vel.y+=(input.isPressed?-1:1)*.05*difficulty,l.vel.y*=.99,l.vel.x+=(sqrt(difficulty)-l.vel.x)*.1,e.pos.set(l.pos.x,l.pos.y-4),e.vel.set(l.vel)}const n=e.pos.x>50?(e.pos.x-50)*.1*sqrt(difficulty):0;if(e.pos.x-=n,color("black"),char(e.missile==null?"b":"a",e.pos.x,clamp(e.pos.y,-2,99),{rotation:e.missile!=null?0:floor(ticks/10)%4}),(e.missile!=null&&e.pos.y<-1||e.pos.y>99)&&(play("explosion"),end()),t--,t<0){const l=vec(210,rnd(40,70));o.push({pos:l,vel:vec(rnd(.4,.5)*sqrt(difficulty)).rotate(l.angleTo(0,rnd(50,60))+PI)}),t=rnd(60,300)/sqrt(difficulty)}if(remove(o,l=>(l.pos.add(l.vel),l.pos.x-=n,color("light_red"),box(l.pos.x-9,l.pos.y,5),particle(l.pos.x-9,l.pos.y,l===e.missile?3:2,1,PI,.5),color(l===e.missile?"red":"black"),box(l.pos,18,3).isColliding.char.b&&(play("powerUp"),s=ceil(s*.5),e.missile=l),!l.pos.isInRect(-9,-3,230,116))),r--,r<0){const l=vec(203,rnd(30,90));c.push({pos:l,vel:vec(rnd(.05,.3)*sqrt(difficulty)).rotate(l.angleTo(0,rnd(40,90))+PI),removeTicks:0,baseRemoveTicks:0}),r=rnd(20,24)/sqrt(difficulty)}remove(c,l=>{if(l.pos.add(l.vel),l.pos.x-=n,l.removeTicks>0&&(color("light_red"),particle(l.pos,1,1),l.removeTicks-=sqrt(difficulty),l.removeTicks<=0)){play("coin"),particle(l.pos,9,2),addScore(s,l.pos),s++;const d=l.baseRemoveTicks*.9;return d>2&&c.forEach(i=>{i!==l&&i.pos.distanceTo(l.pos)<36&&(line(i.pos,l.pos),i.removeTicks=i.baseRemoveTicks=d)}),!0}return color("black"),char("c",l.pos).isColliding.rect.red&&(e.missile!=null&&(play("jump"),particle(l.pos,9,3),e.vel.y=-2*sqrt(difficulty),e.missile.pos.x=-99,e.missile=void 0),l.baseRemoveTicks=l.removeTicks=9),!l.pos.isInRect(-3,-3,206,106)}),color("black"),text(`x${s}`,3,9)}export{u as characters,a as description,v as options,f as title,y as update};
