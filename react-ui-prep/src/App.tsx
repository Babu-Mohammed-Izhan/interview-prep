import { useState } from "react";
import "./App.css";
import Tab from "./components/Tab";
import { projectsConfig } from "./constants/config";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const ActiveTabComponent = projectsConfig[currentTab].component;
  return (
    <>
      <div className="title">React UI Prep</div>
      <div className="tabs">
        {projectsConfig.map(({ title }, index) => {
          return (
            <Tab
              name={title}
              onClick={() => setCurrentTab(index)}
              isActive={currentTab === index}
            />
          );
        })}
      </div>
      <div className="active_component_wrapper">
        <ActiveTabComponent />
      </div>
    </>
  );
}

export default App;
