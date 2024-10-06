const C="CATCHING WHEEL",b=`
[Hold] Rotate wheel
`,g=[`
lllll
 lll
 lll
`,`
  ll
l l  l
 llll 
  l
 l l
l   l
`],A={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,isDrawingParticleFront:!0,audioSeed:8};let e,a,n,p,r,c;const d=40,f=99,k=3,v=.02;function x(){ticks||(e={center:vec(50,90),radius:40,angle:0,spokeCount:6,rotationSpeed:.05,isAlive:times(6,()=>!0)},a=[],n=d,p=[],r=f,c=1),r-=difficulty,r<=0&&(p.push({pos:vec(rnd(20,80),0),vel:vec(0,0)}),r=f*rnd(.8,1)),color("red"),remove(p,l=>(l.vel.y+=v,l.pos.y+=l.vel.y*difficulty,text("*",l.pos),l.pos.y>95)),color("blue"),arc(e.center,e.radius),input.isPressed&&(e.angle+=e.rotationSpeed*difficulty);for(let l=0;l<e.spokeCount;l++){const s=e.angle+l*2*PI/e.spokeCount,t=vec(e.center).addWithAngle(s,e.radius);if(color("black"),line(e.center,t),e.isAlive[l]){const o=vec(t);color("yellow"),char("a",o,{scale:{x:k,y:k}}).isColliding.text["*"]&&y(l)}}n-=sqrt(difficulty),n<=0&&(a.push({pos:vec(rnd(10,90),0),vel:vec(0,0)}),n=d*rnd(.7,1)),color("yellow"),remove(a,l=>{l.vel.y+=v,l.pos.add(l.vel);const s=char("b",l.pos);if(s.isColliding.text["*"])return!0;for(let t=0;t<e.spokeCount;t++)if(s.isColliding.char.a){play("coin"),addScore(c,l.pos),c++;let o=rndi(e.spokeCount);for(let u=0;u<e.spokeCount;u++){if(!e.isAlive[o]){e.isAlive[o]=!0;break}o=(o+1)%e.spokeCount}return!0}if(l.pos.y>100){let t=rndi(e.spokeCount);for(let o=0;o<e.spokeCount;o++){if(e.isAlive[t]){y(t);break}t=(t+1)%e.spokeCount}return play("explosion"),!0}});let i=!1;for(let l=0;l<e.spokeCount;l++)if(e.isAlive[l]){i=!0;break}i||end()}function y(i){play("explosion"),e.isAlive[i]=!1,color("red");const l=e.angle+i*2*PI/e.spokeCount,s=vec(e.center).addWithAngle(l,e.radius);particle(s.x,clamp(s.y,0,95),{count:20,speed:2}),c=1}export{g as characters,b as description,A as options,C as title,x as update};
