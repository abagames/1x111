const y="PAKU PAKU",f=`
[Tap] Turn
`,p=[`
  llll
 lll
lll
lll
 lll
  llll
`,`
  lll
 lllll
lll
lll
 lllll
  lll
`,`
  ll
 llll
llllll
llllll
 llll
  ll
`,`
  lll
 l l l
 llll
 llll
llll
l l l
`,`
  lll
 l l l
 llll
 llll
 llll
 l l
`,`
ll
ll
`,`
 ll
llll
llll
 ll
`,`
  l l



`],u={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let e,l,n,i,t,r;function h(){ticks||(e={x:10,vx:1},l={x:100,eyeVx:0},r=0,d(),i=t=0),t+=difficulty,color("black"),text(`x${r}`,3,9),input.isJustPressed&&(e.vx*=-1),e.x+=e.vx*.5*difficulty,e.x<-3?e.x=103:e.x>103&&(e.x=-3),color("blue"),rect(0,48,100,1),rect(0,50,100,1),rect(0,58,100,1),rect(0,61,100,1),color("green");const c=floor(t/7)%4;char(addWithCharCode("a",c===3?1:c),e.x,55,{mirror:{x:e.vx}}),remove(n,x=>{color(x.isPower&&floor(t/7)%2===0?"transparent":"yellow");const s=char(x.isPower?"g":"f",x.x,55).isColliding.char;if(s.a||s.b||s.c)return x.isPower?(play("jump"),l.eyeVx===0&&(i=120)):play("hit"),addScore(r),!0});const o=l.eyeVx!==0?l.eyeVx:(e.x>l.x?1:-1)*(i>0?-1:1);l.x=clamp(l.x+o*(i>0?.25:l.eyeVx!==0?.75:.55)*difficulty,0,100),(l.eyeVx<0&&l.x<1||l.eyeVx>0&&l.x>99)&&(l.eyeVx=0),color(i>0?i<30&&i%10<5?"black":"blue":l.eyeVx!==0?"black":"red");const a=char(l.eyeVx!==0?"h":addWithCharCode("d",floor(t/7)%2),l.x,55,{mirror:{x:o}}).isColliding.char;l.eyeVx===0&&(a.a||a.b||a.c)&&(i>0?(play("powerUp"),addScore(10*r,l.x,55),l.eyeVx=e.x>50?-1:1,i=0,r++):(play("explosion"),end())),i-=difficulty,n.length===0&&(play("coin"),d())}function d(){let c=e.x>50?rndi(1,6):rndi(10,15);n=times(16,o=>({x:o*6+5,isPower:o===c})),r++}export{p as characters,f as description,u as options,y as title,h as update};
