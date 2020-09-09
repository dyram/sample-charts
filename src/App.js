import React from "react";
import GridLayout from "react-grid-layout";
import "./App.css";

import BarMain from "./components/BarGraph/BarMain";
import NivoBar from "./components/NivoGraph/NivoBar";

// import FirstPerson from "./components/ChatBox/FirstPerson";
import VideoPlayer from "./components/XstatePlayer/Player";

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <div className="App">
      <BarMain />
      <br />
      <NivoBar />
      <br />
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={60}
        width={2000}
        isDraggable={true}
      >
        <div key="a">
          <BarMain />
        </div>
        <div key="b">
          <BarMain />
        </div>
        <div key="c">
          <BarMain />
        </div>
      </GridLayout>
      <br />
      {/* This is the chat using RxJs */}
      {/* <FirstPerson /> */}

      {/* VideoPlayer using Xstate */}
      <VideoPlayer />
    </div>
  );
}

export default App;
