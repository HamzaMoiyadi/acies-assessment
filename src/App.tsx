import React, { useState } from "react";
import "./App.css";
import AnalysisTabContainer from "./components/AnalysisTabContainer";
import Header from "./components/Header";
import Utilities from "./components/Utlilities";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Header activeTab={activeTab} />
      <main>
        <Utilities tabId={activeTab} />
        <AnalysisTabContainer
          onTabChange={(tabId) => {
            setActiveTab((tn) => (tn = tabId));
          }}
          activeTab={activeTab}
        />
      </main>
    </>
  );
}

export default App;
