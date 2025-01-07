import { useState, useEffect } from "react";

import HelpScreen from "./screens/HelpScreen";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

const GameNavigator = () => {
  const [helpVisible, setHelpVisible] = useState(false);
  const [selectedGameMode, setSelectedGameMode] = useState();

  let screen = (
    <HomeScreen
      onGameModeSelected={setSelectedGameMode}
      onPressHelp={() => setHelpVisible(true)}
    />
  );

  if (helpVisible) {
    screen = <HelpScreen onPressHome={() => setHelpVisible(false)} />;
  } else if (selectedGameMode) {
    screen = (
      <GameScreen
        mode={selectedGameMode}
        onGoToHome={() => setSelectedGameMode()}
      />
    );
  }

  return screen;
};

export default GameNavigator;
