import "./SaleCard.scss";

export function SaleCard({ obj, bgURL }) {
  return (
    <a className="sale-card__link" href="#f">
      <div
        className="sale-card__item"
        style={{
          backgroundImage: `url(./src/assets/img/categories/${bgURL}/${obj.bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="sale-card__title">{obj.title}</h1>
        <p className="sale-card__discr">{obj.text}</p>
      </div>
    </a>
  );
}
