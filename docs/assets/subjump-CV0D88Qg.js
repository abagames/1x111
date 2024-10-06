const v="SUB JUMP",h=`
[Hold] Go up & 
       Speed up
`,m=[`
   ll
   l
  lll
l l l
llllll
l lll
`,`
   ll
   l
  lll
  l l
llllll
  lll
`,`
 llll
ll lll
ll lll
ll lll
ll lll
 llll
`],P={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let r,n,c,s,l,f,d,p;function g(){ticks||(r=times(12,e=>vec(e*10-10,rnd(75,85))),n="sea",c=50,s=0,l={pos:vec(5,55),vel:vec(0,-1)},f=[],d=0,p=1);const o=sqrt(difficulty);let t=0;l.pos.x>10&&(t+=(l.pos.x-10)*.2),c-=t;let y=r[r.length-1];r.forEach((e,a)=>{e.x-=t;const i=r[wrap(a-1,0,12)];e.x<-10&&(c<0&&(n=n==="land"?"sea":"land",c=rnd(200,300)/(n==="land"?7/sqrt(difficulty):1)),e.x+=120,s+=rnds(o)*2,s*=.95,n==="sea"?(i.y<55?s+=5:i.y<65?s+=3:(i.y<65&&s<0||i.y>90&&s>0)&&(s*=-.5),e.y=i.y+s,c<60&&(s+=4)):(i.y>50?s-=5:(i.y<40&&s<0||i.y>45&&s>0)&&(s*=-.5),e.y=i.y+s/3),e.y=clamp(e.y,35,95)+rnds(5)),i.x<e.x?(color(i.y<50||e.y<50?"green":"purple"),line(i,e,2)):y=i}),color("blue"),rect(0,50,100,2),input.isJustPressed&&play("select"),input.isPressed?l.pos.y>50?(l.vel.y-=o*.06,l.vel.x+=(1*o-l.vel.x)*.1):(l.vel.y+=o*.01,l.vel.x+=(1*o-l.vel.x)*.1):l.pos.y>50?(l.vel.y+=o*.03,l.vel.x+=(.5*o-l.vel.x)*.1):(l.vel.y+=o*.05,l.vel.x+=(.5*o-l.vel.x)*.1);let u=l.pos.y;l.vel.mul(l.pos.y>50?.95:.99),l.pos.add(l.vel),l.pos.x-=t,color("blue"),u>50&&l.pos.y<50&&(play("jump"),particle(l.pos.x,50,9,1,-PI/2,PI)),u<50&&l.pos.y>50&&(play("hit"),particle(l.pos.x,50,9,.5,-PI/2,PI)),color("black");const x=char(l.pos.y<50?"a":addWithCharCode("a",floor(ticks/7)%2),l.pos).isColliding.rect;(x.purple||x.green)&&(play("explosion"),end()),l.pos.y>55&&(color("blue"),particle(l.pos.x-3,l.pos.y+1,.3,1,PI,.1)),d-=t,d<0&&(f.push(vec(y.x,y.y-(y.y<50?rnd(5,10):rnd(10,20)))),d=rnd(10,40)),color("yellow"),remove(f,e=>{e.x-=t;const a=char("c",e).isColliding.char;if(a.a||a.b)return play("coin"),addScore(p,e),p++,!0;if(e.x<-3)return p>1&&p--,!0})}export{m as characters,h as description,P as options,v as title,g as update};
