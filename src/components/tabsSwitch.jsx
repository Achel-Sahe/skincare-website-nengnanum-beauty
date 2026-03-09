import React, { useState, useRef, useEffect } from "react";

const TabsSwitch = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [style, setStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeIndex];
    if (currentTab) {
      setStyle({
        width: currentTab.offsetWidth,
        transform: `translateX(${currentTab.offsetLeft}px)`
      });
    }
  }, [activeIndex]);

  return (
    <div className="tabs-container reveal reveal-delay-1">
      <h1 className="tabs-title reveal reveal-delay-2">Explore topics</h1>
      <div className="bloc-tabs reveal reveal-delay-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className="tabs"
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </div>
        ))}
        <span className="underline" style={style}></span>
      </div>

      <div className="content-tabs">
        <div className="content active-content reveal reveal-delay-4">
          {tabs[activeIndex].content}
        </div>
      </div>
    </div>
  );
};

export default TabsSwitch;