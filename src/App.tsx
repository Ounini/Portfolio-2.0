import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <Header />
          <Hero />
        </div>
      </header>

      <main>
        <Projects />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
