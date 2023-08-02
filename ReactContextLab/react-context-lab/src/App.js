import React from "react";
import TeamsProvider from "./components/TeamsProvider";
import TeamSelection from "./components/TeamSelection";
import TeamData from "./components/TeamData";

const App = () => {
  return (
    <TeamsProvider>
      <TeamSelection />
      <TeamData />
    </TeamsProvider>
  );
};

export default App;
