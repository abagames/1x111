export const title = "WAVY BIRD";

export const description = `
[Tap] Flap
`;

export const options = {
  isPlayingBgm: true,
  isReplayEnabled: true,
  audioSeed: 3,
};

export const characters = [];

// Define variables for game objects
/** @type {{pos: Vector, vel: Vector, size: Vector, angle: number}} */
let bird;
/** @type {{pos: Vector, size: Vector}[]} */
let pillars;
let nextPillarDist;
/** @type {{pos: Vector, radius: number, maxRadius: number, angle: number}[]} */
let shockwaves;
let multiplier;

// Define game constants
const GRAVITY = 0.1;
const JUMP_FORCE = 1.5;
const SHOCKWAVE_SPEED = 2;
const MAX_SHOCKWAVE_RADIUS = 30;
const PILLAR_WIDTH = 8;
const MIN_PILLAR_HEIGHT = 20;
const MAX_PILLAR_HEIGHT = 60;

export function update() {
  const sd = sqrt(difficulty);
  if (!ticks) {
    // Initialize game objects
    bird = {
      pos: vec(20, 60),
      vel: vec(0, -3 / sd),
      size: vec(5, 3),
      angle: 0,
    };
    pillars = [];
    nextPillarDist = 0;
    shockwaves = [];
    multiplier = 1;
  }

  // Update shockwaves
  color("purple");
  remove(shockwaves, (s) => {
    s.radius += SHOCKWAVE_SPEED * sd;
    arc(s.pos, s.radius, 3, s.angle - 0.5, s.angle + 0.5);
    return s.radius >= s.maxRadius;
  });

  // Update bird
  bird.pos.y += bird.vel.y * sd;
  bird.vel.y += GRAVITY;
  bird.angle += (1.2 - bird.angle) * 0.02 * sd;

  // Handle button input (jump and create shockwave)
  if (input.isJustPressed) {
    play("click");
    shockwaves.push({
      pos: vec(bird.pos),
      radius: 0,
      maxRadius: MAX_SHOCKWAVE_RADIUS,
      angle: bird.angle - 0.6 * sd,
    });
    bird.vel.y = -JUMP_FORCE;
    bird.angle -= 0.6 * sd;
  }
  bird.angle = clamp(bird.angle, -1.2, 1.2);
  if (bird.pos.y < 0 || bird.pos.y > 99) {
    play("explosion");
    end();
  }

  // Draw bird
  color("red");
  bar(bird.pos, bird.size.x, bird.size.y, bird.angle);

  // Update pillars
  color("cyan");
  remove(pillars, (p) => {
    p.pos.x -= sd;
    const c = box(p.pos, p.size).isColliding.rect;
    if (c.purple) {
      play("powerUp");
      addScore(floor(multiplier), p.pos.x, p.pos.y);
      multiplier += 1;
      return true;
    } else if (c.red) {
      play("explosion");
      end();
    }
    return p.pos.x < -PILLAR_WIDTH;
  });

  // Generate new pillars
  nextPillarDist -= sd;
  if (nextPillarDist < 0) {
    play("laser");
    const height = rnd(MIN_PILLAR_HEIGHT, MAX_PILLAR_HEIGHT);
    let y = rnd(0, 110 - height);
    for (let i = 0; i < floor(height / PILLAR_WIDTH); i++) {
      pillars.push({
        pos: vec(100 + PILLAR_WIDTH, y),
        size: vec(PILLAR_WIDTH, PILLAR_WIDTH),
      });
      y += PILLAR_WIDTH;
    }
    nextPillarDist += rnd(10, 40);
  }

  multiplier = clamp(multiplier - 0.03 * sd, 1, 99);
  color("black");
  text(`x${floor(multiplier)}`, 2, 9);
}
