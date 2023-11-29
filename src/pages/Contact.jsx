import { Header } from "../components";

export const Contact = () => {
  return (
    <>
      <Header page="contacto" title="Mejores granos, mejor café" />

      <main className="contenedor contenido-principal">
        <h2>
          <span>Reserva tu</span>Mesa
        </h2>

        <div className="contenido-contacto">
          <form className="formulario">
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" placeholder="Tu Nombre" />
            </div>
            <div className="campo">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Tu Email" />
            </div>
            <div className="campo">
              <label htmlFor="email">Número de Personas:</label>
              <select
                defaultValue=""
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="" disabled>
                  -- Seleccione --
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="hora">Hora:</label>
              <input type="time" id="hora" min="09:00" max="18:00" />
            </div>

            <div className="campo">
              <label htmlFor="fecha">Fecha:</label>
              <input type="date" id="fecha" />
            </div>
            <div className="campo">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
