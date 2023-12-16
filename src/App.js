import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
