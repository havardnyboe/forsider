import { MouseEventHandler, useRef, useState } from "react";
import "./App.sass";
import Forside, { forside } from "./components/Forside";
import Nav from "./components/Nav";
import aviser from "./content/aviser.json";

function App() {
  const forsider: Array<forside> = aviser;
  const [navHidden, setNavHidden] = useState(true);

  function toggleNav() {
    setNavHidden((prev) => !prev);
    const checkbox: any = document.getElementById("toggleNav");
    checkbox.checked = navHidden;
  }

  return (
    <>
      {navHidden ? null : <Nav onClick={toggleNav} links={forsider} />}
      <input type="checkbox" id="toggleNav" onClick={toggleNav}/>
      <label className="toggleNav" htmlFor="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <main>
        <div className="slider">
          {forsider.map((side) => (
            <Forside key={side.id} id={side.id} src={side.src} alt={side.alt} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
