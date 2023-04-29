import "./SaleCard.scss";

export function SaleCard({ obj }) {
  const [sale] = obj.sale.read();

  return sale.sale.items.map((elem) => {
    return (
      <a key={elem.id} className="sale-card__link" href="#f">
        <div
          className="sale-card__item"
          style={{
            backgroundImage: `url(/src/assets/img/categories/${
              Object.keys(sale)[0]
            }/${elem.bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="sale-card__title">{elem.title}</h1>
          <p className="sale-card__discr">{elem.text}</p>
        </div>
      </a>
    );
  });
}
