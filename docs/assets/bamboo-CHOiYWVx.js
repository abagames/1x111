const n="BAMBOO",f=`
[Tap]  Turn
[Hold] Slip behind
`,g=[`
  ll
  l  l
lpppp
  prrr
 r
r
`,`
   ll
   l  
lpppp
 rp  l
r  r
    r
`],u={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let d,o,p,r,l,a,s;function y(){ticks||(d=[],o=0,p=190,r=1,l=0,a=0,s=5),color("black"),input.isJustPressed&&(play("select"),r*=-1),p=wrap(p+r*difficulty*(1+l),-3,203),l*=.9,a+=difficulty,char(input.isPressed?"b":addWithCharCode("a",floor(a/20)%2),p,87,{mirror:{x:r}}),o--,o<0&&(s--,d.push({x:rnd(5,195),height:0,speed:s<0?2:1}),o=rnd(70,100)/difficulty,s=rndi(4,7)),remove(d,e=>{e.height+=e.speed*difficulty*.14;let t=e.height/4,c=90-t/2;t<1&&(c+=(1-t)*3,t=1);let h={};if(times(4,i=>{color(e.height<5?"light_yellow":e.height>50?"green":e.height>25?i%2===0?"green":"light_green":e.height>23||i%2===0?"yellow":"light_yellow"),h={...h,...box(e.x,c,(4-i)*2,ceil(t)).isColliding.char},c-=t}),(h.a||h.b)&&!input.isPressed&&!(e.height<5)){if(e.height<=25){let i=ceil((e.height-5)/3);return i===7?(i=10,play("powerUp")):play("coin"),addScore(i*i,e.x,90-e.height),!0}else if(play("hit"),e.speed*=.6,e.height*=.7,l++,l>5&&(l=5),r*=-1,particle(e.x,87,9,difficulty*(1+l)*.5,r>0?0:PI,.4),e.height<=25)return play("explosion"),!0}e.height>50&&(e.speed*=.997),e.height>=89&&(color("red"),text("X",e.x,3),play("lucky"),end())}),color("purple"),rect(0,90,200,10)}export{g as characters,f as description,u as options,n as title,y as update};
