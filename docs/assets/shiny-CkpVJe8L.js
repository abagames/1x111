const z="SHINY",b=`
[Hold] Rainy
`,m=[`
  ll
  l
lllll
  l
 l lll
l
`,`
   ll
   l
lllll
  l
ll ll
     l
`,`
  lll
 l l l
  lll
   l
llll
    l
`,`
 lll
l l l
 lll
  l
 l lll
l   
`,`
l l l
l l l
 lll
  l
 l l
l   l 
`,`
  ll
 llll
llllll
llllll
 llll
  ll
`],P={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let o,c,t,g,a,p,n;const x=89,d=20;function h(){ticks||(o=[],c=[],t=times(22,l=>({pos:vec((l-1)*10+5,95),size:8})),g=times(30,l=>{const s=vec((l+1)/31*199+rnds(3),rnd(5,15)),i=vec(s.x<99?-20:220,s.y);return{pos:vec(i),rainyPos:s,shinyPos:i,radius:rnd(5,10),weakDropTicks:rnd(99),strongDropTicks:rnd(100,900)}}),a=0,n=0,p=0),o.length===0&&(n<9&&n++,o=times(n,()=>({pos:vec(-4,x),speed:rnd(.1,.15)*difficulty,ticks:rndi(999),isRunning:!1,isFalling:!1})),t[d].size=8);const r=input.isPressed;input.isJustPressed&&(play("hit"),p=rnds(.5)*sqrt(difficulty),t[d].size-=.1),input.isJustReleased&&play("hit"),a+=!r&&a>0?-1:r&&a<10?1:0;const e=a/10;color("yellow");const f=vec(100,10),u=vec();if(char("f",f),e<1)for(let l=0;l<7;l++){const s=ticks*.05+l*PI*2/7,i=abs(sin(l+ticks*.05)*5*(1-e))+10;f.set(100,10).addWithAngle(s,7),u.set(100,10).addWithAngle(s,i),line(f,u)}color("light_black"),g.forEach(l=>{l.pos.set(l.rainyPos.x*e+l.shinyPos.x*(1-e),l.rainyPos.y*e+l.shinyPos.y*(1-e)),l.pos.y>-9&&l.pos.y<209&&box(l.pos,l.radius*2,l.radius*2),l.weakDropTicks--,l.weakDropTicks<0&&(r&&y(l.pos.x,l.pos.y+l.radius,"weak"),l.weakDropTicks=rnd(100,200)),l.strongDropTicks--,l.strongDropTicks<0&&(r&&y(l.pos.x,l.pos.y+l.radius,"strong"),l.strongDropTicks=rnd(500,999)/difficulty)}),t.forEach((l,s)=>{s===d?(color("black"),l.size>=1&&(box(l.pos.x,l.pos.y-(4-l.size/2),8,l.size),l.size-=.005*difficulty)):l.size<8?(color("light_black"),box(l.pos,l.size,l.size),l.size+=.12*difficulty):(color("black"),box(l.pos,8,8))}),color("red"),o=o.filter(l=>{let s=l.isRunning?2+floor(l.ticks/15)%2:0+floor(l.ticks/30)%2;l.isFalling?s=4:l.pos.x+=l.speed*(l.isRunning?5:1);let i=addWithCharCode("a",s);if(char(i,l.pos).isColliding.rect.black)l.pos.y=x,l.isFalling=!1;else if(l.isFalling=!0,l.pos.y+=difficulty,l.pos.y>103)return n--,n<=0?(play("lucky"),end()):play("explosion"),!1;l.ticks++;const v=floor(30/difficulty);if(l.ticks%v===0&&(l.isRunning=r),l.pos.x>203){play("powerUp");const k=floor(t[20].size*o.length);return k>0&&addScore(k,190,80),!1}return!0}),c=c.filter(l=>{if(l.pos.add(l.vel),l.type==="strong"){color("blue");const s=line(l.pos,vec(l.vel).normalize().mul(4).add(l.pos),3).isColliding.char;if(s.a||s.b||s.c||s.d)return!1}else color("light_blue"),line(l.pos,vec(l.vel).normalize().mul(3).add(l.pos),2);if(l.pos.y>90){if(l.type==="strong"){const s=floor(l.pos.x/10)+1;s>=2&&s<20&&(play("select"),t[s].size=0)}return!1}return!0});function y(l,s,i){c.push({pos:vec(l,s),vel:vec((rnds(.2)+p)*difficulty,difficulty),type:i})}}export{m as characters,b as description,P as options,z as title,h as update};
