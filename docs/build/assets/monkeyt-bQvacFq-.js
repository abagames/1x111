const u="MONKEY T",x=`
[Hold] Compress
[Release] Launch
`,m=[`
l  ll
l l  l
l  ll
 lll l
lll  l
  `,`
  lll
   l
  l l
  l l l
 l l l
l l l 
  `,`
llll
 llll
  llll
 lll
ll  l
  `],f={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let i,e,n,o,t,d,a,s;function C(){ticks||(i=vec(50,90),e=vec(.3,0),n=0,o=0,t=0,c(),a=times(3,l=>({position:vec(rnd(10,90),rnd(10,70)),speed:.5+l*.1})),s=1),input.isJustPressed&&(t=o=0),input.isPressed&&(o=Math.min(o+1,30)),input.isJustReleased&&(t=o,o=0,n=0);const r=90+o*.25+t*.25;color("black"),line(25,r,75,r,2),e.y+=.1,i.add(e.x*difficulty,e.y),(i.x<25&&e.x<0||i.x>75&&e.x>0)&&(e.x=-e.x),color("red"),char("a",i,{mirror:{x:e.x>0?1:-1}}).isColliding.rect.black&&e.y>0&&(i.y=r-5,e.y=-e.y*.2-t*.13,t>1&&(play("jump"),t=0)),i.y>99&&(i.y=80),color("yellow"),remove(d,l=>{if(char("b",l.position).isColliding.char.a)return play("coin"),s+=n,n++,addScore(s,i),particle(l.position),!0}),d.length===0&&c(),color("black"),remove(a,l=>{l.position.x+=l.speed*(l.position.x<10&&l.speed>0||l.position.x>90&&l.speed<0?.5:1),(l.position.x<-10&&l.speed<0||l.position.x>110&&l.speed>0)&&(l.position.y=rnd(10,70),l.speed=-l.speed),char("c",l.position,{mirror:{x:l.speed>0?1:-1}}).isColliding.char.a&&(play("explosion"),end())}),text(`x${s}`,3,10)}function c(){d=times(5,()=>({position:vec(rnd(30,70),rnd(20,70))}))}export{m as characters,x as description,f as options,u as title,C as update};
