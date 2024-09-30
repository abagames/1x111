export const title = "BALL TOUR";

export const description = `
[Hold]
 Move forward
`;

export const characters = [
  `
llllll
l l ll
l l ll
llllll
 l  l
 l  l
  `,
  `
llllll
l l ll
l l ll
llllll
ll  ll
  `,
  `
 lll
ll ll
l lll
lllll
 lll
 ll
`,
];

export const options = {
  theme: "dark",
  isPlayingBgm: true,
  isReplayEnabled: true,
  audioSeed: 4,
};

/** @type {{pos: Vector, yAngle: number, vx: number, ticks: number}} */
let player;
/** @type {{pos: Vector, vy: number}[]} */
let spikes;
let nextSpikeDist;
/** @type {Vector[]} */
let balls;
let nextBallDist;
let multiplier;

export function update() {
  if (!ticks) {
    player = { pos: vec(90, 50), yAngle: 0, vx: 0, ticks: 0 };
    spikes = [];
    nextSpikeDist = 0;
    balls = [];
    nextBallDist = 9;
    multiplier = 1;
  }
  color("blue");
  rect(0, 90, 99, 9);
  nextSpikeDist -= player.vx;
  if (nextSpikeDist < 0) {
    spikes.push({
      pos: vec(-3, rnd(10, 80)),
      vy: rnd() < 0.2 ? rnds(1, difficulty) * 0.3 : 0,
    });
    nextSpikeDist += rnd(9, 49);
  }
  color("black");
  remove(spikes, (s) => {
    s.pos.x += player.vx;
    s.pos.y += s.vy;
    if (s.pos.y < 10 || s.pos.y > 80) {
      s.vy *= -1;
    }
    if (text("*", s.pos).isColliding.char.d) {
      return true;
    }
    return s.pos.x > 103;
  });
  const py = player.pos.y;
  player.yAngle += difficulty * 0.05;
  player.pos.y = sin(player.yAngle) * 30 + 50;
  player.ticks += clamp((py - player.pos.y) * 9 + 1, 0, 9);
  if (input.isJustPressed) {
    // Play the `hit` sound effect.
    play("hit");
  }
  player.vx = (input.isPressed ? 1 : 0.1) * difficulty;
  char(addWithCharCode("a", floor(player.ticks / 50) % 2), player.pos);
  color("red");
  if (char("c", player.pos.x, player.pos.y - 6).isColliding.text["*"]) {
    // Play the `explosion` sound effect.
    play("explosion");
    end();
  }
  nextBallDist -= player.vx;
  if (nextBallDist < 0) {
    const p = vec(-3, rnd(20, 70));
    color("transparent");
    if (char("c", p).isColliding.text["*"]) {
      nextBallDist += 9;
    } else {
      balls.push(p);
      nextBallDist += rnd(25, 64);
    }
  }
  color("green");
  remove(balls, (b) => {
    b.x += player.vx;
    const c = char("c", b).isColliding.char;
    if (c.a || c.b || c.c) {
      addScore(floor(multiplier), player.pos);
      multiplier += 10;
      // Play the `select` sound effect.
      play("select");
      return true;
    }
    return b.x > 103;
  });
  multiplier = clamp(multiplier - 0.02 * difficulty, 1, 999);
  color("black");
  text(`x${floor(multiplier)}`, 3, 9);
}
