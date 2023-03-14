import "./App.sass";
import Forside, { forside } from "./components/Forside";

const forsider: Array<forside> = [
  {
    id: "aftenposten",
    src: new URL(
      "https://www.buyandread.com/static/thumbnail/aftenposten_morgen/aftenposten_morgen-xlarge.jpg"
    ),
    alt: "Aftenposten Morgen",
  },
  {
    id: "dagensnaringsliv",
    src: new URL(
      "https://www.buyandread.com/static/thumbnail/dagensnaringsliv/dagensnaringsliv-xlarge.jpg"
    ),
    alt: "Dagens Næringsliv",
  },
  {
    id: "verdensgang",
    src: new URL(
      "https://www.buyandread.com/static/thumbnail/verdensgang/verdensgang-xlarge.jpg"
    ),
    alt: "VG",
  },
];

function App() {
  return (
    <main className="slider">
      {forsider.map((side) => (
        <Forside key={side.id} id={side.id} src={side.src} alt={side.alt} />
      ))}
    </main>
  );
}

export default App;
