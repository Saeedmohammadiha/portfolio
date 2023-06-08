import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import TimeLine from "./components/Timeline";

const App = () => (
  <>
    <Navbar />
    <Header />
    <Skills />
    <TimeLine />
  </>
);

export default App;
