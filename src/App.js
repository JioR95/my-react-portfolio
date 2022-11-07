import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <About/>
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
