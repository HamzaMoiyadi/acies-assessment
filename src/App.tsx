import React, { useState } from "react";
import "./App.css";
import AnalysisTabContainer from "./components/AnalysisTabContainer";
import Header from "./components/Header";
import Utilities from "./components/Utlilities";

function App() {
  // eslint-disable-next-line no-restricted-globals
  const urlID = parseInt(location.pathname.replace("/", ""));
  let state = 1;
  if (!isNaN(urlID) && urlID <= 3 && urlID >= 1) {
    state = urlID;
  } else {
    // eslint-disable-next-line no-restricted-globals
    location.pathname = `/${state}`;
  }
  const [activeTab, setActiveTab] = useState(state);

  return (
    <>
      <Header activeTab={activeTab} />
      <main>
        <Utilities tabId={activeTab} />
        <AnalysisTabContainer
          onTabChange={(tabId) => {
            setActiveTab((tn) => (tn = tabId));
            // eslint-disable-next-line no-restricted-globals
            location.pathname = `/${tabId}`;
          }}
          activeTab={activeTab}
        />
      </main>
    </>
  );
}

export default App;
