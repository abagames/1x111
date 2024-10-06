const g="LIFT UP",v=`
[Hold]
 Go up fast
`,b=[`
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
l   l
llll
lll
llll
l   l
`,`
  ll
   ll   
llllll
   ll   
  ll
`,`
 llll
l llll
llll l
llll l
ll   l
 llll
`],C={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let p,s,e,t,n,a,r,d,f,u,i,y,c;function I(){ticks||(p=times(19,l=>({pos:vec(50,l*6-3),width:60})),s=0,e=0,t={pos:vec(40,90),vx:1,ty:90},n=0,a=[],r=d=f=0,u=1,i=50,y=60,c=1),n+=((input.isPressed?1:0)-n)*.1;const h=difficulty*(1+n*3)*.2;if(p.forEach((l,o)=>{if(l.pos.y+=h,l.pos.y>110){l.pos.y-=p.length*6;const m=p[wrap(o-1,0,p.length)];i=l.pos.x=m.pos.x+s,y=l.width=m.width+e,s=clamp(s+rnds(1)*sqrt(difficulty),-5,5),e=clamp(e+rnds(1)*sqrt(difficulty),-3,3),s*=.95,e*=.95,(l.pos.x+l.width/2>95&&s>0||l.pos.x-l.width/2<5&&s<0)&&(s*=-.5),(l.width>80&&e>0||l.width<40&&e<0)&&(e*=-.5)}color("red"),char("c",l.pos.x-l.width/2,l.pos.y),char("c",l.pos.x+l.width/2,l.pos.y,{mirror:{x:-1}}),color("light_red"),rect(l.pos.x-l.width/2-2,l.pos.y-2,-70,5),rect(l.pos.x+l.width/2+2,l.pos.y-2,70,5)}),r-=h,r<0){if(d>0)a.push({pos:vec(f,-3),type:"bonus"}),r=6;else if(d<0&&rnd()<.5)d=rndi(2,6),f=i+rnds(y*.25),r=0;else{const l=i+rnd(.1,.4)*u*y;rnd()<.8&&(u*=-1),a.push({pos:vec(l,-3),type:"turn"}),r=rnd(10,20)}d--}input.isJustPressed&&play("select"),t.pos.x+=t.vx*.05*difficulty*(4-n*3),t.ty-=sqrt(difficulty)*.04,t.pos.y+=(t.ty-t.pos.y)*.2,color("black");const x=char(addWithCharCode("a",floor(ticks/15)%2),t.pos,{mirror:{x:t.vx<0?-1:1}}).isColliding;(x.rect.light_red||x.char.c)&&(play("explosion"),end()),remove(a,l=>{if(l.pos.y+=h,l.type==="turn"){color("cyan");const o=char("d",l.pos,{mirror:{x:t.vx>0?-1:1}}).isColliding;if((o.rect.light_red||o.char.c)&&(l.pos.x+=l.pos.x>i?-1:1),o.char.a||o.char.b)return play("laser"),t.vx*=-1,!0}else{color("yellow");const o=char("e",l.pos).isColliding;if((o.rect.light_red||o.char.c)&&(l.pos.x+=l.pos.x>i?-1:1),o.char.a||o.char.b)return play("coin"),addScore(c,l.pos),c=clamp(c+1,1,99),t.ty+=(99-t.ty)*.1,!0}if(l.pos.y>103)return l.type==="bonus"&&(c=clamp(c-1,1,99)),!0}),color("black"),rect(0,t.pos.y+3,100,6),t.pos.y<0&&(play("explosion"),end())}export{b as characters,v as description,C as options,g as title,I as update};
