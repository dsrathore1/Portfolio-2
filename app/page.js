import About from "./(Pages)/about/page";
import Home from "./(Pages)/home/page";
import WorkExp from "./(Pages)/workExp/page";
import Nav from "./Components/Nav";
import Tech from "./Components/Technologies";

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
        </div>
      </div>
    </div>
  );
}
