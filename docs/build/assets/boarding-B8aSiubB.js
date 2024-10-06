const P="BOARDING",g=`
[Hold] Boarding
`,x=[`
 lll
l l ll
 llll
 l  l
ll  ll
  `,`
 lll
l l ll
 llll
  ll
 l  l
 l  l
  `,`
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
    ll
   ll
  ll
 ll
ll
`,`
l
ll
 ll
  ll
   ll
    ll
`,`
  l
 l
lllll
 l
  l
`,`
  l
   l
lllll
   l
  l
`],I={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:8};let d,n,s,c,f,a,e,t,u,v;function b(){if(!ticks){for(d=[],n=[],s=50,c=-1,f=0,a=-1,e=50,u=0,v=.1;e<91;)h(),e+=2;e=t=91}color("black"),d=d.filter(l=>(l.pos.y-=v*difficulty,char(addWithCharCode("e",l.angle),l.pos),l.pos.y>15&&l.pos.y<e)),t-=v*difficulty,t<11&&(t=11),e+=(t-e)*.1,color("red"),rect(0,e,50,8),color("blue"),rect(50,e,50,8),color("white"),char("a",5,e+4),char("g",12,e+4),text("GATE1",20,e+4),char("c",95,e+4),char("h",88,e+4),text("GATE2",55,e+4),u<0&&(h(),u+=4),color(c<0?"red":"blue"),char(addWithCharCode("a",c+1+floor(ticks/30)%2),s,9),e<=12&&(play("explosion"),end()),f--;let i=1;if(input.isPressed){if(f<0){const l={pos:vec(s,9),vel:vec(),type:c,prevPos:vec(),bc:0};l.prevPos.set(l.pos),n.push(l),f=9}i=.1}s+=a*difficulty*i,(s<10&&a<0||s>90&&a>0)&&(a*=-1),input.isJustReleased&&(c*=-1),n=n.filter(l=>{l.vel.y+=.2,l.vel.mul(.9),l.prevPos.set(l.pos),l.pos.add(l.vel),color(l.type<0?"red":"blue");const y=char(addWithCharCode("a",l.type+1+floor(ticks/30)%2),l.pos).isColliding.char;if(y.e||y.f){const r=wrap(l.pos.angleTo(l.prevPos),-PI,PI);let o;y.e?o=r<-PI/4||r>PI/4*3?-PI/4*3:PI/4:o=r<-PI/4*3||r>PI/4?PI/4*3:-PI/4;const p=vec(l.vel.length*2).rotate(o);l.vel.add(p),l.pos.add(l.vel),l.pos.add(l.vel),l.bc++}if(l.pos.y<0&&l.vel.y<0&&(l.vel.y*=-.5),(l.pos.x<0&&l.vel.x<0||l.pos.x>99&&l.vel.x>0)&&(l.vel.x*=-1),l.pos.y>e)if((l.pos.x-50)*l.type>0){if(l.bc>0){play("powerUp"),addScore(l.bc,l.pos);const o=l.bc*2*difficulty;t+=o,u-=o,t>91&&(t=91)}else addScore(0,l.pos);return!1}else{play("hit"),addScore(-1-l.bc,l.pos);let o=sqrt(1+l.bc)*difficulty;return o>20&&(o=20),t-=o,!1}return!0})}function h(){const i=vec(rnd(9,90),e-3);d.some(l=>l.pos.distanceTo(i)<16)||d.push({pos:i,angle:rndi(2)})}export{x as characters,g as description,I as options,P as title,b as update};
