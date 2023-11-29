import { Header } from "../components";

export const Galery = () => {
  return (
    <>
      <Header page="galeria" title="Disfruta una deliciosa taza de café"/>

      <main className="contenedor contenido-principal">
        <h2>
          <span>Vive la</span> experiencia{" "}
        </h2>

        <div className="galeria">
          <div className="imagen">
            <img src="/img/galeria/galeria_01.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_02.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_03.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_04.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_05.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_06.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_07.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_08.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_09.jpg" alt="galeria" />
          </div>
          <div className="imagen">
            <img src="/img/galeria/galeria_10.jpg" alt="galeria" />
          </div>
        </div>
      </main>
    </>
  );
};
