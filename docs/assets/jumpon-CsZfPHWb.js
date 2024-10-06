const d="JUMP ON",y=`
[Tap] Jump on
`,x=[`
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
llllll
l ll l
l ll l
llllll
 l  l
 l  l
  `,`
  lll
ll l l
 llll
  ll
 l  l
 l  l
`,`
  lll
ll l l
 llll
 l  l
ll  ll
`,`
 llll
l ll l
 llll
  ll
 l  l
 l  l
`,`


  ll
 l ll
 llll
  ll
`,`


llllll


`,`


ll  ll
  ll

`,`


l    l
 l  l
  ll
`,`

  ll
ll  ll


`,`
  ll
 l  l
l    l


`],h={isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:3};let n,e,c,i,a,r,o,u,f;function m(){ticks||(n=[],e=0,c=0,i=0,a=[{x:30,animTicks:99},{x:60,animTicks:99}],r=0,o={pos:vec(5,87),hole:void 0,state:"walk"},u=[],f=1),color("light_yellow"),rect(0,90,100,10),times(5,l=>{rect(0,90-(l+1)*12,100,3)}),color("light_purple"),rect(0,10,100,10);let t=difficulty*.03;if(o.pos.x>15&&(t+=(o.pos.x-15)*.1),r-=t,r<0&&(a.push({x:104,animTicks:99}),r+=rnd(30,45)),remove(a,l=>{l.x-=t,color("white"),box(l.x,60,8,80),color("black"),l.animTicks+=difficulty;const s=l.animTicks<21?[1,2,1,0,3,4,3][floor(l.animTicks/3)]:0;return char(addWithCharCode("h",s),l.x,90),l.x<-4}),c--,c<0&&(i=0,e=rndi(1,1+round(sqrt(difficulty)*2)),c=(e*8+rnd(100,110))/difficulty),i--,i<0&&(n.push({pos:vec(103,87-rndi(6)*12),hole:void 0,state:"walk",nextDotsDist:rnd(6)}),e--,e===0?i=9999:i=rnd(8,10)/difficulty),color("red"),remove(n,l=>{if(l.state==="walk")l.pos.x+=-difficulty-t,a.forEach(s=>{const p=l.pos.x-s.x;p<8&&p>0&&(play("laser"),l.state="jumpTo",l.hole=s)}),char("e",l.pos,{mirror:{x:-1}});else if(l.state==="jumpTo"){l.pos.x+=-difficulty-t;const s=l.pos.x-l.hole.x;l.pos.y+=s<4?1:-1,s<=0&&(l.state="down"),char("d",l.pos,{mirror:{x:-1}})}else if(l.state==="down")l.pos.x=l.hole.x,l.pos.y+=difficulty,l.pos.y>90&&(play("hit"),l.state="up",l.hole.animTicks=0),char("f",l.pos);else if(l.state==="up"){l.pos.x=l.hole.x,l.pos.y-=difficulty,l.pos.y<23&&(l.state="down");const s=l.pos.y-o.pos.y;s<1&&s>-9&&(l.state="jumpFrom",l.pos.y=ceil((l.pos.y-90)/12)*12+87),char("f",l.pos)}else if(l.state==="jumpFrom"){l.pos.x+=-difficulty-t;const s=l.hole.x-l.pos.x;l.pos.y+=s<4?-1:1,s>=8&&(play("laser"),l.state="walk",l.pos.y=round((l.pos.y-90)/12)*12+87,f=1),char("d",l.pos,{mirror:{x:-1}})}return l.state==="walk"&&(l.nextDotsDist-=difficulty,l.nextDotsDist<0&&(u.push({pos:vec(l.pos)}),l.nextDotsDist+=6)),l.pos.x<-3}),color("black"),o.state==="walk")o.pos.x+=difficulty-t,a.forEach(s=>{const p=s.x-o.pos.x;p<8&&p>0&&(play("jump"),o.state="jumpTo",o.hole=s)}),char(addWithCharCode("a",floor(ticks/10)%2),o.pos).isColliding.char.e&&(play("explosion"),end());else if(o.state==="jumpTo"){o.pos.x+=difficulty-t;const l=o.hole.x-o.pos.x;o.pos.y+=l<4?1:-1,l<=0&&(o.state="down"),char("a",o.pos)}else if(o.state==="down")o.pos.x=o.hole.x,o.pos.y+=difficulty,o.pos.y>90&&(play("powerUp"),o.state="up",o.hole.animTicks=0),char("c",o.pos);else if(o.state==="up")o.pos.x=o.hole.x,o.pos.y-=difficulty,o.pos.y<23&&(o.state="down"),input.isPressed&&(play("jump"),o.state="jumpFrom",o.pos.y=ceil((o.pos.y-90)/12)*12+87),char("c",o.pos);else if(o.state==="jumpFrom"){o.pos.x+=difficulty-t;const l=o.pos.x-o.hole.x;o.pos.y+=l<4?-1:1,l>=8&&(o.state="walk",o.pos.y=round((o.pos.y-90)/12)*12+87),char("a",o.pos)}o.pos.x<0&&(play("explosion"),end()),color("yellow"),remove(u,l=>{l.pos.x-=t;const s=char("g",l.pos).isColliding.char;return s.a||s.b?(play("coin"),addScore(f,l.pos),f++,!0):l.pos.x<-3})}export{x as characters,y as description,h as options,d as title,m as update};
