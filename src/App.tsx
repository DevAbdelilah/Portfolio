import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 Abdel-ilah Charafi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Provider>
  );
};

export default App;
