const v="GRAVITY WELL",f=`
[Tap] Anti Gravity Pulse
`,x=[],h={theme:"dark",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:5};let o,d,i,p,c,u,r;function m(){if(ticks||(o={pos:vec(50,50),velocity:vec(0,0),radius:9},d=0,i=[],p=0,c=[],u=times(20,()=>({pos:vec(rnd(0,100),rnd(0,100)),vx:-rnd(.1,.2)})),r=vec()),r.x=-.5*sqrt(difficulty),d+=r.x,d<0&&(addScore(floor(o.radius),o.pos),d+=30),color("black"),u.forEach(e=>{e.pos.x+=e.vx,e.pos.x<0&&(e.pos.x+=100),box(e.pos,1)}),i.forEach(e=>{e.pos.add(r)}),p+=r.x,p<0){const e=rnd(5,9);i.push({pos:vec(100+e,rnd(10,90)),radius:e,strength:.1}),p+=rnd(30,40)}remove(i,e=>e.pos.x<-10),o.pos.add(o.velocity);let s=o.pos.x+10;o.velocity.x+=1/s/s,s=110-o.pos.x,o.velocity.x-=1/s/s,s=o.pos.y+10,o.velocity.y+=1/s/s,s=105-o.pos.y,o.velocity.y-=1/s/s,o.velocity.mul(.99),i.forEach(e=>{let t=vec(e.pos).sub(o.pos),l=t.length;if(l>0){let a=e.strength/l;o.velocity.add(vec(t).normalize().mul(a))}}),input.isJustPressed&&o.radius>2&&(play("laser"),o.radius-=1,c.push({pos:vec(o.pos),radius:0,strength:.5})),c.forEach(e=>{e.pos.set(o.pos),e.radius+=1,i.forEach(t=>{let l=vec(t.pos).sub(e.pos),a=l.length;if(a<e.radius+t.radius){let n=e.strength/sqrt(a);o.velocity.add(vec(l).normalize().mul(-n)),t.pos.add(vec(l).normalize().mul(n))}})}),remove(c,e=>e.radius>20),i.forEach(e=>{color("white"),box(e.pos,e.radius*2),color("purple"),arc(e.pos,e.radius)}),color("cyan"),c.forEach(e=>{arc(e.pos,e.radius)}),color("yellow"),arc(o.pos,o.radius).isColliding.rect.purple?(play("hit"),o.radius-=.2):o.radius=clamp(o.radius+.05,1,9),o.radius<1&&(play("explosion"),end()),(o.pos.x<0&&o.velocity.x<0||o.pos.x>100&&o.velocity.x>0)&&(o.velocity.x*=-1),(o.pos.y<0&&o.velocity.y<0||o.pos.y>100&&o.velocity.y>0)&&(o.velocity.y*=-1)}export{x as characters,f as description,h as options,v as title,m as update};
