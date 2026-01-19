import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundEffect from "./components/ui/BackgroundEffect";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
const App = () => {
  return (
    <main className="App w-full h-screen relative">
      <BackgroundEffect />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Pricing />
    </main>
  );
};

export default App;
