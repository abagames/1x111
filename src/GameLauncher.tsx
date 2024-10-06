import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import * as gameManager from "./gameManager";
import {
  GameSpec,
  localStorageKey,
  version,
  gameModeIndex as initialGameModeIndex,
  gameSpecs as initialGameSpecs,
  starCount as initialStarCount,
  unlockedGameCount as initialUnlockedGameCount,
  initGameState,
} from "./gameManager";

const gameModes = ["Normal", "Hard", "Expert", "Endless"];
const emptyGameSpec: GameSpec = {
  id: -1,
  title: "",
  screenshot: "",
  state: "closed",
  targetScore: 0,
};
let cancelCount = 0;

const GameLauncher = () => {
  const [gameSpecs, setGameSpecs] = useState(initialGameSpecs);
  const [selectedGame, setSelectedGame] = useState<GameSpec>(emptyGameSpec);
  const [gameModeIndex, setGameModeIndex] = useState(initialGameModeIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [starCount, setStarCount] = useState(initialStarCount);
  const [unlockedGameCount, setUnlockedGameCount] = useState(
    initialUnlockedGameCount
  );
  const [isResetting, setIsResetting] = useState(false);
  const [allGamesBanned, setAllGamesBanned] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const currentGameMode = gameModes[gameModeIndex];

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const startGame = (e: KeyboardEvent) => {
      if (
        !(
          e.key.startsWith("Arrow") ||
          e.key === "PageUp" ||
          e.key === "PageDown" ||
          e.key === "Home" ||
          e.key === "End" ||
          e.key === "Tab" ||
          e.key === "Escape" ||
          e.ctrlKey ||
          e.altKey
        )
      ) {
        startPlaying();
      }
    };
    if (
      !isPlaying &&
      (selectedGame.id === emptyGameSpec.id || selectedGame.state !== "closed")
    ) {
      addEventListener("keydown", startGame);
    }
    return () => {
      removeEventListener("keydown", startGame);
    };
  }, [isPlaying, selectedGame]);

  useEffect(() => {
    const escapeFromGame = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        stopPlaying();
      }
    };
    if (isPlaying) {
      addEventListener("keydown", escapeFromGame);
    }
    return () => {
      removeEventListener("keydown", escapeFromGame);
    };
  }, [isPlaying]);

  useEffect(() => {
    saveGameState();
  }, [gameSpecs, gameModeIndex, starCount, unlockedGameCount]);

  useEffect(() => {
    if (isPlaying) {
      cancelCount = 0;
      gameManager.start(
        gameModeIndex,
        selectedGame,
        gameSpecs,
        stopPlaying,
        updateGameSpecs
      );
    } else {
      gameManager.stop();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (gameContainerRef.current) {
      gameContainerRef.current.style.display = "none";
      void gameContainerRef.current.offsetHeight;
      gameContainerRef.current.style.display = "";
    }
  }, [isPlaying, windowDimensions]);

  const startPlaying = () => {
    setIsPlaying(true);
  };

  const stopPlaying = useCallback(() => {
    setIsPlaying(false);
    if (gameContainerRef.current) {
      gameContainerRef.current.style.display = "none";
      void gameContainerRef.current.offsetHeight;
      gameContainerRef.current.style.display = "";
    }
  }, []);

  const updateGameSpecs = useCallback(
    (gameSpecs, starCount, unlockedGameCount) => {
      setGameSpecs(gameSpecs);
      setStarCount(starCount);
      setUnlockedGameCount(unlockedGameCount);
    },
    []
  );

  const checkAllGamesBanned = useCallback(() => {
    const allBanned = gameSpecs.every(
      (game) => game.state === "banned" || game.state === "closed"
    );
    setAllGamesBanned(allBanned);
  }, [gameSpecs]);

  useEffect(() => {
    checkAllGamesBanned();
  }, [gameSpecs, checkAllGamesBanned]);

  const handleGameSelect = useCallback((game) => {
    cancelCount = 0;
    setSelectedGame((prevSelectedGame) =>
      prevSelectedGame.id === game.id ? emptyGameSpec : game
    );
  }, []);

  const toggleGameState = useCallback((gameId) => {
    setGameSpecs((prevState) =>
      prevState.map((game) =>
        game.id === gameId ? { ...game, state: getNextState(game.state) } : game
      )
    );
    setSelectedGame((prevGame) =>
      prevGame && prevGame.id === gameId
        ? { ...prevGame, state: getNextState(prevGame.state) }
        : prevGame
    );
  }, []);

  const getNextState = (currentState) => {
    switch (currentState) {
      case "open":
        return "banned";
      case "banned":
        return "open";
      case "closed":
        return "closed";
    }
  };

  const changeGameMode = useCallback((direction) => {
    setGameModeIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % gameModes.length;
      } else {
        return (prevIndex - 1 + gameModes.length) % gameModes.length;
      }
    });
  }, []);

  const renderGame = useCallback(
    (game) => {
      let content;
      switch (game.state) {
        case "open":
          content = (
            <img
              src={game.screenshot}
              alt={game.title}
              className="w-[50px] h-[50px] object-cover"
              loading="lazy"
            />
          );
          break;
        case "closed":
          content = <div className="w-[50px] h-[50px] bg-gray-400"></div>;
          break;
        case "banned":
          content = (
            <div className="relative w-[50px] h-[50px]">
              <img
                src={game.screenshot}
                alt={game.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-red-600 text-4xl font-bold">X</span>
              </div>
            </div>
          );
          break;
        default:
          content = null;
      }

      return (
        <div
          key={game.id}
          className="w-[50px] h-[50px] cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleGameSelect(game)}
        >
          {content}
        </div>
      );
    },
    [handleGameSelect]
  );

  const handleReset = () => {
    setIsResetting(true);
  };

  const confirmReset = useCallback(() => {
    cancelCount = 0;
    initGameState();
    setGameSpecs(initialGameSpecs);
    setSelectedGame(emptyGameSpec);
    setGameModeIndex(initialGameModeIndex);
    setStarCount(initialStarCount);
    setUnlockedGameCount(initialUnlockedGameCount);
    setIsResetting(false);
    localStorage.removeItem(localStorageKey);
  }, []);

  const cancelReset = useCallback(() => {
    setIsResetting(false);
    cancelCount++;
    if (cancelCount === 5) {
      setGameSpecs((prevSpecs) =>
        prevSpecs.map((g) =>
          g.state === "closed" ? { ...g, state: "open" as const } : g
        )
      );
      setUnlockedGameCount((prevCount) => gameSpecs.length);
    }
  }, [gameSpecs.length]);

  const toggleAllGames = useCallback(() => {
    const newState = allGamesBanned ? "open" : "banned";
    setGameSpecs((prevSpecs) =>
      prevSpecs.map((game) =>
        game.state !== "closed" ? { ...game, state: newState } : game
      )
    );
    setSelectedGame((prevGame) =>
      prevGame && prevGame.state !== "closed"
        ? { ...prevGame, state: newState }
        : prevGame
    );
  }, [allGamesBanned]);

  if (isPlaying) {
    return (
      <div className="fixed inset-0 z-50">
        <Button className="absolute top-4 right-4" onClick={stopPlaying}>
          Exit Game
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4" ref={gameContainerRef}>
      <div className="bg-gray-800 p-4 mb-4 flex justify-between items-center">
        <Button
          onClick={() => {
            setSelectedGame(emptyGameSpec);
            startPlaying();
          }}
          variant="outline"
          size="sm"
        >
          Play
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => changeGameMode("prev")}
            variant="outline"
            size="sm"
          >
            &lt;
          </Button>
          <span className="text-sm font-medium w-20 text-center text-white">
            {currentGameMode}
          </span>
          <Button
            onClick={() => changeGameMode("next")}
            variant="outline"
            size="sm"
          >
            &gt;
          </Button>
        </div>
      </div>

      {selectedGame.id >= 0 && (
        <div className="mb-4 p-4 border rounded flex items-center space-x-4">
          {renderGame(selectedGame)}
          <div>
            <p className="text-sm font-bold">
              {selectedGame.state === "closed" ? "???" : selectedGame.title}
            </p>
          </div>
          <div>
            <Button
              onClick={startPlaying}
              size="sm"
              className="mr-2"
              disabled={selectedGame.state === "closed"}
            >
              Play
            </Button>
            {selectedGame.state !== "closed" && (
              <Button
                onClick={() => toggleGameState(selectedGame.id)}
                variant="outline"
                size="sm"
              >
                {selectedGame.state === "banned" ? "Open" : "Ban"}
              </Button>
            )}
          </div>
        </div>
      )}
      {selectedGame.id === emptyGameSpec.id && (
        <div className="mb-4 p-4 border rounded flex items-center space-x-4">
          {renderGame(selectedGame)}
        </div>
      )}

      <div className="mb-4 p-4 border rounded flex items-center space-x-4">
        <div>
          <p className="text-m font-bold">★ x {starCount}</p>
        </div>
        <div>
          <p className="text-m">{unlockedGameCount} games unlocked</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">{gameSpecs.map(renderGame)}</div>

      <div className="mt-4 flex justify-between items-center">
        <Button onClick={toggleAllGames} variant="outline" size="sm">
          {allGamesBanned ? "Open All Games" : "Ban All Games"}
        </Button>
        <div className="space-x-2">
          {!isResetting ? (
            <Button onClick={handleReset} variant="destructive" size="sm">
              Reset Game
            </Button>
          ) : (
            <>
              <Button onClick={confirmReset} variant="destructive" size="sm">
                Confirm Reset
              </Button>
              <Button onClick={cancelReset} variant="outline" size="sm">
                Cancel Reset
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  function saveGameState() {
    try {
      const data = {
        version,
        state: {},
        gameModeIndex: gameModeIndex,
        starCount: starCount,
        unlockedGameCount: unlockedGameCount,
      };
      gameSpecs.forEach((gs) => {
        data.state[gs.id] = gs.state;
      });
      localStorage.setItem(localStorageKey, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving game state:", error);
    }
  }
};

export default GameLauncher;
