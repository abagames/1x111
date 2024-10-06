const u="METEO PLANET",f=`
[Tap] Move
`,P=[`
llllll
ll l l
ll l l
llllll
 l  l
 l  l
  `,`
llllll
ll l l
ll l l
llllll
ll  ll
  `,`
 lll
l l l
l lll
ll ll
 lll
`],b={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let r,a,o,t,i,d,g;function I(){ticks||(r=[{dist:53,angle:rndi(4)*PI/2,type:0}],a=0,o=rndi(1,4),t=0,i=0,d=0,g=times(24,l=>({dist:rnd(10,70),angle:rnd(PI*2)})));const n=sqrt(difficulty);color("light_black");const p=vec();if(g.forEach(l=>{p.set(50,50).addWithAngle(l.angle-t,l.dist),box(p,1)}),color("black"),input.isJustPressed&&(play("select"),i+=PI/2),t<i&&(t+=.3*n,t>i&&(t=i,t>PI*2.2&&(t=i=PI/2)),d+=n),char(addWithCharCode("a",floor(d/3)%2),50,42),arc(50,50,3,2,-t+PI*.2,-t+PI*2.2),a--,a<0){const l=rndi(6);let e=70,y=o*(PI/2);times(11,h=>{let c=abs(h-5);c<=l&&r.push({dist:e,angle:y,type:c===0?0:l-c+1}),e+=6}),a=rnd(30,50)/sqrt(n),o+=rndi(1,4)}const s=vec();remove(r,l=>{if(l.dist-=.5*n,s.set(50,50).addWithAngle(l.angle-t,l.dist),l.type===0){color("black");const e=char("c",s).isColliding.char;(e.a||e.b)&&(play("explosion"),end())}else{color("yellow");const e=box(s,l.type).isColliding.char;if(e.a||e.b)return play("powerUp"),addScore(l.type,s),!0}if(l.dist<5)return l.type===0&&(play("hit"),particle(s)),!0})}export{P as characters,f as description,b as options,u as title,I as update};
