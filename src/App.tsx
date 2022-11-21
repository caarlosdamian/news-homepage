import React from "react";
import { Features, Header, Hero, News } from "./sections";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <News />
      <Features />
    </div>
  );
}

export default App;
