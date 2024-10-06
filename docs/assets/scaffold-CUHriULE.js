const h="SCAFFOLD",g=`
[Tap] Change angle
[Hold] Scaffold 
`,v=[`
    ll
   lll
  ll
 ll
ll
l
`,`




llllll
llllll
`,`
l
ll
 ll
  ll
   lll
    ll
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
  `],C={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:10};let f,t,s,c,n,i,p,a,r,y;function b(){ticks||(f=times(9,l=>({pos:vec(l*6+3,52),type:1})),t=vec(9*6+3,52),s=0,c=1,n=0,i=vec(-9,0),p=[],a=0,r=vec(5,50),y=1);let o=difficulty*.05;if(t.x>40&&(o+=(t.x-40)*.1),i.x-=o,color("red"),i.x<-6){let l=47;for(let e=0;e<9;e++){const u=47+rndi(-9,9)*4;if(abs(u-t.y)<25){l=u;break}}i.set(6-t.x%6+120,l),p.push({pos:vec(i.x+4,i.y+4),vy:.1,d:2,distance:4,type:"gold"}),color("purple"),rect(100,0,40,100),color("red"),a+=30}rect(i.x+3,0,2,i.y-12),rect(i.x+3,i.y+18,2,82-i.y),rect(0,-7,100,9),rect(0,98,100,9),input.isJustReleased&&(play("laser"),(s===0&&c===-1||s===2&&c===1)&&(c*=-1),s+=c),input.isPressed?(n++,n>15/sqrt(difficulty)&&(play("select"),f.push({pos:vec(t.x,t.y+(s===2?4:0)),type:s}),t.add(6,s*4-4),n=0)):n=0,color("black"),remove(f,l=>(l.pos.x-=o,char(addWithCharCode("a",l.type),l.pos),l.pos.x<-3)),color("cyan"),t.x-=o,char(addWithCharCode("a",s),t.x,t.y+(s===2?4:0));let x=0;r.x<20&&(x+=(20-r.x)*.2),r.x+=x-o,char(addWithCharCode("d",floor(ticks/15)%2),r).isColliding.rect.red&&(play("explosion"),end()),color("transparent");let d;for(let l=0;l<9;l++){const e=box(r.x+4,r.y,1,6).isColliding.char;if(e.a)d=0,r.y--;else if(e.b)d=1,r.y--;else if(e.c)d=2,r.y--;else{if(d!=null)break;r.y++}}if(d===0&&(r.y+=4),a-=o,a<0){const l=p.length<2||rnd()<.5?"gold":"spike",e=rnd(20,60)/(l==="gold"?4:1.5);rnds(20)*(l==="gold"?1:1.5),p.push({pos:vec(120,clamp(t.y+rnds(20),10,90)),d:e/2,distance:e,vy:rnds(1,sqrt(difficulty))*.3,type:l}),a=rnd(15,25)}remove(p,l=>{l.pos.x-=o,l.pos.y+=l.vy,l.d-=abs(l.vy),l.d<0&&(l.d=l.distance,l.vy*=-1),color(l.type==="gold"?"yellow":"red");const e=text(l.type==="gold"?"$":"x",l.pos).isColliding;if(l.distance>4&&e.rect.purple)return!0;if(e.char.d||e.char.e){if(l.type==="gold")return play("coin"),addScore(y,l.pos),y++,!0;play("explosion"),end()}if(l.pos.x<-3)return l.type==="gold"&&y>1&&(play("hit"),y--),!0})}export{v as characters,g as description,C as options,h as title,b as update};
