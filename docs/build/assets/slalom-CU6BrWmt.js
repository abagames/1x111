const h="SLALOM",b=`
[Hold] Turn
`,k=[],x={theme:"pixel",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let s,u,a,i,t,c,l,n,d,p,f;function m(){if(ticks||(s=[],u=1,a=0,i=0,t=vec(90,90),l=-PI/4*3,c=vec(1).rotate(l),n=99,d=void 0,p=[],f=0),f-=i,f<0){const e=rnd()<.5?rndi(-5,5):rndi(95,105);p.push({p:vec(e,-9),s:vec(rndi(9,19),rndi(5,9)*2)}),f+=10}color("purple"),p=p.filter(e=>(e.p.y+=i,box(e.p,e.s),e.p.y<109)),a-=i,a<0&&(play("select"),s.push({y:-5,side:u,length:rndi(40,60)}),u*=-1,a+=rndi(80,90)),color("red");let r;if(s=s.filter(e=>(e.y+=i,box(e.side===1?99-e.length/2:e.length/2,e.y,e.length,4),r==null&&e.y<t.y+9&&(r=e),e.y<105)),r!==d){d=r;const e=floor(100/(sqrt(n)+1))-15;e>0&&(play("coin"),addScore(e,t)),n=99}color("black"),input.isPressed&&(l+=(d||{side:0}).side*.07*difficulty,particle(t,1,c.length,l+PI,.2)),c.mul(1-.02/difficulty).add(vec(.03).rotate(l)),ticks<60&&c.mul(ticks/60),t.add(c),i=0,t.y<88&&(i+=(88-t.y)*.5),t.y+=i,bar(vec(t).add(vec(2,2).rotate(l)),1,2,l),bar(vec(t).add(vec(-2,2).rotate(l)),1,2,l),bar(vec(t).add(vec(2,-2).rotate(l)),1,2,l),bar(vec(t).add(vec(-2,-2).rotate(l)),1,2,l),color("blue");const y=bar(t,4,3,l).isColliding.rect;(y.red||y.purple||!t.isInRect(0,0,99,99))&&(play("explosion"),end());const o=d||{y:0,length:0,side:1},v=vec(o.side===1?99-o.length:o.length,o.y).distanceTo(t);v<n&&(n=v)}export{k as characters,b as description,x as options,h as title,m as update};