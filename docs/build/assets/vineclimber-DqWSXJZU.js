const p="VINE CLIMBER",a=`
[Hold] Climb
[Release] Slide
`,u=[`
  ll
l ll l
 llll
  ll
 l  l
l    l 
`,`
  ll
  ll 
 llll
l ll l
 l  l
 l  l 
`,`
 lll
  l
 lll
l lll
 lll  
  `,`
 llll
l llll  
l llll  
l llll  
l llll  
 llll 
  `],f={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let l,t,d,s,i,n;function y(){ticks||(l={centerX:50,ticks:0,amplitude:30,frequency:.03,bending:.5,targetAmplitude:30,targetFrequency:.03,targetBending:.5},t={pos:vec(50,80),speed:1},d=[],s=0,i=void 0,n=1);let c=1;input.isPressed?(t.pos.y-=t.speed*.8*difficulty,c=floor(ticks/20)%2,ticks%20===0&&play("click")):(input.isJustReleased&&play("hit"),t.pos.y+=t.speed*1.2*difficulty),t.pos.y=clamp(t.pos.y,0,99),t.pos.x=l.centerX+Math.pow(Math.sin((l.ticks+t.pos.y*l.bending)*l.frequency/2),2)*l.amplitude*2-l.amplitude,l.ticks++,l.amplitude+=(l.targetAmplitude-l.amplitude)*.01,l.frequency+=(l.targetFrequency-l.frequency)*.01,l.bending+=(l.targetBending-l.bending)*.01,rnd()<.005&&(l.targetAmplitude=rnd(25,40),l.targetFrequency=rnd(.025,.04),l.targetBending=rnd(.45,.6)),color("green");for(let e=0;e<=100;e+=5){const o=l.centerX+Math.pow(Math.sin((l.ticks+e*l.bending)*l.frequency/2),2)*l.amplitude*2-l.amplitude;box(o,e,2,5)}if(l.ticks*l.frequency>=PI*2&&(l.ticks=0),color("red"),remove(d,e=>(e.speed+=.01*sqrt(difficulty),e.pos.y+=e.speed,char("c",e.pos),e.pos.y>105)),s--,s<0&&(d.push({pos:vec(rnd(10,90),0),speed:rnd(.5)*difficulty}),s=rnd(70,90)/difficulty),color("blue"),char(addWithCharCode("a",c),t.pos).isColliding.char.c&&(play("explosion"),end()),i==null){const e=rnds(.18,.25)*difficulty;i={pos:vec(e>0?-10:110,rnd(10,90)),vx:e}}color("yellow"),i.pos.x+=i.vx;const r=char("d",i.pos).isColliding.char;r.a||r.b?(play("coin"),addScore(n,i.pos),n=clamp(n+1,1,9),i=void 0):(i.pos.x<-10||i.pos.x>110)&&(n=1,i=void 0)}export{u as characters,a as description,f as options,p as title,y as update};
