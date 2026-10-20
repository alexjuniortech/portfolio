import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
// import { Projects } from "./components/Projects";
import { Leadership } from "./components/Leadership";
// import { Certifications } from "./components/Certifications";
// import { StackChart } from "./components/StackChart";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        <Leadership />
        {/* <Certifications /> */}
        {/* <StackChart /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
