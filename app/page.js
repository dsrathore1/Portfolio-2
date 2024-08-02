import Home from "./Components/Home";
import { ContactD } from "./Components/ContactD";
import Tech from "./Components/Technologies";
import Nav from "./Components/Nav";
import About from "./Components/About";
import WorkExp from "./Components/WorkExp";
import Project from "./Components/Projects";

export default function Main() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:text-purple-900 selection:bg-purple-300">
      <div className="absolute top-0 z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-10">
          <Nav />
          <Home />
          <About />
          <Tech />
          <WorkExp />
          <Project />
          <ContactD />
        </div>
      </div>
    </div>
  );
}
