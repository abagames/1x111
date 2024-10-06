const n="THUNDER",a=`
[Tap] Turn
`,f=[`
 l
lll
l l
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
  `],v={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:9};let t,o,c,i,r;function d(){if(ticks||(t=[],o=-1,c=[],i={x:40,vx:1},r=1),t.length===0){const l=vec(rnd(30,70),0);t.push({from:l,to:vec(l),vel:vec(.5*difficulty,0).rotate(PI/2),ticks:ceil(30/difficulty),prevLine:void 0,isActive:!1})}color("light_blue"),rect(0,90,100,10),o--,remove(t,l=>{if(l.isActive)return color("yellow"),line(l.from,l.to,4),o<0;if(l.ticks--,o>0)return l.ticks>0&&c.push({pos:vec(l.to),vel:vec(0,-l.to.y*.02)}),!0;if(l.ticks>0){if(l.to.add(l.vel),o<0&&(l.to.y>90||t.length>160)){play("explosion");let e=l;color("yellow");for(let s=0;s<99&&(particle(e.to,30,2),e.isActive=!0,e=e.prevLine,e!=null);s++);o=ceil(20/sqrt(difficulty)),r=1}}else if(l.ticks===0){play("hit"),color("black"),particle(l.to,9,1);for(let e=0;e<rndi(1,4);e++)t.push({from:vec(l.to),to:vec(l.to),vel:vec(l.vel).normalize().rotate(rnds(.7)).mul(rnd(.3,1)*sqrt(difficulty)),ticks:ceil(rnd(20,40)/difficulty),prevLine:l,isActive:!1})}color("light_black"),line(l.from,l.to,2)}),(input.isJustPressed||i.x<0&&i.vx<0||i.x>99&&i.vx>0)&&(play("laser"),i.vx*=-1),i.x+=i.vx*sqrt(difficulty),color("black"),char(addWithCharCode("b",floor(ticks/10)%2),i.x,87,{mirror:{x:i.vx>0?1:-1}}).isColliding.rect.yellow&&(play("lucky"),end()),color("yellow"),remove(c,l=>{if(l.vel.y+=.1*difficulty,l.pos.add(l.vel),l.pos.y>89&&l.vel.y>0&&(l.vel.y*=-.5,l.vel.y>-.1))return!0;const e=char("a",l.pos).isColliding.char;if(e.b||e.c)return play("coin"),addScore(r,l.pos),r++,!0})}export{f as characters,a as description,v as options,n as title,d as update};
