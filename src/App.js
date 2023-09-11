import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./FrontEnd/Home";
import About from "./FrontEnd/About";
import Skills from "./FrontEnd/Skills";
import Experience from "./FrontEnd/Experience";
import Contact from "./FrontEnd/Contact";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
