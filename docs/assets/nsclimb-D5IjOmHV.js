const y="NS CLIMB",d=`
[Tap] Reverse
`,r=[],a={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let n,x,o,l,p;function f(){ticks||(n=times(22,t=>({pos:vec(t%2===0?20:80,t/2*10-5),type:t<10?"S":"",wallIndex:t%2})),x=[{type:"",prevType:"S",count:rndi(2,4),x:20,vx:0},{type:"",prevType:"S",count:rndi(2,4),x:80,vx:0}],o=vec(50,90),l=vec(0,-1),p="N"),input.isJustPressed&&(p=p==="N"?"S":"N",play(p==="N"?"laser":"select")),o.add(l),l.x*=.98,l.y+=.001*difficulty;let s=0;o.y<70&&(s=(70-o.y)*.1),o.y>99&&(play("explosion"),end()),o.y+=s,addScore(s),color(p==="N"?"red":"blue"),box(o,7,7),color("white"),text(p,o.x-1,o.y-1),n.forEach(t=>{if(t.pos.y+=s,t.type!==""){const e=o.distanceTo(t.pos),c=o.angleTo(t.pos);l.addWithAngle(c,difficulty/e/e*(t.type===p?-1:1))}color(t.type===""?"light_black":t.type==="N"?"red":"blue");const i=box(t.pos,9,9).isColliding.rect;if((i.blue||i.red)&&(play("hit"),o.x=t.pos.x+(t.wallIndex===0?10:-10),(t.wallIndex===0&&l.x<0||t.wallIndex===1&&l.x>0)&&(l.x*=-.7)),color("white"),text(t.type,t.pos.x-1,t.pos.y-1),t.pos.y>105){t.pos.y-=110;const e=x[t.wallIndex];e.x+=e.vx,t.pos.x=e.x,e.vx+=rnds(.1),t.wallIndex===0?(e.x<10&&e.vx<0||e.x>40&&e.vx>0)&&(e.vx*=-.5):(e.x<60&&e.vx<0||e.x>90&&e.vx>0)&&(e.vx*=-.5),e.count--,e.count<0&&(e.type===""?(e.type=e.prevType==="N"?"S":"N",e.prevType=e.type,e.count=rndi(3,9)):(e.type="",e.count=rndi(2,4))),t.type=e.type}})}export{r as characters,d as description,a as options,y as title,f as update};
