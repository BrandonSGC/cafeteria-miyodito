import { Link, NavLink } from "react-router-dom";

export const Header = ({page, title}) => {
  return (
    <>
      <header className={`header header-${page}`}>
        <div className="contenido-header contenedor">
          <div className="barra">
            <Link to='/' className="logo">
              <img src="/img/logo.png" alt="logo cafeteria" />
            </Link>

            <nav className="nav-principal">
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/about"
              >
                Nosotros
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/process"
              >
                Proceso
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/menu"
              >
                Menú
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/galery"
              >
                Galería
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive && "activo"}`}
                to="/contact"
              >
                Contacto
              </NavLink>
            </nav>
          </div>

          <div className="texto-header">
            <h1>{title}</h1>
          </div>
        </div>
      </header>
    </>
  );
};
