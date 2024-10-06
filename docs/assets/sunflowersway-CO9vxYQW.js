const g="SUNFLOWER SWAY",f=`
[Hold] Sunny
`,u=[`
 yyyy
ylllly
ylllly
ylllly
ylllly
 yyyy
`,`
  l
 lll
l lll
l lll
 lll
`,`
l ll l
 l  l
l ll l
llllll
 llll
l ll l
`,`
   ll
  lll
 llll
lllll
  ll
 ll
`,`
 llll
llllll
llllll
llllll
llllll
 llll
`],w={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let l,y,a,t,n,c;function v(){ticks||(l={pos:vec(30,95),height:40,angle:0,swayVelocity:.001,leafPositions:[.2,.4,.6]},y=[],a=[],t=120,n=30,c=60),color("yellow"),rect(0,90,100,10),input.isPressed?(l.swayVelocity+=.005,t+=(80-t)*.1):t+=(120-t)*.1,input.isJustPressed&&play("select"),l.swayVelocity*=.97,l.angle+=l.swayVelocity,l.swayVelocity-=l.angle*.01,t<110&&p(t),l.height-=.045*difficulty,l.height>70&&(l.height=70),l.height<9&&(play("explosion"),end()),color("green");let i=vec(l.pos).addWithAngle(l.angle-PI/2,l.height);line(l.pos,i),l.leafPositions.forEach((e,s)=>{const o=vec(l.pos).addWithAngle(l.angle-PI/2,l.height*e),d=s%2===0?1:-1;char("d",o.x+d*3,o.y,{mirror:{x:d}})}),color("black"),char("a",i,{scale:{x:2,y:2}}),n--,n<=0&&(y.push({pos:vec(rnd(99),-3),speed:rnd(.5,1)*difficulty}),n=rnd(30,40)/difficulty),remove(y,e=>(e.pos.y+=e.speed,color("light_blue"),char("b",e.pos).isColliding.char.a?(play("coin"),addScore(l.height,i),l.height+=7,!0):e.pos.y>90)),c--,c<=0&&(a.push({pos:vec(rnd()<.25?rnd(20):rnd(40,99),-3),speed:rnd(.3,.8)*difficulty}),c=rnd(60,70)/difficulty),remove(a,e=>(e.pos.y+=e.speed,color("red"),char("c",e.pos).isColliding.char.a?(play("hit"),l.height-=15,!0):e.pos.y>90))}const r=vec(),h=vec();function p(i){color("yellow"),r.set(i,10),char("e",r);for(let e=0;e<7;e++){const s=ticks*.05+e*PI*2/7,o=abs(sin(e+ticks*.05)*5)+10;r.set(i,10).addWithAngle(s,7),h.set(i,10).addWithAngle(s,o),line(r,h)}}export{u as characters,f as description,w as options,g as title,v as update};
