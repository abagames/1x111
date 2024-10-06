const d="UP SHOT",u=`
[Hold] Stop & Shoot
[Release] Run
`,f=[`
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
    `],y={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let r,t,a,e,o,c,i;function x(){ticks||(r=[],t=0,a=[],e={pos:vec(10,87),vx:difficulty*1.2,shotTicks:0},o=[],c=50,i=1);let s=difficulty*.1;if(e.pos.x>30&&(s+=(e.pos.x-30)*.05),c=wrap(c-s,0,99),color("light_black"),rect(0,90,100,10),color("white"),rect(c,90,1,10),e.shotTicks--,input.isPressed?(input.isJustPressed&&(i=1,e.vx=0),e.shotTicks<0&&(play("laser"),o.push({pos:vec(e.pos),vy:-2*difficulty}),e.shotTicks=10/difficulty)):input.isJustReleased&&(play("select"),e.vx=difficulty*1.2),e.pos.x+=e.vx-s,color("black"),remove(o,l=>(l.pos.x-=s,l.pos.y+=l.vy,box(l.pos,5,9),l.pos.y<0)),t-=s,t<0){const l=rnd(5,15);let p=rnd(10,50)/difficulty;const n=rnd(5,10)/sqrt(l)*sqrt(difficulty);p/=sqrt(n)/sqrt(l),r.push({x:200,size:l,speed:n,interval:p,intervalVariation:rnd(.3,.9),ticks:rnd(p)}),t+=rnd(50,60)}remove(r,l=>(l.x-=s,l.ticks--,l.ticks<0&&(a.push({pos:vec(l.x,-l.size/2),vy:0,size:l.size,speed:l.speed}),l.ticks=l.interval*(1+rnds(l.intervalVariation))),l.x<0)),color("red"),remove(a,l=>{if(l.vy+=l.speed*.01,l.pos.x-=s,l.pos.y+=l.vy,box(l.pos,l.size).isColliding.rect.black){if(l.size*=.7,color("black"),particle(l.pos,5,3,PI/2,.5),color("red"),l.size<5)return play("powerUp"),addScore(i*10,l.pos.x,clamp(l.pos.y,20,99)),particle(l.pos,19,3),!0;play("hit"),addScore(i,l.pos.x,clamp(l.pos.y,20,99)),i++}if(l.pos.y>90-l.size/2)return particle(l.pos,l.size*.3,sqrt(l.size)*.3),!0}),color("black"),(char(input.isPressed?"b":addWithCharCode("a",floor(ticks/20)%2),e.pos).isColliding.rect.red||e.pos.x<-2)&&(play("explosion"),end()),color("transparent"),remove(o,l=>box(l.pos,5,9).isColliding.rect.red)}export{f as characters,u as description,y as options,d as title,x as update};
