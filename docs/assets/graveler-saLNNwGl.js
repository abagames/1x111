const h="GRAVELER",v=`
[Hold]
 Reverse gravity
`,w=[`
l
 lll
ll  ll
 ll
`],b={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let d,t,l,o;const x=10;let f,a,r,p,i,y,u,n;function g(){ticks||(d=times(11,e=>({pos:vec(e*10,50),width:60})),t={y:50,vy:0,w:60,wy:0},l=10,o=0,r=0,f=55,a=0,p=times(5,e=>({pos:vec(e*7+15,55),type:"coin"})),i=10,y=0,n=1);const c=difficulty*.5;if(d.forEach(e=>{color("blue"),rect(e.pos.x,0,11,e.pos.y-e.width/2),rect(e.pos.x,e.pos.y+e.width/2,11,101-e.pos.y-e.width/2),color(input.isPressed?"purple":"cyan");for(let s=e.pos.y-e.width/2+r;s<e.pos.y;s+=10)rect(e.pos.x,s,10,1);for(let s=e.pos.y+e.width/2-r;s>e.pos.y;s-=10)rect(e.pos.x,s,10,1);if(x>=e.pos.x&&x<e.pos.x+10){let s=f<e.pos.y?-1:1;input.isPressed&&(s*=-1.5),a+=sqrt(difficulty)*s*.015}e.pos.x-=c}),r=wrap(r+difficulty*(input.isPressed?.25:-.16),0,10),l-=c,l<=0){const e=d[o];o=wrap(o+1,0,11),t.vy+=rnds(.2),t.y+=t.vy,t.wy+=rnds(.2),t.w+=t.wy,t.y-t.w/2<20&&t.vy<0&&(t.vy+=1),t.y+t.w/2>80&&t.vy>0&&(t.vy-=1),t.w<32&&t.wy<0&&(t.wy+=1),t.w>60&&t.wy>0&&(t.wy-=1),e.pos.set(100+l,t.y),e.width=t.w,l+=10}if(color("black"),f+=a,a*=.99,char("a",x,f).isColliding.rect.blue&&(play("explosion"),end()),input.isJustPressed?play("laser"):input.isJustReleased&&play("hit"),p=p.filter(e=>{if(e.type==="coin"){color("yellow");const s=text("o",e.pos).isColliding;if(s.char.a)return play("powerUp"),addScore(n,e.pos),n++,!1;if(s.rect.blue)return u+=u<50?10:-10,!1}else color("red"),text("x",e.pos).isColliding.char.a&&(play("explosion"),end());return e.pos.x-=c,e.pos.x<-3?(e.type==="coin"&&n>1&&n--,!1):!0}),i-=c,i<0){const e=d[wrap(o-1,0,11)];y===0?(p.push({pos:vec(103,rnd(e.pos.y-10,e.pos.y+10)),type:"spike"}),y=rndi(3,7),i=rnd(40,60)*sqrt(difficulty),u=rnd()<.5?rnd(e.pos.y-e.width*.36,e.pos.y-e.width*.2):rnd(e.pos.y+e.width*.36,e.pos.y+e.width*.2)):(p.push({pos:vec(103,u),type:"coin"}),y--,y===0?i=rnd(40,60)*sqrt(difficulty):i=7)}}export{w as characters,v as description,b as options,h as title,g as update};
