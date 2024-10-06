const x="FISH GRILL",h=`
[Hold] Burn up
`,f=[`
  l
l lll
llll l
llllll
l lll
  l
`],w={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let e,i,c,d;const a=.1,y=-1,p=100,u=50,g=80,m=10,v=20;function F(){ticks||(e={pos:vec(20,50),velocity:vec(0,-3),energy:p,baseEnergy:p},i=[{pos:vec(100,50),width:15,isBurned:!1}],c=[],d=vec(-1,0)),e.velocity.y+=a,e.pos.add(e.velocity),e.baseEnergy+=.1,e.energy+=(e.baseEnergy-e.energy)*.01;const r=1+e.energy/p*2;if(input.isPressed&&(e.velocity.y=y,c.push({pos:vec(e.pos.x,e.pos.y+r),timeLeft:10})),input.isJustPressed&&play("select"),color("purple"),arc(e.pos,r),remove(c,s=>{s.timeLeft--,color("red");for(let t=0;t<3;t++){const n=s.pos.x+rnd(-2,2),l=s.pos.y+rnd(0,5),o=rnd(1,3);line(n-o/2,l+o/2,n,l-o/2),line(n,l-o/2,n+o/2,l+o/2),line(n+o/2,l+o/2,n-o/2,l+o/2)}return s.timeLeft<=0}),remove(i,s=>{s.pos.add(d),color(s.isBurned?"black":"cyan");const t=char("a",s.pos,{scale:{x:s.width/6},mirror:{x:-1}});return t.isColliding.rect.red&&(e.energy+=5,s.isBurned?addScore(floor(e.energy/100)):(play("powerUp"),addScore(floor(e.energy/10),s.pos),s.isBurned=!0)),t.isColliding.rect.purple&&(play("explosion"),end()),s.pos.x+s.width<0}),i[i.length-1].pos.x<100){play("click");const t=i[i.length-1].pos.x+rnd(u,g),n=rnd(10,90),l=rnd(m,v);i.push({pos:vec(t,n),width:l,isBurned:!1})}(e.pos.y<-r||e.pos.y>100+r)&&(play("explosion"),end())}export{f as characters,h as description,w as options,x as title,F as update};
