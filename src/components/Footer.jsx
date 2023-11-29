import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contenedor contenido-footer bg-white">
          <div className="footer-box ubicacion">
            <h3>Ubicación</h3>
            <p>San Josecito</p>
            <p>Alajuelita, San José</p>
          </div>
          <div className="footer-box reservacion">
            <h3>Reservación</h3>
            <p>Tel. 7042-8451</p>
            <Link to="tel:+50670428451">Llamar</Link>
          </div>
          <div className="footer-box horario">
            <h3>Horario</h3>
            <p>Lun-Jue: 11:00 - 22:00</p>
            <p>Vie-Sab: 09:00 - 24:00</p>
            <p>Domingo: Cerrado</p>
          </div>
        </div>
        <p className="copyright">Todos los derechos reservados. MiYodito</p>
      </footer>
    </>
  );
};
