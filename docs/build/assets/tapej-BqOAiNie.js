const y="TAPE J",x=`
[Hold]    Pull
[Release] Release
`,u=[],a={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:4};let f,c,r,e,p,n,i,l;const s=90;function m(){if(ticks||(f=[],c=0,r=[],e={from:vec(100,s-1),to:vec(100,s-1),type:"ground",rect:void 0},p=[],n=100/difficulty,i=0,l=0),input.isJustPressed&&play("select"),input.isPressed){const o=difficulty;switch(l+=o,e.type){case"ground":e.to.x+=o;break;case"up":e.to.y-=o,e.to.y<s-e.rect.size.y&&(e.to.y=s-e.rect.size.y,r.push({from:vec(e.from),to:vec(e.to)}),e.type="top",play("coin"),e.from.set(e.to));break;case"top":e.to.x+=o,e.to.x>e.rect.x+e.rect.size.x+1&&(e.to.x=e.rect.x+e.rect.size.x+1,r.push({from:vec(e.from),to:vec(e.to)}),e.type="down",play("coin"),e.from.set(e.to));break;case"down":e.to.y+=o,e.to.y>s-1&&(e.to.y=s-1,r.push({from:vec(e.from),to:vec(e.to)}),e.type="ground",play("coin"),e.from.set(e.to),e.to.x+=3,e.rect=void 0);break}}else if(l>0&&(play("powerUp"),addScore(floor(sqrt(l)*l*.1+1),e.to),l=0),r.length>0){const o=r[0];o.from.x+=(o.to.x-o.from.x)*.2*sqrt(difficulty),o.from.y+=(o.to.y-o.from.y)*.2*sqrt(difficulty),o.from.distanceTo(o.to)<3&&r.splice(0,1)}else e.from.x+=(e.to.x-e.from.x)*.2*sqrt(difficulty),e.from.y+=(e.to.y-e.from.y)*.2*sqrt(difficulty);e.from.x-=i,e.from.x<0&&(e.from.x=0),e.to.x<0&&(play("explosion"),end()),e.to.x-=i,color("black"),remove(r,o=>(o.from.x-=i,o.from.x<0&&(o.from.x=0),o.to.x-=i,line(o.from,o.to),o.to.x<0)),line(e.from,e.to,3),color("light_yellow");let d=r.length>0?r[0].from:e.from;if(box(d.x-1,d.y-1,5,5),color("purple"),box(e.to,3,3),i=difficulty*.1,e.to.x>50&&(i+=(e.to.x-50)*.1),c-=i,c<0){const o=rnd(20,40);f.push({x:200,size:vec(o,rnd(10,50))}),c=o+rnd(20,70)}if(color("light_black"),rect(0,s,200,100-s),remove(f,o=>{if(rect(o.x,90,o.size.x,-o.size.y).isColliding.rect.purple&&e.type==="ground"){const t=vec(o.x-1,s-1);r.push({from:vec(e.from),to:t}),e.from.set(t),e.to.set(t),e.type="up",play("coin"),e.rect=o}return o.x-=i,o.x<-o.size.x}),n--,n<0){play("laser");const o=rnd(5,15),t={pos:vec(rnd(150,220),-o),vel:vec(-rnd(.5,1),rnd(.8,1.2)),size:o};t.vel.mul(difficulty),p.push(t),n=rnd(40,60)/difficulty}color("red"),remove(p,o=>{o.pos.add(o.vel),o.pos.x-=i;const t=box(o.pos,o.size,o.size).isColliding.rect;if(particle(o.pos.x+rnds(o.size/2),o.pos.y+rnds(o.size/2),rnd()*o.size/2,-o.vel.length,o.vel.angle,.3),(t.black||t.purple||t.light_yellow)&&(play("explosion"),end()),t.light_black||o.pos.y>s)return play("hit"),particle(o.pos,o.size*5),!0})}export{u as characters,x as description,a as options,y as title,m as update};