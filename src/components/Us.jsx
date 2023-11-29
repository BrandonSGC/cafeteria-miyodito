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
              <source srcset="/img/nosotros_sidebar.avif" type="image/avif" />
              <source srcset="/img/nosotros_sidebar.webp" type="image/webp" />
              <source srcset="/img/nosotros_sidebar.jpg" type="image/jpeg" />
              <img
                loading="lazy"
                decoding="async"
                src="/img/nosotros_sidebar.jpg"
                lazyalt="imagen"
                width="500"
                height="300"
              />
            </picture>
          </div>

          <div class="texto">
            <p>
              Bienvenido a Miyodito, tu refugio acogedor para los amantes del
              buen café y los momentos deliciosos. Sumérgete en un ambiente
              donde la elegancia se combina con la calidez, creando el espacio
              perfecto para disfrutar de momentos inolvidables.
            </p>

            <blockquote>Excelente Sabor!</blockquote>

            <p>
              En Miyodito, cada taza es una obra maestra cuidadosamente
              elaborada, donde el arte del café se fusiona con la pasión por la
              calidad. Nuestros granos cuidadosamente seleccionados y tostados a
              la perfección te ofrecen una experiencia única en cada sorbo.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
