import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameLauncher from "./GameLauncher.tsx";
import "./index.css";
import * as games from "./gameManager.ts";

await games.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameLauncher />
  </StrictMode>
);
