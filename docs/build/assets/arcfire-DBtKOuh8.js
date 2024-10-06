const g="ARCFIRE",v=`
[Hold] Set arc
[Release] Fire
`,m=[`
  ll
  l  l
 llll
l l  
  lll
 l 
`,`
  ll
l l
 llll
  l  l
llll
    l
`,"",`
 llll
  l  
 lllll
l l  
  lll
 l 
`,`
 llll
  l
lllll
  l  l
llll
    l
`],y={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let e,d,o,n,r,i,s,a,f,p,u,h;function b(){ticks||(e=vec(50,50),n=0,s=[],a=!1,d=0,o=0,f=[],p=rnd(PI*2),u=0),o>1&&(e.add(vec(o*.2).rotate(d)),o*=.2,e.isInRect(10,10,90,90)||(d+=PI),e.clamp(10,90,10,90)),n+=.07*difficulty,color("light_blue"),arc(50,50,7,4),color("light_black"),line(e,vec(9).rotate(n).add(e),2),color("black"),char(addWithCharCode("a",floor(ticks/30)%2),e,{mirror:{x:cos(d)<0?-1:1}});let c=0;if(a&&(i=n,c=300/sqrt((i-r)*30),color("green"),line(e,vec(c).rotate(r).add(e)),line(e,vec(c).rotate(i).add(e)),arc(e,c,3,r,i)),a&&i-r>PI&&(a=!1),a&&input.isJustReleased&&(a=!1,s.length===0&&(play("select"),s.push({pos:e,d:0,range:c,arcFrom:r,arcTo:i})),d=(i+r)/2,o=c/2),input.isJustPressed&&(play("laser"),r=n,a=!0,h=1),color("cyan"),s=s.filter(l=>(l.d+=2,arc(e,l.d,5,l.arcFrom,l.arcTo),l.d<l.range)),u-=difficulty,u<0){const l=vec(70).rotate(p).add(50,50),t=vec(rnd(10)).rotate(rnd(PI*2)).add(50,50).sub(l).div(500/rnd(1,difficulty));f.push({p:l,v:t}),u+=rnd(40,60),rnd()<.1?p=rnd(PI*2):p+=rnds(.05)}color("red"),f=f.filter(l=>{l.p.add(l.v);const t=char(addWithCharCode("d",floor(ticks/30)%2),l.p,{mirror:{x:cos(l.v.angle)<0?-1:1}}).isColliding;return t.rect.cyan?(play("powerUp"),particle(l.p),addScore(h,l.p),h++,!1):((t.char.a||t.char.b||t.rect.light_blue)&&(t.rect.light_blue?text("X",vec(l.p).sub(50,50).div(2).add(50,50)):text("X",e),play("explosion"),end()),!0)})}export{m as characters,v as description,y as options,g as title,b as update};
