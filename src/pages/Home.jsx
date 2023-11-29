export const Home = () => {
  return (
    <>
      <main class="contenedor contenido-principal text-center">
        <section class="conoce">
          <h2>
            <span>Conoce más</span> sobre nosotros{" "}
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
            tenetur, perferendis ipsa tempora soluta sunt hic consectetur
            blanditiis at unde, assumenda labore doloribus neque obcaecati vero
            odit aut adipisci ex! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis ipsa, rem optio consectetur nemo sunt
            ut placeat. In aperiam distinctio atque eveniet culpa! Similique,
            magnam? Cumque voluptatibus atque inventore dolor.
          </p>
        </section>

        <section class="iconos">
          <ul class="listado-iconos">
            <li>
              <img src="build/img/icono_cafe.svg" alt="icono café" />
              <p>Café</p>
            </li>

            <li>
              <img src="build/img/icono_postre.svg" alt="icono café" />
              <p>Postres</p>
            </li>

            <li>
              <img src="build/img/icono_te.svg" alt="icono café" />
              <p>Té</p>
            </li>
          </ul>
        </section>

        <section class="experiencia">
          <h2>
            <span>Vive la</span> experiencia{" "}
          </h2>

          <div class="galeria">
            <div class="imagen">
              <img src="build/img/galeria/galeria_01.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_02.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_03.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_04.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_05.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_06.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_07.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_08.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_09.jpg" alt="galeria" />
            </div>
            <div class="imagen">
              <img src="build/img/galeria/galeria_10.jpg" alt="galeria" />
            </div>
          </div>
        </section>
      </main>

      <section class="nuestro-menu">
        <h2 class="heading-blanco">
          <span>Nuestro delicioso</span>Menú
        </h2>

        <div class="contenedor grid-menu">
          <section class="menu cafe">
            <h3>Café</h3>
            <ul>
              <li>
                <p>
                  Café Latte{" "}
                  <span>Café Espresso con leche caliente evaporada</span>{" "}
                </p>
                <p class="precio">$25</p>
              </li>
              <li>
                <p>
                  Café Mocha <span>Espresso con crema batida</span>{" "}
                </p>
                <p class="precio">$30</p>
              </li>
              <li>
                <p>
                  Café Americano <span>Café Negro</span>{" "}
                </p>
                <p class="precio">$30</p>
              </li>
              <li>
                <p>
                  Capuccino<span>Espresso con una capa suave de espuma</span>{" "}
                </p>
                <p class="precio">$25</p>
              </li>
              <li>
                <p>
                  Café Mocha Frio<span>Espresso, dulce con mocha y leche.</span>{" "}
                </p>
                <p class="precio">$29</p>
              </li>
              <li>
                <p>
                  Mocha Frio Quemado
                  <span>
                    Espresso, hielo, con azucar quemada y mantequilla.
                  </span>{" "}
                </p>
                <p class="precio">$35</p>
              </li>
              <li>
                <p>
                  Latte con Caramelo<span>Espresso, leche y caramelo.</span>{" "}
                </p>
                <p class="precio">$39</p>
              </li>
            </ul>
          </section>

          <section class="menu comida">
            <h3>Comida</h3>

            <ul>
              <li>
                <p>
                  Baguette de Pollo{" "}
                  <span>Delicioso Baguette con pollo a la plancha</span>{" "}
                </p>
                <p class="precio">$45</p>
              </li>
              <li>
                <p>
                  Baguette Pollo y Queso{" "}
                  <span>Baguette combinado con Pollo y Queso Manchego</span>{" "}
                </p>
                <p class="precio">$50</p>
              </li>
              <li>
                <p>
                  Baguette con Tocino
                  <span>
                    Baguette con especias y verduras, además de tocino
                  </span>{" "}
                </p>
                <p class="precio">$50</p>
              </li>
              <li>
                <p>
                  Baguette de Jamón
                  <span>Delicioso Baguette con Jamón y Especias</span>{" "}
                </p>
                <p class="precio">$65</p>
              </li>
              <li>
                <p>
                  Baguette con Jamón, Queso y Tocino
                  <span>El especial de la casa</span>{" "}
                </p>
                <p class="precio">$69</p>
              </li>
              <li>
                <p>
                  Sandwich de Pollo
                  <span>Delicioso sandwich con Pollo y especies</span>{" "}
                </p>
                <p class="precio">$65</p>
              </li>
              <li>
                <p>
                  Sandwich de Jamón y queso
                  <span>Queso Amarillo con Jamón y Queso</span>{" "}
                </p>
                <p class="precio">$59</p>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section class="nuestros-testimoniales contenedor bg-white margin-negativo-10">
        <h2>
          <span>Lo que dicen nuestros</span>Clientes
        </h2>

        <div class="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            aliquam eum eligendi animi aut odit aperiam magnam quisquam natus,
            beatae a voluptatibus odio eveniet impedit labore optio unde quis?
            Magni!
          </p>

          <p class="autor">- Juan De la torre</p>
        </div>
      </section>
    </>
  );
};
