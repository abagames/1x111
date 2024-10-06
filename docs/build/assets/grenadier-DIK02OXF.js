const u="GRENADIER",x=`
[Tap]  Climb out
[Hold] Throw
`,h=[`
  ll
  l
 llll
 ll
  llll
ll   l
`,`
ll
l  ll
 ll
ll
  llll
ll   
`,`
  ll
  l
 lllll
l l
  llll
ll 
`,`
   ll
ll l
  lll
   l l
llll
    l
`,`
  ll
llll
  lll
 llll
l l ll
 llll
`,`
 llll
llll
 llll
`],y={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let t,s,c,f,e,i,o,d,r;function k(){ticks||(t=[{x:10}],s=[],f=[],d=[],e=10,i="in_hole",c=0,r=1);const a=(e-10)*.05;if(color("black"),rect(0,70,200,9),color("white"),t=t.filter(l=>(l.x-=a,box(l.x,70,6,10).isColliding.char.e?!1:l.x>-4)),color("red"),s.forEach(l=>{char("e",l.x,67)}),color("black"),d=d.filter(l=>(l.pos.add(l.vel),l.vel.y+=.1*difficulty,text("o",l.pos).isColliding.char.e?!1:l.pos.y>68?(play("hit"),particle(l.pos,10,1,-PI/2,PI*.7),t.push({x:l.pos.x}),!1):!0)),c--,c<0){const l=rnd(sqrt(difficulty)-1)+1,n=300/(rnd(sqrt(difficulty))+1),p=rnd(sqrt(sqrt(difficulty))-1)+1;s.push({x:203,vx:.08*l,fireTicks:rnd(n),fireInterval:n,fireSpeed:.4*p}),c=200/(rnd(sqrt(difficulty))+1)}if(s=s.filter(l=>(l.x-=l.vx*r+a,color("transparent"),box(l.x,67,6,6).isColliding.text.o?(play("explosion"),color("red"),particle(l.x,67,20,2,-PI/2,PI*1.2),addScore(l.x,l.x,67),!1):(l.fireTicks--,l.x>150&&i!=="in_hole"&&l.fireTicks<0&&(play("laser"),l.fireTicks=l.fireInterval,f.push({x:l.x-5,vx:l.fireSpeed})),l.x>-4))),color("red"),f=f.filter(l=>(l.x-=l.vx*r+a,char("f",l.x,65),l.x>-4)),s.length===0&&(c*=.7),color("transparent"),t=t.filter(l=>!box(l.x,70,7,10).isColliding.char.e),color("black"),e-=a,i==="in_hole")r+=.05,input.isJustPressed?(i="running",e+=6):(char("a",e,72).isColliding.char.e&&(play("lucky"),end()),color("transparent"),box(e+5,72,6,6).isColliding.rect.white&&e++);else if(i==="running"){r+=(1-r)*.1,e+=.8*sqrt(difficulty);const l=char(addWithCharCode("c",floor(ticks/30)%2),e,67).isColliding;(l.char.e||l.char.f)&&(play("lucky"),end()),l.rect.white?i="in_hole":input.isJustPressed&&(i="throwing",o=0)}else if(i==="throwing"){r+=(1-r)*.1;const l=vec(e,67);if(input.isJustReleased||o<-1)play("powerUp"),d.push({pos:vec(l),vel:vec((4-o*.5)*sqrt(difficulty),0).rotate(o)}),i="running";else{const n=char("b",l).isColliding.char;(n.e||n.f)&&(play("lucky"),end()),line(l,vec(l).add(vec(10,0).rotate(o)),2),o-=.02*sqrt(difficulty)}}}export{h as characters,x as description,y as options,u as title,k as update};
