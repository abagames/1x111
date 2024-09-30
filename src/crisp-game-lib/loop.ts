import * as view from "./view";
import * as letter from "./letter";
import * as input from "./input";
import * as color from "./color";
import { VectorLike } from "./vector";
import exp from "constants";
declare const sss;

/** Name for an appearance theme. */
export type ThemeName =
  | "simple"
  | "pixel"
  | "shape"
  | "shapeDark"
  | "crt"
  | "dark";
/** @ignore */
export type Theme = {
  name: ThemeName;
  isUsingPixi: boolean;
  isDarkColor: boolean;
};

export type Options = {
  viewSize?: VectorLike;
  bodyBackground?: string;
  viewBackground?: color.Color;
  isCapturing?: boolean;
  isCapturingGameCanvasOnly?: boolean;
  isSoundEnabled?: boolean;
  captureCanvasScale?: number;
  captureDurationSec?: number;
  theme?: Theme;
};

let _init: () => void;
let _update: () => void;
const targetFps = 68;
const deltaTime = 1000 / targetFps;
let nextFrameTime = 0;
const defaultOptions: Options = {
  viewSize: { x: 100, y: 100 },
  bodyBackground: "#111",
  viewBackground: "black",
  isCapturing: false,
  isCapturingGameCanvasOnly: false,
  isSoundEnabled: true,
  captureCanvasScale: 1,
  theme: { name: "simple", isUsingPixi: false, isDarkColor: false },
};
let options: Options;
let textCacheEnableTicks: number;
let isLooping: boolean;

let updateFunc: () => void;

export function init(
  __init: () => void,
  __update: () => void,
  _options?: Options
) {
  _init = __init;
  _update = __update;
  options = { ...defaultOptions, ..._options };
  color.init(options.theme.isDarkColor);
  view.init(
    options.viewSize,
    options.bodyBackground,
    options.viewBackground,
    options.isCapturing,
    options.isCapturingGameCanvasOnly,
    options.captureCanvasScale,
    options.captureDurationSec,
    options.theme
  );
  input.init(options.isSoundEnabled ? sss.startAudio : () => {});
  letter.init();
  _init();
  isLooping = true;
  textCacheEnableTicks = 10;
  letter.clearAllCache();
  update();
}

export function terminate() {
  isLooping = false;
  view.terminate();
}

export function terminateGameUpdate() {
  _update = () => {};
}

export function setUpdateFunction(func: () => void) {
  updateFunc = func;
}

function update() {
  if (!isLooping) {
    return;
  }
  requestAnimationFrame(update);
  const now = window.performance.now();
  if (now < nextFrameTime - targetFps / 12) {
    return;
  }
  nextFrameTime += deltaTime;
  if (nextFrameTime < now || nextFrameTime > now + deltaTime * 2) {
    nextFrameTime = now + deltaTime;
  }
  if (options.isSoundEnabled) {
    sss.update();
  }
  input.update();
  _update();
  if (updateFunc != null) {
    updateFunc();
  }
  if (options.isCapturing) {
    view.capture();
  }
  textCacheEnableTicks--;
  if (textCacheEnableTicks === 0) {
    letter.enableCache();
  }
}
