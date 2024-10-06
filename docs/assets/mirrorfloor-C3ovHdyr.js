const p="MIRROR FLOOR",n=`
[Tap]  Jump
[Hold] Speed up
`,h=[`
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
 llll
ll lll
ll lll
ll lll
ll lll
 llll
 `],u={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let d,t,c,l,s=1;const o=9;function m(){ticks||(d=[{pos:vec(10,50),width:80}],t=0,c=[vec(60,47)],l={y:10,my:0,vy:0,speed:1,side:1,state:"jump"},s=1);const r=difficulty*.5*l.speed;if(l.state==="run"&&input.isJustPressed&&(play("powerUp"),l.vy=-1.5*sqrt(difficulty)*l.side,l.state="jump"),l.state==="jump"&&(l.vy+=.07*difficulty*l.side,l.y+=l.vy),input.isPressed?l.speed+=(2-l.speed)*.05:l.speed+=(1-l.speed)*.2,(l.y<0&&l.side===-1||l.y>99&&l.side===1)&&(play("lucky"),end()),color("black"),char(addWithCharCode("a",floor(ticks/15)%2),o,l.y,{mirror:{y:l.side}}),t-=r,t<0){const e={pos:vec(100,rnd(10,90)),width:rnd(45,75)};d.push(e);let i=rnd(20,25);for(;i<e.width-20;)c.push(vec(100+i,e.pos.y-3)),i+=rnd(15,30);t+=e.width+rnd(10,20)}let a=!1;remove(d,e=>{e.pos.x-=r,color(l.side===1?"cyan":"light_cyan");const i=rect(e.pos,e.width,1).isColliding.char;color(l.side===-1?"cyan":"light_cyan");const y=rect(e.pos.x,e.pos.y+1,e.width,1).isColliding.char;return(i.a||i.b||y.a||y.b)&&l.vy*l.side>0&&(play("laser"),l.state="run",l.y=e.pos.y+(l.side===1?-3:5)),e.pos.x-3<o&&o<e.pos.x+e.width+3&&(l.my=e.pos.y-(l.y-e.pos.y)+2,color("light_black"),char(addWithCharCode("a",floor(ticks/15)%2),o,l.my,{mirror:{y:-l.side}}),a=!0),e.pos.x<-e.width}),a||(l.state="jump"),remove(c,e=>{e.x-=r,color(l.side===1?"yellow":"light_yellow");const i=char("c",e).isColliding.char;if(color(l.side===1?"light_yellow":"yellow"),char("c",e.x,e.y+8),i.a||i.b)return play("coin"),addScore(s,e),s++,l.side*=-1,l.vy*=-1,l.y=l.my,!0;if(e.x<-3)return s>1&&s--,!0})}export{h as characters,n as description,u as options,p as title,m as update};
