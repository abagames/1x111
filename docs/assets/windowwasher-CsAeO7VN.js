const h="WINDOW WASHER",b=`
[Hold] Ascend
[Release] Descend
Clean windows!
`,v=[`
  ll
 l  l
llllll
 l  l
`],g={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1,isDrawingScoreFront:!0};let i,s,n,o,t,l;function m(){ticks||d(),a(),u(),f(),y(),p(),x(),color("black"),text(`x${l}`,2,10,{isSmallText:!0})}function d(){i={pos:vec(50,10),vx:1,vy:1,width:20,height:5},s=[];for(let e=0;e<10;e++)s.push({pos:vec(rnd(15,85),20+e*30),width:15,height:20,isCleaned:!1});n=[],o=0,t=.5,l=1}function a(){color("light_cyan"),rect(0,0,3,100),rect(97,0,3,100)}function u(){input.isJustPressed&&play("laser"),input.isPressed?i.vy=-1.5:i.vy=1,i.pos.x+=i.vx,(i.pos.x>90||i.pos.x<10)&&(play("click"),i.vx*=-1),i.pos.y+=i.vy,i.pos.y=clamp(i.pos.y,5,95),p()}function p(){color("light_black"),rect(i.pos.x-i.width/2,0,1,i.pos.y),rect(i.pos.x+i.width/2-1,0,1,i.pos.y),color("blue"),box(i.pos,i.width,i.height)}function f(){s.forEach(e=>{e.pos.y-=t,e.pos.y<-30&&(e.pos.y+=330,e.isCleaned?e.isCleaned=!1:(play("hit"),l--,l<1&&(l=1))),color(e.isCleaned?"yellow":"cyan"),box(e.pos,e.width,e.height).isColliding.rect.blue&&!e.isCleaned&&(play("powerUp"),e.isCleaned=!0,addScore(l,e.pos),l++)})}function y(){if(remove(n,e=>(e.pos.y-=t,e.type==="bird"&&(e.pos.x+=e.vx,(e.pos.x>95||e.pos.x<5)&&(e.vx*=-1)),color("red"),e.type==="bird"?char("a",e.pos,{mirror:{x:e.vx>0?1:-1}}).isColliding.rect.blue&&c():box(e.pos,10,14).isColliding.rect.blue&&c(),e.pos.y<-10)),o-=t,o<0){let e=rnd()<.5;const r=vec(rnd(15,85),110);e||(color("transparent"),box(r,14,18).isColliding.rect.cyan&&(e=!0)),n.push({pos:r,vx:e?rnd()<.5?.5:-.5:0,type:e?"bird":"open window"}),o+=rnd(40,50)}}function x(){t=.5+difficulty*.1}function c(){play("explosion"),end()}export{v as characters,b as description,g as options,h as title,m as update};
