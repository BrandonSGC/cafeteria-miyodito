import { Header } from "../components";

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

      <section className="nuestro-menu">
        <h2 className="heading-blanco">
          <span>Nuestro delicioso</span>Menú
        </h2>

        <div className="contenedor grid-menu">
          <section className="menu cafe">
            <h3>Café</h3>
            <ul>
              <li>
                <p>
                  Café Latte{" "}
                  <span>Café Espresso con leche caliente evaporada</span>{" "}
                </p>
                <p className="precio">$25</p>
              </li>
              <li>
                <p>
                  Café Mocha <span>Espresso con crema batida</span>{" "}
                </p>
                <p className="precio">$30</p>
              </li>
              <li>
                <p>
                  Café Americano <span>Café Negro</span>{" "}
                </p>
                <p className="precio">$30</p>
              </li>
              <li>
                <p>
                  Capuccino<span>Espresso con una capa suave de espuma</span>{" "}
                </p>
                <p className="precio">$25</p>
              </li>
              <li>
                <p>
                  Café Mocha Frio<span>Espresso, dulce con mocha y leche.</span>{" "}
                </p>
                <p className="precio">$29</p>
              </li>
              <li>
                <p>
                  Mocha Frio Quemado
                  <span>
                    Espresso, hielo, con azucar quemada y mantequilla.
                  </span>{" "}
                </p>
                <p className="precio">$35</p>
              </li>
              <li>
                <p>
                  Latte con Caramelo<span>Espresso, leche y caramelo.</span>{" "}
                </p>
                <p className="precio">$39</p>
              </li>
            </ul>
          </section>

          <section className="menu comida">
            <h3>Comida</h3>

            <ul>
              <li>
                <p>
                  Baguette de Pollo{" "}
                  <span>Delicioso Baguette con pollo a la plancha</span>{" "}
                </p>
                <p className="precio">$45</p>
              </li>
              <li>
                <p>
                  Baguette Pollo y Queso{" "}
                  <span>Baguette combinado con Pollo y Queso Manchego</span>{" "}
                </p>
                <p className="precio">$50</p>
              </li>
              <li>
                <p>
                  Baguette con Tocino
                  <span>
                    Baguette con especias y verduras, además de tocino
                  </span>{" "}
                </p>
                <p className="precio">$50</p>
              </li>
              <li>
                <p>
                  Baguette de Jamón
                  <span>Delicioso Baguette con Jamón y Especias</span>{" "}
                </p>
                <p className="precio">$65</p>
              </li>
              <li>
                <p>
                  Baguette con Jamón, Queso y Tocino
                  <span>El especial de la casa</span>{" "}
                </p>
                <p className="precio">$69</p>
              </li>
              <li>
                <p>
                  Sandwich de Pollo
                  <span>Delicioso sandwich con Pollo y especies</span>{" "}
                </p>
                <p className="precio">$65</p>
              </li>
              <li>
                <p>
                  Sandwich de Jamón y queso
                  <span>Queso Amarillo con Jamón y Queso</span>{" "}
                </p>
                <p className="precio">$59</p>
              </li>
            </ul>
          </section>
        </div>
      </section>

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
