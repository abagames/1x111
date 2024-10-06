const r="DESCENT S",i=`
[Hold] Thrust up
`,p=[`
l cc
lllll
llllll
`,`
  ll
  ll
  ll
llllll
 llll
  ll
`,`
ll
  l
 l
lll
`],n={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:7};let l,c;function a(){ticks||(l={pos:vec(9,9),vel:vec(.2),up:-2,down:2,nextUp:-3,nextDown:3},c=[{pos:vec(30,50),width:40},{pos:vec(50,75),width:35},{pos:vec(70,99),width:30}]),l.vel.y+=input.isPressed?l.up*.005:l.down*.005,input.isJustPressed&&play("coin"),input.isJustReleased&&play("laser"),l.pos.y+=l.vel.y,color(l.vel.y>1?"red":l.vel.y>.6?"yellow":"blue"),rect(1,20,3,l.vel.y*20),color("red"),rect(0,40,5,1);let s=0;l.pos.y>19?s=(19-l.pos.y)*.2:l.pos.y<9&&(s=(9-l.pos.y)*.2),l.pos.y+=s,c.forEach((o,e)=>{color(e===0?"black":"light_black"),o.pos.add(-l.vel.x,s),rect(o.pos,o.width,3),e===0&&(color("yellow"),rect(0,o.pos.y+3,o.pos.x+o.width,2),rect(o.pos.x+o.width,0,1,o.pos.y+5))}),color("black");const t=char("a",l.pos).isColliding.rect;if(t.black)if(l.vel.y>1)play("explosion"),end();else{const o=c.shift();play("powerUp"),addScore(floor(o.pos.x+o.width-l.pos.x+1),l.pos);const e=c[c.length-1];c.push({pos:vec(e.pos.x+e.width*.7+rnd(30),e.pos.y+rnd(20,40)),width:rnd(25,50)}),l.up=l.nextUp,l.down=l.nextDown,l.nextUp=floor(-difficulty*4+rnds(difficulty*3)),l.nextDown=floor(difficulty*4+rnds(difficulty*2)),l.vel.set(difficulty*.2,0)}(t.yellow||l.pos.y<0)&&(play("explosion"),end()),color(input.isPressed?"yellow":"cyan"),char("b",60,10,{mirror:{y:-1}}),color("black"),text(`${-l.up}m/s`,76-(-l.up>9?6:0),10),char("c",97,9),color(input.isPressed?"cyan":"yellow"),char("b",60,17),color("black"),text(`${l.down}m/s`,76-(l.down>9?6:0),17),char("c",97,16),text("NEXT",70,24),color("cyan"),char("b",60,31,{mirror:{y:-1}}),color("black"),text(`${abs(l.nextUp)}m/s`,76-(-l.nextUp>9?6:0),31),char("c",97,30),color("cyan"),char("b",60,38),color("black"),text(`${l.nextDown}m/s`,76-(l.nextDown>9?6:0),38),char("c",97,37)}export{p as characters,i as description,n as options,r as title,a as update};
