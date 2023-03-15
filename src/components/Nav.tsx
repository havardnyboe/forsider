import { MouseEventHandler } from "react";
import { forside } from "./Forside";
import style from "./Nav.module.sass";

interface Nav {
  onClick: MouseEventHandler<HTMLElement>;
  links: Array<forside>;
}

function Nav({ onClick, links }: Nav) {
  return (
    <nav className={style.nav} onClick={onClick}>
      <ul>
        {links.map((side: forside) => (
          <li key={side.id}>
            <a href={"#" + side.id}>{side.alt}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
