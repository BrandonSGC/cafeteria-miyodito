export const Us = () => {
  return (
    <>
      <main className="contenedor contenido-principal">
        <h2>
          <span>Conoce más</span> sobre nosotros
        </h2>

        <div className="contenido-nosotros">
          <div class="imagen">
            <picture>
              <source
                srcset="build/img/nosotros_sidebar.avif"
                type="image/avif"
              />
              <source
                srcset="build/img/nosotros_sidebar.webp"
                type="image/webp"
              />
              <source
                srcset="build/img/nosotros_sidebar.jpg"
                type="image/jpeg"
              />
              <img
                loading="lazy"
                decoding="async"
                src="build/img/nosotros_sidebar.jpg"
                lazyalt="imagen"
                width="500"
                height="300"
              />
            </picture>
          </div>

          <div class="texto">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              ducimus, quos quo, laudantium temporibus ratione odit officia
              labore incidunt vitae repellat beatae corrupti nam. Quis dolor
              possimus illum unde! Excepturi?
            </p>

            <blockquote>Excelente Sabor!</blockquote>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              ducimus, quos quo, laudantium temporibus ratione odit officia
              labore incidunt vitae repellat beatae corrupti nam. Quis dolor
              possimus illum unde! Excepturi?
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
