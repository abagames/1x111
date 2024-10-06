const f="JUGGLING ACT",v=`
[Hold] Throw ball back
[Release] Move
`,y=[`
  lll
  lll
  ll
  ll
 llll
ll  ll
`],d={isPlayingBgm:!0,isReplayEnabled:!0,audioSeed:1};let s,o,n;const p=.02,c=2,r=.36;function u(){ticks||(s={pos:vec(50,90),velX:0,state:"ready"},o=[],n=0);const t=sqrt(difficulty);if(input.isJustPressed?(play("select"),s.state="catch"):input.isJustReleased&&(s.state="ready"),!input.isPressed){let e=a();if(e){let l=e.pos.x>s.pos.x?1:-1;s.velX+=l*r}}s.velX*=.85,s.pos.x+=s.velX*t,(s.pos.x<5&&s.velX<0||s.pos.x>95&&s.velX>0)&&(s.velX*=-.5),color("blue");const i=s.state==="catch"?-5:0;box(s.pos.x-5,s.pos.y+i,3,3),box(s.pos.x+5,s.pos.y+i,3,3),char("a",s.pos,{mirror:{x:s.velX>0?1:-1}}),color("red"),remove(o,e=>{if(e.pos.add(vec(e.vel).mul(t)),e.vel.mul(.99),(e.pos.x<0&&e.vel.x<0||e.pos.x>100&&e.vel.x>0)&&(e.vel.x*=-1),e.state==="falling"?(e.vel.y+=p*t,s.state==="catch"&&e.pos.y>s.pos.y-8&&e.pos.y<s.pos.y&&Math.abs(e.pos.x-s.pos.x)<10&&(play("jump"),e.state="rising",e.vel.y=-c,e.vel.x=(e.pos.x-s.pos.x)/10+rnds(.1),addScore(o.length,e.pos))):(e.vel.y+=p*t,e.vel.y>=0&&(e.state="falling")),arc(e.pos,2),e.pos.y>100)return play("click"),!0}),n-=t,n<=0&&(play("laser"),o.push({pos:vec(rnd(10,90),0),vel:vec(0,0),state:"falling"}),n=200),o.length===0&&(play("explosion"),end())}function a(){let t=null,i=1/0;return o.forEach(e=>{if(e.state==="falling"){let l=Math.abs(e.pos.y-s.pos.y);l<i&&(i=l,t=e)}}),t}export{y as characters,v as description,d as options,f as title,u as update};
