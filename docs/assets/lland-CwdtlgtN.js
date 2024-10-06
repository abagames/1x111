const y="LLAND",g=`
[Hold] Thrust up
`,m=[`
 llll
l    l
 llll
 l  l
l ll l
ll  ll
`],h={isPlayingBgm:!0,isReplayEnabled:!0,theme:"pixel",audioSeed:3};let n,i,l,d,o,a,t,s,r,p,c,f;function x(){if(ticks||(n=times(9,e=>e===4?{y:r=49,c:"cyan"}:{y:90-e,c:"red"}),i=25+difficulty*5,l=d=o=a=s=f=0,t=7),n.map((e,u)=>{color(e.c),rect(wrap(u*13+d-13,-13,104),e.y,13,99)}),color("green"),p=char("a",25,i),s)if(input.isJustPressed)s=0;else return;if(d-=difficulty,(o-=difficulty)<0&&(c=n[wrap(a,0,9)],c.y=t>7||t===1?rnd(70,90):t===0?r=rnd(40,70):rnd(40,90),t--,t<0?(c.c="cyan",t=9):c.c="red",a++,o+=13),f&&(input.isJustPressed&&(play("laser"),l-=.4),input.isPressed&&(l-=.2,particle(24.5,i+2,1,1,PI/2,1))),l+=.1,l*=.99,i<0&&l<0&&(l*=-1),i+=l*difficulty,p.isColliding.rect.cyan&&(play("select"),particle(24.5,i),s=++score,l=0,i=r-3,n.map(e=>e.c="red"),f=1),p.isColliding.rect.red&&(play("explosion"),end()),rect(-1,0,1,99).isColliding.rect.cyan){color("red");for(let e=r-4;e<99;e+=7)text("X",2,e);play("explosion"),end()}}export{m as characters,g as description,h as options,y as title,x as update};
