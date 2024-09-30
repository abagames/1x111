import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as gameManager from "./gameManager";
import {
  GameSpec,
  GameState,
  gameSpecs as initialGameSpecs,
  starCount as initialStarCount,
  unlockedGameCount as initialUnlockedGameCount,
} from "./gameManager";

const GameModes = ["Normal", "Hard", "Expert", "Endless"];
const emptyGameSpec: GameSpec = {
  id: -1,
  title: "",
  screenshot: "",
  state: GameState.CLOSED,
  targetScore: 0,
};

const GameLauncher = () => {
  const [gameSpecs, setGameSpecs] = useState(initialGameSpecs);
  const [selectedGame, setSelectedGame] = useState<GameSpec>(emptyGameSpec);
  const [gameModeIndex, setGameModeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [starCount, setStarCount] = useState(initialStarCount);
  const [unlockedGameCount, setUnlockedGameCount] = useState(
    initialUnlockedGameCount
  );

  const currentGameMode = GameModes[gameModeIndex];

  window.addEventListener("keydown", () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  });

  useEffect(() => {
    if (isPlaying) {
      gameManager.start(
        gameModeIndex,
        selectedGame,
        gameSpecs,
        setGameSpecs,
        setIsPlaying,
        setStarCount,
        setUnlockedGameCount
      );
    }
  }, [isPlaying]);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const toggleGameState = (gameId) => {
    setGameSpecs((prevState) =>
      prevState.map((game) =>
        game.id === gameId ? { ...game, state: getNextState(game.state) } : game
      )
    );
    if (selectedGame && selectedGame.id === gameId) {
      setSelectedGame((prevGame) => ({
        ...prevGame,
        state: getNextState(prevGame.state),
      }));
    }
  };

  const getNextState = (currentState) => {
    switch (currentState) {
      case GameState.OPEN:
        return GameState.BANNED;
      case GameState.BANNED:
        return GameState.OPEN;
      case GameState.CLOSED:
        return GameState.CLOSED;
    }
  };

  const changeGameMode = (direction) => {
    setGameModeIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % GameModes.length;
      } else {
        return (prevIndex - 1 + GameModes.length) % GameModes.length;
      }
    });
  };

  const renderGame = (game) => {
    let content;
    switch (game.state) {
      case GameState.OPEN:
        content = (
          <img
            src={game.screenshot}
            alt={game.title}
            className="w-[50px] h-[50px]"
          />
        );
        break;
      case GameState.CLOSED:
        content = <div className="w-[50px] h-[50px] bg-gray-400"></div>;
        break;
      case GameState.BANNED:
        content = (
          <div className="relative w-[50px] h-[50px]">
            <img
              src={game.screenshot}
              alt={game.title}
              className="w-full h-full"
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
  };

  if (isPlaying) {
    return (
      <div className="fixed inset-0 z-50">
        <Button
          className="absolute top-4 right-4"
          onClick={() => {
            gameManager.stop();
            setIsPlaying(false);
          }}
        >
          Exit Game
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 p-4 mb-4 flex justify-between items-center">
        <Button
          onClick={() => {
            setSelectedGame(emptyGameSpec);
            handlePlay();
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
            <p className="text-sm font-bold">{selectedGame.title}</p>
          </div>
          <div>
            <Button
              onClick={handlePlay}
              size="sm"
              className="mr-2"
              disabled={selectedGame.state === GameState.CLOSED}
            >
              Play
            </Button>
            {selectedGame.state !== GameState.CLOSED && (
              <Button
                onClick={() => toggleGameState(selectedGame.id)}
                variant="outline"
                size="sm"
              >
                {selectedGame.state === GameState.BANNED ? "Open" : "Ban"}
              </Button>
            )}
          </div>
        </div>
      )}
      {selectedGame.id === -1 && (
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
    </div>
  );
};

export default GameLauncher;
