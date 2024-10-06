const g="UP 1 WAY",R=`
[Tap] Go up
`,Y=[`
llllll
ll l l
ll l l
llllll
 l  l
 l  l
    `,`
llllll
ll l l
ll l l
llllll
ll  ll
    `,`
  yy
  YY
 yyyy
 YYYY
yyyyyy
YYYYYY
    `,`
  rr
  rr
  rr
  rr
  rr
  rr
  `,`
  rr
 rRRr
 r  r
 rRRr
 rRRr
  rr
  `,`
  rr
 rRRr
r RR r
rRRRRr
 rRRr
  rr
  `,`
  rr
 rRRr
 r  r
 rRRr
 rRRr
  rr
  `,`
yyyy
y  y
yyyy
y Y YY
y Y YY
y Y YY
`],m={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,isDrawingScoreFront:!0,audioSeed:5};let t,c,a,y,d,e,h,u;const X=s=>16+s*15;function x(){if(!ticks){t=times(6,o=>({y:X(o),holeXs:o===5?[]:[rnd(99,180)],nextHoleDist:o===5?999999999:rnd(99),bambooXs:[],nextBamBooDist:0,skullXs:[],powXs:[]})),c=0,a=rndi(t.length-1),y=rnd(49,99),d=999;const l=5;e={pos:vec(20,X(l)),floorIndex:l,targetFi:void 0},h=0,u=!0}if(h+=difficulty,e.targetFi!=null){const l=X(e.targetFi),o=l>e.pos.y?1:-1;e.pos.y+=o*difficulty*3,(e.pos.y-l)*o>0&&(e.pos.y=l,e.floorIndex=e.targetFi,e.targetFi=void 0)}e.targetFi==null&&(input.isJustPressed&&e.floorIndex>0?(play("jump"),e.targetFi=e.floorIndex-1):b(e.floorIndex,e.pos.x)&&(play("click"),e.targetFi=e.floorIndex+1)),char(addWithCharCode("a",floor(h/20)%2),e.pos.x,e.pos.y-5);const s=difficulty;if(c-=s,c<0&&(t[a].nextHoleDist<9?a=rndi(t.length):(t[a].bambooXs.push(209),u?(u=!1,c=150):rnd()<.3?c=6:(c=rnd(200,300),a=rndi(t.length)))),y-=s,y<0){const l=rndi(t.length);t[l].nextHoleDist>9&&c>9&&t[l].skullXs.push(209),y+=rnd(30,50)}if(d-=s,d<0){const l=rndi(t.length);t[l].powXs.push(209),d=999}color("light_blue"),rect(0,97,200,3),t.forEach(l=>{l.nextHoleDist-=s,l.nextHoleDist<0&&(l.holeXs.push(200),l.nextHoleDist=rnd(32,99));let o=0;l.holeXs.forEach((r,i)=>{r>o&&(color("green"),rect(o,l.y-2,r-o,2),color("light_black"),rect(o,l.y,r-o,3)),o=r+9,l.holeXs[i]-=s}),o<200&&(color("green"),rect(o,l.y-2,200-o,2),color("light_black"),rect(o,l.y,200-o,3)),color("black"),remove(l.holeXs,r=>r<-9),l.bambooXs.forEach((r,i)=>{const n=char("c",r,l.y-5).isColliding.char;(n.a||n.b)&&(play("coin"),addScore(1,r,l.y-5),l.bambooXs[i]=-9),l.bambooXs[i]-=s}),remove(l.bambooXs,r=>r<-3),l.powXs.forEach((r,i)=>{const n=char("h",r,l.y-5).isColliding.char;(n.a||n.b)&&(play("powerUp"),t.forEach(p=>{p.skullXs.forEach(f=>{p.bambooXs.push(f)}),p.skullXs=[]}),l.powXs[i]=-9),l.powXs[i]-=s}),remove(l.powXs,r=>r<-3),l.skullXs.forEach((r,i)=>{const n=char(addWithCharCode("d",floor(h/15)%4),r,l.y-5).isColliding.char;(n.c||n.h)&&(l.skullXs[i]=-9),(n.a||n.b)&&(play("explosion"),end()),l.skullXs[i]-=s}),remove(l.skullXs,r=>r<-3)})}function b(s,l){let o=!1;return t[s].holeXs.forEach(r=>{l>r+3&&l<r+6&&(o=!0)}),o}export{Y as characters,R as description,m as options,g as title,x as update};
