import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import TimeLine from "./components/Timeline";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

const App = () => (
  <>
    <Navbar />
    <Header /> 
    <AboutMe/>
    <Skills />
    <TimeLine />
    <SlideShow/>
    <Footer/>
  </>
);

export default App;
