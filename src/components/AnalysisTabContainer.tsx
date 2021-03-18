import { ANALYSIS_TABS } from "../data/analysis-tabs";
import PDF, { Html } from "jspdf-react";

type AnalysisTabContainerComponent = {
  onTabChange: (id: number) => void;
  activeTab: number;
};

const AnalysisTabContainer: React.FC<AnalysisTabContainerComponent> = ({
  onTabChange,
  activeTab,
}) => {
  return (
    <>
      <ul id="tab_container">
        {ANALYSIS_TABS.map(({ id, content }) => {
          return (
            <li
              className="tab"
              onClick={() => {
                onTabChange(id);
              }}
              key={`tab-${id}`}
            >
              <header>Analysis Tab {id}</header>
              {activeTab === id ? (
                <>
                  <section className="content" id={`content_${id}`}>
                    <img src={content} alt="content" />
                  </section>
                  <PDF save={true}>
                    <Html sourceById={`content_${id}`} />
                  </PDF>
                </>
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AnalysisTabContainer;
