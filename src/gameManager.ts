import exp from "constants";
import "./crisp-game-lib/main";
import {
  init as initCgl,
  terminate as terminateCgl,
  terminateBgm,
} from "./crisp-game-lib/main";
import * as loop from "./crisp-game-lib/loop";
import * as view from "./crisp-game-lib/view";
import { print } from "./crisp-game-lib/letter";
import { gameList } from "./gameList";

export interface GameSpec {
  id: number;
  title: string;
  screenshot: string;
  state: "open" | "closed" | "banned";
  targetScore: number;
}

export const localStorageKey = "1x111";
export const version = "1.0.0";

const initialUnlockedGameCount = 11;
const totalGameCount = gameList.length;
export let gameModeIndex: number;
export let unlockedGameCount: number;
export let starCount: number;
export let gameSpecs: GameSpec[];
let currentGameSpec: GameSpec;

interface CglGame {
  title: string;
  description: string;
  characters: string[];
  options;
  update: () => void;
}

const cglGames: { [key: string]: CglGame } = {};
let currentCglGame: CglGame;
let shuffledGames = times(totalGameCount, (i) => i);
let shuffledGameIndex: number;
const gameTimeLimit = 11;
let gameTime: number;
let gameType: "timeAttack" | "endless" | "single";
let currentGameState: "playing" | "success" | "failure" | "end";
const nextGameDuration = 80;
const endGameDuration = 300;
let nextGameTicks: number;
let shutterSize: number;
const totalGameRound = 5;
let currentGameRound: number;
let currentStarCount: number;
const starsPerGame = 5;
let unlockedGames: string[];

export async function init() {
  await loadGames();
  initGameState();
  loadGameState();
}

export function initGameState() {
  gameSpecs = times(totalGameCount, (i) => {
    if (i >= gameList.length) {
      return {
        id: i + 1,
        title: `GAME ${i + 1}`,
        screenshot: "",
        state: "closed",
        targetScore: 1,
      };
    }
    const gl = gameList[i];
    return {
      id: i + 1,
      title: gl.title,
      screenshot: `./screenshots/${gl.title
        .replace(/\s+/g, "")
        .toLowerCase()}.png`,
      state: i < initialUnlockedGameCount ? "open" : "closed",
      targetScore: gl.targetScore,
    };
  });
  gameModeIndex = 0;
  starCount = 0;
  unlockedGameCount = initialUnlockedGameCount;
}

function loadGameState() {
  try {
    const dataString = localStorage.getItem(localStorageKey);
    if (dataString == null) {
      return;
    }
    const data = JSON.parse(dataString);
    if (data.version !== version) {
      return;
    }
    gameSpecs.forEach((gs) => {
      gs.state = data.state[gs.id] || gs.state;
    });
    gameModeIndex = data.gameModeIndex;
    starCount = data.starCount;
    unlockedGameCount = data.unlockedGameCount;
  } catch (error) {
    console.error("Error loading game state:", error);
  }
}

let setGameSpecs;
let setIsPlaying;
let setStarCount;
let setUnlockedGameCount;
let initialDifficulty: number;
let starMultiplier: number;

export function start(
  gameModeIndex: number,
  selectedGameSpec: GameSpec,
  _gameSpecs: GameSpec[],
  _setGameSpecs,
  _setIsPlaying,
  _setStarCount,
  _setUnlockedGameCount
) {
  gameSpecs = _gameSpecs.map((gs) => ({ ...gs }));
  setGameSpecs = _setGameSpecs;
  setIsPlaying = _setIsPlaying;
  setStarCount = _setStarCount;
  setUnlockedGameCount = _setUnlockedGameCount;
  if (selectedGameSpec.id === -1) {
    gameType = "timeAttack";
    currentGameRound = shuffledGameIndex = 0;
    currentStarCount = 0;
    times(555, () => {
      const i = Math.floor(Math.random() * shuffledGames.length);
      const j = Math.floor(Math.random() * shuffledGames.length);
      const tmp = shuffledGames[i];
      shuffledGames[i] = shuffledGames[j];
      shuffledGames[j] = tmp;
    });
    switch (gameModeIndex) {
      case 0:
        initialDifficulty = 1;
        starMultiplier = 1;
        break;
      case 1:
        initialDifficulty = 1.5;
        starMultiplier = 1.2;
        break;
      case 2:
        initialDifficulty = 2;
        starMultiplier = 1.5;
        break;
      case 3:
        initialDifficulty = 1;
        currentStarCount = 3;
        gameType = "endless";
        break;
    }
    startTimeAttackGame();
    return;
  }
  gameType = "single";
  startGame(selectedGameSpec, 1);
}

function startTimeAttackGame() {
  if (gameType === "timeAttack" && currentGameRound >= totalGameRound) {
    endTimeAttackGame();
    return;
  }
  if (currentGameRound > 0) {
    terminateCgl();
  }
  let gs: GameSpec;
  for (let i = 0; i < totalGameCount * 2; i++) {
    gs = gameSpecs[shuffledGames[shuffledGameIndex]];
    shuffledGameIndex++;
    if (shuffledGameIndex >= totalGameCount) {
      shuffledGameIndex = 0;
    }
    if (gs.state === "open" || (i >= totalGameCount && gs.state === "banned")) {
      break;
    }
  }
  const d =
    gameType === "timeAttack"
      ? initialDifficulty
      : initialDifficulty + Math.sqrt(currentGameRound) * 0.2;
  startGame(gs, d);
  currentGameRound++;
  if (
    gameType === "endless" &&
    currentGameRound % 10 === 0 &&
    currentStarCount < 3
  ) {
    currentStarCount++;
  }
}

function startGame(gameSpec: GameSpec, initialDifficulty: number) {
  currentGameSpec = gameSpec;
  currentCglGame = cglGames[gameSpec.title];
  gameTime = gameTimeLimit * 60;
  currentGameState = "playing";
  shutterSize = 50;
  starChar = addWithCharCode("a", currentCglGame.characters.length - 1);
  loop.setUpdateFunction(update);
  let options = { ...currentCglGame.options };
  if (gameType !== "single") {
    options.isShowingScore = false;
  }
  initCgl({
    update: currentCglGame.update,
    title: currentCglGame.title,
    description: currentCglGame.description,
    characters: currentCglGame.characters,
    options,
    initialDifficulty,
    isTimeAttack: gameType !== "single",
  });
}

export function update() {
  view.saveCurrentColor();
  drawShutter();
  if (gameType === "endless") {
    drawStars();
  }
  drawMessages();
  view.drawToDescription();
  view.clear();
  if (
    currentGameState === "end" ||
    (gameType === "endless" &&
      currentGameState === "failure" &&
      currentStarCount === 0) ||
    (gameType === "single" && currentGameState === "failure")
  ) {
    view.drawToMain();
    nextGameTicks--;
    if (
      nextGameTicks < 0 ||
      (nextGameTicks < endGameDuration - 40 && input.isJustPressed)
    ) {
      terminateCgl();
      setIsPlaying(false);
    }
    return;
  }
  drawTitleAndDescription();
  if (gameType !== "single") {
    gameTime--;
    drawScoreAndTime();
    if (
      currentGameState === "playing" &&
      score >= currentGameSpec.targetScore
    ) {
      setGameSuccess();
    } else if (currentGameState === "playing" && gameTime <= 0) {
      play("explosion");
      end();
    }
    if (gameTime <= 0) {
      gameTime = 1;
    }
  }
  view.loadCurrentColor();
  view.drawToMain();
  if (currentGameState !== "playing") {
    nextGameTicks--;
    if (nextGameTicks <= 0) {
      startTimeAttackGame();
    }
  }
}

function drawShutter() {
  if (shutterSize > 0) {
    if (shutterSize > 50) {
      shutterSize = 50;
    }
    const sy = (shutterSize * (view.size.y / 2)) / 50;
    color("light_black");
    rect(0, 0, view.size.x, sy);
    rect(0, view.size.y - sy, view.size.x, sy);
  }
}

function drawStars() {
  if (currentStarCount === 0) {
    return;
  }
  color("black");
  print(starChar.repeat(currentStarCount), 3, 3, { isCharacter: true });
}

function drawMessages() {
  color("black");
  switch (currentGameState) {
    case "playing":
      if (shutterSize > 0) {
        if (gameType !== "single") {
          print(`GAME ${currentGameRound}`, (view.size.x - 4 * 5) / 2 + 3, 49, {
            isSmallText: true,
          });
          print(
            currentGameSpec.title,
            (view.size.x - 4 * currentGameSpec.title.length) / 2 + 3,
            59,
            {
              isSmallText: true,
            }
          );
        }
        shutterSize -= 2;
      }
      break;
    case "success":
      print("SUCCESS!", (view.size.x - 6 * 8) / 2 + 3, 49);
      shutterSize++;
      break;
    case "failure":
      if (
        gameType === "single" ||
        (gameType === "endless" && currentStarCount === 0)
      ) {
        print("GAME OVER", (view.size.x - 6 * 9) / 2 + 3, 49);
      } else {
        print("OOPS!", (view.size.x - 6 * 5) / 2 + 3, 49);
      }
      if (gameType === "endless" && currentStarCount === 0) {
        print(
          `REACH ROUND ${currentGameRound}!`,
          (view.size.x - 4 * 15) / 2 + 3,
          60,
          { isSmallText: true }
        );
      }
      if (gameType !== "single") {
        shutterSize++;
      }
      break;
    case "end":
      print("YOU GOT", (view.size.x - 6 * 7) / 2 + 3, 30);
      let et = endGameDuration - nextGameTicks;
      let sc = Math.floor(et / 12);
      if (sc >= currentStarCount) {
        sc = currentStarCount;
      } else if (et % 12 === 11) {
        play("coin", { seed: 7 });
      }
      print(
        starChar.repeat(sc),
        (view.size.x - 6 * currentStarCount) / 2 + 3,
        40,
        {
          isCharacter: true,
        }
      );
      if (unlockedGames.length > 0) {
        print("UNLOCK NEW GAMES", (view.size.x - 4 * 16) / 2 + 3, 55, {
          isSmallText: true,
        });
        let gc = Math.floor(et / 60);
        if (gc >= unlockedGames.length) {
          gc = unlockedGames.length;
        } else if (et % 60 === 59) {
          play("powerUp", { seed: 7 });
        }
        for (let i = 0; i < gc; i++) {
          const g = unlockedGames[i];
          print(g, (view.size.x - 4 * g.length) / 2 + 3, 65 + i * 7, {
            isSmallText: true,
          });
        }
      }
      break;
  }
}

function setGameSuccess() {
  if (currentGameState !== "playing") {
    return;
  }
  play("powerUp", { seed: 7 });
  currentGameState = "success";
  nextGameTicks = nextGameDuration;
  if (gameType !== "endless") {
    currentStarCount += starMultiplier;
  }
}

export function setGameFailure() {
  if (currentGameState !== "playing") {
    return;
  }
  currentGameState = "failure";
  switch (gameType) {
    case "endless":
      currentStarCount--;
      if (currentStarCount === 0) {
        nextGameTicks = endGameDuration;
      } else {
        nextGameTicks = nextGameDuration;
      }
      break;
    case "single":
      nextGameTicks = endGameDuration;
      break;
    case "timeAttack":
      nextGameTicks = nextGameDuration;
      break;
  }
}

function drawTitleAndDescription() {
  print(currentCglGame.title, 3, 3, { isSmallText: true });
  let maxLineLength = 0;
  currentCglGame.description.split("\n").forEach((l) => {
    if (l.length > maxLineLength) {
      maxLineLength = l.length;
    }
  });
  const x = Math.floor((100 - maxLineLength * 4) / 2);
  let y = 9;
  currentCglGame.description.split("\n").forEach((l, i) => {
    if (l.length === 0) {
      return;
    }
    print(l, x, y, { isSmallText: true });
    y += 6;
  });
}

function drawScoreAndTime() {
  color("light_blue");
  const sw = (100 * score) / currentGameSpec.targetScore;
  rect(sw, 18, 100 - sw, 6);
  print(`${Math.floor(score)}`, 3, 21, {
    isSmallText: true,
  });
  const ts = `target ${currentGameSpec.targetScore}`;
  print(ts, 100 - ts.length * 4, 21, { isSmallText: true });
  color("light_red");
  const tw = ceil((100 * gameTime) / (gameTimeLimit * 60));
  rect(100 - tw, 24, tw, 6);
  print(`${Math.floor(gameTime / 60)}`, 3, 27, { isSmallText: true });
}

export function stop() {
  terminateCgl();
}

function endTimeAttackGame() {
  terminateBgm();
  loop.terminateGameUpdate();
  currentStarCount = Math.floor(currentStarCount);
  starCount += currentStarCount;
  setStarCount(starCount);
  let gc = Math.floor(starCount / starsPerGame) + initialUnlockedGameCount;
  let agc = gc - unlockedGameCount;
  unlockedGames = [];
  if (agc > 0) {
    unlockedGames = times(agc, unlockGame).filter((g) => g != null);
    unlockedGameCount += unlockedGames.length;
    setUnlockedGameCount(unlockedGameCount);
    setGameSpecs(gameSpecs);
  }
  currentGameState = "end";
  nextGameTicks = endGameDuration;
}

function unlockGame() {
  let gs: GameSpec;
  for (let i = 0; i < totalGameCount; i++) {
    gs = gameSpecs[shuffledGames[shuffledGameIndex]];
    if (gs.state === "closed") {
      gs.state = "open";
      return gs.title;
    }
    shuffledGameIndex++;
    if (shuffledGameIndex >= totalGameCount) {
      shuffledGameIndex = 0;
    }
  }
  return undefined;
}

const starCharacter = `
  yy
 yyyy
yyyyyy
 yyyy
 yyyy
yy  yy
`;
let starChar: string;

async function loadGames() {
  const importedGames = import.meta.glob<CglGame>("./games/*.js");
  for (const path in importedGames) {
    const game = await importedGames[path]();
    game.options.theme =
      game.options.theme === "dark" ||
      game.options.theme === "crt" ||
      game.options.theme === "pixel" ||
      game.options.theme === "shapeDark"
        ? "dark"
        : "simple";
    game.characters.push(starCharacter);
    cglGames[game.title] = game;
  }
}
