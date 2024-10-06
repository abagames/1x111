const y="TWIN JUMPERS",d=`
[Tap] Jump
`,e=[`
 bb
 bb
bbbb
bbbb
b  b
b  b
`,`
 gggg
gggggg
gggggg
gg  gg
`],p={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:9};let s,c,i,t,n;function v(){ticks||(s=[{pos:vec(20,70),vx:1,vy:0,onPlatformTicks:0},{pos:vec(80,70),vx:1,vy:0,onPlatformTicks:0}],c=1,i=[{pos:vec(50,80),width:100}],t=.1,n=0,times(3,o=>{i.push({pos:vec(rnd(0,40),70-o*30),width:rnd(20,50)}),i.push({pos:vec(rnd(60,100),70-o*30),width:rnd(20,50)})})),t=.1*sqrt(difficulty);const a=Math.max(s[0].pos.y,s[1].pos.y);a<60&&(t+=(60-a)*.05),addScore(t),input.isJustPressed?(s.forEach((o,l)=>{o.onPlatformTicks>0&&(play("jump",{volume:.5}),o.vy=(l===0?-3:-2.5)*c)}),c*=.8):c=clamp(c+.01,0,1),s.forEach(o=>{o.pos.y+=o.vy,o.vy+=input.isPressed?.1:.2,o.pos.x+=o.vx*.6,o.onPlatformTicks--,(o.pos.x<3&&o.vx<0||o.pos.x>97&&o.vx>0)&&(o.vx=-o.vx),o.pos.y<0&&o.vy<0&&(o.pos.y=0,o.vy*=-.5)}),remove(i,o=>(o.pos.y+=t,o.pos.y>109)),n-=t,n<=0&&(i.push({pos:vec(rnd(0,50),-rnd(20)-5),width:rnd(30,50)}),i.push({pos:vec(rnd(50,100),-rnd(20)-5),width:rnd(30,50)}),n=rnd(20,30)),color("black"),char("a",s[0].pos),char("b",s[1].pos),color("yellow"),i.forEach(o=>{const l=box(o.pos,o.width,4).isColliding.char;l.a&&s[0].vy>0&&(s[0].vy>2&&play("click"),s[0].pos.y=o.pos.y-4,s[0].vy=0,s[0].onPlatformTicks=9),l.b&&s[1].vy>0&&(s[0].vy>2&&play("click"),s[1].pos.y=o.pos.y-3,s[1].vy=0,s[1].onPlatformTicks=9)}),s.some(o=>o.pos.y>102)&&(play("explosion"),end())}export{e as characters,d as description,p as options,y as title,v as update};
