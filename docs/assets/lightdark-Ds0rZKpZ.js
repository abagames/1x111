const x="LIGHT DARK",k=`
[Tap] Jump
[Hold] Fly
`,b=[`
    ll
   l
  l
  ll
 l  l
l    l
`,`
  ll
  l
  l
  ll
  ll
 l  l
`,`
  ll
  ll
 llll
 llll
llllll
llllll
`],m={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let c,a,s,t,o,n,i,d,p;function j(){if(!ticks){c=[];for(let l=0;l<10;l++)c.push({x:l<5?25+l*9:99+l*9,type:"coin",side:l<5?"light":"dark"});a=[200,300],s=["coin","spike"],t=vec(9,0),i="light",o=vec(2),n="ground",d=1,p=0}const h=o.x*difficulty;color("light_black"),rect(0,50,200,50),n==="ground"?input.isJustPressed&&(i=i==="light"?"dark":"light",play(i==="light"?"jump":"laser"),o.y=3*sqrt(difficulty),t.y=7,n="jump",p=0):(input.isJustPressed&&(play("hit"),i=i==="light"?"dark":"light"),o.y-=(input.isPressed?.1:.5)*difficulty,t.y+=o.y,t.y<0&&(t.y=0,n="ground"));const f=i==="light"?47-t.y:53+t.y;color(i==="light"?"black":"white");const g=n==="jump"?"b":addWithCharCode("a",floor(ticks*difficulty/10)%2);char(g,t.x,f,i==="light"?{}:{mirror:{y:-1}}).isColliding,c=c.filter(l=>{const r=l.side==="light"?46:54;color(l.side==="light"?"black":"white");let e;if(l.type==="spike"?e=char("c",l.x,r,l.side==="light"?{}:{mirror:{y:-1}}).isColliding:e=text("o",l.x,r,l.side==="light"?{}:{mirror:{y:-1}}).isColliding,e.char.a||e.char.b)if(l.type==="spike")play("explosion"),end();else return play(l.side==="light"?"coin":"select"),addScore(d,l.x+p*7,r),d++,p++,!1;return l.x-=h,l.x<-3?(l.type==="coin"&&d>1&&d--,!1):!0});for(let l=0;l<2;l++){a[l]-=h;const r=l===0?"light":"dark",e=s[l]==="coin"?9:6,u=s[l]==="coin"?rndi(4,8):rndi(5,15);if(a[l]<0){for(let y=0;y<u;y++)c.push({x:200+y*e,type:s[l],side:r});a[l]=u*e+rnd(40,120),s[l]=s[l]==="coin"?"spike":"coin"}}}export{b as characters,k as description,m as options,x as title,j as update};
