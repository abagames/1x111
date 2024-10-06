const h="SNAKY",x=`
[Hold] Up
`,y=[`
 llll
ll lll
l llll
llllll
llllll
 llll
`],N={theme:"crt",isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let l,r,o,a,i,s;function m(){ticks||(l=[{angle:0,va:0,prevNode:void 0,nextNode:void 0}],u(),r=[],o=0,a=2,i=50,s=4,times(s,p),o=0),input.isJustPressed&&play("select");const c=(50+l.length*3)/l.length,d=PI/(sqrt(l.length-1)+3);let f=vec(0,50),g=0;l.forEach((e,t)=>{if(t===0){const n=e.angle;e.angle=clamp(e.angle+(input.isPressed?-1:1)*.03*sqrt(difficulty),-d,d),e.va=e.angle-n}else e.angle+=e.va,(e.angle>e.prevNode.angle+d&&e.va>0||e.angle<e.prevNode.angle-d&&e.va<0)&&(e.va*=-.2);e.va*=.95,e.nextNode!=null&&(e.nextNode.va+=e.va*.07*sqrt(sqrt(difficulty))),e.prevNode!=null&&(e.prevNode.va+=e.va*.01*sqrt(sqrt(difficulty))),g+=e.angle,color(t===l.length-1?"red":"black"),bar(f,c,3,e.angle,0),f.addWithAngle(e.angle,c)}),o--,o<0&&p(),remove(r,e=>{e.vx*=1+.005*sqrt(difficulty),e.pos.x+=e.vx,color(e.isRed?"red":"black");const t=char("a",e.pos).isColliding.rect;let n=0;if(t.red?e.isRed?(play("powerUp"),n=l.length*l.length,u()):(play("coin"),n=l.length):t.black&&(e.isRed?(play("hit"),n=-l.length,v()):(play("laser"),n=1)),n!==0)return addScore(n,e.pos),!0;e.pos.x<0&&(play("explosion"),color("red"),text("X",3,e.pos.y),end())});function p(){let e=!1;a--,a<0&&(e=!0,a=7),r.push({pos:vec(103-s*10,i),vx:-rnd(1,difficulty)*.1,isRed:e});const t=rnd(20,80);o=abs(i-t+10)*4/sqrt(difficulty),i=t,s>0&&s--}function u(){if(l.length>9)return;const e=l[l.length-1],t={angle:0,va:0,prevNode:e,nextNode:void 0};e.nextNode=t,l.push(t)}function v(){l.pop(),l[l.length-1].nextNode=void 0}}export{y as characters,x as description,N as options,h as title,m as update};
