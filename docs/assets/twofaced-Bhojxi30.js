const h="TWO FACED",x=`
[Tap]  Turn
[Hold] Go forward
`,u=[`
 RRRR
Rr rrR
R rrrR
RrrrrR
RrrrrR
 RRRR
`],b={viewSize:{x:200,y:100},isDrawingScoreFront:!0,isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:2};let e,t,n,r,i,l;function R(){ticks||(e={pos:vec(0,20),side:-1,angle:-PI/2,av:1,speed:1,baseSpeed:1},t=[],n=l=3,r=2,i={pos:vec(),side:-1,angle:0});const c=sqrt(difficulty),p=vec();if(input.isJustPressed&&(play("laser"),e.av*=-1,e.speed+=.1),input.isPressed?(play("hit"),e.speed+=.01):(e.speed+=(1-e.speed)*.1,e.angle+=e.av*.03*c*e.speed*e.baseSpeed),e.baseSpeed*=1.002,e.pos.addWithAngle(e.angle,c*.5*e.speed*e.baseSpeed),f(e),t.unshift({pos:vec(e.pos),side:e.side,angle:e.angle}),t.length>256&&t.pop(),i.pos.addWithAngle(i.angle,c*.2),f(i),color("black"),i.side===-1&&char("a",i.pos.x+150,i.pos.y+50),i.side===1&&char("a",i.pos.x+50,i.pos.y+50),color("green"),e.side===-1&&bar(e.pos.x+150,e.pos.y+50,3,4,e.angle),e.side===1&&bar(e.pos.x+50,e.pos.y+50,3,4,e.angle),color("light_yellow"),box(50,50,80),color("light_purple"),box(150,50,80),color("black"),i.side===-1&&char("a",i.pos.x+50,i.pos.y+50),i.side===1&&char("a",i.pos.x+150,i.pos.y+50),color("light_green"),r+=(2-r)*.03,times(n,s=>{const d=s*9;if(d>=t.length)return;color(s<r?"light_black":"light_green");const o=t[d];if(o.side===-1){const g=bar(o.pos.x+50,o.pos.y+50,4,3,o.angle).isColliding.char;i.side===-1&&g.a&&a(o.pos.x+50,o.pos.y+50)}if(o.side===1){const g=bar(o.pos.x+150,o.pos.y+50,4,3,o.angle).isColliding.char;i.side===1&&g.a&&a(o.pos.x+150,o.pos.y+50)}}),color("green"),e.side===-1){const s=bar(e.pos.x+50,e.pos.y+50,3,4,e.angle).isColliding;i.side===-1&&s.char.a&&a(e.pos.x+50,e.pos.y+50),s.rect.light_green&&(play("explosion"),end())}if(e.side===1){const s=bar(e.pos.x+150,e.pos.y+50,3,4,e.angle).isColliding;i.side===1&&s.char.a&&a(e.pos.x+150,e.pos.y+50),s.rect.light_green&&(play("explosion"),end())}const y=ceil(l);l-=.01,l<1&&(l=1),ceil(l)<y&&play("coin"),color("black"),text(`x${ceil(l)}`,3,9);function a(s,d){play("powerUp"),e.baseSpeed=1,addScore(ceil(l),s,d),n<25&&n++,l+=n,i.pos.set(rnds(35),rnds(35)),i.angle=rnds(PI),i.side=e.side*-1}function f(s){p.set().addWithAngle(s.angle,1),(s.pos.x<-40&&p.x<0||s.pos.x>40&&p.x>0)&&(s.side*=-1,p.x*=-1,s.hasOwnProperty("av")&&(s.av*=-1,r+=2)),(s.pos.y<-40&&p.y<0||s.pos.y>40&&p.y>0)&&(s.side*=-1,p.y*=-1,s.hasOwnProperty("av")&&(s.av*=-1,r+=2)),r>=n-1&&(r=n-1),s.angle=p.angle}}export{u as characters,x as description,b as options,h as title,R as update};
