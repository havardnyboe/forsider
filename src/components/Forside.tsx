import style from "./Forside.module.sass";

export interface forside {
  id: string
  src: URL;
  alt: string;
}

function Forside({ id, src, alt }: forside) {
  return (
    <section id={id} className={style.page}>
      <img src={src.toString()} alt={alt} />
    </section>
  );
}

export default Forside;
