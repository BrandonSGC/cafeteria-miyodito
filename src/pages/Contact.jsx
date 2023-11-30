import { useState } from "react";
import { Header } from "../components";
import { useForm } from "../hooks";
import { CreateReservation } from "../helpers";

export const Contact = () => {
  const { formState, onInputChange } = useForm();
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = {
      ...formState,
      cantPersonas: cantidad
    }
    await CreateReservation(data);
  };

  return (
    <>
      <Header page="contacto" title="Mejores granos, mejor café" />

      <main className="contenedor contenido-principal">
        <h2>
          <span>Reserva tu</span>Mesa
        </h2>

        <div className="contenido-contacto">
          <form onSubmit={handleSubmit} className="formulario">
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input
                onChange={onInputChange}
                type="text"
                id="nombre"
                name="nombreReserva"
                placeholder="Tu Nombre"
              />
            </div>
            <div className="campo">
              <label htmlFor="email">Email:</label>
              <input
                onChange={onInputChange}
                type="email"
                id="email"
                name="correo"
                placeholder="Tu Email"
              />
            </div>
            <div className="campo">
              <label htmlFor="email">Número de Personas:</label>
              <select
                defaultValue=""
                name="cantPersonas"
                onChange={(e) => setCantidad(e.target.value)}
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
              <input
                onChange={onInputChange}
                name="hora"
                type="time"
                id="hora"
                min="09:00"
                max="18:00"
              />
            </div>

            <div className="campo">
              <label htmlFor="fecha">Fecha:</label>
              <input
                name="fecha"
                onChange={onInputChange}
                type="date"
                id="fecha"
              />
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
