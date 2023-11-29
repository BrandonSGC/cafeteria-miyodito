import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="header header-inicio">
        <div className="contenido-header contenedor">
          <div className="barra">
            <div className="logo">
              <img src="build/img/logo.svg" alt="logo cafeteria" />
            </div>

            <nav className="nav-principal">
              <Link className="activo" to="/">
                Inicio
              </Link>
              <Link to="/about">Nosotros</Link>
              <Link to="/process">Proceso</Link>
              <Link to="/menu">Menú</Link>
              <Link to="/galery">Galería</Link>
              <Link to="/contact">Contacto</Link>
            </nav>
          </div>

          <div className="texto-header">
            <h1>Disfruta una deliciosa taza de café</h1>
          </div>
        </div>
      </header>
    </>
  );
};
