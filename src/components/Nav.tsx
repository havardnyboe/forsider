import { useState } from "react";
import { forside } from "./Forside";
import style from "./Nav.module.sass";

interface Nav {
  links: Array<forside>;
}

function Nav({ links }: Nav) {
  const [navHidden, setNavHidden] = useState(true);

  function toggleNav() {
    setNavHidden((prev) => !prev);
    const checkbox: any = document.getElementById("toggleNav");
    checkbox.checked = navHidden;
  }
  return (
    <>
      {navHidden ? null : (
        <nav className={style.nav} onClick={toggleNav}>
          <ul>
            {links.map((side: forside) => (
              <li key={side.id}>
                <a href={"#" + side.id}>{side.alt}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <input type="checkbox" className={style.toggleNavCheck} id="toggleNav" onClick={toggleNav} />
      <label className={style.toggleNav} htmlFor="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
}

export default Nav;
