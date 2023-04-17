import { SaleCard } from "../../index";
import "./Sale.scss";

export function Sale({ obj }) {
  let sale = obj.sale.read();

  return (
    <div className="sale__container">
      <h1 className="blocks__title">{sale[0].sale.title}</h1>
      <div className="sale__list">
        {sale[0].sale.items.map((elem, index) => {
          return (
            <SaleCard key={index} obj={elem} bgURL={Object.keys(sale[0])[0]} />
          );
        })}
      </div>
    </div>
  );
}
