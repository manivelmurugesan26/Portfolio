import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import "./App.css";
import Experience from "./component/Experience";
import Certificates from "./component/Certificate";

function App() {
  return (
    <div className="App">
     <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
