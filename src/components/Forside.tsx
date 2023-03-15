import style from "./Forside.module.sass";

export interface forside {
  id: string;
  src: string;
  alt: string;
  site: string;
}

function Forside({ id, src, alt, site }: forside) {
  return (
    <section id={id} className={style.page}>
      <a href={site}>
        <img src={src} alt={alt} />
      </a>
    </section>
  );
}

export default Forside;
