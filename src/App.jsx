import React from "react";
import Background from "./componenets/Background";
import Foreground from "./componenets/Foreground";
function App() {
  return (
    <div className=" relative w-full h-screen bg-zinc-800">
      <Background></Background>
      <Foreground></Foreground>
    </div>
  );
}

export default App;
