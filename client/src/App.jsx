import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <SkillSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
