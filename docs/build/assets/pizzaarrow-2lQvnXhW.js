const m="PIZZA ARROW",v=`
[Hold] Pull
[Release] Release
`,P=[`
 r   r
rrllll
 r   r
`],A={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let e,o,l,s,h,i,c,d;function W(){ticks||(e=void 0,l=void 0,s=h=floor(1+(difficulty-1)*2),i=16,c=1,d=1),i--,i>=0&&(i<=15?(i===15&&(e={from:PI/4,to:PI/4*7,angle:rnd(PI/2),angleVel:.2,y:0}),e.y=50-i*5,d=1):e.y=(30-i)*5+50),color("yellow");const r=vec(30,e.y),f=e.from+e.angle,g=e.to+e.angle;arc(r,20,4,f,g);const p=vec(r),u=vec(r);if(line(p.addWithAngle(f,5),u.addWithAngle(f,20),4),p.set(r),u.set(r),line(p.addWithAngle(g,5),u.addWithAngle(g,20),4),color("red"),arc(30,e.y,5,4,f,g-PI*2),e.angle+=e.angleVel*c,i<0&&l==null&&input.isPressed&&(play("select"),l={x:80,vx:1},s--),i<0&&(color("black"),times(s,n=>{char("a",95,40-n*3)}),text(`x${d}`,3,10)),l!=null){input.isPressed&&(c+=(.05-c)*.1),(input.isJustReleased||l.x>90)&&(play("laser"),l.vx=-5),l.vx<0&&(c+=(1-c)*.2),l.x>70&&(color("light_black"),line(80,30,l.x+4,51,2),line(80,70,l.x+4,51,2)),l.x+=l.vx*c,color("black");const n=char("a",l.x,50).isColliding.rect;if(n.yellow){play("hit");const t=wrap(-e.angle,0,PI*2);if(t>e.from&&t<e.to){let a;t-e.from>e.to-t?(a=e.to-t,o={from:t,to:e.to,angle:e.angle,pos:vec(30,50)},e.to=t):(a=t-e.from,o={from:e.from,to:t,angle:e.angle,pos:vec(30,50)},e.from=t),play("coin"),addScore(ceil(a*100*d),40,50),d++}l=void 0,s===0&&(play("powerUp"),h++,s=h,i=30)}else n.red&&(play("explosion"),l=void 0,end())}if(o!=null){o.pos.add(-5,3),color("light_yellow");const n=vec(o.pos),t=o.from+o.angle,a=o.to+o.angle;arc(n,20,4,t,a);const x=vec(n),y=vec(n);line(x.addWithAngle(t,5),y.addWithAngle(t,20),4),x.set(n),y.set(n),line(x.addWithAngle(a,5),y.addWithAngle(a,20),4),o.pos.x<-20&&(o=void 0)}}export{P as characters,v as description,A as options,m as title,W as update};