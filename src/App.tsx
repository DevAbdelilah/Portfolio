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

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-gray-800 py-8 text-center text-gray-400">
          <div className="container mx-auto px-6">
            <p>&copy; 2026 Abdel-ilah Charafi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Provider>
  );
};

export default App;
