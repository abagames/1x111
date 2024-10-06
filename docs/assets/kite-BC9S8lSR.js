const x="KITE",k=`
[Hold] Blow wind
`,Y=[`
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
     l
lllll

llll
   
llllll
`,`
 yyyy
yY YYy
yY YYy
yY YYy
yY YYy
 yyyy
`],A={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let e,o,v,r,h,c,d,u,f,y;const a=50;function b(){ticks||(e={pos:vec(40,50),vel:vec()},o={pos:vec(20,87),vel:vec(),ticks:0},d=0,v=[],r=0,h=[],c=0,u=[],f=times(2,l=>({yAngle:l*PI/2,hAngle:l*PI})),y=0);const i=sqrt(difficulty),t=e.pos.x>60?(e.pos.x-60)*.1:0;if(y-=t,y<0&&(addScore(1),f.forEach((l,s)=>{const g=sin(l.yAngle)*9+sin(l.hAngle)*20-10;l.yAngle+=rnd(i)*.2,l.hAngle+=rnd(i)*.4,g>0&&u.push({pos:vec(205,s===0?0:90),height:g*(s===0?1:-1)})}),y+=10),color("red"),remove(u,l=>(l.pos.x-=t,line(l.pos.x-5,l.pos.y,l.pos.x,l.pos.y+l.height),line(l.pos.x+5,l.pos.y,l.pos.x,l.pos.y+l.height),l.pos.x<-5)),input.isJustPressed&&play("select"),input.isPressed&&e.vel.add(difficulty*.2,-difficulty*.2),e.vel.y+=difficulty*.01,e.vel.mul(.95),e.pos.add(e.vel),e.pos.x-=t,e.pos.y<0?(e.pos.y=0,e.vel.y=0):e.pos.y>87&&(e.pos.y=87,e.vel.y=0),color("blue"),box(e.pos,6).isColliding.rect.red){const l=e.pos.y<50?1:-1;play("hit"),color("transparent");let s=0;for(;box(e.pos,6).isColliding.rect.red&&s<9;)e.pos.y+=3*l,s++;e.vel.y=sqrt(s)*l*2*i}color("light_black");let p=vec(e.pos.x-3,e.pos.y+3);line(p,vec(p).add(-e.vel.x*3,e.vel.y+9),2),p=vec(e.pos.x+3,e.pos.y+3),line(p,vec(p).add(-e.vel.x*3,e.vel.y+9),2),line(e.pos,o.pos,2),o.pos.add(o.vel),o.pos.x-=t,o.pos.y<87?(o.vel.y+=i*sqrt(99-o.pos.y)*.01,o.vel.x*=.95,o.ticks=0):(o.vel.y=0,o.pos.y=87,o.vel.x*=.9,o.ticks++),color("black"),char(addWithCharCode("a",floor(o.ticks/15)%2),o.pos).isColliding.rect.red&&(play("explosion"),end());const n=o.pos.distanceTo(e.pos);if(n>a){const l=o.pos.angleTo(e.pos);o.vel.addWithAngle(l,(n-a)*.05),e.vel.addWithAngle(l+PI,(n-a)*.01),e.pos.addWithAngle(l+PI,n-a)}for(r-=input.isPressed?3:1;r<0;)v.push({pos:vec(-3,rnd(0,87)),vel:vec(rnd(1,2)*i*(input.isPressed?2:1),0)}),r+=30/i;color("light_cyan"),remove(v,l=>(l.pos.add(l.vel),char("c",l.pos).isColliding.rect.blue?(play("hit"),e.vel.add(l.vel),!0):l.pos.x>203)),c-=t,c<0&&(h.push({pos:vec(203,rnd(30,80)),vel:vec(rnd(1,i)*-.5,0)}),c+=rnd(199,299)),color("black"),remove(h,l=>{l.pos.add(l.vel),l.pos.x-=t;const s=char("d",l.pos).isColliding;return s.rect.red?!0:s.char.a||s.char.b?(play("coin"),addScore(clamp(ceil(o.vel.x*5),1,99)*50,l.pos),!0):(s.char.c&&l.pos.x++,l.pos.distanceTo(o.pos)<24&&(l.vel.addWithAngle(l.pos.angleTo(o.pos),i),l.vel.mul(.9)),!l.pos.isInRect(-3,-3,210,93))}),d=wrap(d-t,-9,209),color("light_black"),rect(0,90,200,10),color("white"),rect(d,90,2,10)}export{Y as characters,k as description,A as options,x as title,b as update};
