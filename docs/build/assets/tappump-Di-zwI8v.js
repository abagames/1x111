const p="TAPPUMP",u=`
[Tap]  Jump
[Hold] Pump
`,f=[`
r r r
 r r
rrRrr
 r r
r r r
`,`
 yyyy
y yyYy
y yyYy
y yyYy
y yyYy
 yyyy
`],v={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let r,o,c,y,t,i,l;function x(){ticks||(r={pos:vec(10,50),vel:vec(0,-2),radius:1,rv:0},o=[],y=[],t=50,i=0,c=40,l=0);const s=r.pos.x>20?(r.pos.x-20)*.2:0;c-=s,c<0&&(play("laser"),o.push(vec(103,rnd(99))),c+=rnd(40,140)),color("black"),remove(o,e=>(e.x-=s,char("a",e),e.x<-2)),color("green"),r.vel.x=difficulty,input.isJustPressed&&(play("select"),r.vel.y-=sqrt(difficulty)*2),r.vel.y-=sqrt(difficulty)*(input.isPressed?.03:-.12),input.isPressed?(r.rv+=difficulty*.08,r.radius+=r.rv):(r.radius+=(1-r.radius)*.04*difficulty,r.rv=0),ticks<60&&r.vel.mul(ticks/60),r.pos.add(r.vel),r.pos.x-=s,(arc(r.pos,r.radius,5).isColliding.char.a||r.pos.y<-5-r.radius||r.pos.y>105+r.radius)&&(play("explosion"),end()),color("black"),l-=s,i+=rnds(.1),i*=.98,t+=i,(t<10&&i<0||t>90&&i>0)&&(i*=-1),l<0&&(y.push(vec(103,t+rnds(9))),l+=rnd(6,9)),remove(y,e=>{e.x-=s;const n=char("b",e).isColliding;if(n.rect.green){const a=ceil(r.radius);return play(a<20?"coin":"powerUp"),addScore(a,e),!0}return n.char.a||e.x<-3})}export{f as characters,u as description,v as options,p as title,x as update};
