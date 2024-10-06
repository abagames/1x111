const n="SLIME STRETCHER",c=`
[Hold] Stretch
[Release] Contract
`,d=[`
 llll
l  lll
l llll
l llll
llll l
 llll
`],y={viewSize:{x:200,y:100},isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:3};let e,o,p,s,h,l,i;function x(){if(ticks||(e={pos:vec(50,90),width:20,height:20,baseWidth:20,baseHeight:20,maxHeight:80,velocity:1,isOnGround:!0},o=[],p=[],s=1,h=50,l=30,i=1),input.isPressed?(e.height=Math.min(e.height+2,e.maxHeight),e.width=Math.max(e.width-.5,e.baseWidth/2),e.velocity=.5*difficulty,e.pos.y=Math.max(e.pos.y-2,10)):(e.height=Math.max(e.height-4,e.baseHeight),e.width=Math.min(e.width+1,e.baseWidth),e.velocity=1.5*difficulty),e.pos.x+=e.velocity,e.pos.x<50&&e.pos.x++,e.pos.x<-e.width&&(play("explosion"),end()),h-=e.velocity,h<=0){const t=rnd(20,60);o.push({pos:vec(200,rnd(0,70)),width:t,height:rnd(20,40)}),h=rndi(35,55)+t}l-=e.velocity,l<=0&&(p.push({pos:vec(203,rnd(20,80))}),l=rndi(30,60)),e.isOnGround=!1,o.forEach(t=>{e.pos.x+e.width>t.pos.x&&e.pos.x<t.pos.x+t.width&&e.pos.y+e.height>t.pos.y&&e.pos.y<t.pos.y+t.height&&(e.pos.y+e.height<t.pos.y+10?(e.height--,e.pos.y=t.pos.y-e.height,e.isOnGround=!0):e.pos.y>t.pos.y+t.height-10?(e.pos.y=t.pos.y+t.height,e.height-=2):e.pos.x+e.width<t.pos.x+5?(e.pos.x=t.pos.x-e.width,e.width--):(e.pos.y=t.pos.y-e.height,e.isOnGround=!0))}),e.isOnGround||(e.pos.y=Math.min(e.pos.y+1,90)),e.pos.y+e.height>=90&&(e.pos.y=90-e.height,e.isOnGround=!0),color("green"),rect(e.pos,e.width,e.height),color("black"),o.forEach(t=>{rect(t.pos,t.width,t.height)}),rect(0,90,200,10),s=e.velocity,e.pos.x-=s,remove(o,t=>(t.pos.x-=s,t.pos.x<-t.width)),color("yellow"),remove(p,t=>{const r=char("a",t.pos).isColliding.rect;if(r.black)return!0;if(r.green)return play("coin"),addScore(i,t.pos),i++,!0;if(t.pos.x-=s,t.pos.x<-3)return i--,i<1&&(i=1),!0}),color("black"),text(`x${i}`,2,10,{isSmallText:!0})}export{d as characters,c as description,y as options,n as title,x as update};
