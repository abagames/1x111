const n="CATAPULT",c=`
[Tap] Throw
`,P=[],f={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:6};let o,r,s,i,l;function u(){ticks||(o=[{pos:vec(200,60),width:20,isPassed:!0}],r=50,s={pos:vec(200,60),vel:vec(),bar:o[0],barPos:-10,grv:.1},i=1,l=0);const a=input.isPressed;let d=difficulty*.05;if(s.pos.x>30&&(d+=(s.pos.x-30)*.1),s.pos.x-=d,s.bar!=null){if(s.barPos+=(a?-1:1)*difficulty*.2,i>1&&(i-=.5),s.pos.set(vec(s.bar.pos).addWithAngle(a?-PI/4:-PI/4*3,4).addWithAngle(a?-(PI/4)*3:PI/4*3,s.barPos)),abs(s.barPos)>s.bar.width*.65)s.bar=void 0,s.vel.set();else if(s.barPos>0){color(s.barPos>s.bar.width*.45?"light_red":"light_black");let e=vec(s.bar.pos).addWithAngle(-PI/4,4).addWithAngle(-PI/4*3,s.barPos),t=vec().addWithAngle(-PI/4,sqrt(s.barPos)*sqrt(difficulty));e.add(t);for(let p=0;p<99&&(e.add(t),t.y+=s.grv,p%5===0&&box(e,3),!(e.y>99));p++);color("black"),input.isJustPressed&&(play("jump"),s.vel.set().addWithAngle(-PI/4,sqrt(s.barPos)*sqrt(difficulty)),s.pos.add(s.vel),s.bar=void 0,l=0)}}else s.pos.add(s.vel),s.vel.y+=s.grv,i+=s.vel.x*.1;if(input.isJustPressed&&play("laser"),box(s.pos,5),(s.pos.y>99||s.pos.x<0)&&(play("explosion"),end()),remove(o,e=>{if(e.pos.x-=d,bar(e.pos,e.width,3,a?PI/4:-PI/4).isColliding.rect.black&&s.bar==null){play("powerUp"),addScore(ceil(i),s.pos);const t=vec(e.pos).addWithAngle(a?-PI/4:-PI/4*3,4);s.bar=e,s.barPos=clamp(t.distanceTo(s.pos)*(s.pos.x>t.x?-1:1),-e.width*.4,e.width*.4),s.grv=.1*difficulty,e.isPassed=!0}return!e.isPassed&&e.pos.x+e.width*.5<s.pos.x&&(e.isPassed=!0,l++,i+=l*10),e.pos.x<-e.width/2}),r-=d,r<0){const e=rnd(20,30);o.push({pos:vec(200+e/2,rnd(50,90)),width:e,isPassed:!1}),r+=e/2+rnd(30,50)}text(`+${ceil(i)}`,3,9)}export{P as characters,c as description,f as options,n as title,u as update};
