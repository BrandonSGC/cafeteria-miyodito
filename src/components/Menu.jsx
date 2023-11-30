import { useEffect, useState } from "react";
import { GetMenu } from "../helpers";
import { Spinner } from "./Spinner";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMenu = async () => {
      const something = await GetMenu();
      setProducts(something);
      setIsLoading(false);
    };

    getMenu();
  }, []);

  return (
    <>
      <section className="nuestro-menu">
        <h2 className="heading-blanco">
          <span>Nuestro delicioso</span>Menú
        </h2>

        <div className="contenedor grid-menu">
          <section className="menu cafe">
            <h3>Bebidas</h3>
            <ul>
              {isLoading && <Spinner />}
              {products.map((product) => {
                if (product.nombreCategoria === "Bebidas") {
                  return (
                    <li key={product.idProducto}>
                      <p>
                        {product.nombreProducto}{" "}
                        <span>{product.descProducto}</span>{" "}
                      </p>
                      <p className="precio">₡{product.precioProducto}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </section>

          <section className="menu comida">
            <h3>Comidas</h3>

            <ul>
              {isLoading && <Spinner />}
              {products.map((product) => {
                if (product.nombreCategoria === "Comidas") {
                  return (
                    <li key={product.idProducto}>
                      <p>
                        {product.nombreProducto}{" "}
                        <span>{product.descProducto}</span>{" "}
                      </p>
                      <p className="precio">₡{product.precioProducto}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};
