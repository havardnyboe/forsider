import "./App.sass";
import Forside, { forside } from "./components/Forside";
import Nav from "./components/Nav";
import aviser from "./content/aviser.json";

function App() {
  const forsider: Array<forside> = aviser;

  return (
    <>
      <main>
        <Nav links={forsider} />
        <div className="slider">
          {forsider.map((side) => (
            <Forside
              key={side.id}
              id={side.id}
              src={side.src}
              alt={side.alt}
              site={side.site}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
