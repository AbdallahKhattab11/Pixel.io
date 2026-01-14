import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundEffect from "./components/ui/BackgroundEffect";
import HeroTest from "./components/HeroTest";

const App = () => {
  return (
    <main className="App w-full h-screen relative">
      <BackgroundEffect />
      <Navbar />
      <Hero />
      {/* <HeroTest /> */}
    </main>
  );
};

export default App;
