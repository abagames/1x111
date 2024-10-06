const p="LASER FORTRESS",o=`
[Hold] Laser irradiation
`,y=[`
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
ll l l
 llll
 l  l
ll  ll
`,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`,`
  l
  l
ll ll
  l
  l
`,`
 l
l  l
lllll
l  l
 l
`],f={theme:"pixel",viewSize:{x:160,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let s,i,t,r,a,n,e,d;function u(){ticks||(s=[],i=0,t=5,a=-1,r="enemy",n=40,e=void 0,d=1),color("blue"),rect(0,50,200,10),color("light_cyan"),rect(0,7,14,22),char("f",17,8),input.isJustPressed&&(play("select"),e=n,d=1,color("blue"),particle(20,8,9,3,0,PI/8)),e!=null&&input.isPressed&&(play("laser"),color("blue"),line(e,50,20,8,2),e+=difficulty*2,particle(e,50,1,2,-PI/2,PI/6),color("purple"),box(e-2,50,5,1)),i--,i<0&&(s.push({x:163,vx:difficulty*(t===a?2:1),ticks:rndi(99),type:r}),t--,t<0?(t=9-floor(sqrt(rnd(50))),i=rnd(20,30)/difficulty,r==="ally"?r="enemy":rnd()<.3&&(r="ally"),a=rnd()<.5?-1:rndi(2)):i=rnd(5,8)/difficulty);let c=200;remove(s,l=>{if(l.x-=l.vx,l.type==="enemy"&&l.x<c&&(c=l.x),l.ticks++,color(l.type==="ally"?"blue":"red"),char(addWithCharCode(l.type==="ally"?"a":"c",floor(l.ticks/12)%2),l.x,47,{mirror:{x:-1}}).isColliding.rect.purple)return l.type==="ally"?(play("explosion"),end()):(play("hit"),particle(l.x,47),addScore(d,l.x,47),d++),!0;if(l.x<0)return l.type==="enemy"&&(play("explosion"),color("red"),text("X",3,47),end()),!0}),c<200&&(n+=(c-difficulty*3-5-n)*.3),color("black"),char("e",n,47)}export{y as characters,o as description,f as options,p as title,u as update};
