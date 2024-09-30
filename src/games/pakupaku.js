export const title = "PAKU PAKU";

export const description = `
[Tap] Turn
`;

export const characters = [
  `
  llll
 lll
lll
lll
 lll
  llll
`,
  `
  lll
 lllll
lll
lll
 lllll
  lll
`,
  `
  ll
 llll
llllll
llllll
 llll
  ll
`,
  `
  lll
 l l l
 llll
 llll
llll
l l l
`,
  `
  lll
 l l l
 llll
 llll
 llll
 l l
`,
  `
ll
ll
`,
  `
 ll
llll
llll
 ll
`,
  `
  l l



`,
];

export const options = {
  theme: "dark",
  isPlayingBgm: true,
  isReplayEnabled: true,
  audioSeed: 8,
};

/** @type {{x: number, vx: number}} */
let player;
/** @type {{x: number, eyeVx: number}} */
let enemy;
/** @type {{x: number, isPower: boolean}[]} */
let dots;
let powerTicks;
let animTicks;
let multiplier;

export function update() {
  if (!ticks) {
    player = { x: 25, vx: 1 };
    enemy = { x: 100, eyeVx: 0 };
    multiplier = 0;
    addDots();
    powerTicks = animTicks = 0;
  }
  animTicks += difficulty;
  color("black");
  text(`x${multiplier}`, 3, 9);
  if (input.isJustPressed) {
    player.vx *= -1;
  }
  player.x += player.vx * 0.5 * difficulty;
  if (player.x < -3) {
    player.x = 103;
  } else if (player.x > 103) {
    player.x = -3;
  }
  color("blue");
  rect(0, 48, 100, 1);
  rect(0, 50, 100, 1);
  rect(0, 58, 100, 1);
  rect(0, 61, 100, 1);
  color("green");
  const ai = floor(animTicks / 7) % 4;
  char(addWithCharCode("a", ai === 3 ? 1 : ai), player.x, 55, {
    // @ts-ignore
    mirror: { x: player.vx },
  });
  remove(dots, (d) => {
    color(
      d.isPower && floor(animTicks / 7) % 2 === 0 ? "transparent" : "yellow"
    );
    const c = char(d.isPower ? "g" : "f", d.x, 55).isColliding.char;
    if (c.a || c.b || c.c) {
      if (d.isPower) {
        play("jump");
        if (enemy.eyeVx === 0) {
          powerTicks = 120;
        }
      } else {
        play("hit");
      }
      addScore(multiplier);
      return true;
    }
  });
  const evx =
    enemy.eyeVx !== 0
      ? enemy.eyeVx
      : (player.x > enemy.x ? 1 : -1) * (powerTicks > 0 ? -1 : 1);
  enemy.x = clamp(
    enemy.x +
      evx *
        (powerTicks > 0 ? 0.25 : enemy.eyeVx !== 0 ? 0.75 : 0.55) *
        difficulty,
    0,
    100
  );
  if ((enemy.eyeVx < 0 && enemy.x < 1) || (enemy.eyeVx > 0 && enemy.x > 99)) {
    enemy.eyeVx = 0;
  }
  color(
    powerTicks > 0
      ? powerTicks < 30 && powerTicks % 10 < 5
        ? "black"
        : "blue"
      : enemy.eyeVx !== 0
      ? "black"
      : "red"
  );
  const c = char(
    enemy.eyeVx !== 0 ? "h" : addWithCharCode("d", floor(animTicks / 7) % 2),
    enemy.x,
    55,
    {
      // @ts-ignore
      mirror: { x: evx },
    }
  ).isColliding.char;
  if (enemy.eyeVx === 0 && (c.a || c.b || c.c)) {
    if (powerTicks > 0) {
      play("powerUp");
      addScore(10 * multiplier, enemy.x, 55);
      enemy.eyeVx = player.x > 50 ? -1 : 1;
      powerTicks = 0;
      multiplier++;
    } else {
      play("explosion");
      end();
    }
  }
  powerTicks -= difficulty;
  if (dots.length === 0) {
    play("coin");
    addDots();
  }
}

function addDots() {
  let pi = player.x > 50 ? rndi(1, 6) : rndi(10, 15);
  dots = times(16, (i) => ({ x: i * 6 + 5, isPower: i === pi }));
  multiplier++;
}
