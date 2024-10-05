export const title = "SWINGBY";

export const description = `
[Hold]
 Turn right
`;

export const characters = [];

export const options = {
  theme: "dark",
  isPlayingBgm: true,
  isReplayEnabled: true,
  audioSeed: 1,
};

/** @type {{pos: Vector, screenPos: Vector, radius: number}[]} */
let stars;
/** @type {Vector} */
let starAddPos;
/** @type {{pos: Vector, vel: Vector}} */
let ship;
let hitCount;
let shipScreenPos;
/** @type {{pos: Vector, velRatio: number}[]} */
let backStars;

export function update() {
  if (!ticks) {
    stars = [{ pos: vec(), screenPos: vec(), radius: 20 }];
    starAddPos = vec();
    times(20, () => {
      addStar(starAddPos, 150, -PI, PI);
    });
    stars.shift();
    ship = { pos: vec(), vel: vec() };
    hitCount = 0;
    shipScreenPos = vec(50, 50);
    backStars = times(30, () => {
      return { pos: vec(rnd(99), rnd(99)), velRatio: -rnd(0.05, 0.2) };
    });
  }
  const sd = sqrt(difficulty);
  color("light_black");
  backStars.forEach((s) => {
    s.pos.add(vec(ship.vel).mul(s.velRatio));
    if (s.pos.x < 0 || s.pos.x > 99) {
      s.pos.y = rnd(99);
    }
    if (s.pos.y < 0 || s.pos.y > 99) {
      s.pos.x = rnd(99);
    }
    s.pos.wrap(0, 100, 0, 100);
    rect(s.pos, 1, 1);
  });
  box(vec(ship.pos).mul(-1).add(shipScreenPos).clamp(-3, 103, -3, 103), 10);
  color("black");
  remove(stars, (s) => {
    const d = s.pos.distanceTo(ship.pos);
    const r = s.radius;
    ship.vel.addWithAngle(
      ship.pos.angleTo(s.pos),
      (sd * r * 0.01) / clamp(d - r, 2, 99)
    );
    if (d < 99 + r) {
      s.screenPos.set(s.pos).sub(ship.pos).add(shipScreenPos);
      arc(s.screenPos, r - 2, 5);
    } else {
      s.screenPos.set(999, 999);
    }
    return d > 150;
  });
  if (starAddPos.distanceTo(ship.pos) > 50) {
    const a = starAddPos.angleTo(ship.pos);
    starAddPos.set(ship.pos);
    times(5, () => {
      addStar(vec(starAddPos).addWithAngle(a, 100), 70, a - PI / 2, a + PI / 2);
    });
  }
  ship.vel.mul(1 - 0.01 / sd);
  shipScreenPos
    .set(50, 50)
    .addWithAngle(
      ship.vel.angle + PI,
      clamp(sqrt(ship.vel.length) * 19, 1, 30)
    );
  if (input.isPressed) {
    play("laser");
    const a = ship.vel.angle + PI / 2;
    ship.vel.addWithAngle(a, sd * 0.05);
    particle(shipScreenPos, 1, 2, a + PI, PI / 8);
  }
  const a = ship.vel.angle;
  ship.vel.addWithAngle(a, sd * 0.01);
  particle(shipScreenPos, 0.5, 1, a + PI, PI / 8);
  ship.pos.add(ship.vel);
  if (bar(shipScreenPos, 3, 3, ship.vel.angle).isColliding.rect.black) {
    play("hit");
    ship.vel.mul(1 - 0.01 * sd);
    hitCount += 4 * difficulty;
    particle(shipScreenPos, 3, hitCount * 0.1);
    if (hitCount > 99) {
      play("explosion");
      end();
    }
  } else {
    if (hitCount > 0) {
      hitCount -= sd;
    }
  }
  color("red");
  rect(0, 95, hitCount, 5);
  score = floor(ship.pos.length);

  function addStar(c, r, af, at) {
    for (let i = 0; i < 99; i++) {
      const pos = vec(c).addWithAngle(rnd(af, at), rnd(r));
      const radius = rnd(5, 15);
      let hasSpace = true;
      stars.forEach((s) => {
        if (hasSpace && s.pos.distanceTo(pos) < s.radius + radius + 30) {
          hasSpace = false;
        }
      });
      if (hasSpace) {
        stars.push({ pos, screenPos: vec(), radius });
        break;
      }
    }
  }
}
