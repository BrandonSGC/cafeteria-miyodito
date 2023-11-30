import { Header, Menu } from "../components";

export const Home = () => {
  return (
    <>
      <Header page="inicio" title="Disfruta una deliciosa taza de café"/>
      <main className="contenedor contenido-principal text-center">
        <section className="conoce">
          <h2>
            <span>Conoce más</span> sobre nosotros{" "}
          </h2>

          <p>
            Bienvenido a Miyodito, tu rincón acogedor para disfrutar del mejor
            café. Con granos seleccionados y ambiente encantador, cada visita es
            una experiencia única. Déjate llevar por nuestros postres
            artesanales y descubre la armonía en cada sorbo. ¡Miyodito, donde
            los momentos simples se vuelven extraordinarios!
          </p>
        </section>

        <section className="iconos">
          <ul className="listado-iconos">
            <li>
              <img src="/img/icono_cafe.svg" alt="icono café" />
              <p>Café</p>
            </li>

            <li>
              <img src="/img/icono_postre.svg" alt="icono café" />
              <p>Postres</p>
            </li>

            <li>
              <img src="/img/icono_te.svg" alt="icono café" />
              <p>Té</p>
            </li>
          </ul>
        </section>

        <section className="experiencia">
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
        </section>
      </main>

      <Menu />

      <section className="nuestros-testimoniales contenedor bg-white margin-negativo-10">
        <h2>
          <span>Lo que dicen nuestros</span>Clientes
        </h2>

        <div className="testimonial">
          <p>
          En Miyodito, encontré la perfección en cada sorbo. Tiene un sabor excepcional que conquistó mi paladar. Desde el primer hasta el último sorbo, Miyodito superó mis expectativas. ¡Un lugar donde la calidad del café se fusiona con el arte de brindar una experiencia única!
          </p>

          <p className="autor">- Brandon Gómez</p>
        </div>
      </section>
    </>
  );
};
